<template>
  <div class="card">
    <div class="header">
      <div class="top">
        <div class="flex justify-between">
          <div class="flex flex-row">
            <div class="circle">
              <span class="red circle2"></span>
            </div>
            <div class="circle">
              <span class="yellow circle2"></span>
            </div>
            <div class="circle">
              <span class="green circle2"></span>
            </div>
          </div>

          <div class="title">
            <p id="title2">style.css</p>
          </div>
          <div class="justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              class="h-5 w-5"
            >
              <path
                fill-rule="evenodd"
                d="M17.663 3.118c.225.015.45.032.673.05C19.876 3.298 21 4.604 21 6.109v9.642a3 3 0 01-3 3V16.5c0-5.922-4.576-10.775-10.384-11.217.324-1.132 1.3-2.01 2.548-2.114.224-.019.448-.036.673-.051A3 3 0 0113.5 1.5H15a3 3 0 012.663 1.618zM12 4.5A1.5 1.5 0 0113.5 3H15a1.5 1.5 0 011.5 1.5H12z"
                clip-rule="evenodd"
              ></path>
              <path
                d="M3 8.625c0-1.036.84-1.875 1.875-1.875h.375A3.75 3.75 0 019 10.5v1.875c0 1.036.84 1.875 1.875 1.875h1.875A3.75 3.75 0 0116.5 18v2.625c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625v-12z"
              ></path>
              <path
                d="M10.5 10.5a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963 5.23 5.23 0 00-3.434-1.279h-1.875a.375.375 0 01-.375-.375V10.5z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div class="code-container">
      <pre class="language-jsx">
        <code class="language-jsx">
import { FC } from "react";

type WelcomeProps = {
  uses:
    | "explore new tech"
    | "display my skills"
    | "find freelancing opportunities"
    | "find a fulltime job";
};

export const Welcome = ({ uses }) => {
  return (
    <div>
      <h1>This is my little slice of the internet.</h1>
      <p>
        I use this site to <em>{uses}</em>.
      </p>
    </div>
  );
};

export default Welcome;
        </code>
      </pre>
    </div>
  </div>
</template>

<script setup>
import 'prismjs';
import 'prismjs/components/prism-jsx'; // Import JSX language support
import 'prismjs/themes/prism-tomorrow.css'; // You can choose other themes from Prism.js
import { onMounted } from 'vue';

onMounted(() => {
  Prism.highlightAll()
})
</script>

<style scoped>
/* From Uiverse.io by Bastiennnn */
.card {
  height: 400px;
  margin: 0 auto;
  width: 100%;
  background-color: #0f172a;
  border-radius: 12px;
  z-index: 1;
  padding: 0.1rem;
  transition: 0.5s;
}

.card:hover {
  transform: translateY(-7px);
}

.top {
  display: flex;
  align-items: center;
}

.circle {
  padding: 0 4px;
}

.circle2 {
  display: inline-block;
  align-items: center;
  width: 10px;
  height: 10px;
  padding: 1px;
  border-radius: 5px;
}

.red {
  background-color: #ff605c;
}

.yellow {
  background-color: #ffbd44;
}

.green {
  background-color: #00ca4e;
}

.header {
  margin: 5px;
  margin-top: 5px;
  border-radius: 5px;
}

#title2 {
  color: white;
  padding-left: 50px;
  font-size: 15px;
}

.code-container {
  text-align: center;
}

pre {
  text-align: left;
  width: 100%;
  height: 350px;
  background-color: transparent;
  padding: 10px;
  border-radius: 5px;
  overflow: auto;
}

pre code {
  color: white;
}

.code-container pre .token.keyword {
  color: red !important;
}

.code-container pre .token.operator {
  color: #56b6c2 !important;
}

.code-container pre .token.string {
  color: #98c379 !important;
}

.code-container pre .token.comment {
  color: #6a9955 !important;
}

</style>
