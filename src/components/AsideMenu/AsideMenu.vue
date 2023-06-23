<script lang="ts">
import "./asideMenu.scss";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class AsideMenu extends Vue {
  @Prop({ type: String })
  componentToView!: string;
}
</script>

<template>
  <div class="asideMenu">
    <span>
      <router-link
        to="/employees"
        :class="componentToView === 'employees' ? 'active' : null"
        >Список сотрудников</router-link
      >
    </span>
    <span>
      <router-link
        to="/statistics"
        :class="componentToView === 'statistics' ? 'active' : null"
        >Статистика</router-link
      >
    </span>
  </div>
</template>