<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body::-webkit-scrollbar {
    display: none;
}
body{
  background-color: #f6f6f6;
}
</style>
