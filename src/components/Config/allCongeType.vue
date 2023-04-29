<template>
  <div class="tableWrapperDiv">
    <!-- DELETE TRAVEL DIALOG -->
    <v-dialog v-model="dialogDelete" max-width="370">
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
                Cette action supprimera le type de congé  <br />
                <b>{{editedItem.type_conge}}</b> 
              </div>
              <div class="verificationAction">
                <v-btn
                  color="grey"
                  
                  depressed
                  @click="closeDelete"
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

    <!-- EDIT TRAVEL DIALOG -->
    <v-dialog v-model="dialogEdit" max-width="370">
      <v-card>
        <v-card-text>
          <v-container>
            <div class="imgAndTitle  editIMGO">
               <v-icon color="mainBlueColor" large>
                 mdi-file-sign
                </v-icon>
            </div>
            <form class="updateForm">
              <v-container fluid>
                <v-row>
                  <v-col cols="12" md="11" lg="11">
                      <v-text-field
                        height="60"
                        style="margin-bottom:-5px"
                        solo
                        label="Denomination"
                        ref="matri"
                        v-model="editedItem.type_conge"
                        type="text"
                        value=""
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>  
                  <v-col cols="12" md="11" lg="11">
                      <v-text-field
                        height="60"
                        style="margin-bottom:-5px"
                        solo
                        background-color="#356eea24"
                        label="Nombre de jours"
                        ref="matri"
                        v-model="editedItem.cota_conge"
                        type="Number"
                        value=""
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col> 
                    <div style="width:92%; padding: 15px 10px 0px 10px">
                      <v-textarea
                        solo
                        clearable
                        v-model="editedItem.description"
                        clear-icon="mdi-close-circle"
                        rows="5"
                        name="input-7-4"
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

    <!-- SHOW DIALOG -->
    <v-dialog v-model="dialog" max-width="370">
      <v-card>
        <v-card-text>
          <v-container class="showDialog">
            <div class="imgAndTitle">
              <v-icon color="mainBlueColor" large>
                 mdi-file-sign
                </v-icon>
            </div>
            <div class="statElment">
              <div>
                <h5>COTA INITIAL</h5>
                <h4 style="margin-bottom:20px;font-weight:normal;font-size:12px">
                  {{editedItem.cota}} Jrs
                </h4>
                <h5>DESCRIPTION</h5>
                <h4 style="text-align:justify;font-weight:normal;font-size:12px">{{ editedItem.description }} 
                </h4>
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
        :items="Conges"
        :search="search"
        :items-per-page="-1"
        hide-default-footer
      >
        <!-- FOR SEE EDIT, DELETE AND SHOW DIALOG -->
        <template v-slot:[`item.actions`]="{ item }">
          <!-- modification avec CESINHIO  a la base on avait v-slot:[item.actions="{ item }"-->
          <v-btn icon color="mainBlueColor" @click="showItem(item)"
            ><v-icon small> mdi-eye </v-icon>
          </v-btn>
          <v-btn
            icon
            color="mainBlueColor"
            @click="editItem(item)"
            ><v-icon small> mdi-lead-pencil </v-icon></v-btn
          >
          <v-btn
            icon
            color="mainBlueColor"
            @click="deleteItem(item)"
            ><v-icon small> mdi-trash-can </v-icon></v-btn
          >
        </template>
        <!-- <template v-slot:[`item.contact`]="{ item }"> 
        <v-icon dense color="mainBlueColor"> mdi-phone </v-icon> <span style="color: mainBlueColor;">{{item.contact}}</span>
        </template> -->
        <template v-slot:[`item.complet_name`]="{ item }">
          <!-- modification avec CESINHIO  a la base on avait v-slot:[item.actions="{ item }"-->
          <v-icon color="mainBlueColor" small> mdi-account </v-icon>
          {{ item.complet_name }}
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
        >{{ congeaAddingResponse.message }}</v-alert
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
        {{ congeaAddingResponse.message }}</v-alert
      >
    </transition>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "allCongeType",
  components: {},

  data: () => ({
    // For the table
    search: "",
    headers: [
      {
        text: "TYPE DE CONTRAT",
        align: "start",
        sortable: false,
        value: "type_conge",
      },
      { text: "QUOTA INITIAL", value: "cota_conge" }, 
      { text: "PLUS", value: "actions", sortable: false },
    ],
     
    // for alerte
    addingSuccess: false,
    addingfalse: false,

    // For conge detail
    dialog: false,
    editedItem: {
      complet_name: "",
      contact: "",
      conveyance: "",
      city: "",
      DeliveryNumber: "",
      created_at: "",
      matriculation: "",
    },

    // For conge edit
    congeaAddingResponse: "",
    dialogEdit: false,
    editedIndex: -1,

    // For conge deleted
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
    // For Profil Edited
    // ------------------------
    editItem(item) {
      this.editedIndex = this.Conges.indexOf(item);
      this.editedItem = Object.assign({}, item);
      //  Open the Edit Dialogue
      this.dialogEdit = true;
    },

    editItemConfirm() {
      console.log(this.editedItem.id);
      
        axios({ url: "/api/v1/admin/update_type_conges/" + this.editedItem.id, data: this.editedItem, method: "PUT" })
        .then((response) => {
          this.congeaAddingResponse = response.data;
          if (this.congeaAddingResponse) {
            // Modification effectuée
            this.congeaAddingResponse.message = "modification effectuée";
            this.addingSuccess = !this.addingSuccess;
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
              this.$store.dispatch("init_conge");
            }, 3000);
          } else if (this.congeaAddingResponse.message != "success") {
            console.log(
              "des reservations ont déjà été faites pour ce voyage, en cas dannulation vous devriez rembourser les tickets déjà achetés"
            );
            // Modification effectuée
            this.addingfalse = !this.addingfalse;
            setTimeout(() => {
              this.addingfalse = !this.addingfalse;
            }, 3000);
          }
        })
        .catch((error) => {
          this.congeaAddingResponse = error.message;
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
      this.editedIndex = this.Conges.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.itemToDelete = { id: this.editedItem.id };
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      axios({ url: "/api/v1/admin/destroy_type_conges/" + this.editedItem.id, method: "DELETE" })
        .then((response) => {
          this.congeaAddingResponse = response.data;

          if (this.congeaAddingResponse) {
            // Annulation effectuée
            this.congeaAddingResponse.message = "suppression effectuée";
            this.addingSuccess = !this.addingSuccess;
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
              this.$store.dispatch("init_conge");
            }, 3000);
          } else if (this.congeaAddingResponse.message != "success") {
            this.addingfalse = !this.addingfalse;
            setTimeout(() => {
              this.addingfalse = !this.addingfalse;
            }, 3000);
          }
        })
        .catch((error) => {
          this.congeaAddingResponse = error.message;
          console.error("There was an error!", error);
        });

      this.closeDelete();
    },

    closeDelete() {
      this.dialogDelete = false;
    },

    
  },

  computed: {
    ...mapGetters(["Conges"]),
  },

  created() {
    this.$store.dispatch("init_conge");
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
  margin-bottom: 10px;
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
  height: 270px;
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



</style>
