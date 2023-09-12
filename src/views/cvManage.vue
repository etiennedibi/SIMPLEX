<template>
  <div class="bodyBox">
    <div class="TheBoxBody">
      <div class="sectionTitle">
        <p>Gestion des correspondants</p>
        <v-switch
          inset
          v-model="switch1"
          :label="isdeepSeach"
        ></v-switch>
      </div>
      <v-container fluid class="pouletBr">
        <v-row>
          <v-col cols="12" md="4" lg="4">
            <div class="numberWrapper formBox">
              <v-form ref="form1" class="forme1">
                <v-container fluid class="addcongeAsk">
                  <v-row>
                    <v-col cols="12" md="12" lg="12" >
                       <v-file-input
                        chips
                        height="50"
                         v-model="new_file.cv"
                        :rules="[() => !!new_file.cv]"
                        solo
                        label="Document référent"
                        prepend-icon="mdi-file"
                      ></v-file-input>
                    </v-col>
                    <v-col cols="12" md="12" lg="12">
                      <v-text-field
                        height="50"
                        solo
                        label="Nom complet / Denominantion"
                        background-color="#356eea24"
                        ref="desc"
                        v-model="new_file.nom_stagiaire"
                        :rules="[() => !!new_file.nom_stagiaire]"
                        append-icon="mdi-call-missed"
                        type="text"
                        value=""
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                     <v-col cols="12" md="12" lg="12">
                      <v-text-field
                        height="50"
                        solo
                        label="email"
                        ref="desc"
                        v-model="new_file.email"
                        :rules="[() => !!new_file.email]"
                        append-icon="mdi-call-missed"
                        type="text"
                        value=""
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                     <v-col cols="12" md="12" lg="12">
                      <v-text-field
                        height="50"
                        solo
                        label="Domaine d'activité"
                        background-color="#356eea24"
                        ref="desc"
                        v-model="new_file.profession"
                        :rules="[() => !!new_file.profession]"
                        append-icon="mdi-call-missed"
                        type="text"
                        value=""
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                     <v-col cols="12" md="12" lg="12">
                      <v-text-field
                        height="50"
                        solo
                        label="mots clés séparés par des virgules"
                        ref="desc"
                        v-model="new_file.motscles"
                        append-icon="mdi-call-missed"
                        type="text"
                        value=""
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12" lg="12" style="margin-top:20px">
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
              <cvListe v-if="!switch1"></cvListe>
              <DeepCVList v-if="switch1"></DeepCVList>
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
        Fichier enregistré</v-alert
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
        Echec de l'opération</v-alert
      >
    </transition>
  </div>
</template>


<script>

// import Vue from "vue";
import axios from "axios";
import { mapGetters } from "vuex";
import cvListe from "../components/Administration/cvListe.vue";
import DeepCVList from "../components/Administration/DeepCVList.vue";


export default {
  name: "CVManage",
  components: {
    cvListe,
    DeepCVList,
  },

  data: () => ({

    // FOR DEEP SEACH
    switch1: false,
    // isdeepSeach: "DEEP SEACH",
    extractedText: "poluetr",

    // FOR FORM SENDING
    new_file: {
      motscles:""
    },

    fileAddingResponse: "",
    addingSuccess: false,
    addingfalse: false,

    congeAskcomponentKey1: 0,

    // SHOW FILE
    dialog: true,
    
  }),

  methods: {
    submit1() {
      if (this.$refs.form1.validate()) {
        const formData = new FormData();
          formData.append('nom_stagiaire', this.new_file.nom_stagiaire);
          formData.append('profession', this.new_file.profession);
          formData.append('email', this.new_file.email);
          formData.append('cv', this.new_file.cv);
          formData.append('motscles', this.new_file.motscles);
        console.log(formData);
        axios({ url: "/api/v1/admin/addCV", data: formData, method: "POST" })
        .then((response) => {
          this.fileAddingResponse = response.data;
          console.log(response.data);
          if (this.fileAddingResponse) {
            this.addingSuccess = !this.addingSuccess;
            this.$refs.form1.reset();
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
            this.$store.dispatch("init_all_cv_file")
            }, 3000);
          } else {
            this.addingfalse = !this.addingfalse;
            setTimeout(() => {
              this.addingfalse = !this.addingfalse;
            }, 3000);
          }
        })
        .catch((error) => {
          this.fileAddingResponse = error.message;
          console.error("There was an error!", error);
        });
      }

    },

  },

  computed: {
    ...mapGetters(["Employers"]),

    isdeepSeach() {
      return this.switch1 ? 'DEEP SEACH' : 'HISTORIQUE'
    }
  },

  created() {
    this.$store.dispatch("init_employers")

    this.new_file.auteur = localStorage.getItem("user-id");
    this.new_file.compagnie_id = localStorage.getItem("user-compagnie");
  },
};
</script>

<style scoped>
.sectionTitle {
  margin: 0;
  margin-left: 15px;
  margin-bottom: -5px;
  font-size: 18px;
  font-weight: bold;
  /* background:red; */
  display: flex;
  justify-content: space-between;
}
.numberWrapper {
  height:55vh;
  border-radius: 10px;
  background: white;
}
.formBox{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top:20px;
  /* background-color:red; */
  overflow-x: hidden;
}
.forme1{
  width:100%;
}
/* ,
.middleBox {
  height:58vh;
} */
/* .addcongeAsk {
  height: 55vh;
  background-color:red;
} */

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
    margin-bottom: -25px;
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
