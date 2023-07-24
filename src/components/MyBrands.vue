<template>
  <div class="scrolling_container  bg-myWhite rounded-[8px]">


    <div class="scrolling_content  ">
      <div class="" v-for="(item, index) in brands" :key="index">
        <div class="brands inline-block ml-10 p-0">
          <img class="brandLogo grayscale-100" :src="item.logo" :alt="item.title" :key="index" />
        </div>
      </div>
    </div>

    <!-- going right -->
    <div class="reverse_scrolling_content">
      <div class="" v-for="(item, index) in brands2" :key="index">
        <div class="brands inline-block ml-10 p-0">
          <img class="brandLogo grayscale-100" :src="item.logo" :alt="item.title" :key="index" />
        </div>
      </div>
    </div>
  </div>
</template>
  
<style>
.brandLogo {
  height: 150px;
  width: fit-content;
  object-fit: contain;
}

.scrolling_container {
  overflow: hidden;
  margin: 0 !important;
  position: relative;
  z-index: 1;
  padding: 0;
}

.scrolling_content,
.reverse_scrolling_content {
  overflow: hidden;
  height: 100%;
  white-space: nowrap;

  margin: 0;
  font-size: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: fit-content;
}

.scrolling_content {
  animation: scrollRight 15s infinite linear;
}

.reverse_scrolling_content {
  animation: scrollLeft 15s infinite linear;
}

@keyframes scrollRight {
  0% {

    transform: translate3d(100%, 0, 0);
  }

  100% {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes scrollLeft {
  0% {
    transform: translate3d(0, 0, 0);

  }

  100% {
    transform: translate3d(100%, 0, 0);
  }
}
</style>
  
<script>
import { BrandData } from '@/data/brandData';

export default {
  name: "MyBrands",

  data() {
    return {
      brands: BrandData.slice(0, 5),
      brands2: BrandData.slice(5, 10),
    };
  },
};
</script>
  