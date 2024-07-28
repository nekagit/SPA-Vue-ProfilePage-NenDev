<template>
  <div class="resume mt-8">
    <div class="header flex justify-between items-center">
      <div>
        <h1 class="text-white">Nenad Kalicanin</h1>
        <h2 class="text-gold">Software Developer</h2>
      </div>
      <img :src="Nenad" class="profile-img" />
      <div class="contact-info">
        <p class="text-white">
          <Icon icon="mdi:map-marker" class="contact-icon map-icon" /> Dortmund, NRW, Deutschland
        </p>
        <p class="text-white">
          <Icon icon="mdi:email" class="contact-icon email-icon" /> nenad99@hotmail.de
        </p>
        <p class="text-white">
          <Icon icon="mdi:web" class="contact-icon web-icon" /> nenadkalicanin.netlify.app
        </p>
        <p class="text-white">
          <Icon icon="mdi:phone" class="contact-icon phone-icon" /> 01781109558
        </p>
        <p class="text-white">
          <Icon icon="mdi:github" class="contact-icon github-icon" /> nekagit
        </p>
        <p class="text-white">
          <Icon icon="mdi:linkedin" class="contact-icon linkedin-icon" /> Nenad Kalicanin
        </p>
      </div>
    </div>
    <div class="content">
      <div class="left-column">
        <section>
          <h3 class="text-aqua">PROFILE</h3>
          <p class="text-white">
            A software engineer with a strong commitment to developing innovative software
            solutions. With proficiency in <strong class="text-gold">TypeScript</strong> and <strong class="text-gold">MSSQL</strong>, I have extensive experience in
            creating web applications, APIs, and database-driven software. 
          </p>
            <p class="text-white" >
              
            My strengths include
            working collaboratively within team environments and utilizing critical thinking to
            solve problems and implement effective solutions.
          </p>
        </section>
        <section>
          <h3 class="text-aqua">PROJECT EXPERIENCE</h3>
          <div class="project">
            <h4 class="pt-4 text-aqua">qmBase</h4>
            <p><strong>React.ts</strong> <br /><strong>C#</strong></p>
            <p class="text-white">Fully developed enterprise application for ISO 9001 certificates.</p>
          </div>
          <hr class="project-divider"/>
          <div class="project">
            <h4 class="text-aqua">Simple ChatBot Extension</h4>
            <p><strong>JavaScript</strong></p>
            <p class="text-white">
              Developed an extension that connects to local Llama3 or OpenAI to query PDFs of the
              current website.
            </p>
            <p class="text-white">Designed to enhance user interaction by providing instant information retrieval.</p>
          </div>
        </section>
      </div>
      <div class="right-column">
        <section>
          <h3 class="text-aqua">EDUCATION</h3>
          <p class="text-white">Technische Universität Dortmund</p>
          <p class="text-white">Bachelor of Science in Computer Science</p>
          <p class="text-white">2018-2024</p>
        </section>
        <section>
          <h3 class="text-aqua">SOFT SKILLS</h3>
          <ul class="pt-4 text-white">
            <li>Team Work</li>
            <li>Critical Thinking</li>
            <li>Communication</li>
            <li>Time Management</li>
            <li>Adaptability</li>
          </ul>
        </section>
        <section>
          <h3 class="text-aqua">HARD SKILLS</h3>
          <p class="text-white mt-4">
            <strong>Frontend:</strong> HTML, CSS, ReactJS, VueJS, TypeScript
          </p>
          <p class="text-white">
            <strong>Backend:</strong> C#, NodeJS, Java, Python
          </p>
          <p class="text-white">
            <strong>Database:</strong> MySQL, MSSQL, MongoDB, Serverless
          </p>
          <p class="text-white">
            <strong>Online Collaboration Tool:</strong> Figma, Github
          </p>
        </section>
        <section>
          <h3 class="text-aqua">REFERENCE</h3>
          <p class="text-white">Available upon request</p>
        </section>
      </div>
    </div>
    <div class="footer text-center text-white mt-4">
      <p>nenad99@hotmail.de</p>
      <p>© 2024 Nenad Kalicanin.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Nenad from '@/assets/NenadOG.jpg'
import { Icon } from '@iconify/vue'
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

p{
  padding: 0.3rem;
}

.resume {
  font-family: 'Roboto', sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #1e1e1e;
  color: #e0e0e0;
}

.header {
  text-align: left;
  margin-bottom: 20px;
}

.header h1 {
  font-size: 32px;
  margin-bottom: 5px;
}

.header h2 {
  font-size: 20px;
  color: #ffd700;
  margin-bottom: 10px;
}

.header p {
  margin: 2px 0;
  font-size: 16px;
  display: flex;
  align-items: center;
}

.contact-icon {
  margin-right: 8px;
  vertical-align: middle;
}

.map-icon { color: #ff6347; }
.email-icon { color: #ffa500; }
.web-icon { color: #4682b4; }
.phone-icon { color: #32cd32; }
.github-icon { color: #333; }
.linkedin-icon { color: #0077b5; }

.profile-img {
  max-width: 180px;
  max-height: 180px;
  height: auto;
  border-radius: 50%;
}

.content {
  display: flex;
  gap: 20px;
}

.left-column,
.right-column {
  flex: 1;
}

strong {
  color: #ffd700;
}

h3 {
  border-bottom: 2px solid #00b7ff;
  padding-bottom: 5px;
  margin-top: 20px;
  color: #00b7ff;
  font-size: 20px;
}

.project h4 {
  margin-bottom: 5px;
  font-size: 18px;
  color: #00b7ff;
}

.project p,
.project ul {
  font-size: 16px;
  color: #e0e0e0;
}

.project a {
  color: #476be0;
  text-decoration: none;
  display: block;
  margin-bottom: 5px;
}

ul {
  padding-left: 20px;
  margin-top: 5px;
}

.footer {
  margin-top: 20px;
  text-align: center;
  font-size: 14px;
  color: #666;
}
</style>
