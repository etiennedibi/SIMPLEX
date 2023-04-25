<template>
  <div class="bodyBox">
    <div class="TheBoxBody">
      <!-- <p class="sectionTitle">Chiffres Importants</p> -->
      <v-container v-if="Current_employer" fluid class="pouletBr">
        <v-row>
          <v-col cols="12" md="8" lg="8">
            <div class="Jumbultron">
              <div>
                <h2>{{ Current_employer.nom }} {{ Current_employer.prenoms }}</h2>
                <p class="postP">{{ Current_employer.nom_fonction }}</p>
                <!-- <p class="postP2">niangopaul blooraid.com</p> -->
                <p>
                   {{ Current_employer.description }}
                </p>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="4" lg="4">
            <div class="numberWrapper">
              <div class="N-icon">
                <!-- <img src="@/assets/img/team2.jpg" alt="" srcset="" /> -->
                <img v-if="profilIMG" :src="`${axios.defaults.baseURL}${profilIMG}`"/>
                <img v-if="!profilIMG" src="@/assets/img/avatarProfil.jpg" alt="" srcset="" />
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="4" lg="4">
            <div class="statWrapper1">
              <div>
               <div><p><v-icon>mdi-manjaro</v-icon> </p>CV</div>
               <div><p><v-icon>mdi-file-document-plus</v-icon> </p>motivation</div>
               <div><p><v-icon>mdi-card-account-details</v-icon> </p>identité</div>
              </div>
              <div>
               <div><p><v-icon>mdi-file-document-check</v-icon> </p>Fiche de post</div>
               <div><p><v-icon>mdi-file-sign</v-icon> </p>  contat</div>
              </div>
               
            </div>
          </v-col>
          <v-col cols="12" md="4" lg="4">
            <div class="statWrapper0">
               <div class="depBox">
                <div>
                  <p><span>departement</span><br> {{ Current_employer.nom_departement }}</p>
                  <p v-if="Current_employer.role_id==1"><span>Attribution</span><br>ADMINISTEUR</p>
                  <p v-if="Current_employer.role_id==2"><span>Attribution</span><br>MANAGEUR</p>
                  <p v-if="Current_employer.role_id==3"><span>Attribution</span><br>TEAM LEAD</p>
                  <p v-if="Current_employer.role_id==4"><span>Attribution</span><br>STANDARD</p>
                  <p><span>Habitation</span><br> {{ Current_employer.lieu_naissance }}</p>
                  <p><span>contact</span><br>{{ Current_employer.contact }}</p>
                  <p><span>E-mail</span><br>{{ Current_employer.email }}</p>
                  <p><span>Date de naissance</span><br>{{ Current_employer.lieu_naissance }}</p>
                  <p><span>Lieu d'habitation</span><br>{{ Current_employer.date_naissance }}</p>
                </div>
                <div>CDI</div>
               </div>
            </div>
          </v-col>
          <v-col cols="12" md="4" lg="4">
            <div class="statWrapper2">
              <span>Debut contrat:</span>
              <span>{{ Current_employer.date_debut }}</span>
              <span>Fin contrat:</span>
              <span>{{ Current_employer.date_fin }} </span>
              <span>Durée contrat:</span>
              <span>{{ Current_employer.duree_contrat }} </span>
              <span>{{ Current_employer.type_contrat }}</span>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <v-container v-else fluid class="pouletBr stationListboxWrapper2">
       <v-icon x-large color="mainBlueColor"> mdi-alert-circle-outline </v-icon>
        Veuillez renseigner vos informations personnelles et professionnelles,<br>
        pour accéder à votre fiche employé.

          <v-btn
            depressed
            small
            color="mainBlueColor"
            style="color: white;margin-top:20px"
            v-on:click.prevent="adminInfos=!adminInfos"
            >Renseigner</v-btn
          >
         <!-- EDIT DIALOG -->
        <v-dialog v-model="adminInfos" max-width="400">
          <v-card>
            <v-card-text>
              <v-container>
                <div class="imgAndTitle  editIMGO">
                  <img src="@/assets/icone/staff.png" alt="" srcset="" />
                </div>
                <form class="updateForm">
                  <v-container fluid>
                    <v-row>
                    <v-col cols="12" md="11" lg="11">
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
                    <v-col cols="12" md="11" lg="11">
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
                    <v-col cols="12" md="11" lg="11">
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
                    <v-col cols="12" md="11" lg="11">
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
                    <v-col cols="12" md="11" lg="11">
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
                    <v-col cols="12" md="11" lg="11">
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
                    <v-col cols="12" md="11" lg="11">
                      <v-file-input
                            chips
                            height="40"
                            solo
                            label="Pièce d'identité"
                            v-model="editedItem.piece_identite"
                            prepend-icon="mdi-card-account-details"
                          ></v-file-input>
                    </v-col>
                    <v-col cols="12" md="11" lg="11">
                      <v-file-input
                            chips
                            height="40"
                            solo
                            label="Curriculum vitæ"
                            v-model="editedItem.CV"
                            prepend-icon="mdi-file-account"
                          ></v-file-input>
                    </v-col>
                    <v-col cols="12" md="11" lg="11">
                      <v-file-input
                            chips
                            height="40"
                            solo
                            label="Lettre motivation"
                            v-model="editedItem.LM"
                            prepend-icon="mdi-file-star-four-points"
                          ></v-file-input>
                    </v-col>
                    <v-col cols="12" md="11" lg="11">
                      <v-file-input
                        background-color="#356eea24"
                        chips
                        height="40"
                        solo
                        v-model="editedItem.contrat"
                        label="Contrat"
                        prepend-icon="mdi-file-sign"
                      > </v-file-input>
                    </v-col>
                    <v-col cols="12" md="11" lg="11">
                      <v-file-input
                        background-color="#356eea24"
                        chips
                        height="40"
                        solo
                        v-model="editedItem.fiche_poste"
                        label="Fiche de poste"
                        prepend-icon="mdi-file-sign"
                      > </v-file-input>
                    </v-col>


                  <v-col cols="12" md="11" lg="11">
                    <v-select
                      background-color="#356eea24"
                      v-model="editedItem.id_fonction"
                      :items="Works"
                      item-text="nom_fonction"
                      item-value="id"
                      label="Post occupé"
                      solo
                      height="40"
                    >
                    </v-select>
                  </v-col>
                  <v-col cols="12" md="11" lg="11">
                    <v-select
                      background-color="#356eea24"
                      v-model="editedItem.department_id"
                      :items="Services"
                      item-text="nom_departement"
                      item-value="id"
                      label="Département d'affectation"
                      solo
                      height="40"
                    >
                    </v-select>
                  </v-col>
                  <v-col cols="12" md="11" lg="11">
                    <v-select
                    disabled
                      background-color="#356eea24"
                      v-model="editedItem.role_id"
                      :items="Rights"
                      item-text="name"
                      item-value="id"
                      label="Niveau d'accès"
                      solo
                      height="40"
                    >
                    </v-select>
                  </v-col>

                  <v-col cols="12" md="11" lg="11">
                    <v-select
                      background-color="#356eea24"
                      v-model="editedItem.id_type_contrat"
                      :items="Contracts"
                      item-text="type_contrat"
                      item-value="id"
                      label="type de contrat"
                      solo
                      height="40"
                    >
                    </v-select>
                  </v-col>
                  <v-col cols="12" md="11" lg="11">
                    <v-text-field
                      solo
                      background-color="#356eea24"
                      height="40"
                      v-model="editedItem.date_debut"
                      :rules="[() => !!editedItem.date_debut]"
                      ref="car_matri"
                      type="date"
                      prefix="Début du contrat : "
                      label=""
                      persistent-hint
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="11" lg="11">
                    <v-text-field
                      solo
                    :disabled="disableFieldInCaseOfCDI"
                      height="40"
                      background-color="#356eea24"
                      v-model="editedItem.date_fin"
                      :rules="[() => !!editedItem.date_fin]"
                      ref="car_matri"
                      type="date"
                      prefix="Fin du contrat : "
                      label=""
                      persistent-hint
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="11" lg="11">
                    <v-text-field
                      solo
                    :disabled="disableFieldInCaseOfCDI"
                      background-color="#356eea24"
                      append-icon="mdi-timeline-clock"
                      height="40"
                      v-model="editedItem.duree_contrat"
                      :rules="[() => !!editedItem.duree_contrat]"
                      ref="pl_price"
                      type="text"
                      label="Durée du contrat : "
                      persistent-hint
                      required
                    ></v-text-field>
                  </v-col>

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
                @click="closeEdit"
                style="color: white"
                >Annuler</v-btn
              >
              <v-btn
                color="mainBlueColor"
                depressed
                @click="editItemConfirm"
                style="color: white"
                >Enregistrer</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>

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
  name: "FicheEmploye",
  components: {
    // HelloWorld
  },

  data: () => ({

    // DATA
    adminInfos:false,
    editedItem: {},
    profilIMG:"",
    /* FOR  SERVICE STATS */
    showChart: false,

    series: [
      //     {
      // name: 'series7',
      // data: [31, 40, 28, 51, 42, 109,31, 40, 28, 70, 30, 1]
      // },
      // {
      // name: 'series2',
      // data: [11, 32, 22, 12, 30, 52,0, 32, 45, 33, 14, 22]
      // },
      // {
      // name: 'series3',
      // data: [20, 50, 10, 83, 56, 22,20, 50, 20, 19, 30, 120]
      // }
    ],

    chartOptions: {
      chart: {
        id: "FirstChart",
        type: "area",
        sparkline: {
          enabled: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#3e886d", "#4c5d70", "#b6bbc2"],
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Aug",
          "Sep",
          "Oct",
        ],
      },
    },

    /* FOR SERVICE MARCK */
    series2: [45, 55, 30],

    chartOptions2: {
      chart: {
        // width: 380,
        type: 'polarArea'
      },
      fill: {
        opacity: 1
      },
      stroke: {
        width: 1,
        colors: undefined
      },
      yaxis: {
          show: false
        },
      legend: {
          position: 'bottom'
        },
      plotOptions: {
          polarArea: {
            rings: {
              strokeWidth: 0
            },
            spokes: {
              strokeWidth: 0
            },
          }
        },
      // theme: {
      //   monochrome: {
      //     enabled: true,
      //     shadeTo: 'light',
      //     shadeIntensity: 0.6
      //   }
      // },

      colors: ["#3e886d", "#4c5d70", "#b6bbc2"],
      labels: ["SBTA", "ABOUSSOUAN", "VOUS 4eme"],
    },




    addingSuccess: false,
    addingfalse: false,
  }),

  mounted() {
    setTimeout(() => {
      this.updateChart();
      this.showChart = true;
    }, 500);
  },

  methods: {



    editItemConfirm() {

      const formData = new FormData();
          formData.append('nom', this.editedItem.nom);
          formData.append('prenoms', this.editedItem.prenoms);
          formData.append('email', this.editedItem.email);
          formData.append('contact', this.editedItem.contact);
          formData.append('date_naissance', this.editedItem.date_naissance);
          formData.append('lieu_naissance', this.editedItem.lieu_naissance);
          formData.append('piece_identite', this.editedItem.piece_identite);
          formData.append('CV', this.editedItem.CV);
          formData.append('LM', this.editedItem.LM);
          formData.append('contrat', this.editedItem.contrat);
          formData.append('fiche_poste', this.editedItem.fiche_poste);
          formData.append('id_fonction', this.editedItem.id_fonction);
          formData.append('department_id', this.editedItem.department_id);
          formData.append('role_id', this.editedItem.role_id);
          formData.append('id_type_contrat', this.editedItem.id_type_contrat);
          formData.append('date_debut', this.editedItem.date_debut);
          formData.append('date_fin', this.editedItem.date_fin);
          formData.append('duree_contrat', this.editedItem.duree_contrat);

      axios
        ({ url: "/api/v1/users/update_first_admin", data: formData, method: "PUT" })
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

      this.closeEdit();
    },

    closeEdit() {
      this.adminInfos = false;
    },

    // ------------------------
    // DATA
    // ------------------------
    updateChart() {
      this.series = this.Analytics.GraphData.series;
      this.chartOptions = {
        ...this.chartOptions,
        ...{
          xaxis: {
            categories: this.Analytics.GraphData.month,
          },
        },
      };

      this.series2 = this.Ratings.rates;
      this.chartOptions2 = {
        labels: this.Ratings.station,
      };
    },
  },

  computed: {
    ...mapGetters(["Current_employer","Works","Contracts","Services","Rights"]),

    // newTravel_1.id_type_contrat
    disableFieldInCaseOfCDI() {
      if(this.editedItem.id_type_contrat==1) return true
      else return false
    }
  },

   created() {
    this.$store.dispatch("init_current_employer_infos")

    this.$store.dispatch("init_service");
    this.$store.dispatch("init_contract");
    this.$store.dispatch("init_work");
    this.$store.dispatch("init_right");

    this.editedItem.user_id = localStorage.getItem("user-id");
    this.profilIMG = localStorage.getItem("user-profil");
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

.stationListboxWrapper2{
  background: white;
   padding: 15px;
   margin-top:25vh;
   display:flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   text-align:center;
}

.numberWrapper {
  margin-top: 2%;
  height: 21vh;
  border-radius: 10px 10px 10px 0px;
  background: linear-gradient(to right top,  #356eea, #037bb8, #9238ce);
  /* background: white; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.N-icon {
  height: 130px;
  width: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #E5F3FA48;
  border-radius: 100px;
}
.N-icon img{
  height:80px;
  width: 80px;
  border-radius: 100px;
}
.numberWrapper h1 {
  margin-bottom: -15px;
  font-size: 45px;
}
.numberWrapper h5 {
  color: var(--font-color);
}

.Jumbultron {
  margin-top: 1%;
  height: 21vh;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  display: flex;
  align-items: flex-start;
  padding-left: 30px;
  background: white;
  color: var(--Important-font-color);
}

.Jumbultron p {
  font-size: 12px;
}

.postP{
  margin-top: -2px;
  font-weight: bold;
 color: var(--main-blue-important);
 background-color: #fff;
}
.postP2{
  margin-top: -12px;
  /* font-weight: bold; */
 color: var(--main-blue-important);
}

.statWrapper0 {
  /* margin-top: 1%; */
  /* height: 220px; */
  border-radius: 10px;
  background: white;
  height:33.5vh;
  /* display: flex;
  justify-content:center;
  align-items: center; */
}
.depBox {
  width:100%;
  /* height: 100px; */
  display: flex;
  justify-content:space-between;
  /* align-items: center; */
  font-size:13px;
  overflow: hidden;
  overflow-y: auto;
  /* background-color: red; */
  padding-left: 10px;
  text-transform: uppercase;
  font-weight: bold;
  /* background:red; */
}
.depBox div:nth-child(1){
  height:33vh;
  /* background:red; */
}
.depBox div:nth-child(1) span{
  font-weight: 100;
  font-size:7px;
  letter-spacing:3px;
}
.depBox div:nth-child(2){
  height: 130px;
  width: 130px;
  margin-top:-28px;
  margin-right:-28px;
  background: linear-gradient(to right top,#9238ce, #037bb8, #356eea);
  border-radius: 100px;
  display: flex;
  justify-content:flex-start;
  align-items: center;
  padding-left:40px;
  padding-top:30px;
  font-weight: bold;
  font-size:20px;
  color: #fff;
}



.statWrapper1 {
  background: white ;
  height: 33.5vh;
  border-radius: 10px;
  display: flex;
  justify-content:center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
}
.statWrapper1 > div{
  width: 200px;
  /* background:red; */
  display: flex;
  justify-content:space-around;
  align-items: center;
  margin-left: 5px;
  font-size:8px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing:1px
}
.statWrapper1 p {
  /* margin-left: 10px; */
}
.statWrapper1 .v-icon {
  font-size:25px;
  color: var(--main-blue-important);
}

.statWrapper2 {
  background: white ;
  height: 33.5vh;;
  border-radius: 10px;
  padding: 30px;
  /* display: flex;
  justify-content:center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap; */
}
.statWrapper2 > span{
  border-radius: 5px;
  font-size:10px;
  background:var(--main-blue-important);
  padding: 3px;
  display:inline-block;
  margin: 5px;
  color:white;
}






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


/* Edit travel */
.editIMGO {
  margin-left: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color:#b71c1c; */
}
.updateForm {
  height: 250px;
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

</style>
