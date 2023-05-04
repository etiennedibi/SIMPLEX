<template>
  <div class="bodyBox">
    <div class="TheBoxBody">
      <p class="sectionTitle">
        ATTRIBUTION DE TÂCHES

        
        <v-dialog v-model="dialogCreate" max-width="370">
          <v-card>
            <v-card-text>
              <v-container>
                <div class="imgAndTitle  editIMGO">
                  <v-icon color="mainBlueColor" large>
                    mdi-folder
                    </v-icon>
                </div>
                <form ref="form1" class="updateForm">
                  <v-container fluid>
                    <v-row>
                      <v-col cols="12" md="11" lg="11">
                          <v-text-field
                            height="60"
                            style="margin-bottom:-5px"
                            solo
                            label="Inititulé"
                            ref="matri"
                            v-model="new_project.title"
                            :rules="[() => !!new_project.title]"
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
                          label="Debut"
                          ref="matri"
                          v-model="new_project.start_at"
                          :rules="[() => !!new_project.start_at]"
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
                          label="Fin"
                          ref="matri"
                          v-model="new_project.finish_at"
                          :rules="[() => !!new_project.finish_at]"
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

            <v-card-actions style="display:flex;justify-content:space-around">
              <!-- <v-spacer></v-spacer> -->
              <p
                class="simplex-btn"
                style="background:grey"
                @click="closeCreate"
                >Annuler</p
              >
              <p
                class="simplex-btn"
                @click="submit1"
                >Enregistrer</p
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
              <v-form ref="form2" class="forme1">
                <v-container fluid class="addvisit">
                  <v-row>
                    <v-col cols="12" md="12" lg="12" style="margin-top: 10px;">
                      <v-select
                        background-color="#356eea24"
                        v-model="new_task.id_project"
                        :rules="[() => !!new_task.id_project]"
                        :items="Projects"
                        item-text="title"
                        item-value="id"
                        label="Projet"
                        solo
                        height="40"
                      >
                       </v-select>
                    </v-col>
                     <v-col cols="12" md="12" lg="12">
                      <v-select
                        background-color="#356eea24"
                        v-model="new_task.executants"
                        :rules="[() => !!new_task.executants]"
                        :items="EmployersByTheDepartments"
                        item-text="nom"
                        item-value="id"
                        multiple
                        label="Executants"
                        solo
                        height="40"
                      >
                      <template v-slot:selection="{ item, index }">
                          <v-chip v-if="index === 0">
                            <span>{{ item.nom }}</span>
                          </v-chip>
                          <span
                            v-if="index === 1"
                            class="grey--text text-caption"
                          >
                            (+{{ new_task.executants.length - 1}} autres)
                          </span>
                        </template>
                       </v-select>
                    </v-col>
                     <v-col cols="12" md="12" lg="12">
                      <v-text-field
                        height="40"
                        solo
                        label="Intitulé"
                        v-model="new_task.intitule_tache"
                        :rules="[() => !!new_task.intitule_tache]"
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
                        prefix="Delais d'execution:"
                        v-model="new_task.delais_execution"
                        :rules="[() => !!new_task.delais_execution]"
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
                        v-model="new_task.details_taches"
                        :rules="[() => !!new_task.details_taches]"
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
                        v-on:click.prevent="submit2"
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
               <v-container v-if="taskAddingResponse.taches">
                <v-row>
                <v-col cols="12" md="12" lg="12">
                  <div class="TaskResume">
                    <p>{{taskAddingResponse.taches.intitule_tache}}</p>
                    <p>
                      {{taskAddingResponse.taches.details_taches}}
                    </p>
                    <p>{{taskAddingResponse.taches.delais_execution}}</p>
                  </div>
                </v-col>
              </v-row>
              </v-container>
              <v-container v-else>
                <v-row>
                <v-col cols="12" md="12" lg="12">
                  <div class="TaskResume1">
                      <v-icon x-large color="mainBlueColor"> mdi-ballot </v-icon>
                  </div>
                </v-col>
              </v-row>
              </v-container>            
            </div>

            <div class="statWrapper">
              <v-container>
                <v-row style="justify-content:center">
                  <v-col cols="12" md="5" lg="5" class="leftNumber">
                    <div class="stat1 stat2">
                      <div class="N-icon icon2">
                        <v-icon color="white">mdi-ballot</v-icon>
                      </div>
                      <h1 v-if="canceRDVNumber" style="color: white"> 13</h1>
                      <h1 v-else style="color: white">-</h1>
                      <h5 style="color: white">Taches crées</h5>
                    </div>
                  </v-col>
                  <v-col cols="12" md="5" lg="5" class="leftNumber">
                    <div class="stat1">
                      <div class="N-icon">
                        <v-icon color="mainBlueColor">mdi-folder</v-icon>
                      </div>
                      <h1 v-if="ProjetNumber">{{ProjetNumber}}</h1>
                      <h1 v-else>0</h1>
                      <h5>Projets Enregistrés</h5>
                    </div>
                  </v-col>
                </v-row>
              </v-container>
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
        echec de l'opération</v-alert
      >
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
// import projectTaskReview from "../components/Task/projectTaskReview.vue";

