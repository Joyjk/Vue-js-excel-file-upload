<template>
  <div>
    <h1>Hello Pic Load</h1>
    <div class="row">
      <div class="row">
        <div v-for="item in allData" v-bind:key="item.title" class="column">
          <br />
          <!-- <router-link :to="{path:'/', params:{proTitle: item.title}}"> -->
          <router-link :to="'/singlepic/'+item.title">
          <img :src="'http://localhost:11793/api/Pictures/'+item.title"  :alt="item.title" height="" style="width:100%" width="" class="" />
          <h4>{{ item.title }}.jpg</h4>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
export default {
  name: "PictureLoad",
  data() {
    return {
      allData: undefined,
    };
  },
  mounted() {
    axios.get("http://localhost:11793/api/Pictures/all").then((resp) => {
      this.allData = resp.data;
      console.log(resp.data);
    });
  },
};
</script>

<style>
.myStyle {
  
}
/* Three image containers (use 25% for four, and 50% for two, etc) */
.column {
  float: left;
  width: 33.33%;
  padding: 5px;
}

/* Clear floats after image containers */
.row::after {
  content: "";
  clear: both;
  display: table;
}
</style>