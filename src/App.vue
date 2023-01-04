<template>
  <div class="main_wrapper">
    <nav class="navigation" v-if="$route.name !== 'Home'">
      <h4>Navigation</h4>
      <router-link :to="{ name: 'Posts' }" class="nav-link">Posts</router-link>
      <router-link :to="{ name: 'Map' }" class="nav-link">Map</router-link>
    </nav>

    <router-view></router-view>
  </div>
</template>

<style scoped>
.main_wrapper {
  margin: 0 auto;
  max-width: 1020px;
}
.navigation {
  display: flex;
  align-items: center;
  gap: 32px;
  border: 2px solid #000;
  padding: 12px;
  border-radius: 0 0 12px 12px;
}

.nav-link {
  text-decoration: none;
  border: 1px solid gray;
  padding: 4px 12px;
  font-size: 14px;
  transition: 0.2s all;
  cursor: pointer;
  border-radius: 4px;
}

.nav-link.router-link-active {
  background: #000;
  color: #fff;
}

.nav-link:hover {
  background: lightgray;
}
</style>
