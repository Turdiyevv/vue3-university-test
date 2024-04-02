<script setup>
import CarouselComponent from "@/components/carousel-component.vue";
import { ref } from 'vue'
import Rectangle from "@/components/rectangle.vue";
import FirstItems from "@/components/first-items.vue";
import Recourse from "@/components/recourse.vue";

const props  = ref([
  {id:0, text:'Zero', src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'},
  {id:1, text:'One', src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'},
  {id:2, text:'Two', src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'},
  {id:3, text:'Three', src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'},
])
</script>

<template>
  <div>
    <div class=" py-5 d-flex mx-auto" style="max-width: 1200px">
      <img style="position: absolute; margin-left: 150px"
           src="../assets/Group32.png" alt="">
      <img style="position: inherit; margin-left: auto;
          background: linear-gradient(to right, rgb(28,35,49) 10%, transparent 10%);"
           src="../assets/Rectangle274.png" alt="">
      <div class="input-group position-absolute input__parent_s">
        <input type="text" class="form-control" placeholder="Search your dream university"
               aria-label="Search your dream university" aria-describedby="basic-addon2"
                style="border-radius: 24px 0 0 24px;"
        >
        <span type="button" class="input-group-text group__text__style"
              id="basic-addon2">Search</span>
      </div>
    </div>

    <div class="">
      <carousel-component :slides="props"/>
      <div class="position-absolute main_absolute_style">
        <div class="progress__style">
          <div class="mx-4 d-flex">
            <span class="text-primary mx-2">|</span><span>{{props.length}}</span>
          </div>
          <div class="progress w-100 mx-5 h-25" role="progressbar" aria-label="Warning example"
               aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
          >
            <div class="progress-bar text-bg-warning" style="width: 75%">75%</div>
          </div>
        </div>
        <div style="width: 1200px; margin: 80px 0">
          <first-items/>
        </div>
        <div class="w-100">
          <rectangle/>
        </div>
      </div>
    </div>

    <div>
      <img class="w-100" src="../assets/white1.png" alt="">
    </div>
    <div>
      <div class="position-absolute w-100 d-flex align-items-center justify-content-center flex-column">
        <button  type="button" class="btn text-white rounded-pill"
                 style="width: 314px; background-color: #FFA500;"
        >Try test</button>
        <div style="margin-top: 200px">
          <recourse/>
        </div>
      </div>
      <img class="w-100 position-absolute" style="margin-top: 155px" src="../assets/green1.png" alt="">
      <img class="w-100" src="../assets/white2.png" alt="" style="margin-top: -5px">
    </div>
  </div>
</template>

<style scoped>
.main_absolute_style{
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.progress__style{
  align-items: center;
  background: #354B604D;
  border-radius: 8px;
  display: flex;
  height: 50px;
  width: 1400px;
}
.form-control{
  height: 40px;
}
.input__parent_s{
  width: 500px; margin-top: 340px
}
 .group__text__style{
   font-size: 16px;
    height: 40px;
    border-radius: 0 24px 24px 0;
    background-color: #0000FF;
    color: #ffffff
 }
 .carousel-inner{
   height: 500px;
   max-width: 1200px;
   background-color: cornflowerblue;
 }
</style>
