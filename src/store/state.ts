import { Employee, Manager } from "../interfaces/interfaces";

export function returnState(employees: Employee[]): { data: Employee[], employeeNames: Manager[] } {
  const data: Employee[] = employees;
  const employeeNames = employees.map((person) => ({
    name: person.name,
    id: person.id
  }));
  employeeNames.unshift({ name: '', id: 'empty' });

  return {
    data,
    employeeNames
  };
}