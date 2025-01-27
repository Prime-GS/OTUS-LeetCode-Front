<script setup lang="ts">
import { ref } from "vue";
import { useLogin } from "../../graphql/hooks/auth";
import { useAuthStore } from "../../stores/authStores";
import router from "../../router";

interface IForm {
  email: string;
  password: string;
  remember: boolean;
  error: boolean;
  errorMessage: string;
}

const store = useAuthStore();
const { mutate: authReq } = useLogin();

const formRef = ref<IForm>({
  email: "",
  password: "",
  remember: false,
  error: false,
  errorMessage: "",
});

const onSubmit = async (event: Event) => {
  event.preventDefault();
  formRef.value.error = false;
  try {
    const response = await authReq({ input: { email: formRef.value.email, password: formRef.value.password } });
    if (!!response?.data) {
      store.login(response.data.login.user, response.data.login.token, true);
    }

    router.push({ path: "/" });
  } catch (error) {
    console.error(error);
    formRef.value.error = true;
    formRef.value.errorMessage = "Введеные данные неверны";
  }
};
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
    <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
      <path
        d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
      />
    </symbol>
  </svg>
  <div class="row justify-content-center">
    <div class="col-4">
      <h3>Вход</h3>
      <p>Введите данные</p>
      <div v-if="formRef.error" class="alert alert-danger d-flex align-items-center" role="alert">
        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:">
          <use xlink:href="#exclamation-triangle-fill" />
        </svg>
        <div>{{ formRef.errorMessage }}</div>
      </div>
      <form action="" v-on:submit="onSubmit" class="login_form">
        <input class="form-control" placeholder="Email" v-model="formRef.email" />
        <input class="form-control" placeholder="Password" v-model="formRef.password" />

        <button class="btn btn-primary">Отправить</button>
      </form>
    </div>
  </div>
</template>

<style lang="scss">
.login {
  &_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
  }

  &_form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
