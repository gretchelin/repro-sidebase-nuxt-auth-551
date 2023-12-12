<template>
  <div style="display:flex;flex-wrap:wrap;column-gap:1rem;">
    <NuxtLink to="/" style="background: gainsboro; border: solid 1px #999;padding: 1rem;">Home</NuxtLink>
    <br/>
    <NuxtLink to="/login" style="background: gainsboro; border: solid 1px #999;padding: 1rem;">Login</NuxtLink>
  </div>

  <h1>You can only access this page after login!</h1>

  <button @click="doLogout">Logout</button>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})

const {signOut} = useAuth();

const doLogout = async () => {
  const res = confirm('Confirm logout?')

  if(res) {
    await signOut({
      callbackUrl: '/',
    })
  }
}
</script>