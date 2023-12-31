import { v4 as uuidv4 } from 'uuid';
import { Employee } from '../interfaces/interfaces';

export function createEmployee(
  name: string,
  gender: string,
  age: string,
  phone: string,
  manager: string
): Employee {

  return {
    name: name,
    gender: gender,
    age: age,
    phone: phone,
    manager: manager,
    id: uuidv4(),
  };
};