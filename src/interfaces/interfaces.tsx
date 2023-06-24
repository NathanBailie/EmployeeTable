interface Employee {
  name: string,
  gender: string,
  age: number,
  phone: number,
  manager: string,
  id: string,
}

interface Manager {
  id: string,
  name: string
}

interface State {
  data: Employee[];
  employeeNames: Manager[]
}

export type { Employee, Manager, State };