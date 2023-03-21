<!-- src/views/Home.vue -->
<template>
  <div>
    <h1>Home</h1>
    <p>Select a user</p>
    <ul>
      <li v-for="(user, id) in users" :key="id">
        <router-link :to="{ name: 'user', params: { id } }">{{ user.name }}</router-link>
        - <button @click="showUserModal(String(id))">Details</button>
      </li>
    </ul>
    <router-view />

    <Modal :name="'user-modal'">
      <!-- <UserDetails v-if="userId" :id="userId" /> -->
    </Modal>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { Modal } from '@/components/Modal'
import UserDetails from '@/views/UserDetails.vue'
import { useRouter } from 'vue-router'

const users = [{ name: 'John' }, { name: 'Jessica' }, { name: 'James' }]

const router = useRouter()
const route = useRoute()

const userId = computed(() => route.params.id as string)

const showUserModal = (id: string) => {
  router.push({
    name: 'user',
    params: { id },
    state: { backgroundView: router.currentRoute.value.fullPath }
  })
}

const closeModal = () => {
  router.back()
}
</script>
