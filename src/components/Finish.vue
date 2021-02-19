<template>
    <div class="finish">
      <div class="left-block">
        <router-link to="/" class="home">
          <font-awesome-icon icon="home" class="icons" size="lg"/>
        </router-link>
        <div class="result">
          <div class="result-1">
            <div><h1>{{results.smile}}%</h1></div>
            <div><p>Препарат 1</p></div>
          </div>
          <div class="result-2">
            <div><h1>{{results.sad}}%</h1></div>
            <div><p>Препарат 2</p></div>
          </div>

          <div class="result-3">
            <div><h1>{{results.heart}}%</h1></div>
            <div><p>Препарат 3</p></div>
          </div>
        </div>
        <div class="result-text">
          <div class="title-text">
            <h3>Ваш результат:</h3>
            <h1 class="bold">"Что я здесь делаю?"</h1>
            <p>Это тестовое задание, так что не будем <br>углубляться в глубины проблем фармацевтов.</p>
          </div>
        </div>

        <div class="try">
          <router-link to="/" class="button-try"><span class="white-text bold">Попробовать еще</span></router-link>
        </div>
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
  },
  created() {
    this.results.num = 100 / this.results.num
    this.results.smile = this.results.num * this.results.smile
    this.results.sad = this.results.num * this.results.sad
    this.results.heart = this.results.num * this.results.heart
    console.log(this.results.num)
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
.bold{
  font-family: "Avenir Bold";
}
.finish{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
img{
  height: 450px;
}

.result{
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-bottom: 2px solid #D9D9D9;
  margin: 0 0 0 5rem;
}
.result-1, .result-2, .result-3 {
  margin: 0 2rem 2rem 2rem;
}
p{
  color: black;
}
.result-text{
  display: flex;
}
.title-text{
  margin-left: 5rem;
  color: #8E9AD5
;
}
.home{
  text-decoration: none;
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
  color: white;
  text-decoration: none;
  align-self: center;
}
.try{
  display: flex;
}
.button-try
{
  text-decoration: none;
  background: linear-gradient(90deg, #D9D9D9 0%, #A1A1A1 100%);
  border-radius: 100px;
  margin: 5rem;
  height: 60px;
  width: 270px;
  display: flex;
  justify-content: center;
}
.white-text{
  align-self: center;
  color: white;
  font-size: 15pt;
}
</style>