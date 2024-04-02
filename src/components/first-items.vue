<script setup>

</script>

<template>
  <div class="d-flex">
    <div class="parent_item">
      <div class="item_img_style">
        <img src="src/assets/firstItems/explore.png" alt="">
      </div>
      <div class="main_text">Explore</div>
      <div class="text_style">
        You can browse more than 25.000 online programmes from universities all over the world.
      </div>
    </div>
    <div class="line_style">
      <img style="width: 248px" src="../assets/firstItems/Arrow1.png" alt="">
    </div>
    <div class="parent_item">
      <div class="item_img_style">
        <img src="src/assets/firstItems/Vector.png" alt="">
      </div>
      <div class="main_text">Compare</div>
      <div class="text_style">
        Make a wishlist of your favourite programmes, check your fit with them, and read what other students are saying.
      </div>
    </div>
    <div class="line_style">
      <img style="width: 248px" src="../assets/firstItems/Arrow1.png" alt="">
    </div>
    <div class="parent_item">
      <div class="item_img_style">
        <img src="src/assets/firstItems/decision.png" alt="">
      </div>
      <div class="main_text">Decide</div>
      <div class="text_style">
        Now that you have your top programmes shortlisted, you can pick the ones that fit you the best.
      </div>
    </div>
    <div class="line_style">
      <img style="width: 248px" src="../assets/firstItems/Arrow1.png" alt="">
    </div>
    <div class="parent_item">
      <div class="item_img_style">
        <img src="src/assets/firstItems/checked.png" alt="">
      </div>
      <div class="main_text">Apply</div>
      <div class="text_style text-black">
        When you feel confident about your online programme choice, you can apply directly via Studyportals. Find out how..
      </div>
    </div>
  </div>
</template>
<style scoped>

.line_style{
  margin: 30px -45px;
}
.parent_item{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.main_text{
  margin: 32px 0;
  color: #FFA500;
  font-family: Raleway;
  font-size: 28px;
  font-weight: 600;
  line-height: 33px;
  letter-spacing: 0.05em;
  text-align: center;
}
.text_style{
  width: 183px;
  height: 105px;
  top: 1440px;
  left: 160px;
  color: #ffffff;
  font-family: Raleway;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.13px;
  text-align: center;
}
.item_img_style{
  align-items: center;
  justify-content: center;
  display: flex;
  width: 94px;
  height: 100px;
  border-radius: 40px;
  background: #039CE0;
}
</style>
