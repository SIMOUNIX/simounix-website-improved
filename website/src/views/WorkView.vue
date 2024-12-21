<script setup lang="ts">
import { ref, onMounted } from 'vue'
// import { useRouter } from 'vue-router'
import SmallCard from '../components/ProjectSmallCard.vue'

import '@/assets/views/work.css'

interface Project {
  id: string
  project_name: string
  description: string
  image: string
  link: string
  link_text: string
  component_name: string
}

const projects = ref<Project[]>([])

async function retrieveProjectHeaders() {
  try {
    const response = await fetch('/api/retrieveProjectHeaders', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    console.log('Response:', response)

    // get the data
    const data = await response.json()
    console.log('Data:', data)

    // set the data
    projects.value = data
  } catch (error) {
    console.error('Error:', error)
  }
}

function handleClick(id: string) {
  console.log('Clicked:', id)
  // router.push({ name: 'ProjectView', params: { id } })
}

onMounted(() => {
  retrieveProjectHeaders()
})
</script>

<template>
  <div class="work">
    <div class="cards-container">
      <SmallCard
        v-for="project in projects"
        @cardClicked="handleClick"
        :key="project.id"
        :title="project.project_name"
        :description="project.description"
        :image="project.image"
        :link="project.link"
        :linkText="project.link_text"
        :id="project.component_name"
      />
    </div>
  </div>
</template>
