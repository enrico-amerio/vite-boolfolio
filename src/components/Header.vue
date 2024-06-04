<script>
  export default {
    
  }
</script>
 
<template>
  <header >
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <router-link :to="{name:'home'}" class="navbar-brand">Portfolio</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="nav nav-underline">
        <li class="nav-item">
          <router-link :to="{name:'home'}" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name:'technologies'}" class="nav-link">Technologies</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{name:'types'}" class="nav-link">Types</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    <!-- <router-link :to="{name:'home'}">Home</router-link>
    <router-link :to="{name:'technologies'}">Technologies</router-link>
    <router-link :to="{name:'types'}">Types</router-link> -->

  </header>


</template>

<style lang="scss" scoped>
.nav-link {
    color: black;
}
</style>