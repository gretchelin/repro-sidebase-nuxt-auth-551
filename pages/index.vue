<template>
  <div style="display: flex; flex-wrap:wrap; column-gap: 1rem; align-items: center;">
    <NuxtLink to="/login" style="background: gainsboro; border: solid 1px #999;padding: 1rem;">Login Page</NuxtLink><br />
    <NuxtLink to="/app" style="background: gainsboro; border: solid 1px #999;padding: 1rem;">App Page</NuxtLink><br />
    <a href="/ssr" style="text-decoration: underline;">Regular Link</a><br />
  </div>

  <br/><br/>

  <h1>
    This is the public page. Everyone should be able to access this without
    login
  </h1>
</template>
<script setup lang="ts">
</script>