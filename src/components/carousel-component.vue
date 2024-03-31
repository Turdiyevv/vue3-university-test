<script setup>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

// const props = defineProps({
//   slides: Object
// })
// const currentSlide = ref(0);
// const progressBarWidth = ref('0%');
// const progressBarText = ref('0%');
// watch(() => props.value, (newValue) => {
//   console.log (props.text)
//   const totalSlides = newValue.length;
//   const currentSlideIndex = currentSlide.value;
//   const progressPercentage = (currentSlideIndex + 1) / totalSlides * 100;
//   progressBarWidth.value = `${progressPercentage}%`;
//   progressBarText.value = `${progressPercentage}%`;
// })
// function handleChangeSlide(index) {
//   currentSlide.value = index;
// }

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
        <div class="left__div">{{ slide.text }}</div>
        <img class="image__style" :src="slide.src" alt="">
      </div>
    </Slide>

    <template #addons>
      <Navigation/>
<!--      <Pagination />-->
    </template>
  </Carousel>
</template>


<style>
.carousel__item {
  box-shadow: -15px 15px 12px -2px #151b25;
  min-height: 468px;
  width: 100%;
  max-width: 1200px;
  background-color: black;
  color: white;
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  //justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  background-color: #ffa500;
  border-radius: 50%;
}
.carousel__prev{
  margin-left: 80px;
}
.carousel__next {
  margin-right: 80px;
}
.carousel__pagination-button{
  width: 50px;
}

.image__style{
  border-radius: 0 8px 8px 0;
  width: 65%;
}
.left__div{
  height: 468px;
  border-radius: 8px 0 0 8px;
  width: 35%;
  background-color: #1C2331;
}
</style>
