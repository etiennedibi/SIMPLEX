<template>
  <div class="bodyBox">
    <div class="TheBoxBody ForTravelDeclaration">
      <p class="sectionTitle">Enregistrement d'employer</p>
      <v-row>
        <v-col cols="12" md="12" lg="12">
          <v-form ref="form1" >
            <v-container fluid class="lolplp">
              <v-row>
                <v-col cols="12" md="4" lg="4">
                  <v-text-field
                    solo
                    height="40"
                    v-model="newTravel_1.nom"
                    :rules="[() => !!newTravel_1.nom]"
                    ref="dep_date"
                    type="text"
                    value=""
                    label="Nom"
                    persistent-hint
                    append-icon="mdi-account"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4" lg="4">
                  <v-text-field
                    solo
                    append-icon="mdi-account-outline"
                    height="40"
                    v-model="newTravel_1.prenoms"
                    :rules="[() => !!newTravel_1.prenoms]"
                    ref="dest_place"
                    type="text"
                    label="Prenoms"
                    persistent-hint
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4" lg="4">
                  <v-text-field
                    solo
                    height="40"
                    v-model="newTravel_1.email"
                    :rules="[() => !!newTravel_1.email,(v) => /.+@.+/.test(v)]"
                    ref="dep_time"
                    type="text"
                    label="e-mail"
                    append-icon="mdi-at"
                    persistent-hint
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4" lg="4">
                  <v-text-field
                    solo
                    append-icon="mdi-phone"
                    height="40"
                    v-model="newTravel_1.contact"
                    :rules="[() => !!newTravel_1.contact,(v) => /[0-9]+/i.test(v)]"
                    ref="pla_number"
                    type="text"
                    maxlength="10"
                    label="Numero de telephone"
                    persistent-hint
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4" lg="4">
                  <v-text-field
                    solo
                    height="40"
                    v-model="newTravel_1.date_naissance"
                    :rules="[() => !!newTravel_1.date_naissance]"
                    ref="car_infos"
                    type="date"
                    prefix="Né le : "
                    persistent-hint
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4" lg="4">
                  <v-text-field
                    solo
                    append-icon="mdi-map-marker"
                    height="40"
                    v-model="newTravel_1.lieu_naissance"
                    :rules="[() => !!newTravel_1.lieu_naissance]"
                    ref="car_matri"
                    type="text"
                    label="Lieux d'habitation"
                    persistent-hint
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4" lg="4">
                  <v-file-input
                        chips
                        height="40"
                        solo
                        label="Pièce d'identité"
                        v-model="newTravel_1.piece_identite"
                        prepend-icon="mdi-card-account-details"
                      ></v-file-input>
                </v-col>
                <v-col cols="12" md="4" lg="4">
                  <v-file-input
                        chips
                        height="40"
                        solo
                        label="Curriculum vitæ"
                        v-model="newTravel_1.CV"
                        prepend-icon="mdi-file-account"
                      ></v-file-input>
                </v-col>
                <v-col cols="12" md="4" lg="4">
                  <v-file-input
                        chips
                        height="40"
                        solo
                        label="Lettre motivation"
                        v-model="newTravel_1.LM"
                        prepend-icon="mdi-file-star-four-points"
                      ></v-file-input>
                </v-col>
                <v-col cols="12" md="4" lg="4">
                  <v-file-input
                    background-color="#356eea24"
                        chips
                        height="40"
                        solo
                        v-model="newTravel_1.contrat"
                        label="Contrat"
                        prepend-icon="mdi-file-sign"
                      ></v-file-input>
                </v-col>
                <v-col cols="12" md="4" lg="4">
                  <v-file-input
                    background-color="#356eea24"
                        chips
                        height="40"
                        solo
                        v-model="newTravel_1.fiche_poste"
                        label="Fiche de poste"
                        prepend-icon="mdi-file-sign"
                      ></v-file-input>
                </v-col>





                <v-col cols="12" md="4" lg="4">
                  <v-select
                    background-color="#356eea24"
                    v-model="newTravel_1.id_fonction"
                    :rules="[() => !!newTravel_1.id_fonction]"
                    :items="Works"
                    item-text="nom_fonction"
                    item-value="id"
                    label="Post occupé"
                    solo
                    height="40"
                  >
                  </v-select>
                </v-col>

                <v-col cols="12" md="4" lg="4">
                  <v-select
                    background-color="#356eea24"
                    v-model="newTravel_1.department_id"
                    :rules="[() => !!newTravel_1.department_id]"
                    :items="Services"
                    item-text="nom_departement"
                    item-value="id"
                    label="Département d'affectation"
                    solo
                    height="40"
                  >
                  </v-select>
                </v-col>
                <v-col cols="12" md="4" lg="4">
                  <v-select
                    background-color="#356eea24"
                    v-model="newTravel_1.role_id"
                    :rules="[() => !!newTravel_1.role_id]"
                    :items="Rights"
                    item-text="name"
                    item-value="id"
                    label="Niveau d'accès"
                    solo
                    height="40"
                  >
                  </v-select>
                </v-col>
                <v-col cols="12" md="4" lg="4">
                  <v-select
                    background-color="#356eea24"
                    v-model="newTravel_1.department_second_id"
                    :rules="[() => !!newTravel_1.department_second_id]"
                    :items="Services"
                    item-text="nom_departement"
                    item-value="id"
                    label="Département d'instruction (optionnnel)"
                    solo
                    height="40"
                  >
                  </v-select>
                </v-col>
                <v-col cols="12" md="4" lg="4">
                  <v-select
                    background-color="#356eea24"
                    v-model="newTravel_1.id_type_contrat"
                    :rules="[() => !!newTravel_1.id_type_contrat]"
                    :items="Contracts"
                    item-text="type_contrat"
                    item-value="id"
                    label="type de contrat"
                    solo
                    height="40"
                  >
                  </v-select>
                </v-col>
                <v-col cols="12" md="4" lg="4">
                  <v-text-field
                    solo
                    background-color="#356eea24"
                    height="40"
                    v-model="newTravel_1.date_debut"
                    ref="car_matri"
                    type="date"
                    prefix="Début du contrat : "
                    label=""
                    persistent-hint
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4" lg="4">
                  <v-text-field
                    solo
                    height="40"
                    background-color="#356eea24"
                    v-model="newTravel_1.date_fin"
                    :disabled="disableFieldInCaseOfCDI"
                    ref="car_matri"
                    type="date"
                    prefix="Fin du contrat : "
                    label=""
                    persistent-hint
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4" lg="4">
                  <v-text-field
                    solo
                    background-color="#356eea24"
                    append-icon="mdi-timeline-clock"
                    height="40"
                    v-model="newTravel_1.duree_contrat"
                    :disabled="disableFieldInCaseOfCDI"
                    ref="pl_price"
                    type="text"
                    label="Durée du contrat : "
                    persistent-hint
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4" lg="4">
                  <v-text-field
                    background-color="#356eea24"
                    solo
                    append-icon="mdi-eye"
                    height="40"
                    v-model="newTravel_1.password"
                    :rules="[() => !!newTravel_1.password]"
                    ref="st_inter"
                    type="text"
                    label="Mot de passe"
                    persistent-hint
                    
                  ></v-text-field>
                </v-col>

                 <v-col cols="12" md="4" lg="4">
                  <v-text-field
                    background-color="#356eea24"
                    solo
                    append-icon="mdi-eye"
                    height="40"
                    v-model="newTravel_1.password_confirmation"
                    :rules="[() => !!newTravel_1.password_confirmation]"
                    ref="st_inter"
                    type="text"
                    label="Confirmation Mot de passe"
                    persistent-hint
                    
                  ></v-text-field>
                </v-col>

                




                <v-col cols="12" md="4" lg="4">
                  <p
                    class="simplex-btn simplex-submit-btn"
                    style="padding:14px 19px;margin-top:0px"
                    v-on:click.prevent="submit1"
                    >Enregistrer</p
                  >
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-col>
        
      </v-row>
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
        Employé enregistré avec succes</v-alert
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
// import Vue from "vue";
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "AddEmployer",
  components: {},

  data: () => ({

    //FOR-CDI-CHECK
    CDI_check:false, 

    row: "check",
    DayType: true,

    // FOR FORM SENDING
    newTravel_1: {
      car_informations: "",
      car_matriculation: "",
      // departure_place: "Abidjan",
      destination: "",
      departure_time: "",

      departure_date: "",
      // place_to_sell_by_mino_number : '',
      total_car_place_number: "",
      place_price: "",
      Intemediatestation: "",
      travel_duration: "",
      compagnie_id: "",
      user_id: "",
      id_type_contrat:"",
    },
    newTravel_2: {
      car_informations: "",
      car_matriculation: "",
      departure_place: "Abidjan",
      destination: "",
      departure_time: "",

      departure_date: "",
      // place_to_sell_by_mino_number : '',
      total_car_place_number: "",
      place_price: "",

      company_id: "",
      user_id: "",
    },

    Roles:[
      {role:"manager", id:"1"},
      {role:"standart", id:"2"},
    ],

    traveladdingResponse: "",
    addingSuccess: false,
    addingfalse: false,


  }),

  methods: {
    submit1() {
      // for intermadiate station 
      if (this.$refs.form1.validate()) {
         const formData = new FormData();
          formData.append('nom', this.newTravel_1.nom);
          formData.append('prenoms', this.newTravel_1.prenoms);
          formData.append('email', this.newTravel_1.email);
          formData.append('contact', this.newTravel_1.contact);
          formData.append('date_naissance', this.newTravel_1.date_naissance);
          formData.append('lieu_naissance', this.newTravel_1.lieu_naissance);
          formData.append('piece_identite', this.newTravel_1.piece_identite);
          formData.append('CV', this.newTravel_1.CV);
          formData.append('LM', this.newTravel_1.LM);
          formData.append('contrat', this.newTravel_1.contrat);
          formData.append('fiche_poste', this.newTravel_1.fiche_poste);
          formData.append('id_fonction', this.newTravel_1.id_fonction);
          formData.append('department_id', this.newTravel_1.department_id);
          formData.append('department_second_id', this.newTravel_1.department_second_id);
          formData.append('role_id', this.newTravel_1.role_id);
          formData.append('id_type_contrat', this.newTravel_1.id_type_contrat);
          formData.append('date_debut', this.newTravel_1.date_debut);
          formData.append('date_fin', this.newTravel_1.date_fin);
          formData.append('duree_contrat', this.newTravel_1.duree_contrat);
          formData.append('password', this.newTravel_1.password);
          formData.append('password_confirmation', this.newTravel_1.password_confirmation);
          formData.append('compagnie_id', this.newTravel_1.compagnie_id);
 
        // console.log(formData);
        axios({ url: "/api/v1/admin/add-new-user-emplyer", data: formData, method: "POST" })
        .then((response) => {
          this.traveladdingResponse = response.data;
          if (this.traveladdingResponse) {
            this.addingSuccess = !this.addingSuccess;
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
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
          this.traveladdingResponse = error.message;
          this.addingfalse = !this.addingfalse;
          setTimeout(() => {
              this.addingfalse = !this.addingfalse;
            }, 3000);
          console.error("There was an error!", error);
        });

        
      }
      
    },

   
  },

  computed: {
    ...mapGetters(["Works","Contracts","Services","Rights"]),

    // newTravel_1.id_type_contrat
    disableFieldInCaseOfCDI() {
      if(this.newTravel_1.id_type_contrat==1) return true
      else return false
    }
  },

  created() {
    this.$store.dispatch("init_service");
    this.$store.dispatch("init_contract");
    this.$store.dispatch("init_work");
    this.$store.dispatch("init_right");
    

    this.newTravel_1.id_user = localStorage.getItem("user-id");
    this.newTravel_1.compagnie_id = localStorage.getItem("user-compagnie");
  },

};
</script>

