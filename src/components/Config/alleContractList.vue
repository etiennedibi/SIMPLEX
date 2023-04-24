<template>
  <div class="tableWrapperDiv">
    <!-- DELETE TRAVEL DIALOG -->
    <v-dialog v-model="dialogDelete" max-width="420">
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
                Cette action supprimera le type de contrat  <br />
                <b> {{editedItem.type_contrat}} </b> 
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
    <v-dialog v-model="dialogEdit" max-width="420">
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
                        v-model="editedItem.type_contrat"
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
                        label="Anagramme"
                        maxlength="5"
                        ref="matri"
                        v-model="editedItem.anagramme"
                        append-icon="mdi-alphabetical-variant"
                        type="text"
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
                        background-color="#356eea24"
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
              <v-icon color="mainBlueColor" large>
                 mdi-file-sign
                </v-icon>
            </div>
            <div class="statElment">
              <div>
                <h5>DESCRIPTION</h5>
                <h4 style="text-align:justify">{{ editedItem.description }} 
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
        :items="Contracts"
        :search="search"
        :items-per-page="-1"
        hide-default-footer
      >
        <!-- FOR SEE EDIT, DELETE AND SHOW DIALOG -->
        <template v-slot:[`item.actions`]="{ item }">
          <!-- modification avec CESINHIO  a la base on avait v-slot:[item.actions="{ item }"-->
          <v-btn icon color="mainBlueColor" @click="showItem(item)"
            >
            <v-icon small> mdi-eye </v-icon>
            <!-- <v-icon small v-if="item.activation_state == 1"> mdi-eye </v-icon>
            <v-icon small v-if="item.activation_state == 0" color="error">
              mdi-account-alert
            </v-icon> -->
          </v-btn>
          <v-btn
            :disabled="getCDI(item.type_contrat)"
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
        >{{ senderaAddingResponse.message }}</v-alert
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
        {{ senderaAddingResponse.message }}</v-alert
      >
    </transition>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "alleContractList",
  components: {},

  data: () => ({
    // For the table
    search: "",
    headers: [
      { text: "ANAGRAMME", value: "anagramme" }, 
      {
        text: "TYPE DE CONTRAT",
        align: "start",
        sortable: false,
        value: "type_contrat",
      },
      { text: "DETAILS", value: "actions", sortable: false },
    ],
   

    // for alerte
    addingSuccess: false,
    addingfalse: false,

    // For Sender detail
    dialog: false,
    editedItem: {
      
    },

    // For Sender edit
    senderaAddingResponse: "",
    dialogEdit: false,
    editedIndex: -1,

    // For Sender deleted
    dialogDelete: false,
    itemToDelete: "",
  }),

  methods: {

    // FoR-THE-LIST
    getCDI (item) {
        if (item == "CDI") return true
        else return false
      },
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
      this.editedIndex = this.Contracts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      //  Open the Edit Dialogue
      this.dialogEdit = true;
    },

    editItemConfirm() {
        axios({ url: "/api/v1/admin/update_type_contrat/" + this.editedItem.id, data: this.editedItem, method: "PUT" })
        .then((response) => {
          this.senderaAddingResponse = response.data;
          if (this.senderaAddingResponse) {
            // Modification effectuée
            this.senderaAddingResponse.message = "modification effectuée";
            this.addingSuccess = !this.addingSuccess;
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
              this.$store.dispatch("init_contract");
            }, 3000);
          } else if (this.senderaAddingResponse.message != "success") {
            console.log(
              "dekdk"
            );
            // Modification effectuée
            this.addingfalse = !this.addingfalse;
            setTimeout(() => {
              this.addingfalse = !this.addingfalse;
            }, 3000);
          }
        })
        .catch((error) => {
          this.senderaAddingResponse = error.message;
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
      this.editedIndex = this.Contracts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.itemToDelete = { id: this.editedItem.id };
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
        axios({ url: "/api/v1/admin/destroy_type_contrat/" + this.editedItem.id, method: "DELETE" })
        .then((response) => {
          this.senderaAddingResponse = response.data;

          if (this.senderaAddingResponse) {
            // Annulation effectuée
            this.senderaAddingResponse.message = "Suppression effectuée";
            this.addingSuccess = !this.addingSuccess;
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
              this.$store.dispatch("init_contract");
            }, 3000);
          } else if (this.senderaAddingResponse.message != "success") {
            this.addingfalse = !this.addingfalse;
            setTimeout(() => {
              this.addingfalse = !this.addingfalse;
            }, 3000);
          }
        })
        .catch((error) => {
          this.senderaAddingResponse = error.message;
          console.error("There was an error!", error);
        });

      this.closeDelete();
    },

    closeDelete() {
      this.dialogDelete = false;
    },

  },

  computed: {
    ...mapGetters(["Contracts"]),
  },

  created() {
    this.$store.dispatch("init_contract");
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

/* Show details */
/* Show details */
.showDialog{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.imgAndTitle {
  margin: 15px 0px;
  height: 100px;
  width: 100px;
  border-radius: 100px;
  margin-bottom: 20px;
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
  height:50px;
  width:50px
}


.statElment {
  margin-bottom: 20px;
  display: flex;
  text-align: center;
  /* background-color:red; */
}
.statElment > div {
  /* margin-left: 10px; */
}
.statElment h5 {
  color: var(--main-blue-important);
}

.statusChange {
  display: flex;
  justify-content: center;
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

</style>
