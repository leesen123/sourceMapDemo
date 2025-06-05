<template>
  <div class="pre-code">
    <div class="error-detail">
      <pre class="error-code" v-html="preLine()"></pre>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  origin: {
    type: Object,
    default() {
      return {}
    },
  },
})
const encodeHTML = (str: string) => {
  if (!str || str.length === 0) return ''
  return str
    .replace(/&/g, '&#38;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/'/g, '&#39;')
}
const preLine = () => {
  const line = props.origin.line
  const originCodeLine = props.origin.source.split('\n')
  const len = originCodeLine.length - 1
  const start = line - 3 >= 0 ? line - 3 : 0
  const end = start + 5 >= len ? len : start + 5 // 最多展示6行
  const newLines = []
  for (let i = start; i <= end; i++) {
    const content = i + 1 + '.    ' + encodeHTML(originCodeLine[i])
    newLines.push(`<div class='code-line ${i + 1 == line ? 'heightlight' : ''}'>${content}</div>`)
  }
  return newLines.join('')
}
</script>

<style>
.pre-code {
  .error-detail {
    .error-code {
      padding: 10px;
      overflow: hidden;
      font-family: consolas, monospace;
      word-wrap: normal;
    }
  }
  .code-line {
    padding: 4px;
  }
  .heightlight {
    color: #fff;
    background-color: #f12926;
  }
}
</style>