export default {
  name: "TaskDeclaration",
  components: {
    // projectTaskReview,
  },

  data: () => ({

    

    // CREATE_PROJECT
    dialogCreate:false,

    // FOR FORM SENDING
    new_project: {
    },
    new_task: {
      createur: "",
      executants: [],
      compagnie_id: "",
    },

    visitaAddingResponse: "",
    taskAddingResponse: "",
    addingSuccess: false,
    addingfalse: false,

    visitcomponentKey1: 0,

    // FOR ANALYTICS
    // theNumbervisit = 0,
  }),

  methods: {
    submit1() {

         axios({ url: "/api/v1/admin/store_projects", data: this.new_project, method: "POST" })
        .then((response) => {
          this.visitaAddingResponse = response.data;
          console.log(this.visitaAddingResponse);
          if (this.visitaAddingResponse) {
            this.addingSuccess = !this.addingSuccess;
             this.closeCreate()
             this.$refs.form1.reset();
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
              this.$store.dispatch("init_project")
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
    },

    submit2() {

        if (this.$refs.form2.validate()) {
           axios({ url: "/api/v1/admin/store_taches", data: this.new_task, method: "POST" })
          .then((response) => {
            this.taskAddingResponse = response.data;
            console.log(this.taskAddingResponse);
            if (this.taskAddingResponse) {
              this.addingSuccess = !this.addingSuccess;
              this.closeCreate()
              this.$refs.form2.reset();
              setTimeout(() => {
                this.addingSuccess = !this.addingSuccess;
                this.$store.dispatch("init_project")
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
        }else{
          console.log("PEEGYIGU:::")
        }
        
    },
  },

  computed: {
     ...mapGetters(["Projects","EmployersByTheDepartments"]),

     ProjetNumber() {
      return this.$store.getters.Projects.length;
    },
  },

  created() {
    this.$store.dispatch("init_project");
    this.$store.dispatch("init__employer_by_dprt");

    this.new_project.compagnie_id = localStorage.getItem("user-compagnie");
    this.new_project.id_user  = localStorage.getItem("user-id");
    this.new_task.compagnie_id = localStorage.getItem("user-compagnie");
    this.new_task.createur  = localStorage.getItem("user-id");
     this.new_task.id_departement  = localStorage.getItem("user-department");
    //this.new_task.id_departement  = 1;


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
  align-items: center;  
}
.sectionTitle .v-btn{
  margin-right: 15px;
} 
.numberWrapper{
  border-radius: 10px;
  background: white;
}
.statWrapper{
  border-radius: 10px;
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


.TaskResume{
  background:white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 26vh;
  padding: 0px 20px;
}
.TaskResume p:nth-child(1){
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
}
.TaskResume p:nth-child(2){
  text-align:justify; 
  max-height: 50%;
  overflow-y: auto;
  color: var(--font-color)
}
.TaskResume p:nth-child(3){
  font-weight: bold;
  font-size: 11px;
}
.TaskResume1{
  background:white;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 26vh;
}

.stat1 {
  background: white;
  height: 26.2vh;
  border-radius: 10px;
  margin-bottom: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.stat2{
    background: linear-gradient(to right top,  #356eea, #037bb8);

}
.N-icon {
  height: 35px;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #356eea24;
  border-radius: 100px;
}
.icon2{
  background: #1A223124;
}
.stat1 h1 {
  margin-bottom: -10px;
  font-size: 35px;
}
.stat1 h5 {
  color: var(--font-color);
}

/* Edit travel */
.imgAndTitle {
  margin: 15px 0px;
  height: 70px;
  width: 70px;
  font-size: 11px;
  border-radius: 100px;
  margin-bottom: 10px;
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
  height:35px;
  width:35px
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
