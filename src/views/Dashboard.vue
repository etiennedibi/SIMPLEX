<template>
  <div class="bodyBox">
    <div class="TheBoxBody">
      <!-- <p class="sectionTitle">Chiffres Importants</p> -->
      <v-container fluid class="pouletBr">
        <v-row>
          <v-col cols="12" md="6" lg="6">
            <div class="Jumbultron">
              <div v-if="LastMessages">
                <h3>{{LastMessages.titre}}</h3>
                <p>
                  {{LastMessages.contenu_comminuque}}
                </p>
              </div>
               <div v-if="!LastMessages">
                <h3>Bienvenue sur SIMPLEX</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                  Ex ut fugit quaerat obcaecati delectus fugit dolorum adipisci illo 
                  blanditiis commodi vitae?
                </p>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="3" lg="3">
            <div class="numberWrapper top1">
              <div class="N-icon">
                <v-icon color="mainBlueColor">mdi-clipboard-list</v-icon>
              </div>
              <h1 v-if="UndoTaskNumber>0">{{ UndoTaskNumber }}</h1>
              <h1 v-if="(UndoTaskNumber<=0) || (UndoTaskNumber==undefined)">0</h1>
              <h6>Tâches en cours</h6>
            </div>
          </v-col>
          <v-col cols="12" md="3" lg="3">
            <div class="numberWrapper top2">
              <div class="N-icon">
                <v-icon color="mainBlueColor">mdi-file-plus</v-icon>
              </div>
              <h1 v-if="UnseeFileNumber>0">{{ UnseeFileNumber }}</h1>
              <h1 v-if="(UnseeFileNumber<=0) || (UnseeFileNumber==undefined)">0</h1>
              <h6 style="text-align:center">nouveaux Fichiers <br> partagés</h6>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="9" lg="9">
            <!-- <p class="sectionTitle">Statistique</p> -->
            <div class="statWrapper">
               <p v-if="EmployersNumber>1">
                <span>+</span> <span>0{{ EmployersNumber - 1}}</span> <span>Utilisateurs</span>
                <!-- <img src="@/assets/img/blooraidLogo.jpeg" alt=""> -->
               </p>
               <p v-if="EmployersNumber<1">
                <span></span> <span>01</span> <span>Utilisateurs</span>
                <!-- <img src="@/assets/img/blooraidLogo.jpeg" alt=""> -->
               </p>
            </div>
          </v-col>
          <v-col cols="12" md="3" lg="3">
            <div class="statWrapper1">
              <h1>{{ timestamp }}</h1>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>


    <!-- EDIT DIALOG -->
    <v-dialog v-model="adminInfos" max-width="370" persistent>
      <v-card>
        <v-card-text>
          <v-container>
            <div class="imgAndTitle  editIMGO">
              <img src="@/assets/icone/staff.png" alt="" srcset="" />
            </div>
            <p style="text-align:center; font-weight:bold;">COMMENCEZ VOTRE <br> IDENTIFIACTTION COMME ADMINISTRATEUR</p>
            <form class="updateForm">
              <v-container fluid>
                <v-row>
                  <v-col cols="12" md="12" lg="12">
                    <v-text-field
                      solo
                      height="40"
                      v-model="editedItem.nom"
                      :rules="[() => !!editedItem.nom]"
                      ref="dep_date"
                      type="text"
                      value=""
                      label="Nom"
                      persistent-hint
                      append-icon="mdi-account"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="12" lg="12">
                    <v-text-field
                      solo
                      append-icon="mdi-account-outline"
                      height="40"
                      v-model="editedItem.prenoms"
                      :rules="[() => !!editedItem.prenoms]"
                      ref="dest_place"
                      type="text"
                      label="Prenoms"
                      persistent-hint
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="12" lg="12">
                    <v-text-field
                      solo
                      height="40"
                      v-model="editedItem.email"
                      :rules="[() => !!editedItem.email,(v) => /.+@.+/.test(v)]"
                      ref="dep_time"
                      type="text"
                      label="e-mail"
                      append-icon="mdi-at"
                      persistent-hint
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="12" lg="12">
                    <v-text-field
                      solo
                      append-icon="mdi-phone"
                      height="40"
                      v-model="editedItem.contact"
                      :rules="[() => !!editedItem.contact,(v) => /[0-9]+/i.test(v)]"
                      ref="pla_number"
                      type="text"
                      maxlength="10"
                      label="Numero de telephone"
                      persistent-hint
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="12" lg="12">
                    <v-text-field
                      solo
                      height="40"
                      v-model="editedItem.date_naissance"
                      :rules="[() => !!editedItem.date_naissance]"
                      ref="car_infos"
                      type="date"
                      prefix="Né le : "
                      persistent-hint
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="12" lg="12">
                    <v-text-field
                      solo
                      append-icon="mdi-map-marker"
                      height="40"
                      v-model="editedItem.lieu_naissance"
                      :rules="[() => !!editedItem.lieu_naissance]"
                      ref="car_matri"
                      type="text"
                      label="Lieux d'habitation"
                      persistent-hint
                      required
                    ></v-text-field>
                  </v-col> 
                   <v-col cols="12" md="12" lg="12">
                    <v-text-field
                    background-color="#356eea24"
                      solo
                      height="40"
                      append-icon="mdi-matrix"
                      v-model="editedItem.departement"
                      :rules="[() => !!editedItem.departement]"
                      ref="dep_date"
                      type="text"
                      value=""
                      label="Département ou service"
                      persistent-hint
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="12" lg="12">
                    <v-text-field
                    background-color="#356eea24"
                      solo
                      append-icon="mdi-matrix"
                      height="40"
                      v-model="editedItem.fonction"
                      :rules="[() => !!editedItem.fonction]"
                      ref="dest_place"
                      type="text"
                      label="Post occupé"
                      persistent-hint
                      required
                    ></v-text-field>
                  </v-col>  
                  <p style="text-align:center; font-style:italic;font-size:10px">
                    ces informations sont necessaires pour vous identifier comme un utilisateur.
                    Elles seront prises en compte dès votre prochaine connexion
                  </p>
              </v-row>
              </v-container>
            </form>
          </v-container>
        </v-card-text>

        <v-card-actions style="display:flex;justify-content:space-around">
          <!-- <p
            class="simplex-btn"
            style="background:grey"
            @click="closeEdit"
            >Annuler</p
          > -->
          <p
            class="simplex-btn"
            @click="editItemConfirm"
            >Enregistrer</p
          >
        </v-card-actions>
      </v-card>
    </v-dialog>


    <transition name="slide">
      <v-alert
        v-if="addingSuccess"
        elevation="13"
        type="success"
        max-width="300"
        class="alert"
        color="mainBlueColor"
      >
        Employer enregistré avec succes</v-alert
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
        Erreur lors de l'ajout</v-alert
      >
    </transition>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "Dashboard",
  components: {
    // HelloWorld
  },

  data: () => ({
    // FOR TIMER
    timestamp: "",
    // DATA
    role:"",
    adminInfos:false,
    editedItem: {},
    profilIMG:"",

    addingSuccess: false,
    addingfalse: false,
  }),

  mounted() {
    setTimeout(() => {
      if (this.role==1) {
       this.activeAdminUpdate();
      }
     
    }, 1000);
    
  },

  methods: {
    getNow() {
        const today = new Date();
        const time = this.padzero(today.getHours()) + ":" + this.padzero(today.getMinutes());
        this.timestamp = time;
    },

    padzero(num) {
        return num<10? "0"+ num:num
    },

    activeAdminUpdate(){
      if ((!this.Current_employer)||(this.Current_employer == undefined)) {
        console.log(this.Current_employer);
        this.adminInfos = true;
      }
    },
    editItemConfirm() {
      axios
        ({ url: "/api/v1/users/update_first_admin", data: this.editedItem, method: "PUT" })
        .then((response) => {
          // console.log(response.data);
          this.VisiteaAddingResponse = response.data;

          if (this.VisiteaAddingResponse) {
            // Annulation effectuée
            this.VisiteaAddingResponse;
            this.addingSuccess = !this.addingSuccess;
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
               this.$store.dispatch("init_current_employer_infos");
            }, 3000);
            this.closeEdit();
          } else if (!this.VisiteaAddingResponse) {
            this.addingfalse = !this.addingfalse;
            setTimeout(() => {
              this.addingfalse = !this.addingfalse;
            }, 3000);
          }
        })
        .catch((error) => {
          this.VisiteaAddingResponse = error.message;
          console.error("There was an error!", error);
        });

    },

    closeEdit() {
      this.adminInfos = false;
    },
    
  },

  computed: {
    ...mapGetters(["Current_employer","LastMessages","EmployersNumber","UndoTaskNumber", "UnseeFileNumber"]),
  },


  created() {
    this.$store.dispatch("init_current_employer_infos")
    this.$store.dispatch("init_message");
    this.$store.dispatch("init__employer_number");
    this.$store.dispatch("init_task_undo_number");
    this.$store.dispatch("init_file_undo_number");
    
    setInterval(this.getNow, 1000);
    this.editedItem.user_id = localStorage.getItem("user-id");
    this.editedItem.compagnie_id = localStorage.getItem("user-compagnie");
    this.role = localStorage.getItem("user-role");
    // this.activeAdminUpdate()
    
  },

};
</script>

