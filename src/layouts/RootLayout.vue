<script setup lang="ts">
import NavSection from "./NavSection.vue";
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Leet Code</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <NavSection />
    </div>
  </nav>
  <slot></slot>
</template>

<style lang="scss" scoped>
.header {
  position: fixed;
  left: 0;
  top: 0;

  height: 46px;
  padding: 0 2rem;

  background-color: black;
  color: #fff;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  a {
    color: #fff;
  }

  &_title {
    font-size: 32px;
    font-weight: 700;
    color: #fff;
  }

  &_login {
    display: flex;
    gap: 1rem;
  }
}
</style>
