<template>
  <div>
    <nav>
      <router-link to="/trigger">触发js错误</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
onMounted(() => {
  // const nums = null
  // if (nums.length > 1) {
  //   console.log('报错了')
  // }
})
</script>

<style scoped></style>
