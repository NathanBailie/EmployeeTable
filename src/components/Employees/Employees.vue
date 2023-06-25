<script lang="ts">
import "./employees.scss";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Employees extends Vue {
  nameSorting: string = "";
  genderSorting: string = "";
  ageSorting: string = "";
  managerSorting: string = "";

  getSelectData(id: string, event: Event): void {
    const name: string = (event.target as HTMLSelectElement).value;
    console.log();
    this.$store.commit("setManager", [id, name]);
  }

  sortByNames(): void {
    if (this.nameSorting !== "ZA") {
      this.$store.commit("toSortTheData", ["name", "normal"]);
      this.nameSorting = "ZA";
    } else {
      this.$store.commit("toSortTheData", ["name", "reverse"]);
      this.nameSorting = "AZ";
    }
  }

  sortByGender(): void {
    if (this.genderSorting !== "female") {
      this.$store.commit("toSortTheData", ["gender", "normal"]);
      this.genderSorting = "female";
    } else {
      this.$store.commit("toSortTheData", ["gender", "reverse"]);
      this.genderSorting = "male";
    }
  }

  sortByAge(): void {
    if (this.ageSorting !== "09") {
      this.$store.commit("toSortTheData", ["age", "normal"]);
      this.ageSorting = "09";
    } else {
      this.$store.commit("toSortTheData", ["age", "reverse"]);
      this.ageSorting = "90";
    }
  }

  sortByManager(): void {
    if (this.managerSorting !== "ZA") {
      this.$store.commit("toSortTheData", ["manager", "normal"]);
      this.managerSorting = "ZA";
    } else {
      this.$store.commit("toSortTheData", ["manager", "reverse"]);
      this.managerSorting = "AZ";
    }
  }
}
</script>

<template>
  <div class="employees">
    <table class="employees__table">
      <tr>
        <th @click="sortByNames" title="Сортировать по алфавиту">Имя</th>
        <th @click="sortByGender" title="Сортировать по гендеру">Пол</th>
        <th @click="sortByAge" title="Сортировать по возрасту">Возраст</th>
        <th>Номер телефона</th>
        <th @click="sortByManager" title="Сортировать по имени руководителя">
          Руководитель
        </th>
      </tr>
      <tr v-for="employee in $store.state.data" :key="employee.id">
        <td>{{ employee.name }}</td>
        <td>{{ employee.gender }}</td>
        <td>{{ employee.age }}</td>
        <td>{{ employee.phone }}</td>
        <td>
          <select
            v-model="employee.manager"
            @change="getSelectData(employee.id, $event)"
          >
            <option v-for="manager in $store.state.managers" :key="manager.id">
              {{ manager.name }}
            </option>
          </select>
        </td>
      </tr>
    </table>
  </div>
</template>