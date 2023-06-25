import { Employee, Manager } from "../interfaces/interfaces";

export function returnState(employees: Employee[]): {
  data: Employee[],
  managers: Manager[],
  formCondition: boolean,
  statisticByAgeGroups: number[],
  percentRatioOfGenders: number[]
} {
  let data: Employee[] = employees;
  let managers = employees.map((person) => ({
    name: person.name,
    id: person.id
  }));
  managers.unshift({ name: '', id: 'empty' });
  let formCondition: boolean = false;
  let statisticByAgeGroups: number[] = [];
  let percentRatioOfGenders: number[] = [];

  return {
    data,
    managers,
    formCondition,
    statisticByAgeGroups,
    percentRatioOfGenders
  };
}