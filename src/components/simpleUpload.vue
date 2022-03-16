<template>
    <div style="margin-left:-12%; margin-top:2%;">
        <form enctype="multipart/form-data" @submit.prevent="sendFile" id="formexcel" ref="formexcel"> 
        <label>Upload excel: </label>
                <input type="file"  ref="file" @change="selectFile" />
                <br>
                <span id="up" style="color:green"></span>
                <br>
                <button type="sendFile">Send File</button>
              &nbsp;
                 <button @click.prevent="sendFileAdo()">Send File ADO</button>
        </form>
    </div>
    
</template>

<script>
import axios from 'axios'
import $ from 'jquery'; 
export default {
    name:"SimpleUpload",
    data(){
        return{
            file:"",
            display:""
        }
    },
    computed:{
        computedDisplay: function(){
            return this.display
        }
    },
    methods:{
        selectFile(){
            this.file = this.$refs.file.files[0];
        },
        async sendFile(){
            $("#up").text("uploading.....................")
            const formData = new FormData();
            formData.append('file',this.file)
            try{
                
                await axios.post("http://localhost:11793/api/products/Import",formData).then(res=>{
                    if(res.status===200)
                    {
                        
                        window.location.reload();
                    }
                    console.log("Response Status: "+res.status)
                });
            } catch(err){
                console.log(err);
            }
            
        },
        async sendFileAdo(){
            

            $("#up").text("uploading.....................")
            const formData = new FormData();
            formData.append('file',this.file)

            try{
                await axios.post("http://localhost:11793/api/products/Importado",formData).then(res=>{
                    if(res.status===200)
                    {
                        
                        window.location.reload();
                    }
                    console.log("Response Status: "+res.status)
                });
            } catch(err){
                console.log(err);
            }
            console.log("Hello")
        }
    }
}
</script>

<style scoped>
.status{
    display:none; 
    color: green;
}
</style>