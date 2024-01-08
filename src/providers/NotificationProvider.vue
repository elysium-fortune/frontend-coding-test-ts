<template>
  <slot></slot>
  <Teleport to="body">
    <div class="Notification-root">
      <NotificationGroup group="top-left">
        <div
          class="fixed top-[70px] md:top-[104px] left-5 max-md:right-5 md:min-w-[300px] flex items-start justify-start pointer-events-none z-[200]"
        >
          <div class="w-full md:max-w-md">
            <Notification
              v-slot="{ notifications, close }"
              enter="ease-out duration-300 transition"
              enter-from="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-4"
              enter-to="translate-y-0 opacity-100 sm:translate-x-0"
              leave="transition ease-in duration-200"
              leave-from="opacity-100"
              leave-to="opacity-0"
              move="transition duration-500"
              move-delay="delay-300"
            >
              <div
                v-for="notification in notifications"
                v-bind:key="notification.id"
                class="w-full md:max-w-md mb-4 overflow-hidden bg-black rounded-[8px] pointer-events-auto ring-1 ring-black ring-opacity-5 group shadow-notification"
              >
                <div class="flex items-stretch">
                  <div class="ml-3 flex-1 py-4 px-3">
                    <p class="font-semibold text-white mb-3">
                      {{ notification.title }}
                    </p>
                    <p class="text-xs md:text-sm font-semibold text-white">
                      {{ notification.text }}
                    </p>
                  </div>
                  <div class="flex items-center justify-center px-1.5">
                    <button
                      class="p-2 border-0 duration-150 hover:transform hover:-rotate-90 hover-transition-all hover:ease-in-out text-white"
                      v-on:click="close(notification.id)"
                    >
                      <span class="sr-only">close notification</span>
                      <svg class="w-4 h-4">
                        <use v-bind:xlink:href="closeBoldIcon"></use>
                      </svg>
                    </button>
                  </div>
                </div>
                <div
                  v-if="notification.timeout !== -1"
                  class="h-[7px] shadow-notification"
                >
                  <div
                    class="timeout-progress__filled h-full group-hover:animation-pause"
                    v-bind:style="{
                      animationDuration: `${notification.timeout}ms`,
                    }"
                    v-on:animationend="close(notification.id)"
                  ></div>
                </div>
              </div>
            </Notification>
          </div>
        </div>
      </NotificationGroup>
    </div>
  </Teleport>
</template>
<script setup lang="ts">
import { NotificationGroup, Notification } from '@/components/atoms'
import { closeBoldIcon } from '~/icons'
</script>
<style scoped>
.timeout-progress__filled {
  background-image: linear-gradient(
    180deg,
    #343a47 0%,
    rgba(44, 49, 64, 0) 100%
  );
  filter: drop-shadow(0px 3.04545px 8.375px rgba(0, 0, 0, 0.27));
  animation-name: progress-reverse;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}
@keyframes progress-reverse {
  from {
    width: 100%;
  }
  to {
    width: 0;
  }
}
</style>
