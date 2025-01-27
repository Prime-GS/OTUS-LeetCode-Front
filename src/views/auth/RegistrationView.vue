<script lang="ts">
import { useLogin } from "../../graphql/hooks/auth";

export default {
  setup() {
    const { mutate: login } = useLogin();

    return {
      login,
    };
  },
};
</script>

<template>
  <div>
    <h3>Вход</h3>
    <p>Введите данные</p>
  </div>
</template>
