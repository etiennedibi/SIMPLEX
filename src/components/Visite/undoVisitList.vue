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

    <!-- DELETE-CANCEL VISITE ON   DIALOG -->
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
                <b>{{ editedItem.nom_visiteur }} {{ editedItem.prenoms_visiteur }}</b> 
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
                  @click="deleteItemConfirm"
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
                <b>{{ editedItem.nom_visiteur }} {{ editedItem.prenoms_visiteur }} ?</b> 
              </div>

              <form class="updateForm2">
                <v-container fluid>
                  <v-row>
                      <v-col cols="12" md="11" lg="11">
                        <v-text-field
                          height="60"
                          solo
                          v-model="editedItem.duree_rdv"
                          :rules="[() => !!editedItem.duree_rdv]"
                          prefix="Durée de la visite"
                          append-icon="mdi-timer"
                          type="time"
                          value=""
                          persistent-hint
                          required
                        ></v-text-field>
                      </v-col>
                  </v-row>
                </v-container>
              </form>
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


     <!-- REJECT VISITE DIALOG -->
    <v-dialog v-model="dialogReject" max-width="370">
      <v-card>
        <v-card-text>
          <v-container>
            <div class="imgAndTitle  deleteIMG">
                <v-icon color="red" large>
                  mdi-close
                </v-icon>
              </div>
            <v-container>
              <div class="CancelVerification">
                Souhaitez-vous Refuser la demande de RDV de  <br />
                <b>{{ editedItem.nom_visiteur }} {{ editedItem.prenoms_visiteur }} ?</b> 
              </div>
              <div class="verificationAction">
                <v-btn
                  color="grey"
                  
                  depressed
                  @click="closeRejectVisite"
                  style="color: white"
                  >Non</v-btn
                >
                <v-btn
                  color="mainBlueColor"
                  
                  depressed
                  @click="RejectVisite  "
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
                  <v-col cols="12" md="12" lg="12">
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
                     <v-col cols="12" md="12" lg="12">
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
                     <v-col cols="12" md="12" lg="12">
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
                    <v-col cols="12" md="12" lg="12">
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
                   
                    <v-col cols="12" md="12" lg="12">
                      <v-text-field
                        height="60"
                        solo
                        v-model="editedItem.date_rdv"
                        ref="transport"
                        type="date"
                        label="Date du RDV"
                        prefix="Date : "
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                     <v-col cols="12" md="12" lg="12">
                      <v-text-field
                        height="60"
                        solo
                        background-color="#356eea24"
                        v-model="editedItem.heure_rdv"
                        ref="transport"
                        type="time"
                        label="heure"
                        prefix="heure de visite : "
                        persistent-hint
                        append-icon="mdi-clock-time-eight"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12" lg="12">
                      <v-text-field
                        height="60"
                        solo
                        background-color="#356eea24"
                        v-model="editedItem.duree_rdv"
                        ref="jjj"
                        type="time"
                        label="heure"
                        prefix="Durée de visite : "
                        persistent-hint
                        append-icon="mdi-timer"
                        required
                      ></v-text-field>
                    </v-col>
                    <div style="width:100%; padding: 15px 10px 0px 10px">
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

        <v-card-actions style="display:flex;justify-content:space-around">
          <!-- <v-spacer></v-spacer> -->
          <p
            class="simplex-btn"
            style="background:grey"
            @click="closeEdit"
            >Annuler</p>
          <p
            class="simplex-btn"
            @click="editItemConfirm"
            >Enregistrer</p
          >
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- REPORT VISITE DIALOG -->
    <v-dialog v-model="dialogReport" max-width="370">
      <v-card>
        <v-card-text>
          <v-container>
            <div class="imgAndTitle  editIMGO">
              <img src="@/assets/icone/visit.png" alt="" srcset="" />
            </div>
            <form class="updateForm ReportForm">
              <v-container fluid>
                <v-row>
                    <v-col cols="12" md="12" lg="12" class="margin-top:50px;">
                      <v-text-field
                        height="60"
                        solo
                        v-model="editedItem.date_rdv"
                        type="date"
                        value=""
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12" lg="12">
                      <v-text-field
                        height="60"
                        solo
                        background-color="#356eea24"
                        append-icon="mdi-timer"
                        ref="desc"
                        v-model="editedItem.heure_rdv"
                        type="time"
                        value=""
                        persistent-hint
                        prefix="heure"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12" lg="12">
                      <v-text-field
                        height="60"
                        solo
                        background-color="#356eea24"
                        v-model="editedItem.duree_rdv"
                        prefix="Durée de la visite"
                        ref="transport"
                        type="time"
                        label="heure"
                        persistent-hint
                        append-icon="mdi-clock-time-eight"
                        required
                      ></v-text-field>
                    </v-col>
                </v-row>
              </v-container>
            </form>
          </v-container>
        </v-card-text>

        <v-card-actions style="display:flex;justify-content:space-around">
          <!-- <v-spacer></v-spacer> -->
          <p
           class="simplex-btn"
            style="background:grey"
            @click="closeReportVisite"
            >Annuler</p
          >
          <p
            class="simplex-btn"
            @click="reportVisite"
            >Enregistrer</p
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
              <img src="@/assets/icone/visit.png" alt="" srcset="" />
            </div>
            <div class="statElment">
              <div>
                <h5>VISITEUR</h5>
                <h4 style="font-weight:normal;font-size:12px">{{ editedItem.nom_visiteur }} {{ editedItem.prenoms_visiteur }}</h4>
              </div>
            </div>
            <div class="statElment">
              <div>
                <h5>EMAIL</h5>
                <h4 style="font-weight:normal;font-size:12px">{{ editedItem.email_visiteur }}</h4>
              </div>
            </div>
            <div class="statElment">
              <div>
                <h5>TELEPHONE</h5>
                <h4 style="font-weight:normal;font-size:12px">{{ editedItem.contact_visiteur }}</h4>
              </div>
            </div>
              <div class="statElment">
                <div>
                  <h5>DUREE DU RDV</h5>
                  <h4 style="font-weight:normal;font-size:12px">{{ editedItem.duree_rdv }}</h4>
                </div>
              </div>
            <div class="statElment">
              <div>
                <h5>MOTIF</h5>
                <h4 style="text-align:justify;font-weight:normal;font-size:12px">{{ editedItem.objet }}</h4>
              </div>
            </div>
            
          </v-container>
        </v-card-text>
        <!-- <v-img height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>

            <v-card-text>
            Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
            </v-card-text>

            <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
                color="green darken-1"
                text
                @click="dialog = false"
            >
                Disagree
            </v-btn>

            <v-btn
                color="green darken-1"
                text
                @click="dialog = false"
            >
                Agree
            </v-btn>
            </v-card-actions> -->
      </v-card>
    </v-dialog>
    <!-- THE SEACH BAR -->
    <v-row>
      <v-col cols="12" md="5" lg="5">
        <v-text-field
          v-model="search"
          solo
          small
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
        :items="UserVisites"
        :search="search"
        :items-per-page="-1"
        hide-default-footer
      >
        <!-- FOR SEE EDIT, DELETE AND SHOW DIALOG -->
        <template v-slot:[`item.actions`]="{ item }">
          <!-- modification avec CESINHIO  a la base on avait v-slot:[item.actions="{ item }"-->
          <v-btn icon color="mainBlueColor" @click="showItem(item)"
            ><v-icon small> mdi-eye-outline </v-icon></v-btn
          >
          <v-btn icon color="mainBlueColor" 
          v-if="((item.auteur_visite == 'Ajouté depuis administration')&&(item.etat_visite !== 'REFUSED'))" 
          @click="editItem(item)"
            ><v-icon small> mdi-pencil-outline </v-icon></v-btn
          >
          <v-btn icon color="mainBlueColor" 
          v-if="((item.auteur_visite == 'Ajouté depuis administration')&&(item.etat_visite !== 'REFUSED'))" 
            @click="deleteOneItemVriante(item)"
            ><v-icon small>mdi-cancel </v-icon></v-btn
          >
          <v-btn icon color="green"  
          v-if="((item.auteur_visite != 'Ajouté depuis administration') && ((item.etat_visite == 'EN_ATENTE') && (item.etat_visite !== 'ACCEPTED') && (item.etat_visite !== 'REFUSED')))"
           @click="acceptItem(item)"
            ><v-icon small> mdi-account-check </v-icon></v-btn
          > 
          <v-btn icon color="mainBlueColor" 
          v-if="((item.auteur_visite != 'Ajouté depuis administration') && (item.etat_visite == 'ACCEPTED'))"
          @click="reportItem(item)"
            ><v-icon small> mdi-redo-variant </v-icon></v-btn
          >
          <v-btn icon color="red" 
          v-if="((item.auteur_visite != 'Ajouté depuis administration') && ((item.etat_visite == 'EN_ATENTE') || (item.etat_visite == 'ACCEPTED') && (item.etat_visite !== 'REFUSED')))" 
          @click="RejecttItem(item)"  
            ><v-icon small> mdi-close-circle-multiple-outline </v-icon></v-btn
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
  name: "undoVisitList",
  components: {},

  data: () => ({
    // For the table
    search: "",
    headers: [
      {
        text: "NOM",
        align: "start",
        sortable: true,
        value: "nom_visiteur",
      },
      { text: "DATE", value: "date_rdv" },
      { text: "HEURE", value: "heure_rdv" },
      { text: "DETAILS", value: "actions", sortable: false },
    ],
    items: [
      {
        nom_visiteur: "Frozen Yao Partrick ",
        date_rdv: "21-01-2021",
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
        nom_visiteur: "Ice cream ",
        date_rdv: "01-01-2021",
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
        nom_visiteur: "Eclair",
        date_rdv: "25-03-2021",
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
        nom_visiteur: "Cupcake",
        date_rdv: "25-03-2021",
        heure_rdv: "12:39",
        details: {
          vendus: 30,
          aVendre: 45,
          restant: 15,
          annules: 5,
          gains: 150000,
        },
      },
      {
        name: "Gingerbread",
        date_rdv: "25-04-2021",
        heure_rdv: "13:40",
        details: {
          vendus: 30,
          aVendre: 45,
          restant: 15,
          annules: 5,
          gains: 150000,
        },
      },
      {
        name: "Jelly bean",
        date: "25-03-2021",
        post: "09:30",
        details: {
          vendus: 30,
          aVendre: 45,
          restant: 15,
          annules: 5,
          gains: 150000,
        },
      },
      {
        name: "Lollipop",
        date: "25-03-2021",
        post: "09:30",
        details: {
          vendus: 30,
          aVendre: 45,
          restant: 15,
          annules: 5,
          gains: 150000,
        },
      },
      {
        name: "Honeycomb",
        date: "15-02-2021",
        post: "09:30",
        details: {
          vendus: 30,
          aVendre: 45,
          restant: 15,
          annules: 5,
          gains: 150000,
        },
      },
      {
        name: "Donut",
        date: "25-03-2021",
        post: "09:30",
        details: {
          vendus: 30,
          aVendre: 45,
          restant: 15,
          annules: 5,
          gains: 150000,
        },
      },
      {
        name: "KitKat",
        date: "25-03-2021",
        post: "20:00",
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
      date_rdv: "",
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
    BeforeDialogDelete:false,
    dialogDelete: false,
    dialogDeleteOneVariante: false,
    itemToDelete: "",
  OneVarianteitemToDelete:"",

    // For Visite Accept
    dialogAccept:false,
    visiteToAccpet:{},

  // For Visite Reject
    dialogReject:false,
    visiteToRject:{},
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
      // this.editedItem.id_visite = this.editedItem.id;
      axios
        ({ url: "/api/v1/rdv/update_visite_planifie/"+this.editedItem.id, data: this.editedItem, method: "PUT" })
        .then((response) => {
          // console.log(response.data);
          this.VisiteaAddingResponse = response.data;

          if (this.VisiteaAddingResponse) {
            // Annulation effectuée
            this.VisiteaAddingResponse.message = "modifiactaion effectuée";
            this.addingSuccess = !this.addingSuccess;
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
               this.$store.dispatch("init_userVisite");
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

    deleteOneItemVriante(item) {
      this.editedIndex = this.UserVisites.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDeleteOneVariante = true;
      // this.BeforeDialogDelete = false;
    },
    // confirm deleted of nature
    deleteItemConfirm() {
       axios
        ({ url: "/api/v1/rdv/cancel_visite_planifie/"+this.editedItem.id,  method: "PUT" })
        .then((response) => {
          this.VisiteaAddingResponse = response.data;

          if (this.VisiteaAddingResponse) {
            // Annulation effectuée
            this.VisiteaAddingResponse.message = "Annulation effectuée";
            this.addingSuccess = !this.addingSuccess;
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
               this.$store.dispatch("init_userVisite");
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

   
          // confirm deleted of one variante
    deleteItemVarinteConfirm() {
      axios
        .delete(
          "/api/v1/Visite/deleteOnePrice/" + this.OneVarianteitemToDelete.id
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
    // FOR ACCEPT VISITE
    acceptItem(item) {
      this.editedIndex = this.UserVisites.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.visiteToAccpet = { id_visite: this.editedItem.id, dure_permis: this.editedItem.duree_rdv};
      this.dialogAccept = true;
    },
    acceptVisite() {
      axios
        ({ url: "/api/v1/rdv/employer_accepted_rdv", data: this.visiteToAccpet, method: "POST" })
      .then((response) => {
        // console.log(response.data);
        this.VisiteaAddingResponse = response.data;

        if (this.VisiteaAddingResponse) {
          // Annulation effectuée
          this.VisiteaAddingResponse.message = "RDV accepté";
          this.addingSuccess = !this.addingSuccess;
          setTimeout(() => {
            this.addingSuccess = !this.addingSuccess;
              this.$store.dispatch("init_userVisite");
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

    // FOR REPORT VISITE
    reportItem(item) {
      this.editedIndex = this.UserVisites.indexOf(item);
      this.editedItem = Object.assign({}, item);
      // this.itemToDelete = { id: this.editedItem.Visites_id };
      this.dialogReport = true;
    },
    reportVisite() {
      this.editedItem.id_visite = this.editedItem.id;
      axios
        ({ url: "/api/v1/rdv/update_date_visite", data: this.editedItem, method: "POST" })
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


      
    // FOR REJECT VISITE
    RejecttItem(item) {
      this.editedIndex = this.UserVisites.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.visiteToRject = { 
        id_visite: this.editedItem.id, 
        };
      this.dialogReject = true;
    },
    RejectVisite() {
      console.log(this.editedItem.id);
      axios
        ({ url: "/api/v1/rdv/employer_refused_rdv", data: {id_visite: this.editedItem.id, }, method: "POST" })
      .then((response) => {
        // console.log(response.data);
        this.VisiteaAddingResponse = response.data;

        if (this.VisiteaAddingResponse) {
          // Annulation effectuée
          this.VisiteaAddingResponse.message = "RDV Rejeté";
          this.addingSuccess = !this.addingSuccess;
          setTimeout(() => {
            this.addingSuccess = !this.addingSuccess;
              this.$store.dispatch("init_userVisite");
              console.log("populase");
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

      this.closeRejectVisite();
    },
    closeRejectVisite() {
      this.dialogReject = false;
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
  margin-bottom: 5vh!important;
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
.updateForm2 {
  /* background:red; */
  height: 100px!important;
  width: 110%;
}
.updateForm {
  height: 350px;
  overflow-y: scroll;
}
.updateForm2 {
  height: 250px;
  width: 110%;
  overflow-y: scroll;
}
.updateForm2::-webkit-scrollbar {
  width: 20px;
}
.updateForm2::-webkit-scrollbar-track {
  background: rgb(255, 255, 255);
}

.updateForm2::-webkit-scrollbar-thumb {
  background-color: var(--main-green-color);
  border-radius: 30px;
  border: 7px solid rgb(255, 255, 255);
}

.updateForm2 .col-lg-12,
.col-md-12 {
  padding-bottom: 0px;
  padding-top: 0px;
}

.ReportForm{
  height: 200px;
  /* overflow-y: clip; */
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
