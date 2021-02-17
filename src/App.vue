<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import MainPage from "@/components/MainPage";

export default {
  name: 'App',
  // components: {
  //   MainPage
  // },
  data: () => {
    return {
    }
  }
}
</script>

<style>
html, body{
  height: 100% ;
  width: 100%;
  margin: 0;
  overflow: hidden;
}
</style>
