<script setup>
import Button from './components/Button.vue'
import Searchbar from './components/Searchbar.vue'
import './fonts.css';

</script>

<template>

  <main>
    <div class="header">
      <img src="./components/icons/logo.png" alt="" class="logo">
      <Searchbar></Searchbar>
<<<<<<< HEAD
      <Button type="primary" class="button">Opret annonce</Button>
      <Button type="tetriary" class="button2">Log ind</Button>
=======
      <Button type="primary" class="button" style="font-family: 'Plus Jakarta Sans', sans-serif;">Opret annonce</Button>
      <Button type="tetriary" class="button2" style="font-family: 'Plus Jakarta Sans', sans-serif;">Log ind</Button>

>>>>>>> 53693c6fe023e84083a6af3282b077d7501b0a47
    </div>

   <div class="hero">
    <p class="title">Glas keramik skulptur</p>

   </div>
    
  </main>
</template>

<style scoped>

  body {
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  .hero {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    width: 100%;
    height: 500px;
  }

  .title {
    grid-column-start: 2;
    justify-self: start;
    color: #000;
    width: 300px;
    font-family: "Plus Jakarta Sans";
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.6px;
  }

  .header {
  display: grid;
  grid-template-columns: repeat(6, 1fr); /* 6 equal columns */
  height: 138px; /* Fixed height */
  gap: 16px; /* Optional spacing between grid items */
  align-items: center; /* Center content vertically */
  padding: 0 0px; /* Optional padding */
  }

  .logo {
    grid-column: 1;
    justify-self: start;
    width: 250px;
  height: 131px;
  flex-shrink: 0; 
  }
 
  .button {
  grid-column: 5; /* Places the button in column 5 */
  justify-self: start; /* Aligns the button to the start of the column */
}

.button2 {
  grid-column: 6;
  justify-self: start;
}

</style>
