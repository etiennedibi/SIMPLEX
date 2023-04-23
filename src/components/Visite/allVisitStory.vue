<template>
  <div class="tableWrapperDiv">

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
                <h4>{{ editedItem.nom_visiteur }} {{ editedItem.prenoms_visiteur }}</h4>
              </div>
            </div>
            <div class="statElment">
              <div>
                <h5>EMAIL</h5>
                <h4>{{ editedItem.email_visiteur }}</h4>
              </div>
            </div>
            <div class="statElment">
              <div>
                <h5>TELEPHONE</h5>
                <h4>{{ editedItem.contact_visiteur }}</h4>
              </div>
            </div>
            <div class="statElment">
              
              <div>
                <h5>MOTIF</h5>
                <h4 style="text-align:justify">{{ editedItem.objet }}</h4>
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
          height="30"
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
        :items="AllVisitesStorys.visites"
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
          
        </template>
        <template v-slot:[`item.etat_visite`]="{ item }">
          <v-chip style="color:white" small v-if="(item.etat_visite == 'REFUSED')&&(item.auteur_visite == 'Ajouté depuis administration')" color="rgba(255, 0, 0, 0.48)">
            Annulée </v-chip
          >
          <v-chip style="color:white" small v-if="(item.etat_visite == 'REFUSED')&&(item.auteur_visite !== 'Ajouté depuis administration')" color="rgba(255, 0, 0, 0.48)">
            Refusée </v-chip
          >
          <v-chip style="color:white" small v-if="item.etat_visite == 'ACCEPTED'" color="#aeaeae">
            Accepté </v-chip
          >
          <v-chip style="color:white" small v-if="item.etat_visite == 'EN_ATENTE'" color="#aeaeae">
            En attente</v-chip
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

  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "allVisitStory.vue",
  components: {},

  data: () => ({
    // For the table
    search: "",
    headers: [
      {
        text: "NOM",
        align: "start",
        sortable: false,
        value: "nom_visiteur",
      },
      { text: "DATE", value: "date_rdv" },
      { text: "HEURE", value: "heure_rdv" },
      { text: "STATUS", value: "etat_visite" },
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



    // For withdrawal detail
    dialog: false,
    editedItem: {},

 
  }),

  methods: {
    // ------------------------
    // Show Profil infomation
    // ------------------------
    showItem(item) {
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

  
  },

  computed: {
    ...mapGetters(["AllVisitesStorys"]),
  },

  // created() {
  //   this.$store.dispatch("init_allVisite");
  // },
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



</style>
