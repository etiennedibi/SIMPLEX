<template>
    <div class="bodyBox">
        <div class="TheBoxBody">
             <div class="tableWrapperDiv">

                <!-- EDIT USER-ACCES  -->
                <v-dialog v-model="dialogEditAcces" max-width="370">
                <v-card>
                    <v-card-text>
                    <v-container>
                        <div class="imgAndTitle deleteIMG editIMGO">
                        <p style="text-align:center; font-weight:bold">MODIFICATION DES ACCES D'AUTHENTIFICATION</p>
                        </div>
                        <form class="updateForm updatestationAdminForm">
                        <v-container fluid>
                            <v-row>
                            <v-col cols="12" md="12" lg="12">
                                <v-text-field
                                height="45"
                                background-color="#3e886d4a"
                                solo
                                label="mot de passe"
                                v-model="password"
                                append-icon="mdi-lead-pencil"
                                ref="total_name"
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

                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="Titlecolor"
                        rounded
                        depressed
                        small
                        @click="closeEditAcces"
                        style="color: white"
                        >Annuler</v-btn
                    >
                    <v-btn
                        color="mainBlueColor"
                        rounded
                        small
                        depressed
                        @click="editItemConfirmAcces"
                        style="color: white"
                        >Enregistrer</v-btn
                    >
                    </v-card-actions>
                </v-card>
                </v-dialog>
                
                <!-- EDIT USER-IMAGE -->
                <v-dialog v-model="dialogEditImg" max-width="370">
                <v-card>
                    <v-card-text>
                    <v-container>
                        <div class="imgAndTitle deleteIMG editIMGO">
                        <p style="text-align:center; font-weight:bold">MODIFICATION DE LA PHOTO DE PROFIL</p>
                        </div>
                        <form class="updateForm updatestationAdminForm">
                        <v-container fluid>
                            <v-row>
                            <v-col cols="12" md="12" lg="12">
                                <v-file-input
                                chips
                                height="45"
                                solo
                                v-model="avatar"
                                label="Photo de profil"
                                prepend-icon="mdi-camera"
                              ></v-file-input>
                            </v-col>
                            </v-row>
                        </v-container>
                        </form>
                    </v-container>
                    </v-card-text>

                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="Titlecolor"
                        rounded
                        small
                        depressed
                        @click="closeEditImg"
                        style="color: white"
                        >Annuler</v-btn
                    >
                    <v-btn
                        color="mainBlueColor"
                        rounded
                        small
                        depressed
                        @click="editItemConfirmImg"
                        style="color: white"
                        >Enregistrer</v-btn
                    >
                    </v-card-actions>
                </v-card>
                </v-dialog>

                <!-- EDIT USER INFO -->
                <v-dialog v-model="dialogEdit" max-width="370">
                <v-card>
                    <v-card-text>
                    <v-container>
                        <div class="imgAndTitle deleteIMG editIMGO">
                        <p style="text-align:center; font-weight:bold">MODIFICATION DES INFORMATIONS PERSONNELLES</p>
                        </div>
                        <form class="updateForm updatestationAdminForm">
                        <v-container fluid>
                            <v-row>
                            <v-col cols="12" md="12" lg="12">
                                <v-text-field
                                height="45"
                                solo
                                label="Nom"
                                append-icon="mdi-account"
                                ref="matri"
                                type="text"
                                value=""
                                v-model="UserInfo.nom"
                                persistent-hint
                                required
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="12" lg="12">
                                <v-text-field
                                height="45"
                                background-color="#3e886d4a"
                                solo
                                v-model="UserInfo.prenoms"
                                label="Prenoms"
                                append-icon="mdi-account-outline"
                                ref="total_name"
                                type="text"
                                value=""
                                persistent-hint
                                required
                                ></v-text-field>
                            </v-col>
                             <v-col cols="12" md="12" lg="12">
                                <v-text-field
                                height="45"
                                solo
                                label="E-mail"
                                append-icon="mdi-at"
                                ref="matri"
                                type="text"
                                value=""
                                persistent-hint
                                v-model="UserInfo.email"
                                required
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="12" lg="12">
                                <v-text-field
                                height="45"
                                background-color="#3e886d4a"
                                v-model="UserInfo.LM"
                                solo
                                label="Numero de telephone"
                                append-icon="mdi-phone"
                                ref="total_name"
                                type="text"
                                value=""
                                persistent-hint
                                required
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="12" lg="12">
                                <v-text-field
                                height="45"
                                solo
                                v-model="UserInfo.LM"
                                label="Lieu d'habitation"
                                append-icon="mdi-map-marker"
                                ref="total_name"
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

                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="Titlecolor"
                        rounded
                        small
                        depressed
                        @click="closeEdit"
                        style="color: white"
                        >Annuler</v-btn
                    >
                    <v-btn
                        color="mainBlueColor"
                        rounded
                        small
                        depressed
                        @click="editItemConfirm"
                        style="color: white"
                        >Enregistrer</v-btn
                    >
                    </v-card-actions>
                </v-card>
                </v-dialog>

                


                <!-- FOR THE ELEMENT -->
                 <v-row justify="center">
                  <v-col cols="12" md="3" lg="3">
                    <div class="numberWrapper" @click="editItemImg">
                      <div class="N-icon">
                        <v-icon  color="mainBlueColor">mdi-image-edit</v-icon>
                        <!-- <v-icon  v-if="item.role_id == 2" color="mainBlueColor">mdi-archive</v-icon>
                        <v-icon  v-if="item.role_id == 3" color="#bf6f69">mdi-truck-delivery</v-icon> -->
                      </div>
                      <h1>PHOTO</h1>
                      <!-- <h1 v-if="item.role_id == 2">COLIS</h1>
                      <h1 v-if="item.role_id == 3">EXPEDITIONS</h1> -->
                      <h5>de profil</h5>
                    </div>
                  </v-col>
                  <v-col cols="12" md="3" lg="3">
                    <div class="numberWrapper" @click="editItem">
                      <div class="N-icon">
                        <v-icon  color="mainBlueColor">mdi-account-edit</v-icon>
                        <!-- <v-icon  v-if="item.role_id == 2" color="mainBlueColor">mdi-archive</v-icon>
                        <v-icon  v-if="item.role_id == 3" color="#bf6f69">mdi-truck-delivery</v-icon> -->
                      </div>
                      <h1>INFORMATIONS</h1>
                      <!-- <h1 v-if="item.role_id == 2">COLIS</h1>
                      <h1 v-if="item.role_id == 3">EXPEDITIONS</h1> -->
                      <h5>personnelles</h5>
                    </div>
                  </v-col>
                  <v-col cols="12" md="3" lg="3">
                    <div class="numberWrapper" @click="editItemAccess">
                      <div class="N-icon">
                        <v-icon  color="mainBlueColor">mdi-lock-reset</v-icon>
                        <!-- <v-icon  v-if="item.role_id == 2" color="mainBlueColor">mdi-archive</v-icon>
                        <v-icon  v-if="item.role_id == 3" color="#bf6f69">mdi-truck-delivery</v-icon> -->
                      </div>
                      <h1>ACCES</h1>
                      <!-- <h1 v-if="item.role_id == 2">COLIS</h1>
                      <h1 v-if="item.role_id == 3">EXPEDITIONS</h1> -->
                      <h5>d'authenfication </h5>
                    </div>
                  </v-col>
                </v-row>

                <transition name="slide">
                <v-alert
                    v-if="addingSuccess"
                    elevation="13"
                    type="success"
                    max-width="300"
                    class="alert"
                    color="mainBlueColor"
                    >{{ staionaAddingResponse.message }}</v-alert
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
                    {{ staionaAddingResponse.message }}</v-alert
                >
                </transition>
             </div>
        </div>
    </div>
 
