<template>
  <div class="card-main">
    <div class="card">
      <VueTinder class='vue-tinder' key-name="id" :queue.sync="queue" :offset-y="10" @submit="onSubmit">
        <div
            class="pic"
            slot-scope="source"
            :style="{
                'background-image': `url(../assets/${source.data.id}.jpg)`
        }"/>

        <!--        <div slot="like">like</div>-->
<!--        <div class="nope">nope</div>-->
<!--        <div class="super">super</div>-->
      </VueTinder>
    </div>
    <div class="bottom-buttons"></div>
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
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 }
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
    onSubmit() {
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
.card-main{
  align-self: center;
}
.vue-tinder {
  position: absolute;
  width: 335px;
  height: 447px;
}

.like, .nope, .super {
  height: 100px;
  width: 300px;
  background: #5E6EC2;
  border: #2D8550;
}

</style>