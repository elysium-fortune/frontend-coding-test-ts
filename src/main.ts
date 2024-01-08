import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client/core'
import './styles/main.css'
import App from './App.vue'
import initializeRouter from './router'

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_GRAPHQL_BASE_URL,
})
const cache = new InMemoryCache()
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})
const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App),
})

initializeRouter(app)

app.mount('#app')
