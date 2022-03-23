<template >
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div class="container">
    <!-- <SimpleUpload />
    <Upload />
    <SimpleUpload /> -->
    <router-view></router-view>
  </div>
  
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
// import Upload from './components/UploadFile.vue'
// import SimpleUpload from './components/simpleUpload.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld,
    // Upload,
    // SimpleUpload
  },
  data(){
    return{
      
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  /* margin-left: 10%; */
}
</style>
