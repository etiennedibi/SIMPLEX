<template>
  <div class="bodyBox">
    <div class="TheBoxBody ForTravelDeclaration">
      <p class="sectionTitle">Liste des employés</p>
      <v-row>
        <v-col cols="12" md="12" lg="12">
           <div class="stationListboxWrapper">
            <v-data-iterator
              :items="items"
              :items-per-page.sync="itemsPerPage"
              :page="page"
              :search="search"
              :sort-by="sortBy.toLowerCase()"
              :sort-desc="sortDesc"
              hide-default-footer
            >
              <template v-slot:header>
                <v-row>
                  <v-col cols="12" md="4" lg="4">
                    <v-text-field
                      v-model="search"
                      height="50"
                      solo
                      hide-details
                      prepend-inner-icon="mdi-search"
                      label="Rechercher"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="2" lg="2"></v-col>
                </v-row>

                <!-- PRODUCT DETAILS MODAL TEMPLATE FOR EACH PRODUCT -->
                <!-- <v-dialog
                  v-model="dialog"
                  transition="dialog-bottom-transition"
                  width="1200"
                  overlay-color="black"
                  overlay-opacity="0.8"
                  mainGreenColor
                >
                  <v-card tile>
                    <v-card-text>
                      <v-container>
                        <v-row class="detailsTemplate">
                          <MinoOneTravelCompany></MinoOneTravelCompany>
                        </v-row>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </v-dialog> -->
                <!-- END PRDUCT DETAILS MODAL TEMPLATE FOR EACH PRODUCT -->
              </template>

              <template v-slot:default="props">
                <v-row>
                  <v-col
                    v-for="item in props.items"
                    :key="item.name"
                    cols="12"
                    md="3"
                    lg="3"
                  >
                    <div
                      :class="getClass(item.details.vendus)"
                      @click="openDialog(item)"
                    >
                      <div>
                        <img src="@/assets/img/team2.jpg" alt="" srcset="">
                        <p>{{ item.name }}</p>
                        <p>{{ item.post }}</p>
                      </div>
                      <div class="price">
                        <v-icon>mdi-folder-eye</v-icon>
                        <v-icon>mdi-folder-edit</v-icon>
                        <v-icon>mdi-redo</v-icon>
                        <v-icon>mdi-archive-arrow-down</v-icon>
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </template>

              <template v-slot:footer>
                <v-row class="mt-2" align="center" justify="center">
                  <v-spacer></v-spacer>

                  <span class="mr-4 grey--text">
                    Page {{ page }} sur {{ numberOfPages }}
                  </span>
                  <v-btn
                    fab
                    dark
                    color="mainBlueColor "
                    class="mr-1"
                    @click="formerPage"
                  >
                    <v-icon>mdi-chevron-left</v-icon>
                  </v-btn>
                  <v-btn
                    fab
                    dark
                    color="mainBlueColor "
                    class="ml-1"
                    @click="nextPage"
                  >
                    <v-icon>mdi-chevron-right</v-icon>
                  </v-btn>
                </v-row>
              </template>
            </v-data-iterator>
          </div>
        </v-col>
        
      </v-row>
    </div>
  </div>
</template>

<script>
// import Vue from "vue";
import { mapGetters } from "vuex";

export default {
  name: "StaffList",
  components: {},

  data: () => ({
    row: "check",
    DayType: true,

    /* FOR DATA ITERATOR */
    itemsPerPageArray: [4, 8, 12],
    search: "",
    filter: {},
    sortDesc: false,
    page: 1,
    itemsPerPage: 8,
    sortBy: "name",
    keys: ["id", "name", "date", "post"],
    items: [
      {
        name: "Frozen ",
        date: "21-01-2021",
        post: "dev Full stack",
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
        post: "chef projet",
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
        post: "directeur general",
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
        post: "Secretaire",
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
        post: "commercial",
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
        post: "dev front-end",
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
        post: "dev front-end",
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
        post: "dev front-end",
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
        post: "dev front-end",
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
        post: "UI/UX Designer",
        details: {
          vendus: 30,
          aVendre: 45,
          restant: 15,
          annules: 5,
          gains: 150000,
        },
      },
    ],

    
  }),

  methods: {
    /* FOR DIFFERENCIATION BETWEEN PRODUCT */
    getClass(quantity) {
      if (quantity <= 35) return "InvBox";
      else return "InvBox2";
    },
    /* FOR DATA ITERRATOR */
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },

    /* FOR ITEM DIALOG OPEN */
    openDialog(item) {
      this.selectedItem = Object.assign({}, item);
      this.$store.state.OneSTation = this.selectedItem.id;

      this.$store.state.forceRdeDeclared += 1;

      this.dialog = !this.dialog;
    },

   
  },

  computed: {
    ...mapGetters(["Analytics"]),
  },

  created() {
    this.newTravel_1.company_id = localStorage.getItem("user-station");
    this.newTravel_1.user_id = localStorage.getItem("user-id");
  },
};
</script>