</template>












<script>
// import Vue from "vue";
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "param",
  components: {},

  data: () => ({
    // For the table
    search: "",
    headers: [
      {
        text: "VILLE",
        align: "start",
        sortable: false,
        value: "city",
      },
      { text: "QUATIER", value: "neighborhood" },
      {
        text: "OPTION EXPEDITION",
        align: "center",
        value: "package_service_use",
      },
      { text: "DETAILS", value: "actions", sortable: false },
    ],
    Managers: [
      {
        role: 1,
        value: "Gestionnaire des voyages",
      },
      { 
        role: 2,
        value: "Gestionnaire des colis" 
      },
      {
        role: 3,
        value: "Gestionnaire des expéditions",
      },
    ],

    // for alerte
    addingSuccess: false,
    addingfalse: false,

    // For staion detail
    
    dialog: false,
    avatar: "",
    user_id: 1,
    password: "",
    UserInfo: {
      
    },

    // For staion edit
    staionaAddingResponse: "",
    dialogEdit: false,
    dialogEditAcces:false,
    dialogEditImg:false,
    editedIndex: -1,

    // For staion deleted
    dialogDelete: false,
    itemToDelete: "",

  }),

  methods: {
    // ------------------------
    // Show Profil infomation
    // ------------------------
    showItem(item) {
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    // ------------------------
    // For STATION Edited
    // ------------------------
    editItem() {
      this.dialogEdit = true;
    },

    editItemConfirm() {
      axios({ url: "user/update_infos_users/"+1, data: this.UserInfo, method: "PUT" })
        .then((response) => {
          this.staionaAddingResponse = response.data;
          if (this.staionaAddingResponse) {
            // Modification effectuée
            this.staionaAddingResponse.message = "modification effectuée";
            this.addingSuccess = !this.addingSuccess;
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
              this.forceRerender2();
            }, 3000);
          } else if (!this.staionaAddingResponse.message) {
            // Modification effectuée
            this.staionaAddingResponse.message = "echec de l'operation";
            this.addingfalse = !this.addingfalse;
            setTimeout(() => {
              this.addingfalse = !this.addingfalse;
            }, 3000);
          }
        })
        .catch((error) => {
          this.staionaAddingResponse = error.message;
          console.error("There was an error!", error);
        });

      this.closeEdit();
    },

    closeEdit() {
      this.dialogEdit = false;
    },



    // EDIT-ACCES
     editItemAccess() {
      this.dialogEditAcces = true;
    },
    editItemConfirmAcces() {
      axios({ url: "admin/update_password/"+1, data: {password:this.password}, method: "PUT" })
        .then((response) => {
          this.staionaAddingResponse = response.data;
          if (this.staionaAddingResponse) {
            // Modification effectuée
            this.staionaAddingResponse.message = "modification effectuée";
            this.addingSuccess = !this.addingSuccess;
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
            }, 3000);
          } else if (!this.staionaAddingResponse) {
            // Modification effectuée
            this.staionaAddingResponse.message = "échec de l'operation";
            this.addingfalse = !this.addingfalse;
            setTimeout(() => {
              this.addingfalse = !this.addingfalse;
            }, 3000);
          }
        })
        .catch((error) => {
          this.staionaAddingResponse = error.message;
          console.error("There was an error!", error);
        });

      this.closeEditAcces();
    },
    closeEditAcces() {
      this.dialogEditAcces = false;
    },



    // EDIT-IMG
     editItemImg() {
      this.dialogEditImg = true;
    },
    editItemConfirmImg() {
      axios({ url: "admin/update_photo_profil/"+1, data:{avatar:this.avatar}, method: "PUT" })
        .then((response) => {
          this.staionaAddingResponse = response.data;
          if (this.staionaAddingResponse) {
            // Modification effectuée
            this.staionaAddingResponse.message = "modification effectuée";
            this.addingSuccess = !this.addingSuccess;
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
              this.forceRerender2();
            }, 3000);
          } else if (!this.staionaAddingResponse) {
            // Modification effectuée
            this.staionaAddingResponse.message = "echec de l'operation";
            this.addingfalse = !this.addingfalse;
            setTimeout(() => {
              this.addingfalse = !this.addingfalse;
            }, 3000);
          }
        })
        .catch((error) => {
          this.staionaAddingResponse = error.message;
          console.error("There was an error!", error);
        });

      this.closeEditImg();
    },
    closeEditImg() {
      this.dialogEditImg = false;
    },


  },





  computed: {
    ...mapGetters(["Adminitrators"]),
  },




  created() {
    this.$store.dispatch("init_adminitrator");
  },
};
</script>











<style scoped>
.tableWrapperDiv {
  height: 55vh;
  /* background: red; */
  border-radius: 10px;
  overflow: hidden;
  /* padding: 25px; */
  /* padding-bottom: 50px; */
  display: flex;
  align-items: center;
}


.numberWrapper {
  height: 190px;
  border-radius: 10px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.N-icon {
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #3e886d4a;
  border-radius: 100px;
}
.numberWrapper h1 {
  /* margin-bottom: -15px; */
  font-size: 20px;
}
.numberWrapper h5 {
  color: var(--font-color);
  text-align: center;
}

</style>
