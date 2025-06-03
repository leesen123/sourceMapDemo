<script setup lang="ts">
import { onMounted } from 'vue'
onMounted(() => {
  const nums = null
  if (nums.length > 1) {
    console.log('报错了')
  }
})
</script>

<template><div>App</div></template>

<style scoped></style>
