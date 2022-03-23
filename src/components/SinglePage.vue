<template>
  <div>Data Params: {{ this.picID }}</div>

    <img :src="this.imgT" alt="" width="250" height="250">

</template>
<script>

//import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
export default {
  
    name:'singlePage',
    data(){
        return{
            picID : this.$route.params.id,
            imgT: "http://localhost:11793/api/Pictures/"+this.$route.params.id,
        }
    },
     mounted() {
    // axios.get("http://localhost:11793/api/Pictures/"+this.picID).then((resp) => {
    //   //this.allData = resp.data;
    //   console.log(resp);
    // });
  },

}
</script>