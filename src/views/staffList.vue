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
                      <h2>{{ editedItem.nom }} {{ editedItem.prenoms }}</h2>
                      <p class="postP">{{ editedItem.nom_fonction }}</p>
                      <!-- <p class="postP2">niangopaul blooraid.com</p> -->
                      <p>
                        {{ editedItem.description }}
                      </p>
                    </div>
                  </div>
                </v-col>
                <v-col cols="12" md="4" lg="4">
                  <div class="numberWrapper">
                    <div class="N-icon">
                      <img v-if="editedItem.avatar" :src="`${axios.defaults.baseURL}/uploads/user/profil/${editedItem.avatar}`"/>
                      <img v-if="!editedItem.avatar" src="@/assets/img/avatarProfil.jpg" alt="" srcset="" />
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
                         <p><span>departement</span><br> {{ editedItem.nom_departement }}</p>
                          <p v-if="editedItem.role_id==1"><span>Attribution</span><br>ADMINISTEUR</p>
                          <p v-if="editedItem.role_id==2"><span>Attribution</span><br>MANAGEUR</p>
                          <p v-if="editedItem.role_id==3"><span>Attribution</span><br>TEAM LEAD</p>
                          <p v-if="editedItem.role_id==4"><span>Attribution</span><br>STANDARD</p>
                          <p><span>Habitation</span><br> {{ editedItem.lieu_naissance }}</p>
                          <p><span>contact</span><br>{{ editedItem.contact }}</p>
                          <p><span>E-mail</span><br>{{ editedItem.email }}</p>
                          <p><span>Date de naissance</span><br>{{ editedItem.lieu_naissance }}</p>
                          <p><span>Lieu d'habitation</span><br>{{ editedItem.date_naissance }}</p>
                      </div>
                      <div>{{ editedItem.anagramme }} </div>
                    </div>
                  </div>
                </v-col>
                <v-col cols="12" md="4" lg="4">
                  <div class="statWrapper2">
                    <span>Debut contrat:</span>
                    <span>{{ editedItem.date_debut }}</span>
                    <span>Fin contrat:</span>
                    <span>{{ editedItem.date_fin }} </span>
                    <span>Durée contrat:</span>
                    <span>{{ editedItem.duree_contrat }} </span>
                    <span>{{ editedItem.type_contrat }}</span>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>

       <!-- EDIT DIALOG -->
      <v-dialog v-model="dialogEdit" max-width="370">
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
                          v-model="editedItem.piece_identite"
                          label="Pièce d'identité"
                          prepend-icon="mdi-card-account-details"
                        ></v-file-input>
                  </v-col>
                  <v-col cols="12" md="11" lg="11">
                    <v-file-input
                          chips
                          height="40"
                          solo
                          v-model="editedItem.CV"
                          label="Curriculum vitæ"
                          prepend-icon="mdi-file-account"
                        ></v-file-input>
                  </v-col>
                  <v-col cols="12" md="11" lg="11">
                    <v-file-input
                          chips
                          height="40"
                          solo
                          v-model="editedItem.LM"
                          label="Lettre motivation"
                          prepend-icon="mdi-file-star-four-points"
                        ></v-file-input>
                  </v-col>
                  <v-col cols="12" md="11" lg="11">
                    <v-file-input
                          chips
                          height="40"
                          solo
                        v-model="editedItem.contrat"
                        label="Contrat"
                        prepend-icon="mdi-file-sign"
                        ></v-file-input>
                  </v-col>



                <v-col cols="12" md="11" lg="11">
                  <v-select
                    background-color="#356eea24"
                    v-model="editedItem.the_fonction_id"
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
                    v-model="editedItem.the_department_id"
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
                    v-model="editedItem.the_contrat_id"
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

          <v-card-actions style="display:flex;justify-content:space-around">
            <!-- <v-spacer></v-spacer> -->
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

      <!-- ARCHIV DIALOG -->
       <v-dialog v-model="dialogAchiv" max-width="370">
        <v-card>
          <v-card-text>
            <v-container>
              <!-- <div class="confirmTitle red">AVERTISSEMENT !</div> -->
              <div class="imgAndTitle  deleteIMG">
                  <v-icon color="red" large>
                    mdi-close
                  </v-icon>
                </div>
              <v-container>
                <div class="CancelVerification">
                  Cette action supprimera le compte <br />
                  <b>{{ editedItem.nom }} {{ editedItem.prenoms }}</b> <br>
                  la liste des employés.
                </div>
                <div class="verificationAction">
                  <v-btn
                    color="grey"
                    
                    depressed
                    @click="closeArchiv"
                    style="color: white"
                    >Annuler</v-btn
                  >
                  <v-btn
                    color="red"
                    
                    depressed
                    @click="ArchivItemConfirm"
                    style="color: white"
                    >Confirmer</v-btn
                  >
                </div>
              </v-container>
              </v-container>
            
          </v-card-text>
        </v-card>
      </v-dialog>

      <v-row>
        <v-col cols="12" md="12" lg="12">
           <div v-if="Employers.length!=0" class="stationListboxWrapper">
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
                  mainBlueColor
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
                      @click="showItem(item)"
                    >
                      <div>
                        
                        <img v-if="item.avatar" :src="`${axios.defaults.baseURL}/uploads/user/profil/${item.avatar}`"/>
                        <img v-if="!item.avatar" src="@/assets/img/avatarProfil.jpg" alt="" srcset="" />
                        <p>{{ item.nom }}</p>
                        <p>{{ item.nom_fonction }}</p>
                      </div>
                      <div class="price">
                        <v-icon @click.stop="editItem(item)">mdi-folder-edit</v-icon>
                        <v-icon @click.stop="ArchivItem(item)">mdi-folder-remove</v-icon>
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
          <div v-else class="stationListboxWrapper2">
            <v-icon x-large color="mainBlueColor"> mdi-alert-circle-outline </v-icon>
            Veuillez enregistrer au moins un employé
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
        color="mainBlueColor"
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
    
    // For USER edit
    VisiteaAddingResponse: "",
    dialogEdit: false,
    editedIndex: -1,

    // For USER Archiv
    dialogAchiv: false,

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
      const formData = new FormData();
      formData.append('email', this.editedItem.email);
      formData.append('date_naissance', this.editedItem.date_naissance);
      formData.append('lieu_naissance', this.editedItem.lieu_naissance);
      formData.append('piece_identite', this.editedItem.piece_identite);
      formData.append('CV', this.editedItem.CV);
      formData.append('LM', this.editedItem.LM);
      formData.append('contrat', this.editedItem.contrat);
      formData.append('fiche_poste', this.editedItem.fiche_poste);
      formData.append('id_fonction', this.editedItem.the_fonction_id);
      formData.append('department_id', this.editedItem.the_department_id);
      formData.append('role_id', this.editedItem.role_id);  
      formData.append('id_type_contrat', this.editedItem.the_contrat_id);
      formData.append('date_debut', this.editedItem.date_debut);
      formData.append('date_fin', this.editedItem.date_fin);
      formData.append('duree_contrat', this.editedItem.duree_contrat);
      formData.append('the_user_id', this.editedItem.the_user_id);
      formData.append('the_employe_id', this.editedItem.the_employe_id);
      formData.append('the_contrat_id', this.editedItem.the_contrat_id);

      axios
        ({ url: "/api/v1/users/update_employe", data: formData, method: "PUT" })
        .then((response) => {
          // console.log(response.data);
          this.VisiteaAddingResponse = response.data;

          if (this.VisiteaAddingResponse.code == 200) {
            // Annulation effectuée
            this.VisiteaAddingResponse.message = "Modification effectuée";
            this.addingSuccess = !this.addingSuccess;
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
               this.$store.dispatch("init_employers");
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


    // ------------------------
    // For User Archive
    // 
    ArchivItem(item) {
      this.editedIndex = this.Employers.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogAchiv = true;
      // this.BeforeDialogDelete = false;
    },
    // confirm deleted of nature
    ArchivItemConfirm() {
       axios
        ({ url: "/api/v1/admin/archive_user/"+this.editedItem.the_employe_id,  method: "PUT" })
        .then((response) => {
          this.VisiteaAddingResponse = response.data;

          if (this.VisiteaAddingResponse) {
            // Annulation effectuée
            this.VisiteaAddingResponse.message = "Archivage effectué";
            this.addingSuccess = !this.addingSuccess;
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
               this.$store.dispatch("init_employers");
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

      this.closeArchiv();
    },

    closeArchiv() {
      this.dialogAchiv = false;
    },




   
  },

  computed: {
    ...mapGetters(["Employers","Works","Contracts","Services","Rights"]),

    numberOfPages () {
        return Math.ceil(this.Employers.length / this.itemsPerPage)
      },
  },

  created() {
    this.$store.dispatch("init_employers")

    this.$store.dispatch("init_service");
    this.$store.dispatch("init_contract");
    this.$store.dispatch("init_work");
    this.$store.dispatch("init_right");
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
.stationListboxWrapper2{
  background: white;
   padding: 15px;
   margin-top:12vh;
   display:flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
}

.InvBox {
  /*height: 130px;*/
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
  margin-bottom:10px;
  font-size: 14px;
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
