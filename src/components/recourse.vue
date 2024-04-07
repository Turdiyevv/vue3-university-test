<script setup>
import SmallCarousel from "@/components/small-carousel.vue";

defineProps({
  slides: Object
})
</script>
<template>
  <div>
    <div class="w-100 d-flex align-items-center justify-content-center flex-column">
      <h3 class="text-warning__style">Resources</h3>
      <div class="line_style"></div>
    </div>

    <div class="w-100 d-flex align-items-center justify-content-center">
      <div class="polygon__style">
          <small-carousel :slides="slides"/>
<!--        <div class="book">-->
<!--        </div>-->
          <img src="../assets/Polygon3.png" alt="" class="bg_star">
      </div>
      <div class="polygon__style">
          <div class="book">
            <small-carousel :slides="slides"/>
          </div>
        <img src="../assets/Polygon3.png" alt="" class="bg_star">
      </div>
      <div class="polygon__style">
        <div class="book">
          <small-carousel :slides="slides"/>
        </div>
        <img src="../assets/Polygon3.png" alt="" class="bg_star">
      </div>
    </div>

    <div style="margin-top: -16px; position:relative;">
      <div class="tabs__style">
        <div>COURSES</div>
        <div>BOOKS</div>
        <div>USEFUL ARTICLES</div>
      </div>
      <div class="d-flex align-items-center justify-content-center flex-column">
        <div class="see_all_style">See all</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.bg_star{
  margin-top: auto;
  //width: auto;
  //height: auto;
  //border: 1px solid #FFFFFF80;
  //background: #FFFFFF33;
}
.polygon__style{
  //display: flex;
  justify-content: center;
  //align-items: center;
  width: 375px;
  height: 375px;
  top: 2495px;
  left: 826px;
}
.see_all_style{
  color: white;
  width: 771px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #039CE0;
  border-radius: 0 0 20px 20px;
}
.tabs__style{
  align-items: center;
  color: #ffffff;
  display: flex;
  width: 1200px;
  height: 60px;
  background: #354B60;
  box-shadow: 0 20px 50px 0 #000000;
  border-radius: 20px;
  justify-content: space-around;
}
.line_style{
  background-color: #FFA500;
  width: 170px;
  height: 2px;
  margin-bottom: 24px;
}
.text-warning__style{
  color: #FFA500;
}
</style>
