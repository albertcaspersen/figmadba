<script setup>
import Button from './components/Button.vue'
import Searchbar from './components/Searchbar.vue'
</script>

<template>

  <main>
    <div class="header">
      <h1>Hello world</h1>
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
  padding: 0 20px; /* Optional padding */
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
