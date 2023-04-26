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
                Cette action annulera votre rendez-vous avec  <br />
                <b>Konan Bertran</b> 
              </div>
              <div class="verificationAction">
                <v-btn
                  color="grey"
                  
                  depressed
                  @click="closeDeleteOnevariante"
                  style="color: white"
                  >Non</v-btn
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
                  mdi-account-check-outline
                </v-icon>
              </div>
            <v-container>
              <div class="CancelVerification">
                Souhaitez-vous accepter la visite de  <br />
                <b>Konan Bertran ?</b> 
              </div>
              <div class="verificationAction">
                <v-btn
                  color="grey"
                  
                  depressed
                  @click="closeAcceptVisite"
                  style="color: white"
                  >Non</v-btn
                >
                <v-btn
                  color="mainBlueColor"
                  
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
                        label="Nom"
                        append-icon="mdi-account-arrow-right"
                        ref="matri"
                        v-model="editedItem.nom_visiteur"
                        type="text"
                        value=""
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                     <v-col cols="12" md="11" lg="11">
                      <v-text-field
                        height="60"
                        solo
                        background-color="#356eea24"
                        label="Prenoms"
                        append-icon="mdi-account-arrow-right"
                        ref="matri"
                        v-model="editedItem.prenoms_visiteur"
                        type="text"
                        value=""
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                     <v-col cols="12" md="11" lg="11">
                      <v-text-field
                        height="60"
                        solo
                        label="Telephone"
                        v-model="editedItem.contact_visiteur"
                        append-icon="mdi-phone"
                        type="text"
                        value=""
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="11" lg="11">
                      <v-text-field
                        height="60"
                        solo
                        background-color="#356eea24"
                        label="email"
                        append-icon="mdi-at"
                        ref="desc"
                        v-model="editedItem.email_visiteur"
                        type="text"
                        value=""
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                   
                    <v-col cols="12" md="11" lg="11">
                      <v-text-field
                        height="60"
                        solo
                        v-model="editedItem.status"
                        ref="transport"
                        type="date"
                        label="Date du RDV"
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                     <v-col cols="12" md="11" lg="11">
                      <v-text-field
                        height="60"
                        solo
                        background-color="#356eea24"
                        v-model="editedItem.heure_rdv"
                        ref="transport"
                        type="time"
                        label="heure"
                        persistent-hint
                        append-icon="mdi-clock-time-eight"
                        required
                      ></v-text-field>
                    </v-col>
                    <div style="width:90%; padding: 15px 10px 0px 10px">
                      <v-textarea
                        solo
                        clearable
                        clear-icon="mdi-close-circle"
                        rows="5"
                        name="input-7-4"
                        v-model="editedItem.objet"
                        label="Description"
                        class="the-message-area"
                      ></v-textarea>
                    </div>
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
    <v-dialog v-model="dialog" max-width="370">
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
    </v-dialog>
    <!-- THE SEACH BAR -->
   <!-- THE SEACH BAR -->
    <v-row>
      <v-col cols="12" md="5" lg="5">
        <v-text-field
          v-model="search"
          solo
          height="50"
          hide-details
          prepend-inner-icon="mdi-search"
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
        :items="items"
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
          <v-btn icon color="mainBlueColor" 
          @click="editItem(item)"
          v-if="!item.status"
            ><v-icon small> mdi-lead-pencil </v-icon></v-btn
          >
          <v-btn icon color="mainBlueColor" @click="deleteItem(item)"
          v-if="!item.status"
            ><v-icon small> mdi-trash-can </v-icon></v-btn
          >
        </template>
        <template v-slot:[`item.status`]="{ item }">
          <div v-if="item.status" class="status" style="background: #0DA36C94;; color:white;">fait</div>
          <div v-if="!item.status" class="status" style="background: #FC070794; color:white;">pas fait</div>
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
  name: "projectTaskReview",
  components: {},

  data: () => ({
    // For the table
    search: "",
    headers: [
      {
        text: "INTITULE",
        align: "start",
        sortable: true,
        value: "nom_visiteur",
      },
      { text: "STATUS", value: "status", sortable: false },
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
      this.dialog = true;
    },

    // ------------------------
    // For Profil Edited
    // ------------------------
    editItem(item) {
      this.editedIndex = this.UserVisites.indexOf(item);
      this.editedItem = Object.assign({}, item);
      //  Open the Edit Dialogue
      this.dialogEdit = true;
    },

    editItemConfirm() {
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

      this.closeEdit();
    },

    closeEdit() {
      this.dialogEdit = false;
    },

    // --------------------
    // delete a travel
    // --------------------
    deleteItem(item) {
      this.editedIndex = this.Visites.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.itemToDelete = { id: this.editedItem.Visites_id };
      // if it is a variante of prise
      this.OneVarianteitemToDelete = { id: this.editedItem.id };
      // this.dialogDelete = true;
      this.BeforeDialogDelete = true;
    },
    deleteItemNature() {
      this.dialogDelete = true;
      this.BeforeDialogDelete = false;
    },

    deleteOneItemVriante() {
      this.dialogDeleteOneVariante = true;
      this.BeforeDialogDelete = false;
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
          "Visite/deleteOnePrice/" + this.OneVarianteitemToDelete.id
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

      this.closeDeleteOnevariante();
    },

    closeDeleteOnevariante() {
      this.dialogDeleteOneVariante = false;
    },

    // FOR ACCEPT VISITE
    acceptItem(item) {
      this.editedIndex = this.Visites.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.itemToDelete = { id: this.editedItem.Visites_id };
      this.dialogAccept = true;
    },
    acceptVisite() {
      axios
        .delete(
          "Visite/deleteOnePrice/" + this.OneVarianteitemToDelete.id
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

      this.closeDeleteOnevariante();
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
    ...mapGetters(["UserVisites"]),
  },

  created() {
    this.$store.dispatch("init_userVisite");
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
.TitleForList{
  margin-bottom: 40px;
  font-size: 12px;
  text-transform: uppercase;
  /* background-color:red; */
  border-radius: 2px;
  padding: 5px;
  box-shadow: 0px 2px 1px -2px rgba(0, 0, 0, 0.103), 0px 2px 2px 0px rgba(0, 0, 0, 0.103), 0px 1px 5px 0px rgba(0, 0, 0, 0.103);
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
  margin-left: 35%;
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
  font-size: 18px;
  margin-top: 5px;
  margin-bottom: 30px;
}
.verificationAction {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.verificationAction > button {
  width: 150px;
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
