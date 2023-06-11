<template>
  <div class="bodyBox">
    <div class="TheBoxBody">
      <div class="sectionTitle">
        <p>Gestion des CV</p>
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
                        height="60"
                         v-model="new_file.fichier"
                        :rules="[() => !!new_file.fichier]"
                        solo
                        label="Telecharger un CV"
                        prepend-icon="mdi-file"
                      ></v-file-input>
                    </v-col>
                    <v-col cols="12" md="12" lg="12">
                      <v-text-field
                        height="60"
                        solo
                        label="nom du stagiaire"
                        background-color="#356eea24"
                        ref="desc"
                        v-model="new_file.intule"
                        :rules="[() => !!new_file.intule]"
                        append-icon="mdi-call-missed"
                        type="text"
                        value=""
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                     <v-col cols="12" md="12" lg="12">
                      <v-text-field
                        height="70"
                        solo
                        label="mots clés"
                        ref="desc"
                        v-model="new_file.category"
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

    // FOR FORM SENDING
    new_file: {
      auteur: "",
      autorisation: [],
      compagnie_id: "",
    },

    // test:[
    //   {nom:'ali', the_user_id:2},
    //   {nom:'ali', the_user_id:3},
    //   {nom:'ali', the_user_id:4},
    //   {nom:'ali', the_user_id:5},
    //   {nom:'ali', the_user_id:6},
    //   {nom:'ali', the_user_id:7},
    //   {nom:'ali', the_user_id:8},
    //   {nom:'ali', the_user_id:9},
    //   {nom:'ali', the_user_id:10},
    //   {nom:'ali', the_user_id:11},
    //   {nom:'ali', the_user_id:12},
      
    // ],

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
          formData.append('fichier', this.new_file.fichier);
          formData.append('intule', this.new_file.intule);
          formData.append('autorisation', this.new_file.autorisation);
          formData.append('auteur', this.new_file.auteur);
          formData.append('compagnie_id', this.new_file.compagnie_id);

        axios({ url: "/api/v1/users/store_file", data: formData, method: "POST" })
        .then((response) => {
          this.fileAddingResponse = response.data;
          console.log(response.data);
          if (this.fileAddingResponse) {
            this.addingSuccess = !this.addingSuccess;
            this.$refs.form1.reset();
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
            this.$store.dispatch("init_all_user_file")
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
