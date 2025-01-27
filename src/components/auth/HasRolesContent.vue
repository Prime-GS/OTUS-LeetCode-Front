<script setup lang="ts">
import { useAuthStore } from "../../stores/authStores";

const props = defineProps({ roles: Array<string>, className: String });

const authStore = useAuthStore();
const isUserHasRoles = authStore.hasAnyRole(props.roles ?? []);
</script>

<template>
  <div v-if="!props.roles || props.roles.length === 0 || isUserHasRoles" :class="props.className">
    <slot></slot>
  </div>
</template>
