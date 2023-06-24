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
  }
}