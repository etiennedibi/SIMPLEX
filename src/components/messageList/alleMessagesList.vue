<template>
  <div class="tableWrapperDiv">
    <!-- SHOW DIALOG -->
   <v-dialog v-model="dialog" max-width="370">
      <v-card>
        <v-card-text>
          <v-container class="showDialog">
            <div class="imgAndTitle">
              <v-icon color="mainBlueColor" x-large class="messgaeicon"
                >mdi-bullhorn-outline</v-icon
              >
            </div>
            <div class="statElment Elment2">
              <div>
                <h5 style="margin-bottom:10px">COMMUNIQUE</h5>
                <p>{{ editedItem.contenu_comminuque }}</p>
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

    <!-- EDIT TRAVEL DIALOG -->
    <v-dialog v-model="dialogEdit" max-width="370">
      <v-card>
        <v-card-text>
          <v-container>
            <div class="imgAndTitle  editIMGO">
               <v-icon color="mainBlueColor" large>
                 mdi-bullhorn-outline
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
                        label="Objet"
                        ref="matri"
                        v-model="editedItem.titre"
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
                        v-model="editedItem.contenu_comminuque"
                        clear-icon="mdi-close-circle"
                        rows="5"
                        name="input-7-4"
                        label="Communiqué"
                        class="the-message-area"
                      ></v-textarea>
                    </div>
                </v-row>
              </v-container>
            </form>
          </v-container>
        </v-card-text>

        <v-card-actions style="display:flex;justify-content:space-around">
          <!-- <div style="width:26%"></div> -->
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
                Cette action supprimera ce communiqué<br />
              </div>
              <div class="verificationAction">
                <v-btn
                  color="grey"
                  
                  depressed
                  @click="closeDelete"
                  style="color: white"
                  >Annuler</v-btn
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

    <!-- THE SEACH BAR -->
    <v-row>
      <v-col cols="12" md="5" lg="5">
        <v-text-field
          v-model="search"
          dense
          solo
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
        :items="Messages"
        :search="search"
        :items-per-page="-1"
        hide-default-footer
      >
        <!-- FOR SEE EDIT, DELETE AND SHOW DIALOG -->
        <template v-slot:[`item.actions`]="{ item }">
          <!-- modification avec CESINHIO  a la base on avait v-slot:[item.actions="{ item }"-->
          <v-btn icon color="mainBlueColor" @click="showItem(item)">
              <v-icon small> mdi-eye </v-icon>
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
  name: "allMessageList",
  components: {},

  data: () => ({
    // For the table
    search: "",
    headers: [
      {
        text: "PUBLICATION",
        align: "start",
        sortable: false,
        value: "id",
      },
      { text: "OBJET", value: "titre" },
      { text: "DETAILS", value: "actions", sortable: false },
    ],
    desserts: [
      {
        sernder: "MINO",
        objet: "scipit voluptatibus co orum laudantium ...",
        date: "09:00",
        
      },
      {
        sernder: "CENTRALE",
        objet: "25-03-2021 scipit voluptatibus co orum lalaborum...",
        date: "09:00",
       
      },
      {
        sernder: "VOUS",
        objet: " voluptatibus co orum laudantiljeijopj nzpijpum as...",
        date: "09:00",
        
      },
      {
        sernder: "MINO",
        objet: "scipit voluptatibus co orum laudqjk^fq pqp dantium as...",
        date: "09:00",
        
      },
      {
        sernder: "VOUS",
        objet: "RE:: scipit voluptatibus corrups<opti dum as...",
        date: "09:00",
        
      },
    ],

    // for alerte
    addingSuccess: false,
    addingfalse: false,

    // For Sender detail
    dialog: false,
    editedItem: {
      content: "",
    },

    // For Sender edit
    senderaAddingResponse: "",
    dialogEdit: false,
    editedIndex: -1,

    // For Sender deleted
    dialogDelete: false,
    itemToDelete: "",



    // For message viewing
    viewHasBeenUpdate:false,
  }),

  methods: {
    // ------------------------
    // Show Profil infomation
    // ------------------------
    showItem(item) {
      this.editedItem = Object.assign({}, item);
      this.viewHasBeenUpdate = false
      if ((!item.station_creator_id) && (!this.editedItem.view)) {
        console.log(this.editedItem.id);
        this.$store.dispatch("message_view", this.editedItem.id)
        this.viewHasBeenUpdate = true
      }

      this.dialog = true;
    },

    close() {
      if (this.viewHasBeenUpdate) {
        this.$store.state.MessageListRerender += 1
      }
      this.dialog = false;
    },
    // For table re-render after delete or update an item
    mailResponse() {
      this.close()
      this.$store.state.ResponseTopic = "RE::" + this.editedItem.topic;
      this.$store.state.response_of_id = this.editedItem.id;
    },


     // ------------------------
    // For Communiqué Edited
    // ------------------------
    editItem(item) {
      this.editedIndex = this.Messages.indexOf(item);
      this.editedItem = Object.assign({}, item);
      //  Open the Edit Dialogue
      this.dialogEdit = true;
    },

    editItemConfirm() {
        axios({ url: "/api/v1/admin/update_communique/" + this.editedItem.id, data: this.editedItem, method: "PUT" })
        .then((response) => {
          this.senderaAddingResponse = response.data;
          if (this.senderaAddingResponse) {
            // Modification effectuée
            this.senderaAddingResponse.message = "modification effectuée";
            this.addingSuccess = !this.addingSuccess;
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
              this.$store.dispatch("init_message");
            }, 3000);
          } else if (this.senderaAddingResponse) {
            console.log(
              "des reservations ont datio jà achetés"
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
      this.editedIndex = this.Messages.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.itemToDelete = { id: this.editedItem.id };
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
        axios({ url: "/api/v1/admin/destroy_communique/" + this.editedItem.id, method: "DELETE" })
        .then((response) => {
          this.senderaAddingResponse = response.data;

          if (this.senderaAddingResponse) {
            // Annulation effectuée
            this.senderaAddingResponse.message = "Suppression effectuée";
            this.addingSuccess = !this.addingSuccess;
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
              this.$store.dispatch("init_message");
            }, 3000);
          } else if (!this.senderaAddingResponse) {
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
    ...mapGetters(["Messages"]),
  },

  created() {
    this.$store.dispatch("init_message");
  },
};
</script>

























<style scoped>
.tableWrapperDiv {
  height: 55vh;;
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

/* Show details */
.showDialog{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
