<template>
  <div id="app">
    <div class="circle">
      <div class="text-circle">

        <div><p>Добро пожаловать в игру</p>
          <h1>Помоги<br>
            Фармацевту</h1></div>
        <div class="start-button">button</div>
      </div>
    </div>
<!--    <MainPage msg="Welcome to Your Vue.js App"/>-->
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
      message: 'HEllo'
    }
  }
}
</script>

<style>
html, body{
  height: 100% ;
  width: 100%;
  margin: 0;
}
.circle{
  /* Ellipse */
  display: flex;

  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 860px;
  height: 860px;
  left: 110px;
  top: -30px;

  /* main gradient */
  background: linear-gradient(63.53deg, #2D8550 16.62%, #5E6EC2 83.38%);
  border-radius: 100%;
  z-index: 0;
}


.text-circle {

  margin: 0 !important;
  text-align: center;

}
.start-button {
  /* Rectangle */

  height: 90px;
  width: 382px;

  /* white */
  background: #FFFFFF;
  border-radius: 100px;

}

#app {
  background-image: url("./assets/bgpic.jpg");
  background-position: center; /* Center the image */
  height: 100%;
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
