<template>
  <ConferenceList v-if="!loading" v-bind:conferences="conferences" />
  <div v-else>loading...</div>
</template>
<script setup lang="ts">
import { computed, watch } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { NetworkStatus } from '@apollo/client/core'
import CONFERENCE_QUERY from '../graphql'
import Conference from '@/types/conference'
import { notify } from '../components/atoms'
import ConferenceList from '@/modules/conferences/ConferenceList.vue'

const { result, loading, error, onError, networkStatus } = useQuery<{
  conferences: Conference[]
}>(CONFERENCE_QUERY, { fetchPolicy: 'network-only' })
const conferences = computed(() => result.value?.conferences || [])
watch(networkStatus, (status) => {
  if (status === NetworkStatus.ready) {
    notify.success({
      title: 'Welcome!',
      text: 'Data fetched.',
    })
  }
})
onError(() => {
  notify.error({
    title: 'Error!',
    text: error.value?.message || 'Something went wrong!',
  })
})
</script>
