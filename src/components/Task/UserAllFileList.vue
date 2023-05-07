<template>
  <div class="TheBoxBody">
     <!-- SHOW DIALOG -->
     <v-dialog v-model="dialogProjet" max-width="370">
      <v-card>
        <v-card-text>
          <v-container class="showDialog">
            <div class="imgAndTitle">
              <img src="@/assets/icone/tasks.png" alt="" srcset="" />
            </div>
            <div class="statElment">
              <div>
                <h5>DEBUT</h5>
                <h4>2023-02-12</h4>
              </div>
            </div>
            <div class="statElment">
              <div>
                <h5>FIN</h5>
                <h4>2023-05-12</h4>
              </div>
            </div>
            <div class="statElment">
              <div>
                <h5>DESCRIPTION</h5>
                <h4 style="text-align:justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis odit ea quo velit voluptatibus? Debitis incidunt, voluptatum est corporis, fugiat sapiente dolorem eaque iure hic aut eligendi facere nesciunt quisquam.</h4>
              </div>
            </div>
            
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="12" lg="12" class="box">
          <div class="stationListboxWrapper">
            <v-data-iterator
              :items="AllUserSharefiles"
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
                      dense
                      solo
                      height="50"
                      hide-details
                      prepend-inner-icon="mdi-search"
                      label="Rechercher"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="2" lg="2"></v-col>
                </v-row>

                <!-- PRODUCT DETAILS MODAL TEMPLATE FOR EACH PRODUCT -->
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
                          <embed :src="`${axios.defaults.baseURL}/uploads/fichier/${editedItem.fichier}`" width="100%" height="670px"/>
                        </v-row>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </v-dialog>
                <!-- END PRDUCT DETAILS MODAL TEMPLATE FOR EACH PRODUCT -->
              </template>

              <template v-slot:default="props">
                <v-row>
                  <v-col
                    v-for="item in props.items"
                    :key="item.name"
                    cols="12"
                    md="2"
                    lg="2"
                  >
                    <div class="InvBox" @click="showItem(item)">
                      <div>
                        <v-icon color="mainBlueColor">mdi-file-document</v-icon>
                        <p>{{ item.intule }}</p>
                        <p>{{ item.created_at }}</p>
                        <div class="authorBox">
                          <img v-if="editedItem.avatar" :src="`${axios.defaults.baseURL}/uploads/user/profil/${item.avatar}`"/>
                          <img v-if="!editedItem.avatar" src="@/assets/img/avatarProfil.jpg" alt="" srcset="" />
                          <p>{{item.nom}} {{item.prenoms}}</p>
                        </div>
                        <!-- <div class="fileAction" style="padding-bottom:10px">
                          <v-btn icon color="mainBlueColor" @click.stop="openDialog(item)">
                            <v-icon color="mainBlueColor" style="font-size:20px">mdi-file-download</v-icon>
                          </v-btn>
                          <v-btn icon color="mainBlueColor" @click.stop="openDialog(item)">
                            <v-icon color="mainBlueColor" style="font-size:20px">mdi-file-eye</v-icon>
                          </v-btn>
                        </div> -->
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
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "UserAllFileList",

  components: {
  },

  data: () => ({
    
    // For the list dialog
    // dialog: true,
    selectedItem: {},
    /* FOR DATA ITERATOR */
    itemsPerPageArray: [4, 8, 12],
    search: "",
    filter: {},
    sortDesc: false,
    page: 1,
    itemsPerPage: 8,
    sortBy: "name",
    keys: ["id", "name", "date", "heure"],
    items: [
      {
        name: "Projcedure de recrutement",
        date: "21-01-2021",
        heure: "09:00",
        details: {
          vendus: 30,
          aVendre: 45,
          restant: 15,
          annules: 5,
          gains: 150000,
        },
      },
      {
        name: "MINO-Trans",
        date: "01-01-2021",
        heure: "09:00",
        details: {
          vendus: 45,
          aVendre: 45,
          restant: 0,
          annules: 5,
          gains: 160000,
        },
      },
      {
        name: "Strategie de communication",
        date: "25-03-2021",
        heure: "09:00",
        details: {
          vendus: 30,
          aVendre: 20,
          restant: 10,
          annules: 0,
          gains: 350000,
        },
      },
      {
        name: "Deploiement MINO-Trans",
        date: "25-03-2021",
        heure: "09:00",
        details: {
          vendus: 30,
          aVendre: 45,
          restant: 15,
          annules: 5,
          gains: 150000,
        },
      },
      {
        name: "Protocol de sécurité",
        date: "25-04-2021",
        heure: "09:00",
        details: {
          vendus: 30,
          aVendre: 45,
          restant: 15,
          annules: 5,
          gains: 150000,
        },
      },
      {
        name: "Site web Blooraid",
        date: "25-03-2021",
        heure: "09:00",
        details: {
          vendus: 30,
          aVendre: 45,
          restant: 15,
          annules: 5,
          gains: 150000,
        },
      },
      {
        name: "Strategie publicitaire",
        date: "25-03-2021",
        heure: "09:00",
        details: {
          vendus: 30,
          aVendre: 45,
          restant: 15,
          annules: 5,
          gains: 150000,
        },
      },
      {
        name: "Politique de recrutement",
        date: "15-02-2021",
        heure: "09:00",
        details: {
          vendus: 30,
          aVendre: 45,
          restant: 15,
          annules: 5,
          gains: 150000,
        },
      },
      {
        name: "Structuration des données",
        date: "25-03-2021",
        heure: "09:00",
        details: {
          vendus: 30,
          aVendre: 45,
          restant: 15,
          annules: 5,
          gains: 150000,
        },
      },
      {
        name: "Projet KitKat",
        date: "25-03-2021",
        heure: "09:00",
        details: {
          vendus: 30,
          aVendre: 45,
          restant: 15,
          annules: 5,
          gains: 150000,
        },
      },
    ],
     items2: [
      {
        name: "CREATION DE LOT DE CONSOLATION ",
        date: "21-01-2021",
        heure: "09:00",
        details: {
          vendus: 30,
          aVendre: 45,
          restant: 15,
          annules: 5,
          gains: 150000,
        },
      },
      {
        name: "MINO-Trans",
        date: "01-01-2021",
        heure: "09:00",
        details: {
          vendus: 45,
          aVendre: 45,
          restant: 0,
          annules: 5,
          gains: 160000,
        },
      },
      {
        name: "Politique de recrutement",
        date: "15-02-2021",
        heure: "09:00",
        details: {
          vendus: 30,
          aVendre: 45,
          restant: 15,
          annules: 5,
          gains: 150000,
        },
      },
      {
        name: "Structuration des données",
        date: "25-03-2021",
        heure: "09:00",
        details: {
          vendus: 30,
          aVendre: 45,
          restant: 15,
          annules: 5,
          gains: 150000,
        },
      },
      {
        name: "Projet KitKat",
        date: "25-03-2021",
        heure: "09:00",
        details: {
          vendus: 30,
          aVendre: 45,
          restant: 15,
          annules: 5,
          gains: 150000,
        },
      },
    ],

    // FOR PROJECT DETAILS
    fileShowDialog:false,
    // POUR VOIR
    editedItem: {},

    // FOR STAT
    series: [
      {
        // name: 'series1',
        // data: [31, 40, 28, 51, 42, 109,31, 40, 28, 70, 30, 1]
      },
    ],
    chartOptions: {
      chart: {
        id: "FirstChart",
        type: "bar",
        sparkline: {
          enabled: true,
        },
      },
      // dataLabels: {
      //     enabled: false
      // },
      colors: ["#3e886d"],
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Aug",
          "Sep",
          "Oct",
        ],
      },
      // markers: {
      //     size: 4,
      //     colors: ['#4c5d70'],
      //     strokeColor: '#FFF',
      //     strokeWidth: 2,
      //   },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          gradientToColors: ["#4c5d70"],
          shadeIntensity: 1,
          type: "horizontal",
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100],
        },
      },
    },
  }),

  mounted() {
    setTimeout(() => {
      this.updateChart();
      this.showChart = true;
    }, 500);
  },

  computed: {
    ...mapGetters(["AllUserSharefiles"]),

    numberOfPages() {
      return Math.ceil(this.AllUserSharefiles.length / this.itemsPerPage);
    },
  },

  created() {
    this.$store.dispatch("init_all_user_share_file")

    this.new_file.auteur = localStorage.getItem("user-id");
  },

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
        // ------------------------
    // Show File
    // ------------------------
    showItem(item) {
      this.editedItem = Object.assign({}, item);
      this.fileShowDialog = true;
      axios({ url: "/api/v1/users/increment_acces_number/"+this.editedItem.id_autorisation, data: this.editedItem, method: "PUT" })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          this.VisiteaAddingResponse = error.message;
          console.error("There was an error!", error);
        });
    },
    // ------------------------
    // DATA
    // ------------------------
    
  },
};
</script>

