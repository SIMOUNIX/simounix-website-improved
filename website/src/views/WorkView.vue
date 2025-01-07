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
const isLoading = ref(true) // track the loading state

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

    return data
  } catch (error) {
    console.error('Error:', error)
    return []
  }
}

async function getImageForProject(project: Project) {
  try {
    const response = await fetch('/api/retrieveProjectHeadersImages', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    console.log('Response:', response)

    const blobs = (await response.json()) as Array<{
      url: string
      pathname: string
      downloadUrl: string
    }>

    console.log('Blobs:', blobs)

    // link project header to image
    const image = blobs.find((blob) => blob.pathname === project.image)
    if (image) {
      project.image = image.url
    }
  } catch (error) {
    console.error(`Error fetching image for project ${project.id}:`, error)
  }
}

async function loadProjectsIncrementally() {
  try {
    // fetch project headers
    const projectHeaders = await retrieveProjectHeaders()

    // process each project one by one
    for (const project of projectHeaders) {
      await getImageForProject(project) // Fetch and link image
      projects.value.push(project) // Add the project to the list
    }
  } catch (error) {
    console.error('Error during incremental loading:', error)
  } finally {
    isLoading.value = false // Set loading to false when done
  }
}

function handleClick(id: string) {
  console.log('Clicked:', id)
  // router.push({ name: 'ProjectView', params: { id } })
}

onMounted(() => {
  loadProjectsIncrementally()
})
</script>

<template>
  <div class="work">
    <div v-if="isLoading" class="loading">Loading projects...</div>
    <div v-else class="cards-container">
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
