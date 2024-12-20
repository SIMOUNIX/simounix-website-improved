<script setup lang="ts">
import '@/assets/views/about.css'
import { ref, onMounted } from 'vue'

const linkToCV = ref<string>('')

async function retrieveCV() {
  try {
    const response = await fetch('/api/retrieveCV', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const blobs = (await response.json()) as Array<{
      url: string
      pathname: string
      downloadUrl: string
    }>

    console.log('Blobs:', blobs)

    // access the first blob
    if (Array.isArray(blobs) && blobs.length > 0) {
      linkToCV.value = blobs[0].url
    }

    // log to vercify the link
    console.log('Link to CV:', linkToCV.value)
  } catch (error) {
    console.error('Error:', error)
  }
}

onMounted(() => {
  retrieveCV()
})
</script>

<template>
  <div class="about">
    <!-- on the left images of me -->
    <div class="about-image">
      <img src="../assets/images/simon_gray.png" alt="simon thuaud" class="about-image__svg" />
    </div>
    <!-- on the right a text about me -->
    <div class="about-text">
      <p>
        Actuellent étudiant en informatique à
        <a href="https://www.epita.fr" target="_blank" class="about-text">EPITA</a>, je me
        spécialise en Intelligence Artificielle et Machine Learning. Passionné par l'informatique et
        les nouvelles technologies, je suis également un grand amateur de cuisine.
      </p>
      <p>
        Ce site me permet de partager mes travaux, mes recettes et mes passions. Il évoluera au gré
        de mes intérêts actuels et futurs.
      </p>
      <p>
        Pour me contacter, vous pouvez m'envoyer un
        <a href="mailto:sim.thuaud@gmail.com" class="about-text">mail</a> ou me retrouver sur
        <a href="https://www.linkedin.com/in/simon-thuaud/" target="_blank" class="about-text"
          >LinkedIn</a
        >. Pour plus de détails, vous pouvez consulter mon
        <a :href="linkToCV" target="_blank" class="about-text">CV</a>.
      </p>
    </div>
  </div>
</template>

<style></style>
