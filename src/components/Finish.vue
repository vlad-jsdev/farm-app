<template>
    <div class="finish">
      <div class="left-block">
        <div class="home">
          <font-awesome-icon icon="home" class="icons" size="lg"/>
        </div>
        <div class="result">
          <div class="result-1">
            <div>{{results.smile}}</div>
            <div><p>Препарат 1</p></div>
          </div>
          <div class="result-2">
            <div>{{results.sad}}</div>
            <div><p>Препарат 2</p></div>
          </div>

          <div class="result-3">
            <div>{{results.heart}}</div>
            <div><p>Препарат 3</p></div>
          </div>
        </div>
        <div class="result-text">
          <div class="title-text">
            <h3>Ваш результат:</h3><br>
            <h1>"Что я здесь делаю?"</h1>
          </div>
          <div class="main-text"></div>
        </div>
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
.finish{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
img{
  //position: absolute;
  //top: 0;
  //right: 30px;
  height: 450px;
}
.result{
  //position: absolute;
  //top: 260px;
  //left: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-bottom: 2px solid #D9D9D9;
  margin: 0 0 0 5rem;
}
.result-1, .result-2, .result-3 {
  margin: 0 2rem 2rem 2rem;
}
.result-text{
  position: absolute;
  display: flex;
}
.home{

  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: linear-gradient(63.53deg, #2D8550 16.62%, #5E6EC2 83.38%);
  border-radius: 100px;
  margin: 4rem;
}
.icons{
  align-self: center;
}
</style>