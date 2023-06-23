<script lang="ts">
import "./employees.scss";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Employees extends Vue {}
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
      <tr v-for="employee in $store.state.employees" :key="employee.id">
        <td>{{ employee.name }}</td>
        <td>{{ employee.gender }}</td>
        <td>{{ employee.age }}</td>
        <td>{{ employee.phone }}</td>
        <td>{{ employee.manager }}</td>
      </tr>
    </table>
  </div>
</template>