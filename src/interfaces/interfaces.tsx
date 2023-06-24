interface Employee {
  name: string,
  gender: string,
  age: string,
  phone: string,
  manager: string,
  id: string,
}

interface Manager {
  id: string,
  name: string
}

interface State {
  data: Employee[],
  employeeNames: Manager[],
  formCondition: boolean
}

export type { Employee, Manager, State };