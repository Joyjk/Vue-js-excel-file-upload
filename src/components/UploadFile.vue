<template>
    <div>
        <div>
            <h1 style="margin-left:-16%;">Product Details</h1>
        <table border="1" class="table table-hover table-bordered" id="example">
            <thead>
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
            </thead>
            <tbody>
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
            </tbody>
        </table>
        </div>
        
         
    </div>
</template>

<script>
//import Vue from 'vue'
//import VueAxios from 'vue-axios'
import axios from 'axios'


//Vue.use(VueAxios, axios)
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 




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
               $('#example').DataTable({
                //    "processing": true,
                //     "serverSide": true,
                searching:false,
                paging:false
               });
            console.log(resp)
        })
    }
}
</script>