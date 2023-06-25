import { Employee, Manager, State } from "../interfaces/interfaces";


export const mutations = {
  setManager(state: State, payload: Manager) {
    const { id, name } = payload;
    state.data = state.data.map((person: Employee) => {
      if (person.id === id) {
        return {
          ...person,
          manager: name
        };
      };
      return person;
    });
  },

  addNewEmployee(state: State, payload: Employee): void {
    const newEmployee = payload;
    state.data = [...state.data, newEmployee];
  },

  activateForm(state: State): void {
    state.formCondition = true
  },

  deactivateForm(state: State): void {
    state.formCondition = false
  },

  toSortTheData(state: State, payload: string[]): void {
    const [sortingKeyWord, sortingMethod] = payload;
    state.data = state.data.sort((a: Employee, b: Employee): number => {
      let first;
      let second;

      for (let manager of state.data) {
        console.log(manager);
      }

      if (sortingKeyWord === 'name') {
        first = a.name.toLowerCase();
        second = b.name.toLowerCase();
      };

      if (sortingKeyWord === 'gender') {
        first = a.gender;
        second = b.gender;
      };

      if (sortingKeyWord === 'age') {
        first = a.age;
        second = b.age;
      };

      if (sortingKeyWord === 'manager') {
        first = a.manager.toLowerCase();
        second = b.manager.toLowerCase();
      };

      let firstResult = 1;
      let secondResult = -1;

      if (sortingMethod === 'reverse') {
        firstResult = -1;
        secondResult = 1;
      }

      if (first! > second!) {
        return firstResult;
      } else if (first! < second!) {
        return secondResult;
      } else {
        return 0;
      }
    });
  },

  getAmountOfAgeGroups(state: State): void {
    let ageGroups: Record<string, number> = {
      "18-21": 0,
      "22-25": 0,
      "26-29": 0,
      "30-33": 0,
      "34-37": 0,
      "38-41": 0,
      "42-45": 0,
      "46-49": 0,
      "50-53": 0,
      "54-56": 0,
      "57-60": 0,
    };

    for (let employee of state.data) {
      const age = Number(employee.age);
      for (let range in ageGroups) {
        const [from, to] = range.split('-').map((elem: string) => Number(elem));
        if (age >= from && age <= to) {
          ageGroups[range] += 1;
        };
      };
    };
    state.statisticByAgeGroups = Object.values(ageGroups);
  },

  getPercentRatioOfGenders(state: State): void {
    let amountOfEmployees: number = 0;
    let ageGroups: Record<string, number> = {
      "female": 0,
      "male": 0,
    };

    for (let employee of state.data) {
      amountOfEmployees += 1;

      if (employee.gender === 'female') {
        ageGroups['female'] += 1;
      };
      if (employee.gender === 'male') {
        ageGroups['male'] += 1;
      };
    };

    const percentOfWomen = (ageGroups['female'] * 100) / amountOfEmployees;
    const percentOfMen = (ageGroups['male'] * 100) / amountOfEmployees;

    state.percentRatioOfGenders = [percentOfWomen, percentOfMen];
  }
}