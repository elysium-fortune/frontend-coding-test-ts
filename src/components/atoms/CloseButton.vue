<template>
  <button
    class="border-0 duration-150 hover:transform hover:-rotate-90 hover-transition-all hover:ease-in-out hover:text-white text-white"
  >
    <span class="sr-only">{{ closeLabel }}</span>
    <slot>
      <svg class="w-5 h-5 text-white">
        <use v-bind:xlink:href="closeBoldIcon" />
      </svg>
    </slot>
  </button>
</template>
<script setup lang="ts">
import { closeBoldIcon } from '@/icons'

withDefaults(
  defineProps<{
    closeLabel?: string
  }>(),
  { closeLabel: 'close popup' },
)
</script>
