<!-- card component for project preview -->

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  title: String,
  id: String,
  description: String,
  image: String,
  link: String,
  linkText: String,
})

// emit an event to parent on click
const emit = defineEmits(['cardClicked'])

function handleClick() {
  emit('cardClicked', props.id)
}
</script>

<template>
  <div class="small-card" @click="handleClick">
    <img :src="image" alt="project image" />
    <div class="card-content">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <a :href="link" target="_blank">{{ linkText }}</a>
    </div>
  </div>
</template>

<style scoped>
@import '../assets/base.css';

.small-card {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 40%;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s;
  background-color: var(--background);
  overflow: hidden;
}

.small-card:hover {
  transform: scale(1.05);
}

img {
  width: auto;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
}

.card-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1rem;
  width: 70%;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1.2rem;
}

p {
  margin: 0.5rem 0;
  font-size: 1rem;
  color: var(--text-secondary);
}

a {
  color: var(--accent);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s;
}

a:hover {
  color: var(--primary);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .small-card {
    flex-direction: column; /* Stack the image and content vertically */
    height: auto; /* Allow height to adjust naturally */
  }

  img {
    width: 100%; /* Full width for smaller screens */
    height: 200px; /* Restrict image height */
  }

  .card-content {
    width: 100%; /* Full width for content */
    padding: 1rem 0;
  }
}
</style>
