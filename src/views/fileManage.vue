<template>
  <div class="bodyBox">
    <div class="TheBoxBody">
      <p class="sectionTitle">Gestion des fichiers</p>
      <v-container fluid class="pouletBr">
        <v-row>
          <v-col cols="12" md="4" lg="4">
            <div class="numberWrapper">
              <v-form ref="form1" class="forme1">
                <v-container fluid class="addcongeAsk">
                  <v-row>
                     <v-col cols="12" md="12" lg="12" style=" margin-bottom:10px" >
                       <v-file-input
                        chips
                        height="80"
                        solo
                        label="choisir un fichier"
                        prepend-icon=""
                      ></v-file-input>
                    </v-col>
                    <v-col cols="12" md="12" lg="12" style=" margin-bottom:10px">
                      <v-select
                        v-model="new_conge_ask.id_type_conge"
                        :items="Conges"
                        item-text="type_conge"
                        item-value="id"
                        multiple
                        label="Ajouter des collaborateurs"
                        solo
                        height="80"
                      >
                      </v-select>
                    </v-col>
                    <v-col cols="12" md="12" lg="12" style=" margin-bottom:10px">
                      <v-text-field
                        height="60"
                        solo
                        label="Nouvelle itutilé du fichier"
                        ref="desc"
                        v-model="new_conge_ask.date_fin"
                        type="text"
                        value=""
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                   
                    <v-col cols="12" md="12" lg="12">
                      <v-btn
                        large
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
          <v-col cols="12" md="8" lg="8">
            <div class="numberWrapper ">
              <UserFileList
              ></UserFileList>
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
        color="mainGreenColor"
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
import UserFileList from "../components/Task/UserFileList.vue";

export default {
  name: "fileManage",
  components: {
    UserFileList,
  },

  data: () => ({
    // FOR FORM SENDING
    new_conge_ask: {
      denomination: "",
      min_weight: "",
      max_weight: "",
      min_size: "",
      max_size: "",
      unit_price: "",
      description: "",
      company_id: "",
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
        axios({ url: "congeAsk/add", data: this.new_conge_ask, method: "POST" })
        .then((response) => {
          this.congeAskaAddingResponse = response.data;
          console.log(response.data);
          if (this.congeAskaAddingResponse.message == "success") {
            this.addingSuccess = !this.addingSuccess;
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
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
    // this.new_conge_ask.company_id = localStorage.getItem("user-station");
  },
};
</script>

<style scoped>
.sectionTitle {
  margin: 0;
  margin-left: 15px;
  margin-bottom: 5px;
  font-size: 18px;
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
