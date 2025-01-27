<script setup lang="ts">
import HasRolesContent from "../components/auth/HasRolesContent.vue";
import { navItems } from "./navItems";
</script>

<template>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <HasRolesContent
        :roles="item.roles"
        class="nav_item"
        v-for="(item, index) in navItems"
        :key="`nav-item-${index}`"
      >
        <RouterLink :to="item.path" class="nav-link">{{ item.title }}</RouterLink>
      </HasRolesContent>
    </ul>
    <ul class="navbar-nav mb-2 mb-lg-0">
      <li class="nav_item"><RouterLink to="/auth/login" class="nav-link">Вход</RouterLink></li>
      <li class="nav_item"><RouterLink to="/auth/registration" class="nav-link">Регистрация</RouterLink></li>
    </ul>
  </div>
  <div class="nav_container"></div>
</template>
