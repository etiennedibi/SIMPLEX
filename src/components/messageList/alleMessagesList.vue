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
            <div class="statElment">
              <div>
                <h5 style="margin-bottom:10px">COMMUNIQUE</h5>
                <h4>{{ editedItem.contenu_comminuque }}</h4>
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
import { mapGetters } from "vuex";

export default {
  name: "allMessageList",
  components: {},

  data: () => ({
    // For the table
    search: "",
    headers: [
      {
        text: "ID",
        align: "start",
        sortable: false,
        value: "id",
      },
      { text: "TITRE", value: "titre" },
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
  margin-bottom: 10px;
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
