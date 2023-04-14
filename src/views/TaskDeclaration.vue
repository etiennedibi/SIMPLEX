<template>
  <div class="bodyBox">
    <div class="TheBoxBody">
      <p class="sectionTitle">
        CREATION DE TÂCHE

        <!-- CREATE PROJET DIALOG -->
        <v-dialog v-model="dialogCreate" max-width="420">
          <v-card>
            <v-card-text>
              <v-container>
                <div class="imgAndTitle  editIMGO">
                  <v-icon color="mainBlueColor" large>
                    mdi-text-box
                    </v-icon>
                </div>
                <form class="updateForm">
                  <v-container fluid>
                    <v-row>
                      <v-col cols="12" md="11" lg="11">
                          <v-text-field
                            height="60"
                            style="margin-bottom:-5px"
                            solo
                            label="Titre"
                            ref="matri"
                            v-model="new_project.title"
                            type="text"
                            value=""
                            persistent-hint
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="11" lg="11">
                          <v-text-field
                            height="60"
                            style="margin-bottom:-5px"
                            solo
                            label="Denomination"
                            ref="matri"
                            v-model="new_project.start_at"
                            type="date"
                            value=""
                            prefix="Debut : "
                            persistent-hint
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" md="11" lg="11">
                          <v-text-field
                            height="60"
                            style="margin-bottom:-5px"
                            solo
                            label="Denomination"
                            ref="matri"
                            v-model="new_project.finish_at"
                            type="date"
                            value=""
                            prefix="Fin : "
                            persistent-hint
                            required
                          ></v-text-field>
                        </v-col>  
                        <div style="width:92%; padding: 15px 10px 0px 10px">
                          <v-textarea
                            solo
                            clearable
                            v-model="new_project.description"
                            background-color="#356eea24"
                            clear-icon="mdi-close-circle"
                            rows="5"
                            name="input-7-4"
                            label="Description"
                            class="the-message-area"
                          ></v-textarea>
                        </div>
                    </v-row>
                  </v-container>
                </form>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="Titlecolor"
                depressed
                @click="closeCreate"
                style="color: white"
                >Annuler</v-btn
              >
              <v-btn
                color="mainBlueColor"
                depressed
                @click="submit1"
                style="color: white"
                >Enregistrer</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-btn
          small
          depressed
          color="mainBlueColor"
          style="color: white"
          v-on:click="dialogCreate=!dialogCreate"
          >Créer un nouveau projet</v-btn
        >
      </p>
      
      <v-container fluid class="pouletBr">
        <v-row>
          <v-col cols="12" md="4" lg="4">
            <div class="numberWrapper formBox">
              <v-form ref="form1" class="forme1">
                <v-container fluid class="addvisit">
                  <v-row>
                    <v-col cols="12" md="6" lg="6">
                      <v-text-field
                        height="40"
                        solo
                        label="Projet"
                        append-icon="mdi-folder"
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
                        height="40"
                        solo
                        label="Exécutant"
                        append-icon="mdi-account-arrow-right"
                        ref="matri"
                        v-model="new_visit.prenoms_visiteur"
                        type="text"
                        value=""
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                     <v-col cols="12" md="12" lg="12">
                      <v-text-field
                        height="40"
                        solo
                        label="Intitulé"
                        v-model="new_visit.contact_visiteur"
                        append-icon="mdi-subtitles"
                        type="text"
                        value=""
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12" lg="12">
                      <v-text-field
                        height="40"
                        solo
                        label="Delais d'execution"
                        v-model="new_visit.contact_visiteur"
                        append-icon="mdi-clipboard-text-clock-outline"
                        type="text"
                        value=""
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                    <div style="width:100%; padding: 0px 10px 0px 10px">
                      <v-textarea
                        solo
                        clearable
                        background-color="#356eea24"
                        clear-icon="mdi-close-circle"
                        append-icon="mdi-subtitles-outline"
                        rows="5"
                        name="input-7-4"
                        v-model="new_visit.objet"
                        label="Details"
                        class="the-message-area"
                      ></v-textarea>
                    </div>
                    <v-col cols="12" md="8" lg="8">
                      <v-btn
                        medium
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
              <projectTaskReview></projectTaskReview>
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
import projectTaskReview from "../components/Task/projectTaskReview.vue";

export default {
  name: "TaskDeclaration",
  components: {
    projectTaskReview,
  },

  data: () => ({

    

    // CREATE_PROJECT
    dialogCreate:false,

    // FOR FORM SENDING
    new_project: {
    },
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

    },

    closeCreate(){
      this.dialogCreate=false
    }
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
  display: flex;
  justify-content: space-between;
}
.sectionTitle .v-btn{
  margin-right: 15px;
} 
.numberWrapper{
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
.addvisit {
  height: 55vh;
  overflow-y: scroll;
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

/* Edit travel */
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
.editIMGO {
  margin-left: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color:#b71c1c; */
}
.updateForm {
  height: 270px;
  width: 110%;
  overflow-y: scroll;
}
.updateForm::-webkit-scrollbar {
  width: 20px;
}
.updateForm::-webkit-scrollbar-track {
  background: rgb(255, 255, 255);
}

.updateForm::-webkit-scrollbar-thumb {
  background-color: var(--main-green-color);
  border-radius: 30px;
  border: 7px solid rgb(255, 255, 255);
}

.updateForm .col-lg-12,
.col-md-12 {
  padding-bottom: 0px;
  padding-top: 0px;
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
  .col-lg-6 {
    height: 85px;
    margin-bottom: -15px;
  }
  .col-md-6 {
    height: 85px;
    margin-bottom: -15px;
  }
}
/*++++++++++++++++
===> MEDIUM Large tablet to laptop	960px > < 1264px*<===
+++++++++++++++++*/
@media screen and (min-width: 960px) and (max-width: 1264px){
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
