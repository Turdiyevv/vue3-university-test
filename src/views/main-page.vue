<script setup>
import CarouselComponent from "@/components/carousel-component.vue";
import { ref } from 'vue'
import Rectangle from "@/components/rectangle.vue";
import FirstItems from "@/components/first-items.vue";
import Recourse from "@/components/recourse.vue";
import Countries from "@/components/countries.vue";

const props  = ref([
  {id:0, text:'Zero', src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'},
  {id:1, text:'One', src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'},
  {id:2, text:'Two', src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'},
  {id:3, text:'Three', src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'},
])
</script>

<template>
  <div class="">
    <div class="d-flex align-items-center justify-content-center flex-column">
      <div class="p-5 d-flex" style="width: 1200px">
        <img class="position-absolute" style="" src="../assets/Group32.png" alt="">
        <img style="margin-left: auto;"
             src="../assets/Rectangle274.png" alt="">
        <div class="input-group input__parent_s">
          <input type="text" class="form-control" placeholder="Search your dream university"
                 aria-label="Search your dream university" aria-describedby="basic-addon2"
                  style="border-radius: 24px 0 0 24px;"
          >
          <span type="button" class="input-group-text group__text__style"
                id="basic-addon2">Search</span>
        </div>
      </div>

      <carousel-component :slides="props"/>

      <div class="w-100">
        <div class="main_absolute_style">
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

          <div class="w-100 d-flex justify-content-center align-items-center flex-column"
               style="padding: 100px 0;">
            <first-items/>
          </div>

          <div>
            <rectangle/>
          </div>

          <div class="mt-5" style="border: 1px solid red">
            <recourse :slides="props"/>
          </div>

          <div style="border: 1px solid blue">
            <countries/>
          </div>

        </div>
      </div>


    </div>
    <div>
      <div>
        <img class="w-100" src="../assets/white1.png" alt="">
      </div>
      <div style="background-color: #dcbadd; margin-top: -2px">
        <img class="w-100" src="../assets/green1.png" alt="">
      </div>
    </div>

  </div>
</template>

<style scoped>
.main_absolute_style{
  position: absolute;
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
  position: absolute;
  display: flex;
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
