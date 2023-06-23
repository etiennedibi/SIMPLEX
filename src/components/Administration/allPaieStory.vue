<template>
  <div class="tableWrapperDiv">

      <!-- DELETE FILE DIALOG -->
    <v-dialog v-model="deleteFileDialog" max-width="370">
      <v-card>
        <v-card-text>
          <v-container>
            <!-- <div class="confirmTitle red">AVERTISSEMENT !</div> -->
            <div class="imgAndTitle  deleteIMG">
                <v-icon color="red" large>
                  mdi-close
                </v-icon>
              </div>
            <v-container>
              <div class="CancelVerification">
                Cette action supprimera la fiche de paie de <br />
                <b>{{editedItem.nom}} {{editedItem.prenoms}}</b> <br>
                datant de <br>
                <b>{{editedItem.periode_paie}}</b> 
              </div>
              <div class="verificationAction">
                <v-btn
                  color="grey"
                  
                  depressed
                  @click="closeDeleteFile"
                  style="color: white"
                  >Non</v-btn
                >
                <v-btn
                  color="red"
                  
                  depressed
                  @click="deleteFileConfirm"
                  style="color: white"
                  >Confirmer</v-btn
                >
              </div>
            </v-container>
            </v-container>
          
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- SHOW FILE DIALOG -->
    <v-dialog
      v-model="fileShowDialog"
      width="800"
      overlay-color="black"
      overlay-opacity="0.8"
      mainBlueColor
    >
      <v-card tile>
        <v-card-text>
          <v-container>
            <v-row class="detailsTemplate">
              <!-- <embed src="https://projects.listic.univ-smb.fr/theses/these_Ratcliffe.pdf#toolbar=0" width="100%" height="800px"/> -->
              <embed :src="`${axios.defaults.baseURL}/uploads/paieFile/${editedItem.fiche_paie}`" width="100%" height="670px"/>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>



    
    <!-- THE SEACH BAR -->
    <v-row>
      <v-col cols="12" md="5" lg="5">
        <v-text-field
          v-model="search"
          solo
          height="30"
          hide-details
          label="Rechercher"
          class="theSeachBar"
        ></v-text-field>
      </v-col>
    </v-row>
    <!-- START DATA TABLE -->
    <div class="dataWrapper">
      <v-data-table
        dense
        :headers="headers"
        :items="AllPaiefiles"
        :search="search"
        :items-per-page="-1"
        hide-default-footer
      >
        <!-- FOR SEE EDIT, DELETE AND SHOW DIALOG -->
        <template v-slot:[`item.actions`]="{ item }">
          <!-- modification avec CESINHIO  a la base on avait v-slot:[item.actions="{ item }"-->
        
          <v-btn icon color="mainBlueColor" @click="showItem(item)"
            ><v-icon small> mdi-credit-card </v-icon></v-btn
          >

          <v-btn icon color="mainBlueColor" @click="deleteFile(item)"
            ><v-icon small> mdi-trash-can </v-icon></v-btn
          >
        </template>
      </v-data-table>
    </div>




    <transition name="slide">
      <v-alert
        v-if="addingSuccess"
        elevation="13"
        type="success"
        max-width="300"
        class="alert"
        color="mainBlueColor"
        >{{ VisiteaAddingResponse.message }}</v-alert
      >
    </transition>
    <transition name="slide">
      <v-alert
        v-if="addingfalse"
        elevation="13"
        type="error"
        max-width="300"
        class="alert"
        color="error"
      >
        {{ VisiteaAddingResponse.message }}</v-alert
      >
    </transition>
  
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "allFileStory",
  components: {},

  data: () => ({
    // For the table
    search: "",
    headers: [
      {
        text: "NOM",
        align: "start",
        sortable: true,
        value: "nom",
      },
      { text: "PRENOMS", value: "prenoms" },
      { text: "PERIODE", value: "periode_paie" },
      { text: "DATE DE PAIE", value: "date_paie" },
      { text: "PLUS", value: "actions", sortable: false },
    ],

   

    // For show file
    // ---Show-----------
    fileShowDialog: false,
    editedItem: {},

    // For autorise user
    // ---Show-----------
    autoriseUserDialog: false,
    IsExistUserList:false,
    relatiionItem: {},

    // ---Delete-----------
    deleteFileDialog: false,
    VisiteaAddingResponse: "",

    // for alerte
    addingSuccess: false,
    addingfalse: false,
    
  }),

  methods: {
    // ------------------------
    // Show File
    // ------------------------
    showItem(item) {
      this.editedItem = Object.assign({}, item);
      this.fileShowDialog = true;
    },
    

     // DELETE FILE 
    deleteFile(item) {
      this.editedItem = Object.assign({}, item); 
      this.deleteFileDialog = true;
    },
    deleteFileConfirm() {
      axios
        .delete(
          "/api/v1/admin/delete_oneUser_paieFile/" + this.editedItem.id
        )
        .then((response) => {
          this.VisiteaAddingResponse = response.data;

          if (this.VisiteaAddingResponse) {
            // Annulation effectuée
            this.VisiteaAddingResponse.message = "Suppression effectuée";
            this.addingSuccess = !this.addingSuccess;
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
              this.$store.dispatch("init_all_paie_file")
            }, 3000);
          } else if (!this.VisiteaAddingResponse) {
            this.VisiteaAddingResponse.message = "Echec de l'operation";
            this.addingfalse = !this.addingfalse;
            setTimeout(() => {
              this.addingfalse = !this.addingfalse;
            }, 3000);
          }
        })
        .catch((error) => {
          this.VisiteaAddingResponse = error.message;
          console.error("There was an error!", error);
        });

      this.closeDeleteFile();
    },
    closeDeleteFile() {
      this.deleteFileDialog = false;
    },



    

 
  },

  computed: {
    ...mapGetters(["AllPaiefiles"]),
  },

  created() {
    this.$store.dispatch("init_all_paie_file");
  },
};
</script>