<style scoped>
/* .TheBoxBody{
    height: 60vh;
   
} */

.ForTravelDeclaration {
  /* background: red; */
}

.sectionTitle {
  margin: 0;
  margin-left: 15px;
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: bold;
  /* text-align: start; */
}

/* .ForTravelDeclaration > div:nth-child(2){
  border-bottom: solid 0.5px var(--font-color);
  margin: 0 45px;
} */

/* .v-form{
  padding: 0 35px;
} */

.lolplp {
  background: white;
  border-radius: 10px;
  padding: 20px;
}

.col-lg-4,
.col-md-4 {
  padding-bottom: 0px;
}





.stationListboxWrapper {
  background: transparent;
  border-radius: 10px;
  /* height: 53vh; */
  padding: 15px;
}

.InvBox {
  height: 170px;
  border-radius: 10px;
  background: white;
  line-height: 14px;
  padding-left: 30px;
  color: var(--Important-font-color);
  display: flex;
  justify-content: space-around;
}

.price {
  padding-top: 25px;
  width: 40%;
  /* height: 50px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 15px;
  /* background:red; */
}
.price > p {
  font-size: 12px;
}
.price .v-icon {
  margin-bottom: 5px;
  font-size: 15px;
  color: var(--main-blue-important);
}

.InvBox div:first-child {
  width: 70%;
}

.InvBox div:first-child img {
  margin-top: 30px;
  height: 50px;
  width:50px;
  border-radius: 100px;
  border: solid 3px;
  border-color: var(--main-blue-important) var(--main-white-color);
}
.InvBox div:first-child p:nth-child(2) {
  font-size: 20px;
  margin-bottom: -5px;
  font-weight: bold;
  color: var(--Important-font-color);
}
.InvBox div:first-child p:nth-child(3) {
  font-size: 15px;
  color: var(--Important-font-color);
}

.InvBox2 {
  height: 170px;
  border-radius: 10px;
  background: var(--main-blue-important);
  line-height: 10px;
  padding-left: 30px;
  color: white;
  display: flex;
  justify-content: space-around;
}
.InvBox2 div:first-child {
  width: 70%;
}
.InvBox2 div:first-child img {
  margin-top: 30px;
  height: 50px;
  width:50px;
  border-radius: 100px;
  border: solid 3px;
  border-color: var(--main-white-color);
}
.InvBox2 div:first-child p:nth-child(2) {
  font-weight: bold;
  color: white;
  font-size: 20px;
  margin-bottom: -5px;
}
.InvBox2 div:first-child p:nth-child(3) {
  line-height: 15px;
}
.InvBox2 .price .v-icon {
  font-size: 18px;
  color:white;
}

/* FOR THE TRAVEL LISTE DIALOG */
.splxoverlay {
  width: 50% !important;
}
.theme--light.v-card {
  background-color: #ffffff00;
}





/*++++++++++++++++
===> MEDIUM Large tablet to laptop	960px > < 1264px*<===
+++++++++++++++++*/
@media screen and (min-width: 960px) and (max-width: 1100px){
  .InvBox {
    height: 170px;
    border-radius: 10px;
    background: var(--main-important-color);
    padding-left: 5px;
  }
  .price {
    padding-top: 25px;
    width: 100%;
    z-index: 15px;
  }
  .price > p {
    font-size: 10px;
  }
}
/*-------END------------*/



















@media (min-width: 960px) {
  .col-md-6 {
    height: 90px;
  }
}
</style>
