<script setup>
import axios from '@/http/axios-instance'
import {onMounted, reactive} from 'vue'
import MainComponent from "@/components/nav-bar-component.vue";
import BodyPage from "@/views/main-page.vue";


  let Data = reactive({ malumotlar: []})
  let Posts = reactive({ malumotlar: []})
  async function getDataFromApi() {
    try {
      const response = await axios.$http.get(`users`);
      Data.malumotlar = response.data.slice(0, 1)
    } catch (error) {
      console.error(error);
    }
  }
  async function getPostsFromApi(){
    if(Posts.malumotlar === []){
      try {
        const res = await axios.$http.get(`posts`);
        Posts.malumotlar = res.data.slice(0, 2)
      } catch (error) {
        console.error(error)
      }
    }
  }

  onMounted(() => {
    // getDataFromApi()
  })

</script>

<template>
  <header>
    <main-component/>
<!--    <button type="button" class="btn btn-primary">button</button>-->
<!--      <div v-for="(item, id) in Data.malumotlar" :key="id">-->
<!--        <div>id: {{item.id}}</div>-->
<!--        <div>name: {{item.name}}</div>-->
<!--        <div>username: {{item.username}}</div>-->
<!--        <div>email: {{item.email}}</div>-->
<!--        <div>address: {{item.address.street}}</div>-->
<!--        <div>phone: {{item.phone}}</div>-->
<!--        <div>company: {{item.company.name}}</div>-->
<!--      </div>-->
<!--    <button type="button" class="btn btn-secondary" @click.prevent="getPostsFromApi">-->
<!--      get posts-->
<!--    </button>-->
<!--    <div v-for="(item, id) in Posts.malumotlar" :key="id">-->
<!--      <div>id: {{item.id}}</div>-->
<!--      <div>title: {{item.title}}</div>-->
<!--      <div>body: {{item.body}}</div>-->
<!--    </div>-->
  </header>
  <main>
    <body-page/>
  </main>
</template>

