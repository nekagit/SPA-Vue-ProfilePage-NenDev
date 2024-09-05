<script setup >
import ProjectCard from '@/components/NenDev/ProjectCard.vue';
import WebsiteShowcase from '@/components/NenDev/WebsiteShowcase.vue';
import { onMounted, ref } from 'vue';
// Sample card data
const cards = ref([
    {
    title: 'WebApp TimeIT',
    description: 'My own WebApp. Measuring working time and enabling several features like spread sheet generation',
    technology: 'React, Node.js',
    codeLink: 'https://github.com/timeIT'
  },
    {
    title: 'WebApp OrgaTech',
   description: 'I worked for 2 years on the application of OrgaTech as a Working Student.(I don not claim its my application or work! All rights reserved to OrgaTech/Adesso)',
    technology: 'Java, Flutter, Javascript',
    codeLink: 'https://github.com/nekagit'
  },
    {
    title: 'WebApp qmBase',
    description: 'I worked for 1 year on the application of qmbase.com as a Working Student.(I don not claim its my application or work! All rights reserved to qmBase(https://github.com/qmBase))',
    technology: 'React, C#',
    codeLink: 'https://github.com/qmBase/docs'
  },
  {
    title: 'ArtPage',
    description: 'E-Commerce for selling paintings.  www.stankovicart.com ',
    technology: 'Vue.js',
    codeLink: 'https://github.com/nekagit/VueProfileArtPage'
  },
  {
    title: 'ProfilePage',
    description: 'Profile of a sports club in Rotterdam. www.stichtingsoprotterdam.nl ',
    technology: 'Angular',
    codeLink: 'https://github.com/nekagit/soprotterdam'
  },
   {
    title: 'ProfilePage',
    description: 'Profile of a soccer player Kosta Kalicanin. kostakalicanin.netlify.app ',
    technology: 'Vue',
    codeLink: 'kostakalicanin.netlify.app'
  },
   {
    title: 'ProfilePage',
    description: 'Profile of a personal fitness coach Robin Schroeder, rysport.netlfiy.app ',
    technology: 'Vue',
    codeLink: 'rysport.netlfiy.app '
  },
  {
    title: 'Simple ChatBot Extension',
    description: 'An extension that can be connected to local llama3 or directly communicate with OpenAI, to feed PDFs of current website for query.(BachelorThesis)',
    technology: 'Javascript',
    codeLink: 'https://github.com/nekagit/BASimpleChatBotExtension'
  },
  {
    title: 'Leaflet Map with MySQL Data',
    description: 'Different Markers shown on Map regarding Package details.',
    technology: 'Vue.js',
    codeLink: 'https://github.com/nekagit/LeafletMySQLVue'
  },
  {
    title: 'DocuVerse: Documentation Website',
    description: 'Knowledge i gathered on one place.',
    technology: 'React/Docusaurus',
    codeLink: 'https://github.com/nekagit/docuVerse'
  },

]);

// Ref for the container of project cards
const projectContainer = ref(null);
// Scroll to top on mount and setup Intersection Observer
onMounted(() => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  });

  // Observe each project card
  if (projectContainer.value) {
    const projectCards = projectContainer.value.querySelectorAll('.projectCard');
    projectCards.forEach((card) => {
      observer.observe(card);
    });
  }
});
</script>

<template>
  <div ref="projectContainer" class="grid grid-cols-1 xl:grid-cols-3 mx-auto pt-8">
    <ProjectCard
      v-for="(card, index) in cards"
      class="projectCard"
      :key="index"
      :title="card.title"
      :stars="card.stars"
      :description="card.description"
      :technology="card.technology"
      :codeLink="card.codeLink"
    />
  </div>

  <!-- Add this line to include the new WebsiteShowcase component -->
  <WebsiteShowcase />
</template>


<style scoped>
.projectCard {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  padding: 2rem;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
  position: relative;
  opacity: 0;
  transform: translateY(50px);
}

.projectCard.fade-in {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.projectCard:hover {
  box-shadow: none;
  transform: translateY(5px);
}

.projectCard::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 5px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.projectCard:hover::after {
  opacity: 1;
}
</style>