<template>
  <div class="card-main">
    <div class="card">
      <VueTinder ref="tinder" class='vue-tinder' key-name="id" :queue.sync="queue" @submit="onSubmit">
        <div
            class="pic"
            slot-scope="source"
            :style="{
                'background-image': `url(${source.data.url})`
        }">
          <div class="text-card">
            <h3 class="bold">{{source.data.title}}</h3>
            <p>{{source.data.text}}</p>
          </div>
     
        </div>
 <div class="like-pointer" slot="nope" ><span class="like-text bold ">Препарат 1</span></div>
      <div class="nope-pointer" slot="super" ><span class="nope-text bold">Препарат 2</span></div>
      <div class="super-pointer" slot="like" ><span class="super-text bold">Препарат 3</span></div>
      </VueTinder>

    </div>
    <div class="bottom-buttons">
      <div class="like" @click="decide('nope')"><span class="white-text">Препарат 1</span></div>
      <div class="nope"  @click="decide('super')"><span class="white-text">Препарат 2</span></div>
      <div class="super"  @click="decide('like')"><span class="white-text">Препарат 3</span></div>
    </div>
  </div>
</template>

<script>
import VueTinder from 'vue-tinder'

export default {
  name: "CardsComponents",
  components: {
    VueTinder
  },
  data: () => ({
    queue: [],
    offset: 0,
    source: [
      {
        id: 1,
        url: 'https://i.ibb.co/44rBJfj/1.jpg',
        title: 'Марія, 19 років',
        text: 'Бабуся приймає брендовий препарат від болю в суглобах, він допомагає,\n' +
            ' але занадто дорогий. У Вас є якісний аналог з нижчою ціною? Якщо ні — давайте бренд.\n'
      },
      {
        id: 2 ,
        url: 'https://i.ibb.co/2SfMx3v/2.jpg',
        title: 'Любов, 58 років',
        text: 'Лікар призначив препарат від артеріальної гіпертензії, а бренд\n' +
            ' дорого коштує. Тому мені потрібен аналог з хорошою ефективністю та приємною ціною.\n'
      },
      {
        id: 3 ,
        url: 'https://i.ibb.co/cQ83zzy/3.jpg',
        title: 'Олександр, 20 років',
        text: 'Порекомендуйте ефективний препарат від болю в горлі за розумну ціну.'
      },
      {
        id: 4,
        url: 'https://i.ibb.co/mT5MTTs/4.jpg',
        title: 'рина, 55 років',
        text: 'У мене часто невралгії, лікар призначив вітаміни групи В. Мені потрібен якісний\n' +
            ' аналог за прийнятною ціною.\n'
      },
      {
        id: 5 ,
        url: 'https://i.ibb.co/xCmq6Mk/5.jpg',
        title: 'Степан, 61 рік',
        text: 'Спросоння відсунув гарячий чайник рукою та обпікся. У Вас всі ліки від опіків такі\n' +
            ' дорогі? Можна хороший препарат недорого?\n' +
            '\n'
      }
    ],
    countSource: 0,
    counter: 0,
    results: {
      smile: 0,
      sad: 0,
      heart: 0,
      num: 0
    }
  }),
  created() {
    this.mock()
    this.countSource = this.source.length
    this.results.num = this.countSource
  },

  methods: {
    mock(count = 5) {
      const list = this.source.slice(this.offset, count)
      this.offset += count
      this.queue = this.queue.concat(list)
    },
    decide(choice) {
      this.$refs.tinder.decide(choice)
    },
    onSubmit(type) {
          this.counter++
          if(type.type === 'like'){
            this.results.smile++
          }
          if(type.type === 'nope'){
            this.results.sad++
          }
          if(type.type === 'super'){
            this.results.heart++
          }
          console.log(this.results)
        this.$emit('type', this.results)
      // type: result，'like': swipe right, 'nope': swipe left, 'super': swipe up
      // key:  The keyName of the removed card
      // item: Child object in queue
      if (this.queue.length < 3) {
        this.mock()
      }
      if(this.countSource === this.counter) {
          console.log('LastPage')
          this.$router.push({
    name: 'finish',
    params: {
        results: this.results // or anything you want
    }
}) 
          // this.$router.push('/finish')
      }
    }

  }
}
</script>

<style scoped>
.bold {
  font-family: "Avenir Bold";
  color: #8E9AD5;
}
.white-text{
  font-family: "Avenir Bold";
  align-self: center;
  color: white;
}
.like-pointer,.nope-pointer, .super-pointer{
  position: absolute;
  z-index: 1;
  top: 40%;
  left: 20%;
  width: 200px;
  height: 60px;
  transform: rotate(-10deg);
  }
.like-pointer{
  border: 8px solid #8049C7;
}
.like-text, .nope-text,.super-text{
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.like-text{

  color: #8049C7;

}

.nope-pointer{
  border: 8px solid #169AE4;
}
.nope-text{
  color: #169AE4;
}
.super-pointer{
  border: 8px solid #FFB903;

}
.super-text{
  color: #FFB903;
}
.card-main{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
}
.card{
  align-self: center;
}
.bottom-buttons{
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}
.vue-tinder {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  width: 335px;
  height: 447px;
  z-index: 0;
}
.pic {
  align-self: center;
  width: 335px;
  height: 447px;
  background-repeat: no-repeat;
  background-size: 335px;
  background-position: top;
}
.text-card{
  display: block;
  position: absolute;
  margin: 2rem;
  bottom: 0;
}
.like, .nope, .super {
  display: flex;
  justify-content: center;
  height: 3rem;
  width: 10rem;
  border-radius: 100px;
  margin: 2rem;
}
.like {
  background: linear-gradient(266.19deg, #8049C7 0%, #CA57FD 100%);
}
.nope {
  background: linear-gradient(266.19deg, #169AE4 0%, #0CC4FA 100%);
}

.super {
  background: linear-gradient(90deg, #FFD748 0.02%, rgba(195, 199, 11, 0.96) 99.97%, #CAC6AB 99.98%, #D3E9E1 99.99%);
}

</style>