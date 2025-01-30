import { createPinia } from "pinia";
import { createApp, provide, h } from "vue";
import { DefaultApolloClient } from "@vue/apollo-composable";

import { client } from "./core/apollo";
import router from "./router";
import Layout from "./Layout.vue";
import { useAuthStore } from "./stores/authStores.ts";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const pinia = createPinia();

router.beforeEach(to => {
  const authStore = useAuthStore();

  authStore.loadFromStorage;
  if (to.meta.requiresAuth && !authStore.isLoggendIn) return "/auth/login";
});

createApp({
  setup() {
    provide(DefaultApolloClient, client);
  },

  render: () => h(Layout),
})
  .use(router)
  .use(pinia)
  .mount("#app");
