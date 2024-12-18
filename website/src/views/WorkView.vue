<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import SmallCard from '../components/ProjectSmallCard.vue'

import '@/assets/views/work.css'

// const router = useRouter(); // not used yet
const projects = ref([
  {
    id: 'website',
    image: new URL('../assets/images/epita.png', import.meta.url).href,
    title: 'EPITA',
    description:
      'Actuellement étudiant en informatique à EPITA, je me spécialise en Intelligence Artificielle et Machine Learning.',
    link: 'https://www.epita.fr',
    linkText: 'EPITA',
  },
  {
    id: 'ai',
    image: new URL('../assets/images/simon_gray.png', import.meta.url).href,
    title: 'Intelligence Artificielle',
    description:
      "Passionné par l'informatique et les nouvelles technologies, je suis également un grand amateur de cuisine.",
    link: 'https://www.epita.fr',
    linkText: 'AI',
  },
  {
    id: 'ai',
    image: new URL('../assets/images/simon_gray.png', import.meta.url).href,
    title: 'Intelligence Artificielle',
    description:
      "Passionné par l'informatique et les nouvelles technologies, je suis également un grand amateur de cuisine.",
    link: 'https://www.epita.fr',
    linkText: 'AI',
  },
])

function handleClick(id: string) {
  console.log('clicked on', id)
}
</script>

<template>
  <div class="work">
    <div class="cards-container">
      <SmallCard
        v-for="project in projects"
        @cardClicked="handleClick"
        :key="project.id"
        :title="project.title"
        :description="project.description"
        :image="project.image"
        :link="project.link"
        :linkText="project.linkText"
        :id="project.id"
      />
    </div>
  </div>
</template>
