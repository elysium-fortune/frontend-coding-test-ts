<template>
  <div class="px-[15px] py-[15px]">
    <div class="text-white text-xl">{{ conference.name }}</div>
    <div class="grid grid-cols-2 mt-5 gap-5 text-white">
      <div class="Organizer">
        <div class="text-lg">Organizer</div>
        <div class="mt-5">Name: {{ conference.organizer.name }}</div>
        <div class="mt-5">About: {{ conference.organizer.about }}</div>
      </div>
      <div class="Series">
        <div class="text-lg">Series</div>
        <div class="mt-5">Name: {{ conference.series.name }}</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Conference from '@/types/conference'

defineProps<{
  conference: Conference
}>()
</script>
