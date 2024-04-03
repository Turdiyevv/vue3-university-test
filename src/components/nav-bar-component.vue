<script setup>

</script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary nav_bar__style">
      <div class="container-fluid mx-5">
        <div class="d-flex">
          <img class="mt-3" src="../assets/Logo.png" alt="">
          <button class="navbar-toggler" type="button"
                  data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="d-flex justify-content-around align-items-center navbar-nav mb-2 mb-lg-0"
              style="width: 70%">
            <div class="nav-item text-light">
              <div type="button" class="border__button_style">universities</div>
            </div>
            <div class="nav-item text-light">
              <div type="button" class="border__button_style">Tests</div>
            </div>
            <div class="nav-item text-light">
              <div type="button" class="border__button_style">Resources</div>
            </div>
            <div class="nav-item text-light">
              <div type="button" class="border__button_style">Servises</div>
            </div>
            <div class="nav-item text-light">
              <div type="button" class="border__button_style">Chat</div>
            </div>
          </div>
            <div class="d-flex">
              <button class="btn btn-primary rounded-pill btn-sm px-4 mx-4" type="submit">Sign up</button>
              <button class="btn btn-warning rounded-pill text-light btn-sm px-4" type="submit">Sign in</button>
            </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
  .nav_bar__style{
    background: rgba(28, 35, 49, 1);
  }
  .border__button_style{
    padding: 5px 12px;
  }
  .border__button_style:active{
    background-color: #5C6067;
    padding: 5px 12px;
    border-radius: 0 12px 0 12px;
  }
</style>
