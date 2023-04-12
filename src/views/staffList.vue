<template>
  <div class="bodyBox">
    <div class="TheBoxBody ForTravelDeclaration">
       <!-- SHOW DIALOG -->
      <v-dialog v-model="dialog" max-width="1000">
        <v-card>
          <v-card-text>
            <!-- <v-container class="showDialog">
              <div class="imgAndTitle">
                <img src="@/assets/icone/visit.png" alt="" srcset="" />
              </div>
              <div class="statElment">
                <div>
                  <h5>VISITEUR</h5>
                  <h4>llll</h4>
                </div>
              </div>
              <div class="statElment">
                <div>
                  <h5>EMAIL</h5>
                  <h4>lllll</h4>
                </div>
              </div>
              <div class="statElment">
                <div>
                  <h5>TELEPHONE</h5>
                  <h4>lmmm</h4>
                </div>
              </div>
              <div class="statElment">
                
                <div>
                  <h5>MOTIF</h5>
                  <h4 style="text-align:justify">kdkooeei</h4>
                </div>
              </div>
              
            </v-container> -->
            <v-container fluid class="pouletBr">
              <v-row>
                <v-col cols="12" md="8" lg="8">
                  <div class="Jumbultron">
                    <div>
                      <h2>uhohe</h2>
                      <p class="postP">Responsable RH</p>
                      <!-- <p class="postP2">niangopaul blooraid.com</p> -->
                      <p>
                        qqdhuoe
                      </p>
                    </div>
                  </div>
                </v-col>
                <v-col cols="12" md="4" lg="4">
                  <div class="numberWrapper">
                    <div class="N-icon">
                      <!-- <img src="@/assets/img/team2.jpg" alt="" srcset="" /> -->
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
                        <p><span>departement</span><br> qduhzo</p>
                        <p><span>Attribution</span><br>tache & conge</p> <p><span>Attribution</span><br>Standart</p>
                        <p><span>Habitation</span><br> hzgozr</p>
                        <p><span>contact</span><br>zghoeu</p>
                      </div>
                      <div> </div>
                    </div>
                  </div>
                </v-col>
                <v-col cols="12" md="4" lg="4">
                  <div class="statWrapper2">
                    <span>Prise de parole en public </span>
                    <span>Anglais </span>
                    <span>JavaScript </span>
                    <span>Gestion de projet </span>
                    <span>anglais </span>
                    <span>Analyse de donnée </span>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>

       <!-- EDIT DIALOG -->
      <v-dialog v-model="dialogEdit" max-width="420">
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
                      :rules="[() => !!editedItem.email]"
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
                      :rules="[() => !!editedItem.contact]"
                      ref="pla_number"
                      type="number"
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
                          prepend-icon="mdi-card-account-details"
                        ></v-file-input>
                  </v-col>
                  <v-col cols="12" md="11" lg="11">
                    <v-file-input
                          chips
                          height="40"
                          solo
                          label="Curriculum vitæ"
                          prepend-icon="mdi-file-account"
                        ></v-file-input>
                  </v-col>
                  <v-col cols="12" md="11" lg="11">
                    <v-file-input
                          chips
                          height="40"
                          solo
                          label="Lettre motivation"
                          prepend-icon="mdi-file-star-four-points"
                        ></v-file-input>
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
                    background-color="#356eea24"
                    v-model="editedItem.role_id"
                    :items="Roles"
                    item-text="role"
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

      <v-row>
        <v-col cols="12" md="12" lg="12">
           <div class="stationListboxWrapper">
            <v-data-iterator
              :items="Employers"
              :items-per-page.sync="itemsPerPage"
              :page="page"
              :search="search"
              :sort-by="sortBy.toLowerCase()"
              :sort-desc="sortDesc"
              hide-default-footer
            >
              <template v-slot:header>
                <v-row>
                  <v-col cols="12" md="4" lg="4">
                    <v-text-field
                      v-model="search"
                      height="30"
                      solo
                      hide-details
                      prepend-inner-icon="mdi-search"
                      label="Rechercher"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="2" lg="2"></v-col>
                </v-row>

                <!-- PRODUCT DETAILS MODAL TEMPLATE FOR EACH PRODUCT -->
                <!-- <v-dialog
                  v-model="dialog"
                  transition="dialog-bottom-transition"
                  width="1200"
                  overlay-color="black"
                  overlay-opacity="0.8"
                  mainGreenColor
                >
                  <v-card tile>
                    <v-card-text>
                      <v-container>
                        <v-row class="detailsTemplate">
                          <MinoOneTravelCompany></MinoOneTravelCompany>
                        </v-row>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </v-dialog> -->
                <!-- END PRDUCT DETAILS MODAL TEMPLATE FOR EACH PRODUCT -->
              </template>

              <template v-slot:default="props">
                <v-row>
                  <v-col
                    v-for="item in props.items"
                    :key="item.nom"
                    cols="12"
                    md="3"
                    lg="3"
                  >
                    <div
                      class="InvBox"
                      @click="openDialog(item)"
                    >
                      <div>
                        <img src="@/assets/img/team2.jpg" alt="" srcset="">
                        <p>{{ item.nom }}</p>
                        <p>{{ item.nom_fonction }}</p>
                      </div>
                      <div class="price">
                        <v-icon @click.stop="showItem(item)">mdi-folder-eye</v-icon>
                        <v-icon @click.stop="editItem(item)">mdi-folder-edit</v-icon>
                        <!-- <v-icon @click.stop="showItem(item)">mdi-redo</v-icon>
                        <v-icon @click.stop="showItem(item)">mdi-archive-arrow-down</v-icon> -->
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </template>

              <template v-slot:footer>
                <v-row class="mt-2" align="center" justify="center">
                  <v-spacer></v-spacer>

                  <span class="mr-4 grey--text">
                    Page {{ page }} sur {{ numberOfPages }}
                  </span>
                  <v-btn
                    fab
                    dark
                    color="mainBlueColor "
                    class="mr-1"
                    @click="formerPage"
                  >
                    <v-icon>mdi-chevron-left</v-icon>
                  </v-btn>
                  <v-btn
                    fab
                    dark
                    color="mainBlueColor "
                    class="ml-1"
                    @click="nextPage"
                  >
                    <v-icon>mdi-chevron-right</v-icon>
                  </v-btn>
                </v-row>
              </template>
            </v-data-iterator>
          </div>
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
        color="mainGreenColor"
        >{{ VisiteaAddingResponse.message }}</v-alert
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
        erreur</v-alert
      >
    </transition>
  </div>
