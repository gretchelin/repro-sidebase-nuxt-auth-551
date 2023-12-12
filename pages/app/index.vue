<template>
  <h1>You can only access this page after login!</h1>

  <button @click="doLogout">Logout</button>
  <br/><br/>
  <NuxtLink to="/">Home</NuxtLink>
  <br/>
  <NuxtLink to="/login">Login</NuxtLink>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})

const {signOut} = useAuth();

const doLogout = async () => {
  await signOut({
    callbackUrl: '/',
  })
}
</script>