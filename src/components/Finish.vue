<template>
    <div><span>Finish Page {{results}}</span></div>
</template>

<script>

export default {
  name: 'App',
props: ['results'],
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