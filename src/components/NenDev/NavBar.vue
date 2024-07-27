<template>
  <div class="md:hidden">
    <AMenuButton />
  </div>
  <nav class="flex items-center justify-between p-32 pt-8 pb-8">
    <div class="flex space-x-8 hidden md:block">
      <RouterLink to="/" class="nav-link" active-class="activeLink">Home</RouterLink>
      <RouterLink to="/about" class="nav-link" active-class="activeLink">About</RouterLink>
      <RouterLink to="/projects" class="nav-link" active-class="activeLink">Projects</RouterLink>
      <RouterLink to="/articles" class="nav-link" active-class="activeLink">Articles</RouterLink>
    </div>
    <div class="flex justify-center flex-1">
      <RouterLink to="/" class="logo">NK</RouterLink>
    </div>
    <div class="flex items-center space-x-4">
      <!-- Add this to your HTML -->
      <div class="flex space-x-8 hidden md:block">
           <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          class="social-icon linkedin"
        >
          <i class="fa fa-linkedin"></i>
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          class="social-icon github"
        >
          <i class="fa fa-github"></i>
        </a>
     
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          class="social-icon instagram"
        >
          <i class="fa fa-instagram"></i>
        </a>
     
        <a
          href="https://pinterest.com"
          target="_blank"
          rel="noopener noreferrer"
          class="social-icon facebook"
        >
          <i class="fa fa-facebook"></i>
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import AMenuButton from '@/components/NenDev/AMenuButton.vue';
</script>

<style scoped>
.nav-link {
  position: relative;
  color: #1e1e2f;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  font-size: medium;
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  display: block;
  margin-top: 5px;
  right: 0;
  background: gray;
  transition:
    width 0.4s ease,
    background-color 0.4s ease;
}

.nav-link:hover::after {
  width: 100%;
  left: 0;
  background: gray;
}

.activeLink {
  color: #d4840a;
}

.logo {
  position: absolute;
  top: 3%;
  left: 48%;
  background-color: white;
  color: black;
  border: 1px dotted black ;
  border-radius: 50%;
  font-weight: bold;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  transition: all 1s ease;
}

.logo:hover {
  border: 3px solid #641200; /* Border color */
  background-color: #a53400; /* Change background color on hover */
  color: #fff; /* Optional: Change text color on hover */
  animation: rotate 1s linear; /* Add rotation animation */
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 768px) {
  .logo {
    left: 43%;
  }
}

.fa {
  font-size: 28px;
}

.fa:hover {
  color: gray;
}

/* Add this to your CSS */
.social-icon {
  font-size: 24px; /* Adjust size if needed */
  transition: color 0.3s ease;
}

.twitter {
  color: #1da1f2; /* Twitter color */
}

.github {
  color: #333; /* GitHub color */
}

.linkedin {
  color: #0077b5; /* LinkedIn color */
}

.facebook {
  color: #0400e6; /* Pinterest color */
}

.instagram {
  color: #ea4c89; /* Dribbble color */
}

.custom {
  color: black; /* Custom social icon color */
}

/* Optional: Hover effect */
.social-icon:hover {
  color: #555; /* Change color on hover if needed */
}
</style>
