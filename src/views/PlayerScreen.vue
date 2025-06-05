<template>
  <div class="play">
    <el-button type="primary" @click="onPlay">回放</el-button>
    <hr />
    <div id="doPlay"></div>
  </div>
</template>

<script setup lang="ts">
import { useRecordEventsStore } from '@/stores/rescordEvens'
import rrwebPlayer from 'rrweb-player'
import 'rrweb-player/dist/style.css'

const recordEventStore = useRecordEventsStore()
const events = recordEventStore.getEvents()
const onPlay = () => {
  if (events.length === 0) return
  new rrwebPlayer({
    target: document.querySelector('#doPlay') as HTMLElement, // customizable root element
    props: {
      events,
    },
  })
}
</script>

<style scoped>
#doPlay {
  width: 500px;
  width: 500px;
}
</style>
