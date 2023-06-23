<script>
import "./tableContainer.scss";
import AsideMenu from "../AsideMenu/AsideMenu.vue";
import Employees from "../Employees/Employees.vue";
import Statistics from "../Statistics/Statistics.vue";

export default {
  props: {
    componentToView: String,
  },
  name: "TableContainer",
  components: {
    AsideMenu,
    Employees,
    Statistics,
  },
};
</script>

<template>
  <div class="tableContainer">
    <div class="tableContainer__leftSideBar">
      <AsideMenu :componentToView="this.componentToView" />
    </div>
    <div class="tableContainer__main">
      <template v-if="componentToView === 'employees'">
        <Employees />
      </template>
      <template v-if="componentToView === 'statistics'">
        <Statistics />
      </template>
    </div>
  </div>
</template>
