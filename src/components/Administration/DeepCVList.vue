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
              <embed :src="`${axios.defaults.baseURL}/uploads/fichierCV/${editedItem.cv_file}`" width="100%" height="670px"/>
         
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!-- EDIT FILE DIALOG -->
    <v-dialog v-model="dialogEdit" max-width="370">
      <v-card>
        <v-card-text>
          <v-container>
            <div class="imgAndTitle  editIMGO">
              <v-icon color="mainBlueColor" large>
                 mdi-file
                </v-icon>
            </div>
            <form class="updateForm">
              <v-container fluid>
                <v-row>
                  <v-col cols="11" md="11" lg="11" >
                       <v-file-input
                        chips
                        height="60"
                         v-model="editedItem.fichier"
                        solo
                        label="choisir un fichier"
                        prepend-icon="mdi-file"
                      ></v-file-input>
                    </v-col>
                    <v-col cols="11" md="11" lg="11">
                      <v-text-field
                        height="60"
                        solo
                        label="Itutilé du fichier"
                        background-color="#356eea24"
                        ref="desc"
                        v-model="editedItem.intule"
                        append-icon="mdi-call-missed"
                        type="text"
                        value=""
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>            
                </v-row>
              </v-container>
            </form>
          </v-container>
        </v-card-text>

        <v-card-actions style="display:flex;justify-content:space-around">
          <p
            class="simplex-btn"
            style="background:grey"
            @click="closeEdit"
            >Annuler</p
          >
          <p
            class="simplex-btn"
            @click="editItemConfirm"
            >Enregistrer</p
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
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
                Cette action supprimera le fichier<br />
                <b>{{editedItem.intule}}</b> 
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
                  <img v-if="item.avatar" :src="`${axios.defaults.baseURL}/uploads/user/profil/${item.avatar}`"/>
                  <img v-if="!item.avatar" src="@/assets/img/avatarProfil.jpg" alt="" srcset="" />
                  <p>{{item.nom}} {{item.prenoms}}</p>
                </div>
                <div class="actionBox">
                  <p><span>{{item.nombre_acces}}</span> accès</p>
                   <v-btn icon color="mainBlueColor" @click.stop="deleteItemAutorisation(item)">
                      <v-icon color="red">mdi-close</v-icon>
                    </v-btn>
                </div>    
              </div>
            </div>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
    <!-- DELETE USER AUTORISE DIALOG -->
    <v-dialog v-model="deleteUserDialog" max-width="370">
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
                Cette action supprimera l'autorisation d'accès à ce fichier pour <br />
                <b>{{oneAutorisation.nom}} {{oneAutorisation.prenoms}}</b> 
              </div>
              <div class="verificationAction">
                <v-btn
                  color="grey"
                  
                  depressed
                  @click="closeDeleteUserAutorisation"
                  style="color: white"
                  >Non</v-btn
                >
                <v-btn
                  color="red"
                  
                  depressed
                  @click="deleteUserAutorisation"
                  style="color: white"
                  >Confirmer</v-btn
                >
              </div>
            </v-container>
            </v-container>
          
        </v-card-text>
      </v-card>
    </v-dialog>
    <!-- UPDATE USER AUTORISATION BY ADDING NEW -->
    <v-dialog v-model="addUserDialog" max-width="370">
      <v-card>
        <v-card-text>
          <v-container>
            <div class="imgAndTitle  editIMGO">
              <v-icon color="mainBlueColor" large>
                 mdi-file
                </v-icon>
            </div>
            <form class="updateForm1">
              <v-container fluid>
                <v-row>
                  <v-col cols="11" md="11" lg="11">
                      <v-select
                        v-model="editedItem.autorisation"
                        :items="Employers"
                        item-text="nom"
                        item-value="the_user_id"
                        multiple
                        label="collaborateurs autorisés"
                        solo
                        height="80"
                      >
                      <template v-slot:selection="{ item, index }">
                          <v-chip v-if="index < 2">
                            <span>{{ item.nom }}</span>
                          </v-chip>
                          <span
                            v-if="index === 2"
                            class="grey--text text-caption"
                          >
                            (+{{ new_file.autorisation.length - 2}} autres)
                          </span>
                        </template>
                      </v-select>
                    </v-col>        
                </v-row>
              </v-container>
            </form>
          </v-container>
        </v-card-text>

        <v-card-actions style="display:flex;justify-content:space-around">
          <p
            class="simplex-btn"
            style="background:grey"
            @click="closeEditAutorise"
            >Annuler</p
          >
          <p
            class="simplex-btn"
            @click="editItemConfirmAutorise"
            >Enregistrer</p
          >
        </v-card-actions>
      </v-card>
    </v-dialog>



    
    <!-- THE SEACH BAR -->
    <v-row justify-md="center">
      <v-col cols="12" md="10" lg="10">
        <v-text-field
          v-model="search.seach"
          solo
          height="30"
          hide-details
          label="Entrez un l'élément à rechercher dans les cv"
          class="theSeachBar"
          v-on:keyup.enter="submit"
        ></v-text-field>
      </v-col>
    </v-row>
    <!-- START DATA TABLE -->
    <div class="seach_int" v-if="seachingStatus == 0">
      <v-icon large color="blue">mdi-database-search-outline</v-icon>
      Aucune recherche effectuée
    </div>
    <div class="seach_int" v-if="seachingStatus == 1">
      <v-icon large color="red">mdi-alert-octagon-outline</v-icon>
      Aucune correspondance
    </div>
    <div class="dataWrapper" v-if="seachingStatus == 2">
      <v-data-table
        dense
        :headers="headers"
        :items="searchResult"
        :items-per-page="-1"
        hide-default-footer
      >
        <!-- FOR SEE EDIT, DELETE AND SHOW DIALOG -->
        <template v-slot:[`item.cles`]="{ item }">
          <span class="oneSkills" v-for="(skill) in item.cles" :key="skill.index">
            {{ skill.cle}}
          </span>  
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <!-- modification avec CESINHIO  a la base on avait v-slot:[item.actions="{ item }"-->
          <v-btn icon color="mainBlueColor" @click="showItem(item)"
            ><v-icon small> mdi-eye </v-icon></v-btn
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
// import WebViewer from "../WebViewer.vue";

export default {
  name: "DeepCVList",
  components: {},

  data: () => ({
    // For the table
    search: {seach:""},
    seachingStatus:0,
    searchResult:[],
    headers: [
      {
        text: "STAGIAIRE",
        align: "start",
        sortable: true,
        value: "nom_stagiaire",
      },
      { text: "MOTS CLES", value: "cles" },
      { text: "PLUS", value: "actions", sortable: false },
    ],
    items: [
      {
        nom_visiteur: "Frozen Yao Partrick",
        date_rdv:  ["Communy", "imprimeur"],
      },
      {
        nom_visiteur: "Ice cream ",
        date_rdv:  ["managment", "blood", "slot", "developpeur", "politique"],
      },
      {
        nom_visiteur: "Eclair Frozen",
        date_rdv: ["Communy managment", "imprimeur"],
      },
    ],


    // for alerte
    addingSuccess: false,
    addingfalse: false,

    // For show file
    // ---Show-----------
    fileShowDialog: false,
    editedItem: {
      autorisation:[],
    },
    // ---Edit-----------
    dialogEdit: false,
    editedIndex: -1,
    // ---Delete-----------
    deleteFileDialog: false,

    // For autorise user
    // ---Show-----------
    autoriseUserDialog: false,
    IsExistUserList:false,
    relatiionItem: {},
    // ---Delete-----------
    deleteUserDialog: false,
    oneAutorisation: {},
    // ---Update liste-----------
    addUserDialog: false,

    // For Visite edit
    VisiteaAddingResponse: "",


    // For Visite Reporte
    dialogReport:false,

    // For Visite deleted
    // BeforeDialogDelete:false,
    // dialogDelete: false,
    dialogDeleteOneVariante: false,
    itemToDelete: "",

    // For Visite Accept
    dialogAccept:false,
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

    // ------------------------
    // EDIT FILE
    // ------------------------
    editItem(item) {
      this.editedItem = Object.assign({}, item);
      //  Open the Edit Dialogue
      this.dialogEdit = true;
    },
    submit() {
        axios({ url: "/api/v1/admin/deepSeach", data: this.search , method: "POST" })
        .then((response) => {
          if (response.data.result.length > 0) {
            this.seachingStatus = 2
            this.searchResult = response.data.result
          } else{
            this.seachingStatus = 1
          }
          
        })
        .catch((error) => {
          this.VisiteaAddingResponse = error.message;
          console.error("There was an error!", error);
        });
    },
    // ------------------------
    // EDIT USER AUTORISE
    // ------------------------
    editItemAutorise(item) {
      this.editedItem = Object.assign({}, item);
      //  Open the Edit Dialogue
      this.addUserDialog = true;
    },
    editItemConfirmAutorise() {
       this.editedItem.id_fichier = this.editedItem.the_fichiers_id
        axios({ url: "/api/v1/users/add_new_autorisation", data: this.editedItem, method: "PUT" })
        .then((response) => {
          this.VisiteaAddingResponse = response.data;
          if (this.VisiteaAddingResponse) {
            // Modification effectuée
            this.VisiteaAddingResponse.message = "modification effectuée";
            this.addingSuccess = !this.addingSuccess;
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
              this.$store.dispatch("init_all_user_file")
            }, 3000);
          } else if (!this.VisiteaAddingResponse) {
            // Modification effectuée
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

      this.closeEditAutorise();
    },
    closeEditAutorise() {
      this.addUserDialog = false;
    },

    // DELETE FILE 
    deleteFile(item) {
      this.editedItem = Object.assign({}, item); 
      this.deleteFileDialog = true;
    },
    deleteFileConfirm() {
      axios
        .delete(
          "/api/v1/users/delete_file/" + this.editedItem.the_fichiers_id
        )
        .then((response) => {
          this.VisiteaAddingResponse = response.data;

          if (this.VisiteaAddingResponse) {
            // Annulation effectuée
            this.VisiteaAddingResponse.message = "Suppression effectuée";
            this.addingSuccess = !this.addingSuccess;
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
              this.$store.dispatch("init_all_user_file")
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

    // DELETE USER AUTORISATION 
    deleteItemAutorisation(relationitem) {
      this.oneAutorisation = Object.assign({}, relationitem); 
      this.deleteUserDialog = true;
    },
    deleteUserAutorisation() {
      axios
        .delete(
          "/api/v1/users/cancel_autorisation/" + this.oneAutorisation.id
        )
        .then((response) => {
          this.VisiteaAddingResponse = response.data;

          if (this.VisiteaAddingResponse) {
            // Annulation effectuée
            this.VisiteaAddingResponse.message = "Suppression effectuée";
            this.addingSuccess = !this.addingSuccess;
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
              this.$store.dispatch("init_all_user_file")
            }, 3000);
          } else if (!this.VisiteaAddingResponse) {
            this.VisiteaAddingResponse.message = "Suppression effectuée";
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

      this.closeDeleteUserAutorisation();
      this.autoriseUserDialog = false;
    },
    closeDeleteUserAutorisation() {
      this.deleteUserDialog = false;
    },

    

 
  },

  computed: {
    ...mapGetters(["AllUserfiles","Employers"]),
  },

  created() {
    this.$store.dispatch("init_all_user_file");
    this.$store.dispatch("init_employers")
  },
};
</script>

<style scoped>
.seach_int{
  /* background:red; */
  height:100%;
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
}
.tableWrapperDiv {
  height: 55vh;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  padding: 25px;
  padding-bottom: 50px;
}
.dataWrapper {
  margin-top:20px;
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
.downloadBox{
  height: 50vh;
  width: 100%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.ImgloadBox{
  margin-top: 20px;
  height: 50vh;
  width:70vw;
  display:flex;
  justify-content: center;
  align-items: center;
}
.ImgloadBox > img{
  max-height: 50vh;
  max-width: 98%;
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

.oneSkills{
  display: inline-block;
  padding: 5px 15px;
  margin: 2px;
  border-radius:100px;
  background:#037CB831;
  /* color:black; */
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
