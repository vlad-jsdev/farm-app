<template>
  <div class="app">
    <img src="../assets/bgpic.jpg" alt="">
    <div class="circle">
      <div class="text-circle">

        <div><p>Добро пожаловать в игру</p>
          <h1 class="bold">Помоги<br>
            ФАРМАЦЕВТУ</h1></div>
        <router-link class="start-button" to="/main"><span class="bold">Начать</span></router-link>
      </div>
    </div>
  </div>
</template>

<script>
// import MainPage from "@/components/MainPage";

export default {
  name: 'StartPage',
  // components: {
  //   MainPage
  // },
  data: () => {
    return {
    }
  }
}
</script>

<style scoped>
.bold {
  font-family: "Avenir Bold";
}
img {
  width: 100%;
  height: 100%;
  z-index: -1;
}
.circle{
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 40rem;
  height: 40rem;
  left: 5rem;
  top: -2rem;
  background: linear-gradient(63.53deg, #2D8550 16.62%, #5E6EC2 83.38%);
  border-radius: 100%;
  z-index: 1;
}


.text-circle {
  display: flex;
  flex-direction: column;
  margin: 0 !important;
  padding: 0 10rem 0 10rem;
  text-align: center;

}
p {
  font-size: 18pt;
  letter-spacing: 0.02em;
  text-align: left;
  color: #FFFFFF;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
h1 {
  letter-spacing: 0.02em;
  color: #FFFFFF;
  font-size: 30pt;
  text-align: left
}
span {
  color: #8E9AD5;
  font-size: 18pt;
}
 {
  text-decoration: none;
}
.start-button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center !important;
  height: 3.5rem;
  width: 15rem;
  margin-top: 3rem;
  background: #FFFFFF;
  border-radius: 100px;
  text-decoration: none;
}

.app {
  height: 100%;
  background-size: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.app:after {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: transparent;
  background: linear-gradient(63.53deg, #2D8550 16.62%, #5E6EC2 83.38%);
  opacity: 0.35;
  z-index: 0;
}
</style>
