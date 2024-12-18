<script>

import Seller from './Seller.vue'

    export default {

    };

</script>

<template>
    <div class="hero">
        <p class="title">Malawi Cyrtocara moorii
</p>
        <p class="price">39 kr.</p>
        <hr>
        <img src="./assets/Fisk.png" alt="" class="fisk">
        <p class="info">Malawi unger af Cyrtocara moorii

Malawi unger af Cyrtocara moorii ; kendt også som: Blue Dolphin Cichlid
KUN UNGER til salg på 5cm, hurtig voksende fisk, anbefales har dem i yngleakvariet til de bliver 7cm.
Pr fisk 35kr
3 fisk for 100kr
Fast pris, levering kan aftales.</p>
    </div>
</template>

<style>


    .hero {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(5, 10px);
    width: 100%;
    row-gap: 30px; /* Afstand mellem rækker */

    
  }
  
  .info {
    grid-column: 2;
    grid-row: 5;
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    letter-spacing: 0.8px;
    padding-top: 380px;
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
