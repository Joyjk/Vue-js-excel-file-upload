<template>
  <div>
    <h1>Hello</h1>
    <div class="row">
      <div class="row">
        <div v-for="item in allData" v-bind:key="item.title" class="column">
          <br />
          <img :src="item.pic" :alt="item.title" height="" style="width:100%" width="" class="" />
          <h4>{{ item.title }}</h4>
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
  name: "PictureData",
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