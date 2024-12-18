<script setup>
import Button from './components/Button.vue'
import Searchbar from './components/Searchbar.vue'
import Logo from './components/icons/logo.png'
</script>

<template>

  <main>
    <div class="header">
      <img src="./components/icons/logo.png" alt="" class="logo">
      <Searchbar></Searchbar>
      <Button type="primary" class="button">Opret annonce</Button>
      <Button type="tetriary" class="button2">Log ind</Button>

    </div>
  </main>
</template>

<style scoped>
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
  display: flex;
  width: 200px;
  height: 50px;
  padding: 9px 15px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

.button2 {
  grid-column: 6;
  justify-self: start;
}

</style>
