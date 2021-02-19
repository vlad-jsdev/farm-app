<template>
    <div class="finish">
      <div class="left-block">
        <div class="home">
          <font-awesome-icon icon="home" class="icons" size="lg"/>
        </div>
        <div class="result">
          <div class="result-1">{{results.smile}}</div>
          <div class="result-2">{{results.sad}}</div>
          <div class="result-3">{{results.heart}}</div>
        </div>
        <div class="result-text"></div>
        <div class="try"></div>
      </div>
      <div class="circle-pic">
        <img src="../assets/image.jpg" alt="">
      </div>
    </div>

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

<style scoped>
html, body{
  height: 100% ;
  width: 100%;
  margin: 0;
  overflow: hidden;
}
img{
  position: absolute;
  top: 0;
  right: 30px;
  height: 450px;
}
.result{
  position: absolute;
  top: 260px;
  left: 130px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.home{
  position: absolute;
  top: 70px;
  left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: linear-gradient(63.53deg, #2D8550 16.62%, #5E6EC2 83.38%);
  border-radius: 100px;
}
.icons{
  align-self: center;
}
</style>