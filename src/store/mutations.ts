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
  addNewEmployee(state: State, payload: Employee) {
    const newEmployee = payload;
    state.data = [...state.data, newEmployee];
  },
  activateForm(state: State) {
    state.formCondition = true
  },
  deactivateForm(state: State) {
    state.formCondition = false
  },
  toSortTheData(state: State, payload: string[]) {
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
  }
}