<script>
import "./asideMenu.scss";

export default {
  name: "AsideMenu",
};
</script>

<template>
  <div class="asideMenu">
    <span>
      <router-link to="/employees">Список сотрудников</router-link>
    </span>
    <span>
      <router-link to="/statistics">Статистика</router-link>
    </span>
  </div>
</template>