<style scoped>
.tableWrapperDiv {
  height: 55vh;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  padding: 25px;
  padding-bottom: 50px;
}
.dataWrapper {
  height: 100%;
  overflow-y: scroll;
  background: #ffffff;
  padding: 0;
}
.dataWrapper::-webkit-scrollbar {
  width: 20px;
}
.dataWrapper::-webkit-scrollbar-track {
  background: #ffffff;
}

.dataWrapper::-webkit-scrollbar-thumb {
  background-color: var(--main-green-color);
  border-radius: 30px;
  border: 7px solid #ffffff;
}

.v-data-table {
  line-height: 1.5;
  max-width: 100%;
  /* margin: 0px 45px; */
}
.v-btn {
  font-weight: bold;
  letter-spacing: normal;
  text-transform: none;
}

.statuBtn{
  margin-left: 30px;
}
.status{
  display:inline-block;
  padding: 5px;
  border-radius:50px;
  font-size:10px;
}

.theSeachBar {
  /* margin-left: 50px; */
  margin-bottom: 10px;
}

/* Show details */
.userliste{
  max-height: 67vh;
  overflow: auto;
  width: 100%;
  margin-top:1vh;
  /* background: red; */
}
.oneUserbox{
  height: 70px;
  margin-bottom: 10px;
  /* background: blue; */
  display: flex;
  justify-content:space-between;
  align-items: center;
}
.userinfo{
  width: 60%;
  font-size:11px;
  line-height: 13px;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* background:pink; */
}
.userinfo img {
  height: 40px;
  width:40px;
  margin-right:7px;
  border-radius: 100px;
  border: solid 2px;
  border-color: var(--main-blue-important) var(--main-white-color);
}
.actionBox{
  width: 35%;
  font-size:10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  /* background:rgb(97, 8, 23); */
}
.actionBox > p{
  display: inline-block;
  /* background:rgb(75, 54, 54); */
}
.actionBox > p > span{
  display: inline-block;
  font-weight: bold;
  background:#037CB831;
  padding: 3px 10px;
  border-radius:100%;
  margin-right: 2px;
  text-align: center;
}
.notUser{
  display: flex;
  flex-direction:column;
  text-align: center;
}


/* Edit travel */
.editIMGO {
  margin-left: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color:#b71c1c; */
}
.updateForm {
  height: 170px;
  width: 110%;
  overflow-y: scroll;
}
.updateForm1 {
  height: 100px;
  width: 110%;
  overflow-y: scroll;
}
.updateForm::-webkit-scrollbar {
  width: 20px;
}
.updateForm::-webkit-scrollbar-track {
  background: rgb(255, 255, 255);
}

.updateForm::-webkit-scrollbar-thumb {
  background-color: var(--main-green-color);
  border-radius: 30px;
  border: 7px solid rgb(255, 255, 255);
}

.updateForm .col-lg-12,
.col-md-12 {
  padding-bottom: 0px;
  padding-top: 0px;
}

.ReportForm{
  height: 170px;
  overflow-y: clip;
}

/* Delete travel */

/* Confirme Delete travel */
.confirmTitle {
  background: #b71c1c;
  color: white;
  height: 30px;
  font-size: 18px;
  padding: auto;
  font-weight: bold;
  line-height: 30px;
  border-radius: 0px 0px 10px 10px;
  /* margin-bottom: -30px; */
  /* width: 370px; */
  text-align: center;
}
</style>