<style scoped>
.bodyBox {
  height: inherit;
}

.statboxWrapper {
  padding-top: 10px;
  /* background: white; */
  border-radius: 10px;
  height: 56.5vh;
}
.statboxWrapper h4 {
  margin-left: 10px;
}

.statboxWrapper div {
  height: 94.5%;
}

.stationListboxWrapper {
  /* background: white; */
  border-radius: 10px;
  /* height: 53vh; */
  padding: 15px;
}

.v-input--selection-controls {
  margin-top: 10px;
  padding-top: 4px;
}

.InvBox {
  /* height: 130px; */
  border-radius: 10px;
  background: white;
  line-height: 14px;
  /* padding-left: 30px; */
  color: white;
  display: flex;
  justify-content: center;
  cursor: pointer;
}
/*  */

.price {
  padding-top: 15px;
  /* width: 40%; */
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 15px;
}
.price > p {
  font-size: 12px;
}
.price .v-icon {
  font-size: 15px;
  color: var(--Important-font-color);
}

.InvBox div:first-child {
  width: 70%;
  display: flex;
  flex-direction: column;
  /* background-color:red; */
  align-items: center;
  justify-content: center;
  font-size: 8px;
}

.InvBox div:first-child .v-icon {
  margin-top: 20px;
  font-size: 50px;
  color:white;
}
.fileAction {
  margin-top: -20px;
}
.InvBox div:first-child p:nth-child(2) {
  font-size: 10px;
  text-align:center;
  font-weight: bold;
  color: var(--Important-font-color);;
  
}
.InvBox div:first-child p:nth-child(3) {
  margin-top: -8px;
  color: var(--Important-font-color);;

}

.authorBox{
  height: 25px;
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.authorBox img {
  height: 20px;
  width:20px;
  margin-right:7px;
  border-radius: 100px;
  border: solid 2px;
  border-color: var(--main-blue-important);
}
.authorBox p{
  font-size:7px !important;
  line-height: 13px !important;
  font-weight: normal !important;
}

.InvBox2 {
  height: 170px;
  border-radius: 10px;
  background: #60674b;
  line-height: 10px;
  padding-left: 30px;
  color: white;
  display: flex;
  justify-content: space-around;
}
.InvBox2 div:first-child {
  width: 70%;
}
.InvBox2 div:first-child .v-icon {
  margin-top: 20px;
  font-size: 35px;
  color: #35373a;
}
.InvBox2 div:first-child p:nth-child(2) {
  font-size: 30px;
  font-weight: bold;
  color: white;
}
.InvBox2 div:first-child p:nth-child(3) {
  line-height: 15px;
}

/* FOR THE TRAVEL LISTE DIALOG */
.splxoverlay {
  /* width: 50% !important; */
}
.theme--light.v-card {
  background-color: #ffffff;
}


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
</style>
