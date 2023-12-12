<template>
  <h1>
    This is the public page. Everyone should be able to access this without
    login
  </h1>

  <div>
    <NuxtLink to="/login">Login</NuxtLink><br />
    <NuxtLink to="/app">App</NuxtLink><br />
    <a href="/ssr">Regular link</a>
  </div>
</template>
