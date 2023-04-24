<template>
  <div class="bodyBox">
    <div class="TheBoxBody">
      <p class="sectionTitle">Demande de congé</p>
      <v-container fluid class="pouletBr">
        <v-row>
          <v-col cols="12" md="3" lg="3">
            <div class="numberWrapper">
              <v-form ref="form1" class="forme1">
                <v-container fluid class="addcongeAsk">
                  <v-row>
                    <v-col cols="12" md="12" lg="12" style="display:flex; justify-content:center; margin-bottom:-25px">
                      <v-select
                        v-model="new_conge_ask.id_type_conge"
                        :rules="[() => !!new_conge_ask.id_type_conge]"
                        :items="Conges"
                        item-text="type_conge"
                        item-value="id"
                        label="Type de congé"
                        solo
                      >
                      </v-select>
                    </v-col>
                     <v-col cols="12" md="12" lg="12">
                      <v-text-field
                        height="40"
                        background-color="#356eea24"
                        solo
                        label="Date de début"
                        v-model="new_conge_ask.date_debut"
                        :rules="[() => !!new_conge_ask.date_debut]"
                        ref="total_name"
                        type="date"
                        value=""
                        prefix="Debut : "
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12" lg="12">
                      <v-text-field
                        height="40"
                        solo
                        label="Date de fin"
                        ref="desc"
                        v-model="new_conge_ask.date_fin"
                        :rules="[() => !!new_conge_ask.date_fin]"
                        type="date"
                        value=""
                        prefix="Fin : "
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                   
                    <v-col cols="12" md="12" lg="12">
                      <v-text-field
                        height="40"
                        background-color="#356eea24"
                        solo
                        append-icon="mdi-numeric"
                        v-model="new_conge_ask.nbre_jour"
                        :rules="[() => !!new_conge_ask.nbre_jour]"
                        ref="transport"
                        type="number"
                        maxlength="2"
                        label="Nombre de jours"
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                    <div style="width:100%; padding: 15px 10px 0px 10px">
                      <v-textarea
                        solo
                        clearable
                        clear-icon="mdi-close-circle"
                        v-model="new_conge_ask.motif_conge"
                        rows="3"
                        name="input-7-4"
                        label="Justification"
                        class="the-message-area"
                      ></v-textarea>
                    </div>
                    <v-col cols="12" md="12" lg="12">
                      <v-btn
                        small
                        depressed
                        color="mainBlueColor"
                        style="color: white"
                        v-on:click.prevent="submit1"
                        >Enregistrer</v-btn
                      >
                    </v-col>
                  </v-row>
                  
                </v-container>
              </v-form>
            </div>
          </v-col>
          <v-col cols="12" md="9" lg="9">
            <div class="numberWrapper ">
              <UserCongeList
              ></UserCongeList>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <transition name="slide">
      <v-alert
        v-if="addingSuccess"
        elevation="13"
        type="success"
        max-width="300"
        class="alert"
        color="mainBlueColor"
      >
        Demande effectuée</v-alert
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
        Echec de la demande</v-alert
      >
    </transition>
  </div>
</template>

<script>

// import Vue from "vue";
import axios from "axios";
import { mapGetters } from "vuex";
import UserCongeList from "../components/Conge/UserCongeList.vue";

export default {
  name: "CongeDemande",
  components: {
    UserCongeList,
  },

  data: () => ({
    // FOR FORM SENDING
    new_conge_ask: {
      compagnie_id:"",
      id_user:"",
      id_departement:"",
      },

    congeAskaAddingResponse: "",
    addingSuccess: false,
    addingfalse: false,

    congeAskcomponentKey1: 0,

    // FOR ANALYTICS
    // theNumbercongeAsk = 0,
  }),

  methods: {
    submit1() {
      console.log(this.new_conge_ask);
        axios({ url: "/api/v1/users/store_conge", data: this.new_conge_ask, method: "POST" })
        .then((response) => {
          this.congeAskaAddingResponse = response.data;
          console.log(response.data);
          if (this.congeAskaAddingResponse.code == 200) {
            this.addingSuccess = !this.addingSuccess;
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
              this.$store.dispatch("init_user_conge");
            }, 3000);
          } else {
            this.addingfalse = !this.addingfalse;
            setTimeout(() => {
              this.addingfalse = !this.addingfalse;
            }, 3000);
          }
        })
        .catch((error) => {
          this.congeAskaAddingResponse = error.message;
          console.error("There was an error!", error);
        });
      this.$refs.form1.reset();
    },

  },

  computed: {
    ...mapGetters(["Conges"]),
  },

  created() {
    this.$store.dispatch("init_user_conge");
    this.$store.dispatch("init_conge");
    this.new_conge_ask.compagnie_id = localStorage.getItem("user-compagnie");
    this.new_conge_ask.id_user = localStorage.getItem("user-id");
    this.new_conge_ask.id_departement = localStorage.getItem("user-department");
  },
};
</script>

<style scoped>
.sectionTitle {
  margin: 0;
  margin-left: 15px;
  margin-bottom: 5px;
  font-size: 15px;
  font-weight: bold;
}
.numberWrapper {
  border-radius: 10px;
  background: white;
}
/* ,
.middleBox {
  height:58vh;
} */
.addcongeAsk {
  height: 55vh;
  overflow-y: auto;
  /* background-color:red; */
}
.addcongeAsk::-webkit-scrollbar {
  width: 7px;
}
.addcongeAsk::-webkit-scrollbar-track {
  background: rgb(255, 255, 255);
}

.addcongeAsk::-webkit-scrollbar-thumb {
  background-color: var(--main-green-color);
  border-radius: 30px;
  border: 1px solid rgb(255, 255, 255);
}

/* 
.statWrapper{
    height: 270px;
    border-radius: 10px;
    background: white;
}
.statWrapper1{
    height: 300px;
    border-radius: 10px;
    padding-top: 10px;
    background: white;
}
.statWrapper1 h4{
    margin-left: 10px;
} */

@media (min-width: 960px) {
  .col-md-12 {
    height: 85px;
    margin-bottom: -15px;
  }
}
/*++++++++++++++++
===> MEDIUM Large tablet to laptop	960px > < 1264px*<===
+++++++++++++++++*/
@media screen and (min-width: 960px) and (max-width: 1264px){
  .addcongeAsk {
    height: 57vh;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .v-btn:not(.v-btn--round).v-size--large {
    width: 100%;
  } 
}
</style>
