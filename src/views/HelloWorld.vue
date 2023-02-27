<template>
  <h1>{{ msg }}</h1>

  <NButton
    data-cy="click-me"
    :type="variant"
    :disabled="variant === 'error'"
    class="capitalize mx-auto my-2"
    @click="incrementCounter(1)"
  >
    <b>{{ message }}</b>
  </NButton>

</template>

<script setup lang="ts">
import { useMainStore } from '@/store'
import { computed } from 'vue'

defineProps<{ msg: string }>()

const main = useMainStore()

const { incrementCounter } = main

const message = computed(() => {
  if (main.count >= 60) return "It's Broken!"
  if (main.count > 50) return 'Uh-oh'
  if (main.count > 30) return 'Slow Down..'
  if (main.count > 10) return 'Great Job!'
  return 'Click Me'
})

const variant = computed(() => {
  if (main.count >= 60) return 'error'
  if (main.count > 10) return 'success'
  return 'default'
})
</script>

