import { Employee, Manager } from "../interfaces/interfaces";

export function returnState(employees: Employee[]): {
  data: Employee[],
  managers: Manager[],
  formCondition: boolean
} {
  const data: Employee[] = employees;
  const managers = employees.map((person) => ({
    name: person.name,
    id: person.id
  }));
  managers.unshift({ name: '', id: 'empty' });
  const formCondition = false;

  return {
    data,
    managers,
    formCondition
  };
}