<template>
  <div class="tableWrapperDiv">

    <!-- BEFORE DELETE WHITHDRAWAL DIALOG -->
    <v-dialog v-model="BeforeDialogDelete" max-width="420">
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
                color="mainGreenColor"
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
    <v-dialog v-model="dialogDelete" max-width="420">
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
                color="mainGreenColor"
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

    <!-- DELETE WHITHDRAWAL ON OCCURENCE  DIALOG -->
    <v-dialog v-model="dialogDeleteOneVariante" max-width="420">
      <v-card>
        <v-card-text>
          <div class="confirmTitle">AVERTISSEMENT !</div>
          <v-container>
            <div class="CancelVerification">
              voulez-vous vraiment supprimer <br />
              cette variante de prix du type de colis <b>{{ editedItem.denomination }} </b> ?
            </div>
            <div class="verificationAction">
              <v-btn
                color="Titlecolor"
                rounded
                depressed
                @click="closeDeleteOnevariante"
                style="color: white"
                >Non</v-btn
              >
              <v-btn
                color="mainGreenColor"
                rounded
                depressed
                @click="deleteItemVarinteConfirm"
                style="color: white"
                >Oui</v-btn
              >
            </div>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- EDIT TRAVEL DIALOG -->
    <v-dialog v-model="dialogEdit" max-width="420">
      <v-card>
        <v-card-text>
          <v-container>
            <div class="imgAndTitle deleteIMG editIMGO">
              <p>MODIFICATION DU TYPE DE COLIS</p>
              <p></p>
            </div>
            <form class="updateForm">
              <v-container fluid>
                <v-row>
                  <v-col cols="12" md="12" lg="12">
                    <v-text-field
                      height="60"
                      solo
                      label="Nature"
                      append-icon="mdi-pen"
                      ref="matri"
                      v-model="editedItem.denomination"
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
                      label="Description"
                      append-icon="mdi-file-document-edit-outline"
                      ref="desc"
                      v-model="editedItem.description"
                      type="text"
                      value=""
                      persistent-hint
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" lg="6">
                    <v-text-field
                      height="60"
                      background-color="#3e886d4a"
                      solo
                      label="Taille min"
                      v-model="editedItem.min_size"
                      append-icon="mdi-arrow-up-down"
                      ref="total_name"
                      type="number"
                      value=""
                      persistent-hint
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" lg="6">
                    <v-text-field
                      height="60"
                      solo
                      append-icon="mdi-arrow-up-down"
                      ref="location"
                      type="number"
                      v-model="editedItem.max_size"
                      value=""
                      label="Taille max"
                      persistent-hint
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" lg="6">
                    <v-text-field
                      height="60"
                      background-color="#3e886d4a"
                      solo
                      append-icon="mdi-weight-kilogram"
                      v-model="editedItem.min_weight"
                      ref="transport"
                      type="number"
                      label="Poids min"
                      persistent-hint
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" lg="6">
                    <v-text-field
                      height="60"
                      solo
                      append-icon="mdi-weight-kilogram"
                      ref="pla_number"
                      type="number"
                      v-model="editedItem.max_weight"
                      label="Poids max"
                      persistent-hint
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="12" lg="12">
                    <v-text-field
                      height="60"
                      solo
                      append-icon="mdi-cash-multiple"
                      ref="cash"
                      type="number"
                      v-model="editedItem.unit_price"
                      label="Prix"
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
            @click="closeEdit"
            style="color: white"
            >Annuler</v-btn
          >
          <v-btn
            color="mainGreenColor"
            rounded
            depressed
            @click="editItemConfirm"
            style="color: white"
            >Enregistrer</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- SHOW DIALOG -->
    <v-dialog v-model="dialog" max-width="400">
      <v-card>
        <v-card-text>
          <v-container>
            <div class="">
              <p>DESCRIPTION</p>
            </div>
            <div class="statElment">
              <div>
                <h3>{{ editedItem.description }}</h3>
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
          <v-btn icon color="mainBlueColor" @click="editItem(item)"
            ><v-icon small> mdi-lead-pencil </v-icon></v-btn
          >
          <v-btn icon color="mainBlueColor" @click="deleteItem(item)"
            ><v-icon small> mdi-account-cancel </v-icon></v-btn
          >
          <v-btn icon color="mainBlueColor" @click="deleteItem(item)"
            ><v-icon small> mdi-redo-variant </v-icon></v-btn
          >
          <v-btn icon color="mainBlueColor" @click="deleteItem(item)"
            ><v-icon small> mdi-account-check </v-icon></v-btn
          >
          <v-btn icon color="mainBlueColor" @click="deleteItem(item)"
            ><v-icon small> mdi-trash-can </v-icon></v-btn
          >
        </template>
        <template v-slot:[`item.unit_price`]="{ item }">
          {{ item.unit_price }} <span style="color: mainBlueColor">frcfa</span>
        </template>
        <template v-slot:[`item.min_weight`]="{ item }">
          <!-- modification avec CESINHIO  a la base on avait v-slot:[item.actions="{ item }"-->
          {{ item.min_weight }}
          <v-icon color="mainBlueColor" small v-if="item.min_weight != null">
            mdi-weight-kilogram
          </v-icon>
        </template>
        <template v-slot:[`item.max_weight`]="{ item }">
          <!-- modification avec CESINHIO  a la base on avait v-slot:[item.actions="{ item }"-->
          {{ item.max_weight }}
          <v-icon color="mainBlueColor" small v-if="item.max_weight != null">
            mdi-weight-kilogram
          </v-icon>
        </template>
        <template v-slot:[`item.min_size`]="{ item }">
          <!-- modification avec CESINHIO  a la base on avait v-slot:[item.actions="{ item }"-->
          {{ item.min_size }}
          <v-icon color="mainBlueColor" small v-if="item.min_size != null">
            mdi-arrow-up-down
          </v-icon>
        </template>
        <template v-slot:[`item.max_size`]="{ item }">
          <!-- modification avec CESINHIO  a la base on avait v-slot:[item.actions="{ item }"-->
          {{ item.max_size }}
          <v-icon color="mainBlueColor" small v-if="item.max_size != null">
            mdi-arrow-up-down
          </v-icon>
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
        color="mainGreenColor"
        >{{ withdrawalaAddingResponse.message }}</v-alert
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
        {{ withdrawalaAddingResponse.message }}</v-alert
      >
    </transition>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "allWithdrawalsList",
  components: {},

  data: () => ({
    // For the table
    search: "",
    headers: [
      {
        text: "NOM",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "DATE", value: "date" },
      { text: "HEURE", value: "post" },
      { text: "DETAILS", value: "actions", sortable: false },
    ],
    items: [
      {
        name: "Frozen Yao Partrick ",
        date: "21-01-2021",
        post: "10:00",
        details: {
          vendus: 30,
          aVendre: 45,
          restant: 15,
          annules: 5,
          gains: 150000,
        },
      },
      {
        name: "Ice cream ",
        date: "01-01-2021",
        post: "10:30",
        details: {
          vendus: 45,
          aVendre: 45,
          restant: 0,
          annules: 5,
          gains: 160000,
        },
      },
      {
        name: "Eclair",
        date: "25-03-2021",
        post: "14:30",
        details: {
          vendus: 30,
          aVendre: 20,
          restant: 10,
          annules: 0,
          gains: 350000,
        },
      },
      {
        name: "Cupcake",
        date: "25-03-2021",
        post: "12:39",
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
        date: "25-04-2021",
        post: "13:40",
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

    // For withdrawal detail
    dialog: false,
    editedItem: {
      denomination: "",
      min_weight: "",
      max_weight: "",
      min_size: "",
      max_size: "",
      unit_price: "",
    },

    // For withdrawal edit
    withdrawalaAddingResponse: "",
    dialogEdit: false,
    editedIndex: -1,

    // For withdrawal deleted
    BeforeDialogDelete:false,
    dialogDelete: false,
    dialogDeleteOneVariante: false,
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
      this.editedIndex = this.Withdrawals.indexOf(item);
      this.editedItem = Object.assign({}, item);
      //  Open the Edit Dialogue
      this.dialogEdit = true;
    },

    editItemConfirm() {
        axios({ url: "withdrawal/update", data: this.editedItem, method: "PUT" })
        .then((response) => {
          this.withdrawalaAddingResponse = response.data;
          if (this.withdrawalaAddingResponse.message == "success") {
            // Modification effectuée
            this.withdrawalaAddingResponse.message = "modification effectuée";
            this.addingSuccess = !this.addingSuccess;
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
              this.forceRerender2();
            }, 3000);
          } else if (this.withdrawalaAddingResponse.message != "success") {
            // Modification effectuée
            this.addingfalse = !this.addingfalse;
            setTimeout(() => {
              this.addingfalse = !this.addingfalse;
            }, 3000);
          }
        })
        .catch((error) => {
          this.withdrawalaAddingResponse = error.message;
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
      this.editedIndex = this.Withdrawals.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.itemToDelete = { id: this.editedItem.withdrawals_id };
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
          "withdrawal/delete/" + this.itemToDelete.id
        )
        .then((response) => {
          this.withdrawalaAddingResponse = response.data;

          if (this.withdrawalaAddingResponse.message == "success") {
            // Annulation effectuée
            this.withdrawalaAddingResponse.message = "Suppression effectuée";
            this.addingSuccess = !this.addingSuccess;
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
              this.forceRerender2();
            }, 3000);
          } else if (this.withdrawalaAddingResponse.message != "success") {
            this.addingfalse = !this.addingfalse;
            setTimeout(() => {
              this.addingfalse = !this.addingfalse;
            }, 3000);
          }
        })
        .catch((error) => {
          this.withdrawalaAddingResponse = error.message;
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
          "withdrawal/deleteOnePrice/" + this.OneVarianteitemToDelete.id
        )
        .then((response) => {
          this.withdrawalaAddingResponse = response.data;

          if (this.withdrawalaAddingResponse.message == "success") {
            // Annulation effectuée
            this.withdrawalaAddingResponse.message = "Suppression effectuée";
            this.addingSuccess = !this.addingSuccess;
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
              this.forceRerender2();
            }, 3000);
          } else if (this.withdrawalaAddingResponse.message != "success") {
            this.addingfalse = !this.addingfalse;
            setTimeout(() => {
              this.addingfalse = !this.addingfalse;
            }, 3000);
          }
        })
        .catch((error) => {
          this.withdrawalaAddingResponse = error.message;
          console.error("There was an error!", error);
        });

      this.closeDeleteOnevariante();
    },

    closeDeleteOnevariante() {
      this.dialogDeleteOneVariante = false;
    },

    // For table re-render after delete or update an item
    forceRerender2() {
      this.$store.state.withdrawalcomponentKey += 1;
    },
  },

  computed: {
    ...mapGetters(["Withdrawals"]),
  },

  created() {
    this.$store.dispatch("init_withdrawal");
  },
};
</script>

<style scoped>
.tableWrapperDiv {
  height: 465px;
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
.imgAndTitle {
  margin: 15px 0px;
  height: 220px;
  width: 330px;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  background: linear-gradient(
      180deg,
      rgb(0 0 0 / 0%),
      rgb(0 0 0 / 19%),
      rgb(0 0 0)
    ),
    url(../../assets/img/pexels-nappy-1058959.jpg);
  background-position: center;
  background-size: cover;
}
.imgAndTitle > p:first-child {
  font-size: 21px;
  font-weight: bold;
  margin: 0px;
  margin-left: 20px;
  color: white;
}
.imgAndTitle > p:last-child {
  font-size: 15px;
  font-weight: bold;
  margin: 0px 0px 10px 20px;
  color: white;
}

.statElment {
  margin-bottom: 15px;
  display: flex;
}
.statElment > div {
  margin-left: 10px;
}
.statElment h2 {
  font-size: 21px;
  color: var(--main-green-color);
}

.statusChange {
  display: flex;
  justify-content: center;
}

/* Edit travel */
.editIMGO {
  margin-bottom: 35px;
  width: 100%;
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

/* Delete travel */
.deleteIMG {
  width: 350px;
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
  /* width: 420px; */
  text-align: center;
}
</style>
