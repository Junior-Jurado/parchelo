import { CategoryDTO } from "src/category/dto/category.dto";

export interface UserDTO {
  name: string;
  last_name?: string;
  email?: string; 
  password?: string; 
  main_picture_profile?: string; 
  min_picture_profile?: string;
  max_picuture_profile?: string;
  description?: string;
  birthdate?: Date;
  categories?: CategoryDTO[]; 
}
