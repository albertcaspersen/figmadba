<template>
    <div class="hero">
        <p class="title">Glas keramik skulptur</p>
        <img src="./assets/Fisk.png" alt="" class="fisk">
    </div>
</template>

<style>
    .hero {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    width: 100%;
    
  }
  
  .title {
    grid-column: 2;
    justify-content: start;
  }

  .fisk {
    grid-column: 2;
    border-radius: 20px;
    width: 500px;
    height: 375.803px;
    flex-shrink: 0;

  }
</style>

<script>
    export default {

    };
</script>