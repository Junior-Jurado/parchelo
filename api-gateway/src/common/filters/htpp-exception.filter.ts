import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, Logger } from "@nestjs/common";
import { RpcException } from "@nestjs/microservices";

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
    private readonly logger = new Logger(AllExceptionFilter.name);

    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const res = ctx.getResponse();
        const req = ctx.getRequest();

        let status = exception?.statusCode || HttpStatus.INTERNAL_SERVER_ERROR;
        let message = exception?.message || 'Internal server error';

        if (exception instanceof HttpException) {
            status = exception.getStatus();
            const response = exception.getResponse();
            message = typeof response === 'object' ? JSON.stringify(response) : response;
        }

        if (host.getType() === 'rpc') {
            if (exception instanceof RpcException) {
                const error = exception.getError();

                if (typeof error === 'object' && error !== null) {
                    return { 
                        statusCode: (error as any).statusCode || HttpStatus.INTERNAL_SERVER_ERROR, 
                        message: (error as any).message || 'Internal server error'
                    };
                }

                return { 
                    statusCode: HttpStatus.INTERNAL_SERVER_ERROR, 
                    message: error || 'Internal server error'
                };
            }

            return { 
                statusCode: status, 
                message: exception?.message || 'Internal server error'
            };
        }

        res.status(status).json({
            timestamp: new Date().toISOString(),
            path: req.url,
            error: message,
        });
    }
}
