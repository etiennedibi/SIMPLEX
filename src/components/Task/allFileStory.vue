<template>
  <div class="tableWrapperDiv">

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
              <embed :src="`${axios.defaults.baseURL}/uploads/fichier/${editedItem.fichier}`" width="100%" height="670px"/>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!-- SHOW USER AUTORISE -->
    <v-dialog v-model="autoriseUserDialog" max-width="370"> 
      <v-card>
        <v-card-text>
          <v-container class="showDialog">
            <div class="imgAndTitle">
              <v-icon large color="mainBlueColor"> mdi-account-group </v-icon>
            </div>
            <div class="userliste">
              <div v-if="IsExistUserList" class="notUser">
                Aucun collaborateur n'est autorisé à consulter ce fichier
              </div>
              <div  v-for="(item) in relatiionItem" :key="item.index" class="oneUserbox">
                <div class="userinfo">
                  <img v-if="editedItem.avatar" :src="`${axios.defaults.baseURL}/uploads/user/profil/${item.avatar}`"/>
                  <img v-if="!editedItem.avatar" src="@/assets/img/avatarProfil.jpg" alt="" srcset="" />
                  <p>{{item.nom}} {{item.prenoms}}</p>
                </div>
                <div class="actionBox">
                  <p><span>{{item.nombre_acces}}</span> vue(s)</p>
                </div>    
              </div>
            </div>
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
        :items="AllUserCompagniefiles"
        :search="search"
        :items-per-page="-1"
        hide-default-footer
      >
        <!-- FOR SEE EDIT, DELETE AND SHOW DIALOG -->
        <template v-slot:[`item.actions`]="{ item }">
          <!-- modification avec CESINHIO  a la base on avait v-slot:[item.actions="{ item }"-->
        
          <v-btn icon color="mainBlueColor" @click="showAutoriseItem(item.users_autorises)"
            ><v-icon small> mdi-account-group </v-icon></v-btn
          >
        </template>
      </v-data-table>
    </div>

  
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "allFileStory",
  components: {},

  data: () => ({
    // For the table
    search: "",
    headers: [
      {
        text: "AUTEUR",
        align: "start",
        sortable: true,
        value: "nom",
      },
      { text: "INTITULE", value: "intule" },
      { text: "MODIFIE", value: "created_at" },
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
    
  }),

  methods: {
    // ------------------------
    // Show File
    // ------------------------
    showItem(item) {
      this.editedItem = Object.assign({}, item);
      this.fileShowDialog = true;
    },
    // ------------------------
    // Show User autorise
    // ------------------------
    showAutoriseItem(relationitem) {
      this.relatiionItem = Object.assign({}, relationitem);
      if (relationitem.length==0) {
        this.IsExistUserList = true
      }else {this.IsExistUserList = false}
      this.autoriseUserDialog = true;
    },



    

 
  },

  computed: {
    ...mapGetters(["AllUserCompagniefiles"]),
  },

  created() {
    this.$store.dispatch("init_all_compnies_file");
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
