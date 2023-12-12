<template>
  <div style="display: flex; flex-wrap:wrap;column-gap:1rem;">
    <NuxtLink to="/login" style="background: gainsboro; border: solid 1px #999;padding: 1rem;">Go to Login</NuxtLink><br />
    <NuxtLink to="/app" style="background: gainsboro; border: solid 1px #999;padding: 1rem;">Back to App</NuxtLink><br />
    <NuxtLink to="/" style="background: gainsboro; border: solid 1px #999;padding: 1rem;">Back to Home</NuxtLink>
  </div>

  <br/><br/>

  <h1>
    This page can only be accessed through regular link (no history api
    navigation)
  </h1>
</template>
<script setup lang="ts">
</script>