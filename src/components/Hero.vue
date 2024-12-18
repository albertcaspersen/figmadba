<script>

import Seller from './Seller.vue'

    export default {

    };
</script>

<template>
    <div class="hero">
        <p class="title">Glas keramik skulptur</p>
        <p class="price">1.399 kr.</p>
        <hr>
        <img src="./assets/Fisk.png" alt="" class="fisk">
        <Seller class="seller"></Seller>
    </div>
</template>

<style>
    .hero {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(3, 40px);
    width: 100%;
    
  }
  
  .title {
    grid-column: 2;
    grid-row: 1;
    justify-content: start;
    color: black;
    font-size: 32px;
  }

  .price {
    grid-row: 2;
    color: #00098A;
    grid-column: 2;
    font-family: "Plus Jakarta Sans";
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.6px;
  }

  .fisk {
    grid-column: 2;
    border-radius: 20px;
    width: 500px;
    height: 375.803px;
    margin-top: 30px;
    flex-shrink: 0;
    grid-row: 4;
  }

  hr {
  grid-row: 4;
  width: 500px;
  height: 0px;
  stroke: blue;
  stroke-linecap: round;
  grid-column:2;
  }

  .seller {
    grid-column: 5;
  }


</style>
