<template>
  <Teleport v-if="state.modalVisible" to="body">
    <div class="Modal-root" v-bind="$attrs">
      <Transition
        appear
        name="custom"
        enter-active-class="duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <!-- Backdrop -->
        <div
          v-if="modelValue"
          class="fixed inset-0"
          style="background: rgba(17, 20, 28, 0.6)"
          v-bind:style="{ zIndex }"
        />
      </Transition>
      <div class="fixed inset-0" v-bind:style="{ zIndex }" v-on:click="close">
        <div class="px-5" v-bind:class="containerClass">
          <Transition
            appear
            name="custom"
            enter-active-class="duration-300 ease-out"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="duration-200 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
            v-on:after-leave="onAfterLeave"
          >
            <div
              v-if="modelValue"
              ref="dialogRef"
              class="w-full relative transform rounded-lg bg-gray-800 border-2 border-gray-400 transition-all"
              v-bind:style="{ maxWidth: width }"
              v-on:click.stop
            >
              <slot />
              <div v-if="!hiddenClose" class="absolute top-[15px] right-[15px]">
                <CloseButton close-label="close modal" v-on:click="close" />
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </Teleport>
</template>
<script setup lang="ts">
import { ref, watch, reactive } from 'vue'
import CloseButton from './CloseButton.vue'

defineOptions({
  inheritAttrs: false,
})
const props = withDefaults(
  defineProps<{
    modelValue: boolean
    width?: string
    center?: boolean
    zIndex?: number
    hiddenClose?: boolean
  }>(),
  { width: '412px', center: true, zIndex: 200, hiddenClose: false },
)

const emits = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()
const state = reactive({
  modalVisible: props.modelValue, // actual visible, and can be true during close animation when modelValue is false
})
const dialogRef = ref<HTMLDivElement>()
const containerClass = props.center
  ? 'min-h-full flex items-center justify-center py-[54px]'
  : 'min-h-full flex items-start justify-center py-10 md:pt-40'

const close = (e: MouseEvent): void => {
  emits('update:modelValue', false)
}
const onAfterLeave = () => {
  state.modalVisible = false
}
watch(
  () => props.modelValue,
  (visible: boolean) => {
    if (visible) {
      state.modalVisible = true
    }
  },
)
</script>
