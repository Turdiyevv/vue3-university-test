<script setup>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

defineComponent({
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
})
defineProps({
  slides: Object
})
</script>
<template>
  <Carousel>
    <Slide v-for="slide in slides" :key="slide" >
      <div class="carousel__item">
        <img class="image__style" :src="slide.src" alt="">
      </div>
    </Slide>

    <template #addons>
      <Navigation/>
<!--      <Pagination />-->
    </template>
  </Carousel>
</template>


<style scoped>
.carousel__item {
  box-shadow: none;
  min-height: 265px;
  width: 100%;
  max-width: 1200px;
  background-color: black;
  color: white;
  //font-size: 20px;
  border-radius: 7px;
  //display: flex;
  //justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 0;
}

.carousel__prev,
.carousel__next {
  position: absolute;
  box-sizing: content-box;
  background-color: #ffffff;
  border-radius: 50%;
}
.carousel__prev{
  margin-left: 10px;
}
.carousel__next {
  margin-right: 0;
}
.carousel__pagination-button{
  width: 50px;
}

.image__style{
  min-height: 265px;
  border-radius: 7px;
  width: 100%;
}
</style>