</template>

<script>
// import Vue from "vue";
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "StaffList",
  components: {},

  data: () => ({
    row: "check",
    DayType: true,

    Roles:[
      {role:"manager", id:"1"},
      {role:"standart", id:"2"},
    ],

    /* FOR DATA ITERATOR */
    itemsPerPageArray: [4, 8, 12],
    search: "",
    filter: {},
    sortDesc: false,
    page: 1,
    itemsPerPage: 8,
    sortBy: "name",
    keys: ["id", "name", "date", "post"],
  
    // FOR DIALOG
    dialog: false,
    editedItem: {},
    
    // For Visite edit
    VisiteaAddingResponse: "",
    dialogEdit: false,
    editedIndex: -1,


    // for alerte
    addingSuccess: false,
    addingfalse: false,
  }),

  methods: {
    /* FOR DIFFERENCIATION BETWEEN PRODUCT */
    getClass(quantity) {
      if (quantity <= 35) return "InvBox";
      else return "InvBox2";
    },
    /* FOR DATA ITERRATOR */
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1;
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1;
    },

    /* FOR ITEM DIALOG OPEN */
    showItem(item) {
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    // ------------------------
    // For Profil Edited
    // ------------------------
    editItem(item) {
      this.editedIndex = this.Employers.indexOf(item);
      this.editedItem = Object.assign({}, item);
      //  Open the Edit Dialogue
      this.dialogEdit = true;
    },

    editItemConfirm() {
      axios
        ({ url: "admin/update_infos_users/"+this.editedItem.id, data: this.editedItem, method: "PUT" })
        .then((response) => {
          // console.log(response.data);
          this.VisiteaAddingResponse = response.data;

          if (this.VisiteaAddingResponse.code == 200) {
            // Annulation effectuée
            this.VisiteaAddingResponse.message = "Modification effectuée";
            this.addingSuccess = !this.addingSuccess;
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
               this.$store.dispatch("init_userVisite");
            }, 3000);
          } else if (this.VisiteaAddingResponse.message != "success") {
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
      this.dialogEdit = false;
    },


   
  },

  computed: {
    ...mapGetters(["Employers","Works","Contracts","Services"]),
  },

  created() {
    this.$store.dispatch("init_employers")

    this.$store.dispatch("init_service");
    this.$store.dispatch("init_contract");
    this.$store.dispatch("init_work");
    // this.editedItem.company_id = localStorage.getItem("user-station");
    // this.editedItem.user_id = localStorage.getItem("user-id");
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
  margin-left: 15px;
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
}

.col-lg-4,
.col-md-4 {
  padding-bottom: 0px;
}





.stationListboxWrapper {
  background: transparent;
  border-radius: 10px;
  /* height: 53vh; */
  padding: 15px;
}

.InvBox {
  height: 130px;
  border-radius: 10px;
  background: white;
  line-height: 14px;
  padding-left: 30px;
  color: var(--Important-font-color);
  display: flex;
  justify-content: space-around;
}

.price {
  padding-top: 25px;
  width: 40%;
  /* height: 50px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 15px;
  /* background:red; */
}
.price > p {
  font-size: 12px;
}
.price .v-icon {
  margin-bottom: 5px;
  font-size: 12px;
  color: var(--main-blue-important);
}

.InvBox div:first-child {
  width: 70%;
}

.InvBox div:first-child img {
  margin-top: 30px;
  height: 40px;
  width:40px;
  border-radius: 100px;
  border: solid 2px;
  border-color: var(--main-blue-important) var(--main-white-color);
}
.InvBox div:first-child p:nth-child(2) {
  font-size: 15px;
  margin-bottom: -5px;
  font-weight: bold;
  color: var(--Important-font-color);
}
.InvBox div:first-child p:nth-child(3) {
  font-size: 10px;
  color: var(--Important-font-color);
}

.InvBox2 {
  height: 130px;
  border-radius: 10px;
  background: var(--main-blue-important);
  line-height: 10px;
  padding-left: 30px;
  color: white;
  display: flex;
  justify-content: space-around;
}
.InvBox2 div:first-child {
  width: 70%;
}
.InvBox2 div:first-child img {
  margin-top: 30px;
  height: 40px;
  width:40px;
  border-radius: 100px;
  border: solid 3px;
  border-color: var(--main-white-color);
}
.InvBox2 div:first-child p:nth-child(2) {
  font-weight: bold;
  color: white;
  font-size: 15px;
  margin-bottom: -5px;
}
.InvBox2 div:first-child p:nth-child(3) {
  font-size: 12px;
}
.InvBox2 .price .v-icon {
  font-size: 12px;
  color:white;
}



/* FOR THE TRAVEL LISTE DIALOG */
.splxoverlay {
  /* width: 50% !important; */
}
.theme--light.v-card {
  background-color: white;
}


/* Show details */
.showDialog{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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


.statElment {
  margin-bottom: 20px;
  display: flex;
  text-align: center;
  /* background-color:red; */
}
.statElment > div {
  /* margin-left: 10px; */
}
.statElment h5 {
  color: var(--main-blue-important);
}

.statusChange {
  display: flex;
  justify-content: center;
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
  background: var(--main-white-color);
  color: var(--Important-font-color);
}

.Jumbultron p {
  font-size: 12px;
}

.postP{
  margin-top: -2px;
  font-weight: bold;
 color: var(--main-blue-important);
 background-color: var(--main-white-color);
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
  background: var(--main-white-color);
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
  background: var(--main-white-color) ;
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
  background: var(--main-white-color) ;
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

.ReportForm{
  height: 170px;
  overflow-y: clip;
}



/*++++++++++++++++
===> MEDIUM Large tablet to laptop	960px > < 1264px*<===
+++++++++++++++++*/
@media screen and (min-width: 960px) and (max-width: 1100px){
  .InvBox {
    height: 170px;
    border-radius: 10px;
    background: var(--main-important-color);
    padding-left: 5px;
  }
  .price {
    padding-top: 25px;
    width: 100%;
    z-index: 15px;
  }
  .price > p {
    font-size: 10px;
  }
}
/*-------END------------*/



















@media (min-width: 960px) {
  .col-md-6 {
    height: 90px;
  }
}
</style>
