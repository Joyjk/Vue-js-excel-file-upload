<template>
    <div style="margin-left:-12%; margin-top:2%;">
        <form enctype="multipart/form-data" @submit.prevent="sendFile" id="formexcel" ref="formexcel"> 
        <label>Upload excel: </label>
                <input type="file"  ref="file" @change="selectFile" />
                <br>
                <button type="sendFile">Send File</button>
              &nbsp;
                 <button type="sendFileAdo">Send File ADO</button>
        </form>
    </div>
    
</template>

<script>
import axios from 'axios'
export default {
    name:"SimpleUpload",
    data(){
        return{
            file:""
        }
    },
    methods:{
        selectFile(){
            this.file = this.$refs.file.files[0];
        },
        async sendFile(){
            const formData = new FormData();
            formData.append('file',this.file)
            try{
                await axios.post("http://localhost:11793/api/products/Import",formData).then(window.location.reload());
            } catch(err){
                console.log(err);
            }
            
        },
        async sendFileAdo(){
            this.$refs.formexcel.submit(
                
            )
            const formData = new FormData();
            formData.append('file',this.file)

            try{
                await axios.post("http://localhost:11793/api/products/Importado",formData);
            } catch(err){
                console.log(err);
            }
        }
    }
}
</script>