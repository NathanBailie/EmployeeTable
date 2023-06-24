<script lang="ts">
import "./employees.scss";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Employees extends Vue {
  getSelectData(id: string, event: Event): void {
    const value: string = (event.target as HTMLSelectElement).value;
    this.$store.commit("setManager", [id, value]);
  }
}
</script>

<template>
  <div class="employees">
    <table class="employees__table">
      <tr>
        <th>Имя</th>
        <th>Пол</th>
        <th>Возраст</th>
        <th>Номер телефона</th>
        <th>Руководитель</th>
      </tr>
      <tr v-for="employee in $store.state.data" :key="employee.id">
        <td>{{ employee.name }}</td>
        <td>{{ employee.gender }}</td>
        <td>{{ employee.age }}</td>
        <td>{{ employee.phone }}</td>
        <td>
          <select @change="getSelectData(employee.id, $event)">
            <option
              v-for="manager in $store.state.employeeNames"
              :key="manager.id"
            >
              {{ manager.name }}
            </option>
          </select>
        </td>
      </tr>
    </table>
  </div>
</template>