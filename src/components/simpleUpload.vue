<template>
  <div style="margin-left: -12%; margin-top: 2%">
    <form
      enctype="multipart/form-data"
      @submit.prevent="sendFile"
      id="formexcel"
      ref="formexcel"
    >
      <label>Upload excel: </label>
      <input type="file" ref="file" @change="selectFile" id="file" />
      <br />
      <span id="up" style="color: green"></span>
      <br />
      <button type="sendFile">Send File EF</button>
      &nbsp;
      <button @click.prevent="sendFileAdo()">Send File ADO</button>
      &nbsp;
      <button @click.prevent="sendFileFikDal()">Send File Fik Dal</button>
      &nbsp;
      <button @click.prevent="sendFileDapper()">Send File Dapper</button>
      <!-- <button @click.prevent="clearTable()">Clear Table</button> -->
    </form>
  </div>
</template>

<script>
import axios from "axios";
import $ from "jquery";
export default {
  name: "SimpleUpload",
  data() {
    return {
      file: "",
      display: "",
    };
  },
  computed: {
    computedDisplay: function () {
      return this.display;
    },
  },
  methods: {
    selectFile() {
      this.file = this.$refs.file.files[0];
    },
    async sendFile() {
      if ($("#file")[0].files.length == 0) {
        $("#up").text("No File selected");
      } else {
        $("#up").text("uploading.....................");

        const formData = new FormData();
        formData.append("file", this.file);
        try {
          await axios
            .post("http://localhost:11793/api/products/Import", formData)
            .then((res) => {
              if (res.status === 200) {
                window.location.reload();
              }
              console.log("Response Status: " + res.status);
            });
        } catch (err) {
          console.log(err);
        }
      }
    },
    // async clearTable(){
    //   try {
    //       await axios
    //         .delete("http://localhost:11793/api/products/FIKDALImport", formData)
    //         .then((res) => {
    //           if (res.status === 200) {
    //             window.location.reload();
    //           }
    //           console.log("Response Status: " + res.status);
    //         });
    //     } catch (err) {
    //       console.log(err);
    //     }
    // },


    async sendFileFikDal() {
      if ($("#file")[0].files.length == 0) {
        $("#up").text("No File selected");
      } else {
        $("#up").text("uploading.....................");
        const formData = new FormData();
        formData.append("file", this.file);

        try {
          await axios
            .post("http://localhost:11793/api/products/FIKDALImport", formData)
            .then((res) => {
              if (res.status === 200) {
                window.location.reload();
              }
              console.log("Response Status: " + res.status);
            });
        } catch (err) {
          console.log(err);
        }
      }
    },
    async sendFileDapper() {
      if ($("#file")[0].files.length == 0) {
        $("#up").text("No File selected");
      } else {
        $("#up").text("uploading.....................");
        const formData = new FormData();
        formData.append("file", this.file);

        try {
          await axios
            .post("http://localhost:11793/api/Home/ImportDapper", formData)
            .then((res) => {
              if (res.status === 200) {
                window.location.reload();
              }
              console.log("Response Status: " + res.status);
            });
        } catch (err) {
          console.log(err);
        }
      }
    },
    async sendFileAdo() {
      if ($("#file")[0].files.length == 0) {
        $("#up").text("No File selected");
      } else {
        $("#up").text("uploading.....................");
        const formData = new FormData();
        formData.append("file", this.file);

        try {
          await axios
            .post("http://localhost:11793/api/products/Importado", formData)
            .then((res) => {
              if (res.status === 200) {
                window.location.reload();
              }
              console.log("Response Status: " + res.status);
            });
        } catch (err) {
          console.log(err);
        }
      }

      console.log("Hello");
    },
  },
};
</script>

<style scoped>
.status {
  display: none;
  color: green;
}
</style>