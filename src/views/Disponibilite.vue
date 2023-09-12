<template>
  <div class="bodyBox">
    <div class="TheBoxBody">
      <!-- <p class="sectionTitle">Chiffres Importants</p> -->
      <v-container fluid class="pouletBr">
        <v-row>
          <v-col cols="12" md="6" lg="6">
            <div class="Jumbultron">
              <div v-if="UserDisponity.id_disponibility == 1" class="white">
                <v-icon color="mainBlueColor">mdi-map-marker-check</v-icon>
              </div>
              <div v-if="UserDisponity.id_disponibility == 2" class="red">
                <v-icon color="white">mdi-coffee</v-icon>
              </div>
              <div v-if="UserDisponity.id_disponibility == 3" class="red">
                <v-icon color="white">mdi-account-supervisor</v-icon>
              </div>
              <div v-if="UserDisponity.id_disponibility == 4" class="red">
                <v-icon color="white">mdi-account-arrow-right</v-icon>
              </div>
              <div v-if="UserDisponity.id_disponibility == 1">
                <h3>[ DISPONIBLE ]</h3>
                <p>
                  Votre disponibilité est reste visible pour l'accueil. Cela aidera notre SIMPLEX à mieux vous assister. Merci pour votre collaboration.
                </p>
              </div>
              <div v-if="UserDisponity.id_disponibility == 2">
                <h3>[ EN PAUSE ]</h3>
                <p>
                  Vous avez d'indiquer votre indisponibilité pour <b>{{UserDisponity.motif}} min,</b><br> depuis <b>{{displayDate(UserDisponity.updated_at)}}</b>
                </p>
              </div>
              <div v-if="UserDisponity.id_disponibility == 3">
                <h3>[ EN REUNION ]</h3>
                <p>
                  Vous avez d'indiquer votre indisponibilité pour <b>{{UserDisponity.motif}} min,</b><br> depuis <b>{{displayDate(UserDisponity.updated_at)}}</b>
                </p>
              </div>
              <div v-if="UserDisponity.id_disponibility == 4">
                <h3>[ A L'EXTERIEUR ]</h3>
                <p>
                  Vous avez d'indiquer votre indisponibilité pour <b>{{UserDisponity.motif}} min,</b><br> depuis <b>{{displayDate(UserDisponity.updated_at)}}</b>
                </p>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="6" lg="6">
           <v-row>
             <v-col cols="12" md="6" lg="6">
                <div @click="editItem(1)" class="numberWrapper top1">
                  <div class="N-icon">
                    <v-icon color="mainBlueColor">mdi-map-marker-check</v-icon>
                  </div>
                  <h4>[DISPONIBLE]</h4>
                </div>
             </v-col>
             <v-col cols="12" md="6" lg="6">
                <div @click="editItem(2)" class="numberWrapper top1">
                  <div class="N-icon">
                    <v-icon color="mainBlueColor">mdi-coffee</v-icon>
                  </div>
                  <h4>[PAUSE]</h4>
                </div>
             </v-col>
             <v-col cols="12" md="6" lg="6">
                <div @click="editItem(3)" class="numberWrapper top1">
                  <div class="N-icon">
                    <v-icon color="mainBlueColor">mdi-account-supervisor</v-icon>
                  </div>
                  <h4>[REUNION]</h4>
                </div>
             </v-col>
             <v-col cols="12" md="6" lg="6">
                <div @click="editItem(4)" class="numberWrapper top1">
                  <div class="N-icon">
                    <v-icon color="mainBlueColor">mdi-account-arrow-right</v-icon>
                  </div>
                  <h4>[EXTERIEUR]</h4>
                </div>
             </v-col>
           </v-row>
          </v-col>
          
        </v-row>
        
      </v-container>
    </div>


    <!-- EDIT DIALOG -->
   <v-dialog v-model="dialogEdit" max-width="370">
      <v-card>
        <v-card-text>
          <v-container>
            <div class="imgAndTitle  editIMGO">
              <v-icon color="mainBlueColor" large>
                 mdi-calendar-minus
                </v-icon>
            </div>
            <form class="updateForm">
              <v-container fluid>
                <v-row>
                    <v-col cols="11" md="11" lg="11">
                      <p style="font-size:8px; text-align:center; font-weight:bold">* indiquez la durée estimée de votre indisponibilité</p>
                      <v-text-field
                        height="60"
                        solo
                        label="Temps d'absence estimé"
                        background-color="#356eea24"
                        ref="desc"
                        v-model="editedItem.motif"
                        :rules="[() => !!editedItem.motif]"
                        append-icon="mdi-timeline-clock"
                        type="time"
                        value=""
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>            
                </v-row>
              </v-container>
            </form>
          </v-container>
        </v-card-text>

        <v-card-actions style="display:flex;justify-content:space-around">
          <p
            class="simplex-btn"
            style="background:grey"
            @click="closeEdit"
            >Annuler</p
          >
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
        Disponibilité modifiée avec succes</v-alert
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
        Erreur lors de la mise à jour</v-alert
      >
    </transition>
  </div>
</template>

<script>
import axios from "axios";
import { formatDateForChat } from "../Utils/WorkDate";
import { mapGetters } from "vuex";

export default {
  name: "Disponibilite",
  components: {
    // HelloWorld
  },

  data: () => ({
    // FOR TIMER
    timestamp: "",
    // DATA
    role:"",
    dialogEdit:false,
    editedItem: {
      id_disponibility: "",
    },

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

    displayDate(date) {
      return formatDateForChat(date);
    },

    // ------------------------
    // EDIT FILE
    // ------------------------
    editItem(item) {
      this.editedItem.id_disponibility = item;
      //  Open the Edit Dialogue
      if (item == 1) {
        this.editItemConfirm()
      } else {
        this.dialogEdit = true;
      }
      
    },
    editItemConfirm() {
        axios({ url: "/api/v1/admin/update_disponibility/" + this.UserDisponity.id, data: this.editedItem, method: "PUT" })
        .then((response) => {
          this.VisiteaAddingResponse = response.data;
          if (this.VisiteaAddingResponse) {
            // Modification effectuée
            this.VisiteaAddingResponse.message = "modification effectuée";
            this.addingSuccess = !this.addingSuccess;
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
              this.$store.dispatch("init_user_disponibility")
            }, 3000);
          } else if (!this.VisiteaAddingResponse) {
            // Modification effectuée
            this.addingfalse = !this.addingfalse;
            this.VisiteaAddingResponse.message = "échec de l'operation";
            setTimeout(() => {
              this.addingfalse = !this.addingfalse;
            }, 3000);
          }
        })
        .catch((error) => {
          this.VisiteaAddingResponse = error.message;
          console.error("There was an error!", error);
        });

      this.closeEdit();
    },
    closeEdit() {
      this.dialogEdit = false;
    },
    
  },

  computed: {
    ...mapGetters(["UserDisponity",]),
  },


  created() {
    this.$store.dispatch("init_user_disponibility");
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
  cursor: pointer;
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
  height: 40px;
  width: 40px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #356eea24;
  border-radius: 100px;
}
.N-icon .v-icon{
  font-size: 20px;
}
.numberWrapper h1 {
  margin-bottom: -10px;
  font-size: 30px;
}
.numberWrapper h4 {
  color: var(--font-color);
}

.Jumbultron {
  margin-top: 1%;
  height: 57.5vh;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-left: 30px;
  padding-right: 30px;
  background: white;
  background: linear-gradient(to left top,  #356eea, #037bb8, #9238ce);
  color: white;
}


.Jumbultron > div:nth-child(1){
  height: 70px;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  /* background: #356eea24; */
  border-radius: 100px;
}

.Jumbultron p {
  font-size: 11px;
}
.Jumbultron .v-icon {
  font-size: 25px;
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
