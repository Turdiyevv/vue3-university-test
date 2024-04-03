<script setup>

</script>
<template>
  <div>
    <div class="w-100 d-flex align-items-center justify-content-center flex-column">
      <h3 class="text-warning__style">Resources</h3>
      <div class="line_style"></div>
    </div>
    <div></div>
    <div>
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