<style scoped>
/* .TheBoxBody{
    height: 60vh;
   
} */

.ForTravelDeclaration {
  /* background: red; */
}

.sectionTitle {
  margin: 0;
  margin-bottom: 5px;
  font-size: 15px;
  font-weight: bold;
  /* text-align: start; */
}

/* .ForTravelDeclaration > div:nth-child(2){
  border-bottom: solid 0.5px var(--font-color);
  margin: 0 45px;
} */

/* .v-form{
  padding: 0 35px;
} */

.lolplp {
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

.formRadio {
  display: flex;
  justify-content: center;
}

/* .v-input--selection-controls {
    margin-top: 20px;
    padding-top: 0px;
} */
.v-btn:not(.v-btn--round).v-size--large {
  height: 58px;
  min-width: 100%;
  padding: 0 19.5555555556px;
  color: white;
}

/* .theme--light.v-btn {
    
} */

.stat1 {
  background: white;
  height: 225px;
  border-radius: 10px;
  margin-bottom: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.N-icon {
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #356eea24;
  border-radius: 100px;
}
.stat1 h1 {
  margin-bottom: -15px;
  font-size: 50px;
}
.stat1 h5 {
  color: var(--font-color);
}

@media (min-width: 960px) {
  .col-md-6 {
    height: 90px;
  }
}
</style>
