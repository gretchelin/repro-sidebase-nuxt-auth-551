<template>
  <h1>
    This page can only be accessed through regular link (no history api
    navigation)
  </h1>

  <div>
    <NuxtLink to="/login">Go to Login</NuxtLink><br />
    <NuxtLink to="/app">Back to App</NuxtLink><br />
    <NuxtLink to="/">Back to Home</NuxtLink>
  </div>
</template>
