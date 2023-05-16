<template>
  <div class="tableWrapperDiv">

    <!-- SHOW DIALOG -->
    <v-dialog v-model="dialog" max-width="370">
      <v-card>
        <v-card-text>
          <v-container class="showDialog">
            <div class="imgAndTitle">
              <img src="@/assets/icone/conges.png" alt="" srcset="" />
            </div>
            <div class="statElment">
              <div>
                <h5>DEMANDEUR</h5>
                <h4 style="margin-bottom:20px;font-weight:normal;font-size:12px">{{ editedItem.nom }} {{ editedItem.prenoms }}</h4>
              </div>
            </div>
            <div class="statElment">
              <div>
                <h5>DUREE</h5>
                <h4 style="margin-bottom:20px;font-weight:normal;font-size:12px">{{ editedItem.nbre_jour }} jour(s)</h4>
              </div>
            </div>
            <div class="statElment">
              <div>
                <h5>MOTIF DE DEMANE</h5>
                <h4 style="text-align:justify;font-weight:normal;font-size:12px">{{ editedItem.motif_conge }}</h4>
              </div>
            </div>
            <div class="statElment" v-if="editedItem.etat_demande=='CONGE_ANNULÉ'">
              <div>
                <h5>MOTIF DU REJET DE LA DEMANDE</h5>
                <h4 style="text-align:justify;font-weight:normal;font-size:12px">{{ editedItem.motif_traitement }}
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
        :items="All_conges"
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
          v-if="item.etat_demande == '0'"
          class="statuBtn">
            <div class="status" style="background: #037CB831;">en cours</div>
          </v-btn>
          <v-btn icon color="mainBlueColor" 
          v-if="item.etat_demande == 'CONGE_ACCORDE'"
          class="statuBtn">
            <div class="status" style="background: #0DA36C94; color:white;">accepté</div>
          </v-btn>
          <v-btn icon color="mainBlueColor" 
          v-if="item.etat_demande == 'CONGE_ANNULÉ'"
          class="statuBtn">
            <div class="status" style="background: #FC070794; color:white;">refusé</div>
          </v-btn>
        </template>
      </v-data-table>
    </div>

  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "allCongeStory",
  components: {},

  data: () => ({
    // For the table
    search: "",
    headers: [
      { text: "TYPE", value: "type_conge" },
      {
        text: "DATE DEBUT",
        align: "start",
        sortable: true,
        value: "date_debut",
      },
      { text: "DATE FIN", value: "date_fin" },
      { text: "PLUS", value: "actions", sortable: false },
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
    ...mapGetters(["All_conges"]),
  },

  created() {
    this.$store.dispatch("init_all_conge");
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
.statuBtn{
  margin-left: 30px;
}
.status{
  display:inline-block;
  padding: 5px;
  border-radius:50px;
  font-size:8px;
  font-weight: bold
}

.theSeachBar {
  /* margin-left: 50px; */
  margin-bottom: 10px;
}





</style>
