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
      <Button type="primary" class="button" style="font-family: 'Plus Jakarta Sans', sans-serif;">Opret annonce</Button>
      <Button type="tetriary" class="button2" style="font-family: 'Plus Jakarta Sans', sans-serif;">Log ind</Button>

    </div>
  </main>
</template>

<style scoped>

  body {
    font-family: 'Plus Jakarta Sans', sans-serif;
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
