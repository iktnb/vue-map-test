<template>
  <div class="home-page">
    <h1 class="home-title">Select page</h1>
    <div class="links">
      <router-link :to="{ name: 'Posts' }" class="nav-link">Posts</router-link>
      <router-link :to="{ name: 'Map' }" class="nav-link">Map</router-link>
    </div>
  </div>
</template>

<style>
.home-title {
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  margin-top: 28px;
}

.links {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
}

.nav-link {
  border: 1px solid teal;
  padding: 6px 12px;
  margin: 10px 0;
  text-decoration: none;
  font-weight: bold;
  border-radius: 8px;
}
</style>
