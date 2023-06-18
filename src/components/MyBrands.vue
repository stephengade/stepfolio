<template>
    <div class="scrolling_container my-24 bg-myWhite py-5 rounded-[8px]">
      <div class="scrolling_content ">
        <div class="flex flex-row items-center gap-20">
          <div class="flex flex-row" v-for="(item, index) in brands" :key="index">
            <div class="brands">
              <img class="brandLogo grayscale-100" :src="item.logo" :alt="item.title" :key="index" />
            </div>
          </div>
        </div>
      </div>
  
      <!-- going right -->
      <div class="reverse_scrolling_content mt-5">
        <div class="flex flex-row items-center gap-20">
          <div class="flex flex-row" v-for="(item, index) in brands2" :key="index">
            <div class="brands">
              <img class="brandLogo grayscale-100" :src="item.logo" :alt="item.title" :key="index" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style>
    .brandLogo {
      max-height: 100px;
    }
  
    .scrolling_container {
      width: 100%;
      overflow: hidden;
    }
  
    .scrolling_content {
      display: inline-block;
      white-space: nowrap;
      animation: marquee 20s linear infinite;
    }
  
    @keyframes marquee {
      0% {
        transform: translateX(30%);
      }
  
      100% {
        transform: translateX(-30%);
      }
    }
  
    /* reverse scrolling */
  
    .reverse_scrolling_content {
      display: inline-block;
      white-space: nowrap;
      animation: marquee2 20s linear infinite;
    }
  
    @keyframes marquee2 {
      0% {
        transform: translateX(-30%);
      }
  
      100% {
        transform: translateX(50%);
      }
    }
  </style>
  
  <script>
    import { BrandData } from '@/data/brandData';
  
    export default {
      name: "MyBrands",
  
      data() {
        return {
          brands: BrandData.slice(0,5),
          brands2: BrandData.slice(5,10),
        };
      },
    };
  </script>
  