<style scoped>
.sectionTitle {
  margin: 0;
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: bold;
}
.numberWrapper {
  margin-top: 3%;
  height: 26.2vh;
  border-radius: 10px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.top1{
}
.N-icon {
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #356eea24;
  border-radius: 100px;
}
.numberWrapper h1 {
  margin-bottom: -10px;
  font-size: 30px;
}
.numberWrapper h6 {
  color: var(--font-color);
}

.Jumbultron {
  margin-top: 1%;
  height: 26.2vh;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  display: flex;
  align-items: flex-start;
  padding-left: 30px;
  padding-right: 30px;
  background: white;
  background: linear-gradient(to left top,  #356eea, #037bb8, #9238ce);
  color: white;
}


/* .Jumbultron h2{
 color: var(--Important-font-color);
} */

.Jumbultron p {
  font-size: 11px;
}


.statWrapper {
  margin-top: 1%;
  height: 26.2vh;
  border-radius: 10px;
  background: white;
  display: flex;
  justify-content:center;
  align-items: center;
}

.statWrapper span:nth-child(2){
  font-size: 30px;
  font-weight: bold;
  display: inline-block;
  padding: 30px;
  background: #356eea24;
  margin:0 10px;
  border-radius: 100px;
  color:var(--main-blue-important);
}
.statWrapper span:nth-child(3){
  font-weight: bold;
  color:var(--font-color);
}
/* .statWrapper span:nth-child(4){
  font-weight: bold;
  display: inline-block;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: #356eea24;
  border-radius: 100px;
  color:var(--main-blue-important);
} */

.statWrapper1 {
  height: 29vh;
  border-radius: 10px;
  display: flex;
  justify-content:center;
  align-items: center;
  background:linear-gradient(to right bottom,  #356eea, #037bb8, #9238ce);;
  color: white;
}
.statWrapper1 p {
  margin-left: 10px;
}
.statWrapper1 h1 {
  display: inline-block;
  padding: 5px 25px;
  border: solid 1px white;
}
.noteWrapper {
  margin-top: 5%;
  height: 80%;
}



/* Edit travel */
.editIMGO {
  margin-left: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color:#b71c1c; */
}



</style>
