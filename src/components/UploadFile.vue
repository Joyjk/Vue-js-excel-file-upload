<template>
    <div>
        <h1 style="margin-left:-16%;">Product Details</h1>
        <table border="1">
            <tr>
                <td>ID</td>
                <td>Bar Code</td>
                <td>Chalan No.</td>
                <td>Date</td>
                <td>Price</td>
                <td>Quantity</td>
                <td>Vendor Code</td>
                <td>Store Code</td>
            </tr>
            <tr v-for="item in list" v-bind:key="item.id">
                <td>{{item.id}}</td>
                <td>{{item.barCode}}</td>
                <td>{{item.chalan}}</td>
                <td>{{item.date}}</td>
                <td>{{item.price}}</td>
                <td>{{item.quantity}}</td>
                <td>{{item.vendorCode}}</td>
                <td>{{item.storeCode}}</td>
            </tr>
        </table>
         
    </div>
</template>

<script>
//import Vue from 'vue'
//import VueAxios from 'vue-axios'
import axios from 'axios'
//Vue.use(VueAxios, axios)

export default {
    name:"UploadFile",
    data(){
        return {
            list:undefined
        }
    },
    mounted(){
        axios.get("http://localhost:11793/api/products/ado").then((resp)=>{
            this.list=resp.data;
            console.log(resp.data)
        })
    }
}
</script>