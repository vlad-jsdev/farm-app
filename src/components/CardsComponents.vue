<template>
  <div class="card-main">
    <div class="card">
      <VueTinder ref="tinder" class='vue-tinder' key-name="id" :queue.sync="queue" @submit="onSubmit">
        <div
            class="pic"
            slot-scope="source"
            :style="{
                'background-image': `url(${source.data.url})`
        }"><p>{{source.data.text}}</p>
     
        </div>
 <div class="like-pointer" slot="like" ><span>Препарат 1</span></div>
      <div class="nope-pointer" slot="nope" ><span>Препарат 2</span></div>
      <div class="super-pointer" slot="super" ><span>Препарат 3</span></div>
      </VueTinder>

    </div>
    <div class="bottom-buttons">
      <div class="like" @click="decide('like')"><span>Препарат 1</span></div>
      <div class="nope"  @click="decide('nope')"><span>Препарат 2</span></div>
      <div class="super"  @click="decide('super')"><span>Препарат 3</span></div>
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
        text: 'Марія, 19 років\n' +
            'Бабуся приймає брендовий препарат від болю в суглобах, він допомагає,\n' +
            ' але занадто дорогий. У Вас є якісний аналог з нижчою ціною? Якщо ні — давайте бренд.\n'
      },
      {
        id: 2 ,
        url: 'https://i.ibb.co/2SfMx3v/2.jpg',
        text: 'Любов, 58 років\n' +
            'Лікар призначив препарат від артеріальної гіпертензії, а бренд\n' +
            ' дорого коштує. Тому мені потрібен аналог з хорошою ефективністю та приємною ціною.\n'
      },
      {
        id: 3 ,
        url: 'https://i.ibb.co/cQ83zzy/3.jpg',
        text: 'Олександр, 20 років\n' +
            'Порекомендуйте ефективний препарат від болю в горлі за розумну ціну.'
      },
      {
        id: 4,
        url: 'https://i.ibb.co/mT5MTTs/4.jpg',
        text: 'Ірина, 55 років\n' +
            'У мене часто невралгії, лікар призначив вітаміни групи В. Мені потрібен якісний\n' +
            ' аналог за прийнятною ціною.\n'
      },
      {
        id: 5 ,
        url: 'https://i.ibb.co/xCmq6Mk/5.jpg',
        text: 'Степан, 61 рік\n' +
            'Спросоння відсунув гарячий чайник рукою та обпікся. У Вас всі ліки від опіків такі\n' +
            ' дорогі? Можна хороший препарат недорого?\n' +
            '\n'
      }
    ]
  }),
  created() {
    this.mock()
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
      console.log(type)
      this.$emit('type', type)
      // type: result，'like': swipe right, 'nope': swipe left, 'super': swipe up
      // key:  The keyName of the removed card
      // item: Child object in queue
      if (this.queue.length < 3) {
        this.mock()
      }
    }

  }
}
</script>

<style scoped>
.like-pointer,.nope-pointer{
  position: absolute;
  z-index: 1;
  background-color: red;
  top: 40%;
  left: 20%;
  transform: translateX(-50%);
  transform: translateY(-50%);
  width: 200px;
  height: 100px;
  transform: rotate(-10deg);
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
p{
  display: block;
  position: absolute;
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