<template>
  <div class="bodyBox">
    <div class="TheBoxBody">
      <p class="sectionTitle">
        MES TÂCHES PERSONNELLES
      </p>
      
      <v-container fluid class="pouletBr">
        <v-row>
          <v-col cols="12" md="4" lg="4">
            <div class="numberWrapper formBox">
              <v-form ref="form1" class="forme1">
                <v-container fluid class="addvisit">
                  <v-row>
                     <v-col cols="12" md="12" lg="12" style="margin-top:3vh;margin-bottom:1vh">
                      <v-text-field
                        height="40"
                        solo
                        label="Intitulé"
                        v-model="new_visit.intitule_tache"
                        :rules="[() => !!new_visit.intitule_tache]"
                        append-icon="mdi-subtitles"
                        type="text"
                        value=""
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12" lg="12" style="margin-bottom:1vh">
                      <v-text-field
                        height="40"
                        solo
                        prefix="Delais d'execution:"
                        v-model="new_visit.delais_execution"
                        :rules="[() => !!new_visit.delais_execution]"
                        type="date"
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
                        v-model="new_visit.details_taches"
                        :rules="[() => !!new_visit.details_taches]"
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
        Enregistrement effectué</v-alert
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
        Echec de l'operation</v-alert
      >
    </transition>
  </div>
</template>

<script>

// import Vue from "vue";
import axios from "axios";
import projectTaskReview from "../components/Task/projectTaskReview.vue";

export default {
  name: "OwnTaskDeclaration.vue",
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

      if (this.$refs.form1.validate()) {
        axios({ url: "/api/v1/admin/store_taches_auto_execute", data: this.new_visit, method: "POST" })
        .then((response) => {
          this.visitaAddingResponse = response.data;
          console.log(this.visitaAddingResponse);
          if (this.visitaAddingResponse) {
            this.addingSuccess = !this.addingSuccess;
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
              // this.forceRerender1();
              this.$store.dispatch("init_auto_execute");
            }, 3000);
              this.$refs.form1.reset();
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
      }
        

    },

    closeCreate(){
      this.dialogCreate=false
    }
  },

  computed: {
    
  },

  created() {
    this.new_visit.compagnie_id = localStorage.getItem("user-compagnie");
    this.new_visit.createur  = localStorage.getItem("user-id");
     this.new_visit.id_departement  = localStorage.getItem("user-department");
    //this.new_visit.id_departement  = 1;

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
