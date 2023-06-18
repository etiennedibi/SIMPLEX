<template>
  <div class="bodyBox">
    <div class="TheBoxBody">
      <p class="sectionTitle">Elaborer fiche de paie</p>
      <v-container fluid class="pouletBr">
        <v-row>
          <v-col cols="12" md="3" lg="3">
            <div class="numberWrapper">
              <v-form ref="form1" class="forme1">
                <v-container fluid class="addcongeAsk">
                  <v-row>
                    <v-col cols="12" md="12" lg="12" v-for="(item) in Employers" :key="item.index" style="display:flex; justify-content:center;">
                      <div class="user_box">
                           <img v-if="item.avatar" :src="`${axios.defaults.baseURL}/uploads/user/profil/${item.avatar}`"/>
                          <img v-if="!item.avatar" src="@/assets/img/avatarProfil.jpg" alt="" srcset="" />
                          <div class="user_info">
                            <p>{{item.nom}}</p>
                            <p>{{item.nom_fonction}}</p>
                          </div>
                      </div>
                    </v-col>
                  </v-row>
                  
                </v-container>
              </v-form>
            </div>
          </v-col>
          <v-col cols="12" md="9" lg="9">
            <div class="numberWrapper ">
              <v-form ref="form1">
                <v-container fluid class="PaieformBox">
                  <v-row>
                    <v-col cols="12" md="4" lg="4">
                        <v-text-field
                          solo
                          height="40"
                          ref="dep_date"
                          type="text"
                          label="Nom"
                          persistent-hint
                          append-icon="mdi-account"
                          required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4" lg="4">
                        <v-text-field
                          solo
                          height="40"
                          ref="dep_date"
                          type="text"
                          label="Nom"
                          persistent-hint
                          append-icon="mdi-account"
                          required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4" lg="4">
                        <v-text-field
                          solo
                          height="40"
                          ref="dep_date"
                          type="text"
                          label="Nom"
                          persistent-hint
                          append-icon="mdi-account"
                          required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4" lg="4">
                        <v-text-field
                          solo
                          height="40"
                          ref="dep_date"
                          type="text"
                          label="Nom"
                          persistent-hint
                          append-icon="mdi-account"
                          required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4" lg="4">
                        <v-text-field
                          solo
                          height="40"
                          ref="dep_date"
                          type="text"
                          label="Nom"
                          persistent-hint
                          append-icon="mdi-account"
                          required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4" lg="4">
                        <v-text-field
                          solo
                          height="40"
                          ref="dep_date"
                          type="text"
                          label="Nom"
                          persistent-hint
                          append-icon="mdi-account"
                          required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="4" lg="4">
                        <v-text-field
                          solo
                          height="40"
                          ref="dep_date"
                          type="text"
                          label="Nom"
                          persistent-hint
                          append-icon="mdi-account"
                          required
                        ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
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

export default {
  name: "AddPaie",
  components: {
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
          // console.log(response.data);
          if (this.congeAskaAddingResponse) {
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
    ...mapGetters(["Employers"]),
  },

  created() {
    this.$store.dispatch("init_employers")
    this.$store.dispatch("init_conge");
    this.new_conge_ask.compagnie_id = localStorage.getItem("user-compagnie");
    this.new_conge_ask.id_user = localStorage.getItem("user-id");
    this.new_conge_ask.id_departement = localStorage.getItem("user-department-second");
    // Qaund les departement second n'étaient pas obligatoire
    // if (localStorage.getItem("user-department-second")) {
    //    this.new_conge_ask.id_departement = localStorage.getItem("user-department-second");
    // } else {
    //    this.new_conge_ask.id_departement = localStorage.getItem("user-department");
    // }
   
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

.user_box{
  height:10vh;
  background:#356eea24;
  width:90%;
  border-radius:7px;
  display:flex;
  align-items:center;
  cursor: pointer;
}
.user_box img {
  height: 30px;
  width:30px;
  margin-right:7px;
  margin-left:7px;
  border-radius: 100px;
  border: solid 2px;
  border-color: var(--main-blue-important);
}
.user_info{
  /* background:yellow; */
  height:100%;
  margin-right:7px;
  font-size:8px;
  display:flex;
  flex-direction:column;
  justify-content:center;
}
.user_info > p:nth-child(1){
  font-size:12px;
  line-height:0px;
  margin-bottom:-1px;
  font-weight:bold;
}




/* FOR THE FORM */
.PaieformBox {
  background: white;
  border-radius: 10px;
  padding: 20px;
  height: 55vh;
  overflow-y: auto;
}
.col-lg-4,
.col-md-4 {
  padding-bottom: 0px;
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
    margin-bottom: -10px;
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
