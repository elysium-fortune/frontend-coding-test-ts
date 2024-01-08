<template>
  <NotificationProvider>
    <div
      class="min-w-full min-h-screen font-sans text-sm antialiased bg-gray-100 text-center"
    >
      <router-view />
    </div>
  </NotificationProvider>
</template>

<script setup lang="ts">
import NotificationProvider from '@/providers/NotificationProvider.vue'
</script>
