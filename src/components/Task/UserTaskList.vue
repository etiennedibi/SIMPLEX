<template>
  <div class="tableWrapperDiv">

    <!-- BEFORE DELETE WHITHDRAWAL DIALOG -->
    <v-dialog v-model="BeforeDialogDelete" max-width="370">
      <v-card>
        <v-card-text>
          <div class="confirmTitle">supprimer ?</div>
          <v-container>
            <!-- <div class="CancelVerification">
              Cette action supprimera le type de colis
              <b>{{ editedItem.denomination }}</b> et toutes les variantes de
              prix qui y sont liées.<br />
              <br />
              <span style="font-weight: bold"
                >voulez-vous vraiment supprimer <br />
                ce type de colis ?</span
              >
            </div> -->
            <div class="verificationAction">
              <v-btn
                color="Titlecolor"
                rounded
                x-large
                depressed
                @click="deleteOneItemVriante"
                style="color: white"
                >cette variante</v-btn
              >
              <v-btn
                color="mainBlueColor"
                rounded
                x-large
                depressed
                @click="deleteItemNature"
                style="color: white"
                >Cette nature</v-btn
              >
            </div>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- DELETE WHITHDRAWAL NATURE DIALOG -->
    <v-dialog v-model="dialogDelete" max-width="370">
      <v-card>
        <v-card-text>
          <div class="confirmTitle">AVERTISSEMENT !</div>
          <v-container>
            <div class="CancelVerification">
              Cette action supprimera le type de colis
              <b>{{ editedItem.denomination }}</b> et toutes les variantes de
              prix qui y sont liées.<br />
              <br />
              <span style="font-weight: bold"
                >voulez-vous vraiment supprimer <br />
                ce type de colis ?</span
              >
            </div>
            <div class="verificationAction">
              <v-btn
                color="Titlecolor"
                rounded
                depressed
                @click="closeDelete"
                style="color: white"
                >Non</v-btn
              >
              <v-btn
                color="mainBlueColor"
                rounded
                depressed
                @click="deleteItemConfirm"
                style="color: white"
                >Oui</v-btn
              >
            </div>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- DELETE VISITE ON   DIALOG -->
    <v-dialog v-model="dialogDeleteOneVariante" max-width="370">
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
                Cette action supprimera definitivement cette tâche
              </div>
              <div class="verificationAction">
                <v-btn
                  color="grey"
                  
                  depressed
                  @click="closeDeleteOnevariante"
                  style="color: white"
                  >Annuler</v-btn
                >
                <v-btn
                  color="red"
                  
                  depressed
                  @click="deleteItemVarinteConfirm"
                  style="color: white"
                  >Confirmer</v-btn
                >
              </div>
            </v-container>
            </v-container>
          
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- ACCEPTE VISITE ON   DIALOG -->
    <v-dialog v-model="dialogAccept" max-width="370">
      <v-card>
        <v-card-text>
          <v-container>
            <!-- <div class="confirmTitle red">AVERTISSEMENT !</div> -->
            <div class="imgAndTitle  deleteIMG">
                <v-icon color="mainBlueColor" large>
                  mdi-check
                </v-icon>
              </div>
            <v-container>
              <div class="CancelVerification">
                Souhaitez-vous marquer cette tâche
                comme pas faite ?
              </div>
              <div class="verificationAction">
                <v-btn
                  color="grey"
                  small
                  depressed
                  @click="closeAcceptVisite"
                  style="color: white"
                  >Non</v-btn
                >
                <v-btn
                  color="mainBlueColor"
                  small
                  depressed
                  @click="acceptVisite  "
                  style="color: white"
                  >oui</v-btn
                >
              </div>
            </v-container>
            </v-container>
          
        </v-card-text>
      </v-card>
    </v-dialog>


    <!-- EDIT VISITE DIALOG -->
    <v-dialog v-model="dialogEdit" max-width="370">
      <v-card>
        <v-card-text>
          <v-container>
            <div class="imgAndTitle  editIMGO">
              <img src="@/assets/icone/visit.png" alt="" srcset="" />
            </div>
            <form class="updateForm">
              <v-container fluid>
                <v-row>
                  <v-col cols="12" md="11" lg="11">
                    <v-text-field
                      height="60"
                      solo
                      label="Intituté"
                      append-icon="mdi-account-arrow-right"
                      ref="matri"
                      v-model="editedItem.intitule_tache"
                      type="text"
                      value=""
                      persistent-hint
                      required
                    ></v-text-field>
                  </v-col>
                  <div style="width:90%; padding: 15px 10px 0px 10px">
                    <v-textarea
                      solo
                      background-color="#356eea24"
                      clearable
                      clear-icon="mdi-close-circle"
                      rows="5"
                      name="input-7-4"
                      v-model="editedItem.details_taches"
                      label="Details"
                      class="the-message-area"
                    ></v-textarea>
                  </div>
                  <v-col cols="12" md="11" lg="11">
                    <v-text-field
                      height="60"
                      solo
                      v-model="editedItem.delais_execution"
                      ref="transport"
                      prefix="Dead-line : "
                      type="date"
                      label="Dead-line"
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
            depressed
            @click="closeEdit"
            style="color: white"
            >Annuler</v-btn
          >
          <v-btn
            color="mainBlueColor"
            depressed
            @click="editItemConfirm"
            style="color: white"
            >Enregistrer</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>


    <!-- SHOW DIALOG -->
     <!-- <v-dialog v-model="dialog" max-width="370">
      <v-card>
        <v-card-text>
          <v-container class="showDialog">
            <div class="imgAndTitle">
              <img src="@/assets/icone/tasks.png" alt="" srcset="" />
            </div>
            <div class="statElment Elment1">
              <div>
                <h4>Mettre en place la maquette du projet palomo </h4>
              </div>
            </div>
            <div class="statElment Elment2">
              <div>
                <h5>DETAILS</h5>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit iusto nihil 
                  reiciendis accusamus quaerat repellat provident quam quae dolor rem. 
                  Perferendis cumque velit porro quidem corrupti modi molestias praesentium atque?
                </p>
              </div>
            </div>
            <div class="statElment Elment3">
              <div>
                <h5>DEAD-LINE</h5>
                <h4>2023-02-12</h4>
              </div>
              <div>
                <h5>EXECUTANTS</h5>
                <div style="text-align:center">
                  <h4>Kone </h4>
                  <h4>Kone </h4>
                  <h4>Kone </h4>
                </div>
              </div>
              <div>
                <h5>Auteur</h5>
                <h4>2023-02-12</h4>
              </div>
            </div>
            
          </v-container>
        </v-card-text>
        
      </v-card>
    </v-dialog> -->
    <v-dialog v-model="dialog" max-width="770">
      <v-card>
        <v-card-text style="display:flex;">
          <v-container class="showDialog">
            <div class="imgAndTitle">
              <img src="@/assets/icone/tasks.png" alt="" srcset="" />
            </div>
            <div class="statElment Elment1">
              <div>
                <h4> {{ editedItem.intitule_tache }} </h4>
              </div>
            </div>
            <div class="statElment Elment2">
              <div>
                <h5>DETAILS</h5>
                <p>
                  {{ editedItem.details_taches }}
                </p>
              </div>
            </div>
            <div class="statElment Elment3">
              <div>
                <h5>DEAD-LINE</h5>
                <h4>{{ editedItem.delais_execution }}</h4>
              </div>
              <div>
                <h5>EXECUTANTS</h5>
                <div style="text-align:center">
                  <h4 v-for="(item) in editedItem.executants" :key="item.index">
                    {{ item.nom}} {{ item.prenoms}}  
                  </h4>
                </div>
              </div>
              <!-- <div>
                <h5>Auteur</h5>
                <h4>2023-02-12</h4>
              </div> -->
            </div>
            
          </v-container>
           <v-container class="showDialog2">
            <div class="comentsWrapper">
              <div class="commentBox"  v-for="(item) in editedItem.coments" :key="item.index">
                <div v-if="item.id == new_Coment.id_user">
                  <p>
                  {{ item.commentaire }}
                  </p>
                  <div class="avartCommt" v-if="item.avatar">
                    <img :src="`${axios.defaults.baseURL}/uploads/user/profil/${item.avatar}`"/>
                  </div>
                  <p style="padding:0px;background:white;" v-else>{{ item.nom }}</p>
                </div>
                <div v-else>
                  <div class="avartCommt" v-if="item.avatar">
                    <img :src="`${axios.defaults.baseURL}/uploads/user/profil/${item.avatar}`"/>
                  </div>
                  <p style="padding:0px;background:white;" v-else>{{ item.nom }}</p>
                  <p>
                  {{ item.commentaire }}
                  </p>
                </div>
              </div>
            </div>
            <div class="makeComent">
              <v-form ref="form00" style="width:100%;">
                <div style="width:100%;margin-bottom:0px">
                  <v-textarea
                    solo
                    clearable
                    background-color="#356eea24"
                    clear-icon="mdi-close-circle"
                    v-model="new_Coment.commentaire"
                    rows="3 "
                    name="input-7-4"
                    label="Faire un commentaire"
                    class="the-message-area"
                  ></v-textarea>
                </div>
              </v-form>
              <v-btn icon color="mainBlueColor" @click="makeComent"
              ><v-icon>mdi-send</v-icon></v-btn>
            </div>
          </v-container>
        </v-card-text>
        
      </v-card>
    </v-dialog>

    <!-- THE SEACH BAR -->
    <v-row>
      <v-col cols="12" md="12" lg="12">
        <p style="margin-bottom: 40px; text-align:center;"> 
          <span style="font-size: 17px; font-weight: bold;text-transform: uppercase">
           {{ project_name }}
          </span> 
        </p>
      </v-col>
    </v-row>
    <!-- START DATA TABLE -->
    <div class="dataWrapper">
      <v-data-table
        dense
        :headers="headers"
        :items="OneProjectTasks"
        :search="search"
        :items-per-page="-1"
        hide-default-footer
      >
        <!-- FOR SEE EDIT, DELETE AND SHOW DIALOG -->
        <template v-slot:[`item.actions`]="{ item }">
          <!-- modification avec CESINHIO  a la base on avait v-slot:[item.actions="{ item }"-->
          <v-btn icon color="mainBlueColor" @click="showItem(item)"
            ><v-icon small> mdi-eye </v-icon></v-btn
          >
          <v-btn icon color="mainBlueColor" @click="editItem(item)"
           ><v-icon small> mdi-pen </v-icon></v-btn
          >
          <v-btn icon color="mainBlueColor"  @click="deleteItem(item)"
           ><v-icon small> mdi-trash-can </v-icon></v-btn
          >
          <v-btn icon color="#FC070794" v-if="item.status_tache!=0" @click="acceptItem(item)"
           ><v-icon small> mdi-check-network </v-icon></v-btn
          >
          <!-- <v-btn icon color="mainBlueColor" @click="deleteItem(item)"
          v-if="!item.status"
            ><v-icon small> mdi-trash-can </v-icon></v-btn
          > @click="editItem(item)"
          v-if="!item.status"-->
        </template>
        <template v-slot:[`item.status_tache`]="{ item }">
          <div v-if="item.status_tache!=0" class="status" style="background: #0DA36C94;; color:white;">fait</div>
          <div v-if="item.status_tache==0" class="status" style="background: #FC070794; color:white;">pas fait</div>
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
  name: "UserTaskList",
  components: {},
  props:['project_id','project_name'],

  data: () => ({
    // For the table
    search: "",
    headers: [
      {
        text: "INTITULE",
        align: "start",
        sortable: true,
        value: "intitule_tache",
      },
      { text: "STATUS", value: "status_tache", sortable: false },
      { text: "DETAILS", value: "actions", sortable: false },
    ],
    items: [
      {
        nom_visiteur: "Mettre en place la maquette du projet palomo ",
        status: false,
        heure_rdv: "10:00",
        details: {
          vendus: 30,
          aVendre: 45,
          restant: 15,
          annules: 5,
          gains: 150000,
        },
      },
      {
        nom_visiteur: "Realiser les emballage du pacquet",
        status: false,
        heure_rdv: "10:30",
        details: {
          vendus: 45,
          aVendre: 45,
          restant: 0,
          annules: 5,
          gains: 160000,
        },
      },
      {
        nom_visiteur: "Jouer sur la designation du logo",
        status: true,
        heure_rdv: "14:30",
        details: {
          vendus: 30,
          aVendre: 20,
          restant: 10,
          annules: 0,
          gains: 350000,
        },
      },
      {
        nom_visiteur: "Appeler tous les participant au jeu concours",
        status: true,
        heure_rdv: "12:39",
        details: {
          vendus: 30,
          aVendre: 45,
          restant: 15,
          annules: 5,
          gains: 150000,
        },
      },
    ],


    // for alerte
    addingSuccess: false,
    addingfalse: false,

    // For Visite detail
    dialog: false,
    new_Coment: {},
    editedItem: {
      nom_visiteur: "",
      prenoms_visiteur: "",
      email_visiteur: "",
      contact_visiteur: "",
      status: "",
      heure_rdv: "",
      objet: "",
    },

    // For Visite edit
    VisiteaAddingResponse: "",
    dialogEdit: false,
    editedIndex: -1,

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
    // Show Profil infomation
    // ------------------------
    showItem(item) {
      this.editedItem = Object.assign({}, item);
      this.new_Coment.id_user = localStorage.getItem("user-id");
      this.dialog = true;
    },
    // ------------------------
    // Make Coments
    // ------------------------
    makeComent() {
      this.new_Coment.id_tache = this.editedItem.id;
      axios
        ({ url: "/api/v1/users/Commentaire_tache", data: this.new_Coment, method: "POST" })
        .then((response) => {
          // console.log(response.data);
          this.VisiteaAddingResponse = response.data;

          if (this.VisiteaAddingResponse) {
            // Annulation effectuée
            this.$store.dispatch("init_userVisite");
            this.$refs.form00.reset();
          } else if (!this.VisiteaAddingResponse) {
            console.log("messagePasEnvoyé");
          }
        })
        .catch((error) => {
          this.VisiteaAddingResponse = error.message;
          console.error("There was an error!", error);
        });
    },

    // ------------------------
    // For Profil Edited
    // ------------------------
    editItem(item) {
      this.editedItem = Object.assign({}, item);
      //  Open the Edit Dialogue
      this.dialogEdit = true;
    },

    editItemConfirm() {
      axios
        ({ url: "/api/v1/admin/update_taches/"+this.editedItem.id, data: this.editedItem, method: "PUT" })
        .then((response) => {
          // console.log(response.data);
          this.VisiteaAddingResponse = response.data;

          if (this.VisiteaAddingResponse) {
            // Annulation effectuée
            this.VisiteaAddingResponse.message = "modification effectuée";
            this.addingSuccess = !this.addingSuccess;
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
               this.$store.dispatch("init_one_project_task",this.project_id);
            }, 3000);
          } else if (!this.VisiteaAddingResponse) {
            this.addingfalse = !this.addingfalse;
            this.VisiteaAddingResponse.message = "echec de l'opération";
            setTimeout(() => {
              this.addingfalse = !this.addingfalse;
            }, 3000);
          }
        })
        .catch((error) => {
          this.VisiteaAddingResponse = error.message;
          console.error("There was an error!", error);
        });

      this.closeEdit();
    },

    closeEdit() {
      this.dialogEdit = false;
    },

    // --------------------
    // delete a travel
    // --------------------
    deleteItem(item) {
      // this.editedIndex = this.Visites.indexOf(item);
      this.editedItem = Object.assign({}, item);
      // this.itemToDelete = { id: this.editedItem.Visites_id };
      // if it is a variante of prise
      this.OneVarianteitemToDelete = { id: this.editedItem.id };
      // this.dialogDelete = true;
      this.dialogDeleteOneVariante = true;
    },

    deleteOneItemVriante() {
      this.dialogDeleteOneVariante = true;
      // this.BeforeDialogDelete = false;
    },
          // confirm deleted of nature
    deleteItemConfirm() {
      axios
        .delete(
          "Visite/delete/" + this.itemToDelete.id
        )
        .then((response) => {
          this.VisiteaAddingResponse = response.data;

          if (this.VisiteaAddingResponse.message == "success") {
            // Annulation effectuée
            this.VisiteaAddingResponse.message = "Suppression effectuée";
            this.addingSuccess = !this.addingSuccess;
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
              this.forceRerender2();
            }, 3000);
          } else if (this.VisiteaAddingResponse.message != "success") {
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

      this.closeDelete();
    },

    closeDelete() {
      this.dialogDelete = false;
    },

          // confirm deleted of one variante
    deleteItemVarinteConfirm() {
      axios
        .delete(
          "/api/v1/admin/destroy_taches/" + this.editedItem.id
        )
        .then((response) => {
          this.VisiteaAddingResponse = response.data;

          if (this.VisiteaAddingResponse) {
            // Annulation effectuée
            this.VisiteaAddingResponse.message = "Suppression effectuée";
            this.addingSuccess = !this.addingSuccess;
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
               this.$store.dispatch("init_one_project_task",this.project_id);
            }, 3000);
          } else if (!this.VisiteaAddingResponse) {
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

      this.closeDeleteOnevariante();
    },

    closeDeleteOnevariante() {
      this.dialogDeleteOneVariante = false;
    },

    // FOR ACCEPT VISITE
    acceptItem(item) {
      // this.editedIndex = this.Visites.indexOf(item);
      this.editedItem = Object.assign({}, item);
      // this.itemToDelete = { id: this.editedItem.Visites_id };
      this.dialogAccept = true;
    },
    acceptVisite() {
      axios
        ({ url: "/api/v1/admin/marquer_tache_pas_faite/"+this.editedItem.id, method: "PUT" })
        .then((response) => {
          this.VisiteaAddingResponse = response.data;

          if (this.VisiteaAddingResponse) {
            // Annulation effectuée
            this.VisiteaAddingResponse.message = "Etat de la tâche modifié";
            this.addingSuccess = !this.addingSuccess;
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
               this.$store.dispatch("init_one_project_task",this.project_id);
            }, 3000);
          } else if (!this.VisiteaAddingResponse) {
            this.VisiteaAddingResponse.message = "echec de l'operation";
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

      this.closeAcceptVisite();
    },
    closeAcceptVisite() {
      this.dialogAccept = false;
    },


    // FOR ACCEPT VISITE
    reportItem(item) {
      this.editedIndex = this.UserVisites.indexOf(item);
      this.editedItem = Object.assign({}, item);
      // this.itemToDelete = { id: this.editedItem.Visites_id };
      this.dialogReport = true;
    },
    reportVisite() {
      this.editedItem.id_visite = this.editedItem.id;
      axios
        ({ url: "rdv/update_date_visite", data: this.editedItem, method: "POST" })
        .then((response) => {
          // console.log(response.data);
          this.VisiteaAddingResponse = response.data;

          if (this.VisiteaAddingResponse.error == false) {
            // Annulation effectuée
            this.VisiteaAddingResponse.message = "report effectuée";
            this.addingSuccess = !this.addingSuccess;
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
               this.$store.dispatch("init_userVisite");
            }, 3000);
          } else if (this.VisiteaAddingResponse.message != "success") {
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

      this.closeReportVisite();
    },
    closeReportVisite() {
      this.dialogReport = false;
    },
    
  },

  computed: {
    ...mapGetters(["OneProjectTasks"]),
  },

  created() {
    this.$store.dispatch("init_one_project_task",this.project_id);
    console.log("jean joel");
    // this.OneProjectTasks = this.$store.getters.OneProjectTasks;
    // console.log("kfljfif", this.OneProjectTasks);
    // console.log("::::::",this.project_id);
    // console.log("::::::",this.project_name);
  },
};
</script>

<style scoped>
.tableWrapperDiv {
  height: 100%;
  width:100%;
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

.theSeachBar {
  /* margin-left: 50px; */
  margin-bottom: 10px;
}

/* Show details */
.showDialog{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: #ffffff;
}
.showDialog2{
  background:white;
  padding-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
}
.comentsWrapper{
  max-height: 350px;
  overflow-y: auto;
  /* background:blue; */
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}
.commentBox{
  /* background: #b71c1c; */
  display: flex;
  align-items: flex-end;
  justify-content:center;
}
.commentBox p{
  background: #037cb82c;
  max-width:80%;
  font-size: 11px;
  line-height: 15px;
  padding:15px 10px;
  border-radius: 5px;
}
.avartCommt{
  height: 35px;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #037cb82c;
  border-radius: 100px;
  margin: 3px;
}
.avartCommt img{
  height: 25px;
  width: 25px;
  border-radius: 100px;
}
.makeComent{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width:100%;
}

.imgAndTitle {
  margin: 15px 0px;
  height: 70px;
  width: 70px;
  font-size: 11px;
  border-radius: 100px;
  margin-bottom: 10px;
  border: solid 3px;
  border-color: var(--main-blue-important) rgb(176, 176, 182);
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: linear-gradient(
      180deg,
      rgb(0 0 0 / 0%),
      rgb(0 0 0 / 19%),
      rgb(0 0 0)
    ),
    url(../../assets/img/pexels-nappy-1058959.jpg);
  background-position: center;
  background-size: cover; */
}
.imgAndTitle > img{
  height:35px;
  width:35px
}
.statElment {
  margin-bottom: 20px;
  display: flex;
  text-align: start;
  /* background-color:red; */
}
.Elment1{
  text-transform: uppercase;
  font-size:12px;
}
.Elment2{
  /* text-transform: uppercase; */
  font-size:11px;
}
.Elment3{
  /* text-transform: uppercase; */
  width:100%;
  font-size:11px;
  display: flex;
  justify-content: space-between;
}
.statElment h5 {
  color: var(--main-blue-important);
}

.statusChange {
  display: flex;
  justify-content: center;
}

.status{
  display:inline-block;
  padding: 7px;
  border-radius:50px;
  font-size:11px;
  font-weight: bold
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
  height: 250px;
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
.deleteIMG {
  margin-left: 37%;
  margin-bottom: 0px;
  /* background-color:red; */

  border: 3px solid grey;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.CancelVerification {
  text-align: center;
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 30px;
}
.verificationAction {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.verificationAction > button {
  width: 100px;
}

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
