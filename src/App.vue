<script setup>
import Button from './components/Button.vue'
import Searchbar from './components/Searchbar.vue'
import Hero from './components/Hero.vue'
import './fonts.css';
import Seller from './components/Seller.vue'

</script>

<template>

  <main>
    <div class="header">
      <img src="./components/icons/logo.png" alt="" class="logo">
    <Searchbar></Searchbar>
    <Button type="primary" class="button" style="font-family: 'Plus Jakarta Sans', sans-serif;">Opret annonce</Button>
    <Button type="tetriary" class="button2" style="font-family: 'Plus Jakarta Sans', sans-serif;">Log ind</Button>
    </div>
    
    <Hero></Hero>
    
    
  </main>
</template>

<style scoped>

  body {
    font-family: 'Plus Jakarta Sans', sans-serif;
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
  height: 100px; /* Fixed height */
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
  display: flex;
  width: 200px;
  height: 50px;
  padding: 9px 15px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  
}

.button:hover {
  background-color: #b9b9b9;
}

.button2 {
  grid-column: 6;
  justify-self: start;
}

.button2:hover {
  background-color: #b9b9b9;
}

</style>
