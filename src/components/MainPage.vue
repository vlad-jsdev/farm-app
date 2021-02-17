<template>
  <div class="main">
    <div class="left-block">

      <div class="buttons-head">
        <div class="home">
          <font-awesome-icon icon="home" class="icons" size="lg"/>
        </div>
        <div class="reload">
          <font-awesome-icon icon="sync" class="icons" size="lg"/>
        </div>
      </div>
      <div class="parameters">
        <h2>Параметри: </h2>
        <div class="results">
          <div class="sad">
            <font-awesome-icon icon="frown"  size="lg"/>
          </div>
          <div class="smile"></div>
          <div class="heart"></div>
        </div>

      </div>
      <div class="bottom-info"> smth </div>
    </div>
    <div class="right-block">
      <CardsComponents/>
    </div>
  </div>
</template>

<script>
import CardsComponents from "@/components/CardsComponents";
export default {
  name: 'MainPage',
  components: {CardsComponents},
  props: {
    msg: String
  },
  data: () =>
      ({

    })
  ,
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.buttons-head {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 3rem;
}
.left-block {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  width: 30rem;
  height: 100%;
  left: 0px;
  top: 0px;
  background: linear-gradient(63.53deg, #2D8550 16.62%, #5E6EC2 83.38%);
  opacity: 0.7;
}
.icons {
  color:#FF5864 ;
  align-self: center;

}
.home, .reload {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: #FFFFFF;
  border-radius: 100px;
}
.reload {
  margin-left: 2rem;
}
.results {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}
.parameters {
  margin: 3rem;
}
.sad, .smile, .heart {
  height: 4rem;
  width: 10rem;
  background: #FFFFFF;
  box-shadow: 0px 0px 50px rgba(131, 42, 64, 0.4);
  border-radius: 40px;
  //transform: rotate(-180deg);
  margin: 1rem;
}
.bottom-info{
  background: #FFFFFF;
  opacity: 0.15;
  transform: matrix(-1, 0, 0, 1, 0, 0);
}
</style>
