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
    <div class="image-wrapper">
      <img :src="image" alt="project image" />
    </div>
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
  /* height: 30%; */
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s;
  background-color: var(--secondary);
  overflow: hidden;
}

.small-card:hover {
  transform: scale(1.05);
}

.image-wrapper {
  flex: 0 0 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 0.5rem;
}

.card-content {
  flex: 1;
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
  color: var(--text);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s;
}

a:hover {
  font: bold;
  color: var(--accent);
}

/* responsive adjustments */
@media (max-width: 768px) {
  .small-card {
    flex-direction: column;
    height: auto;
  }

  img {
    width: 100%;
    height: 200px;
  }

  .card-content {
    width: 100%;
    padding: 1rem 0;
  }
}
</style>
