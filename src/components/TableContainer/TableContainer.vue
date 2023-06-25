<script lang="ts">
import "./tableContainer.scss";
import { Component, Prop, Vue } from "vue-property-decorator";
import AsideMenu from "../AsideMenu/AsideMenu.vue";
import Employees from "../Employees/Employees.vue";
import Statistics from "../Statistics/Statistics.vue";
import AddForm from "../AddForm/AddForm.vue";

@Component({
  components: {
    AsideMenu,
    Employees,
    Statistics,
    AddForm,
  },
})
export default class TableContainer extends Vue {
  @Prop({ type: String })
  componentToView!: string | undefined;
}
</script>

<template>
  <div class="tableContainer">
    <div class="tableContainer__leftSideBar">
      <AsideMenu v-if="componentToView" :componentToView="componentToView" />
    </div>
    <div class="tableContainer__main">
      <template v-if="componentToView === 'employees'">
        <AddForm />
        <Employees />
      </template>
      <template v-if="componentToView === 'statistics'">
        <Statistics />
      </template>
    </div>
  </div>
</template>
