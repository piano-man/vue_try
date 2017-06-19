<template>
  <div id="app">
    <app-message></app-message>
    <hr>
    <router-link to='/home'>Home</router-link>
    <router-link to='/users/10'>Users of team10</router-link>
     <router-link to='/users/12'>Users of team12</router-link>
    <router-view></router-view>
    
  </div>
</template>

<script>
export default {
  
}
</script>

<style>

</style>
