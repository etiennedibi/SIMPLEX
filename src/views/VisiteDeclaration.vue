<template>
  <div class="bodyBox">
    <div class="TheBoxBody">
      <p class="sectionTitle">Gestion des RDV</p>
      <v-container fluid class="pouletBr">
        <v-row>
          <v-col cols="12" md="5" lg="5">
            <div class="numberWrapper">
              <v-form ref="form1" class="forme1">
                <v-container fluid class="addvisit">
                  <v-row>
                    <v-col cols="12" md="6" lg="6">
                      <v-text-field
                        small
                        solo
                        label="Nom"
                        append-icon="mdi-account-arrow-right"
                        ref="matri"
                        v-model="new_visit.nom_visiteur"
                        type="text"
                        value=""
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                     <v-col cols="12" md="6" lg="6">
                      <v-text-field
                        height="30"
                        solo
                        label="Prenoms"
                        append-icon="mdi-account-arrow-right"
                        ref="matri"
                        v-model="new_visit.prenoms_visiteur"
                        type="text"
                        value=""
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                     <v-col cols="12" md="6" lg="6">
                      <v-text-field
                        height="30"
                        solo
                        label="Telephone"
                        v-model="new_visit.contact_visiteur"
                        append-icon="mdi-phone"
                        type="text"
                        value=""
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="6">
                      <v-text-field
                        height="30"
                        solo
                        label="email"
                        append-icon="mdi-at"
                        ref="desc"
                        v-model="new_visit.email_visiteur"
                        type="text"
                        value=""
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                   
                    <v-col cols="12" md="6" lg="6">
                      <v-text-field
                        height="30"
                        background-color="#356eea24"
                        solo
                        v-model="new_visit.date_rdv"
                        ref="transport"
                        type="date"
                        label="Date du RDV"
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                     <v-col cols="12" md="6" lg="6">
                      <v-text-field
                        height="30"
                        solo
                        background-color="#356eea24"
                        v-model="new_visit.heure_rdv"
                        ref="transport"
                        type="time"
                        label="heure"
                        persistent-hint
                        append-icon="mdi-clock-time-eight"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="6" lg="6">
                      <div style="display:flex; justify-content:space-around">
                        <p>Durée de la visite</p> 
                        <v-icon>mdi-arrow-right</v-icon>
                      </div>
                    </v-col>
                    <v-col cols="12" md="6" lg="6">
                      <v-text-field
                        height="30"
                        solo
                        background-color="#356eea24"
                        v-model="new_visit.heure_rdv"
                        ref="transport"
                        type="time"
                        label="heure"
                        persistent-hint
                        append-icon="mdi-timer"
                        required
                      ></v-text-field>
                    </v-col>
                    <div style="width:100%; padding: 15px 10px 0px 10px">
                      <v-textarea
                        solo
                        clearable
                        background-color="#356eea24"
                        clear-icon="mdi-close-circle"
                        rows="3"
                        name="input-7-4"
                        v-model="new_visit.objet"
                        label="objet"
                        class="the-message-area"
                      ></v-textarea>
                    </div>
                    <v-col cols="12" md="8" lg="8">
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
          <v-col cols="12" md="7" lg="7">
            <div class="numberWrapper ">
              <undoVisitList></undoVisitList>
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
        RDV enregistré</v-alert
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
        Une information est male renseignée</v-alert
      >
    </transition>
  </div>
</template>

<script>

// import Vue from "vue";
import axios from "axios";
import undoVisitList from "../components/Visite/undoVisitList.vue";

export default {
  name: "VisiteDeclaration",
  components: {
    undoVisitList,
  },

  data: () => ({
    // FOR FORM SENDING
    new_visit: {
      nom_visiteur: "",
      prenoms_visiteur: "",
      email_visiteur: "",
      contact_visiteur: "",
      date_rdv: "",
      heure_rdv: "",
      objet: "",
      id_user_employer: 0,
    },

    visitaAddingResponse: "",
    addingSuccess: false,
    addingfalse: false,

    visitcomponentKey1: 0,

    // FOR ANALYTICS
    // theNumbervisit = 0,
  }),

  methods: {
    submit1() {
        axios({ url: "rdv/demande_rdv", data: this.new_visit, method: "POST" })
        .then((response) => {
          this.visitaAddingResponse = response.data;
          console.log(this.visitaAddingResponse);
          if (this.visitaAddingResponse) {
            this.addingSuccess = !this.addingSuccess;
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
              // this.forceRerender1();
              this.$store.dispatch("init_userVisite")
            }, 3000);
          } else {
            this.addingfalse = !this.addingfalse;
            setTimeout(() => {
              this.addingfalse = !this.addingfalse;
            }, 3000);
          }
        })
        .catch((error) => {
          this.visitaAddingResponse = error.message;
          console.error("There was an error!", error);
        });

      this.$refs.form1.reset();
    },

    
  },

  computed: {
    
  },

  created() {
    this.new_visit.company_id = localStorage.getItem("user-station");
    this.new_visit.id_user_employer = localStorage.getItem("user-id");

  },
};
</script>

<style scoped>
.sectionTitle {
  margin: 0;
  margin-bottom: 5px;
  margin-left: 15px;
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
.addvisit {
  height: 55vh;  
  overflow-y:scroll
  /* height: 57vh; */
  /* background-color:red; */
}
.addvisit::-webkit-scrollbar {
  width: 7px;
}
.addvisit::-webkit-scrollbar-track {
  background: rgb(255, 255, 255);
}

.addvisit::-webkit-scrollbar-thumb {
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

@media (min-width: 930px) {
  .col-lg-6 {
    height: 85px;
    margin-bottom: -15px;
  }
  .col-md-6 {
    height: 75px;
    margin-bottom: -15px;
  }
}
/*++++++++++++++++
===> MEDIUM Large tablet to laptop	930px > < 1264px*<===
+++++++++++++++++*/
@media screen and (min-width: 930px) and (max-width: 1264px){
  .addvisit {
    height: 57vh;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .v-btn:not(.v-btn--round).v-size--large {
    width: 100%;
  } 
}
</style>
