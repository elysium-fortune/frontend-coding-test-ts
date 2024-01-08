<template>
  <div class="ConferenceList">
    <div v-bind:class="table">
      <div v-bind:class="thead">
        <div class="flex font-bold">
          <div
            v-bind:class="th"
            v-bind:style="{ flex: columns[0] }"
            class="text-xl text-black"
          >
            No
          </div>
          <div
            v-bind:class="th"
            v-bind:style="{ flex: columns[1] }"
            class="text-xl text-black"
          >
            Name
          </div>
        </div>
      </div>
      <div v-bind:class="tbody">
        <div
          v-for="(row, index) in props.conferences"
          v-bind:key="row.id"
          v-bind:class="tr"
          class="cursor-pointer"
          v-on:click="onClick(index)"
        >
          <div v-bind:class="td" v-bind:style="{ flex: columns[0] }">
            {{ index }}
          </div>
          <div v-bind:class="td" v-bind:style="{ flex: columns[1] }">
            {{ row.name }}
          </div>
        </div>
      </div>
    </div>
    <Modal v-model="isModalOpen" width="800px">
      <ConferenceDetail v-bind:conference="selectedConference" />
    </Modal>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import Conference from '@/types/conference'
import { useTable } from '@/libraries/table'
import Modal from '@/components/atoms/Modal.vue'
import ConferenceDetail from './ConferenceDetail.vue'

const props = defineProps<{
  conferences: Conference[]
}>()

const { table, thead, tbody, trs, th, tr, td } = useTable()
const columns = ['1 0 90px', '1 0 240px']
const isModalOpen = ref<boolean>(false)
const selectedConference = ref<Conference>(props.conferences[0])
const onClick = (index: number) => {
  selectedConference.value = props.conferences[index]
  isModalOpen.value = true
}
</script>
