<template>
  <div style="display: flex; flex-wrap:wrap;column-gap:1rem;">
    <NuxtLink to="/" style="background: gainsboro; border: solid 1px #999;padding: 1rem;">Back to home</NuxtLink>
  </div>

  <br/><br/>

  <h1>Welcome back, dear Visitor!</h1>

  <form @submit.prevent="onSubmit">
    <div>
      <label>Email</label>
      <input type="text" name="email" v-model="email"/>
      <div v-if="formErrors.email">{{ formErrors.email }}</div>
    </div>

    <div>
      <label>Password</label>
      <input type="password" name="password" v-model="password"/>
      <div v-if="formErrors.password">{{ formErrors.password }}</div>
    </div>

    <button type="submit">Login</button>
  </form>
</template>

<script setup lang="ts">
import * as Yup from 'yup';
import {useForm, useField} from 'vee-validate';
import {toTypedSchema} from '@vee-validate/yup';

definePageMeta({
  middleware: 'auth',
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/app'
  }
});

const {signIn, getSession} = useAuth();

const validationSchema = toTypedSchema(
    Yup.object({
      email: Yup.string().required().email().label('Username'),
      password: Yup.string().required().min(5).label('Password'),
    })
);

const pageError = ref();

const {
  values: formValues,
  errors: formErrors,
  handleSubmit,
  useFieldModel,
} = useForm({
  validationSchema,
  validateOnMount: false,
  initialValues: {
    email: '',
    password: '',
  },
});

const [email, password] = useFieldModel(['email', 'password']);

const onSubmit = handleSubmit(async (formData) => {
  console.log('onSubmit', {formData});

  try {
    const result = await signIn(
        {
          username: formData.email,
          password: formData.password,
        },
        {
          // This is need to be explicitly defined as of 30 Oct 2023, or else we'll get error
          // `Error: Navigating to external URL is not allowed by default. Use navigateTo (url, { external: true })`
          // when the login succeed and is redirecting user to authenticated page with `redirect: true` option.
          // Refer to https://github.com/sidebase/nuxt-auth/issues/429
          callbackUrl: '/app',
          redirect: true,
        }
    );

    console.log('sign in ok', {result});
  } catch (err) {
    console.log('sign in error', {err});
  }

  alert('Signed in!');
});
</script>
