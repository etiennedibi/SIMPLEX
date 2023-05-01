<template>
  <div class="TheBoxBody">
    <!-- SHOW DIALOG -->
    <v-dialog v-model="dialogProjet" max-width="370">
      <v-card>
        <v-card-text>
          <v-container class="showDialog">
            <div class="imgAndTitle">
              <!-- <img src="@/assets/icone/tasks.png" alt="" srcset="" /> -->
              <v-icon color="mainBlueColor" large>
                    mdi-folder
              </v-icon>
            </div>
            <div class="statElment Elment1">
              <div>
                <h4>{{ editedItem.title }}</h4>
              </div>
            </div>
            <div class="statElment Elment2">
              <div>
                <h5>DETAILS</h5>
                <p>
                  {{ editedItem.description }}
                </p>
              </div>
            </div>
            <div class="statElment Elment3">
              <div>
                <h5>DEBUT</h5>
                <h4>{{ editedItem.start_at }}</h4>
              </div>
              <div>
                <h5>FIN</h5>
                <h4>{{ editedItem.finish_at }}</h4>
              </div>
            </div>
            
          </v-container>
        </v-card-text>
        
      </v-card>
    </v-dialog>

    <!-- EDIT VISITE DIALOG -->
    <v-dialog v-model="dialogEdit" max-width="370">
      <v-card>
        <v-card-text>
          <v-container>
            <div class="imgAndTitle  editIMGO">
              <!-- <img src="@/assets/icone/tasks.png" alt="" srcset="" /> -->
              <v-icon color="mainBlueColor" large>
                    mdi-folder
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
                        label="Inititulé"
                        ref="matri"
                        v-model="editedItem.title"
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
                      v-model="editedItem.start_at"
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
                      v-model="editedItem.finish_at"
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
                      v-model="editedItem.description"
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

     <!-- DELETE VISITE ON   DIALOG -->
    <v-dialog v-model="dialogDeleteOneVariante" max-width="370">
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
                Cette action supprimera definitivement ce projet
              </div>
              <div class="verificationAction">
                <v-btn
                  color="grey"
                  
                  depressed
                  @click="closeDeleteOnevariante"
                  style="color: white"
                  >Annuler</v-btn
                >
                <v-btn
                  color="red"
                  
                  depressed
                  @click="deleteItemVarinteConfirm"
                  style="color: white"
                  >Confirmer</v-btn
                >
              </div>
            </v-container>
            </v-container>
          
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-container fluid>
      <v-row v-if="this.role==4">
        <v-col v-if="!switch1" cols="12" md="12" lg="12" class="box">
          <div class="stationListboxWrapper">
            <v-data-iterator
              :items="ProjectsEmploye"
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
                      dense
                      solo
                      height="50"
                      hide-details
                      prepend-inner-icon="mdi-search"
                      label="Rechercher"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="2" lg="2"></v-col>
                </v-row>

                <!-- PRODUCT DETAILS MODAL TEMPLATE FOR EACH PRODUCT -->
                <v-dialog
                  v-model="dialog"
                  width="900"
                  overlay-color="black"
                  overlay-opacity="0.8"
                  mainBlueColor
                >
                  <v-card tile>
                    <!-- 
                      transition="dialog-bottom-transition"
                  
                      <v-toolbar flat color="Importantcolor Importantcolor--text" >
                              <v-btn icon dark @click="dialog = false">
                                <v-icon class="Titlecolor--text">mdi-close</v-icon>
                              </v-btn> 
                              <v-toolbar-title>POUET</v-toolbar-title>
                            </v-toolbar>             -->

                    <v-card-text>
                      <v-container>
                        <v-row class="detailsTemplate">
                          <EmployeTaskList :project_id = "selectedItem.id" :project_name = "selectedItem.title"></EmployeTaskList>
                        </v-row>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </v-dialog>
                <!-- END PRDUCT DETAILS MODAL TEMPLATE FOR EACH PRODUCT -->
              </template>

              <template v-slot:default="props">
                <v-row>
                  <v-col
                    v-for="item in props.items"
                    :key="item.name"
                    cols="12"
                    md="3"
                    lg="3"
                  >
                    <div
                      class="InvBox"
                      @click="openDialog(item)"
                    >
                      <div>
                        <v-icon color="mainBlueColor">mdi-ballot</v-icon>
                        <p>{{ item.title }}</p>
                        <p>{{ item.created_at_view }}</p>
                      </div>
                      <div class="price">
                        <v-btn icon style="margin-bottom:-15px" color="mainBlueColor" @click.stop="showItem(item)"
                          ><v-icon>mdi-dots-horizontal-circle</v-icon></v-btn>
                        <p>{{ item.city }}</p>
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </template>

              <template v-slot:footer>
                <v-row class="mt-2" align="center" justify="center">
                  <v-spacer></v-spacer>

                  <span class="mr-4 grey--text">
                    Page {{ page }} sur {{ numberOfPages2 }}
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
      <v-row v-if="this.role==1 || this.role==2 || this.role==3">
        <v-col v-if="!switch1" cols="12" md="11" lg="11" class="box">
          <div class="stationListboxWrapper">
            <v-data-iterator
              :items="ProjectsEmploye"
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
                      dense
                      solo
                      height="50"
                      hide-details
                      prepend-inner-icon="mdi-search"
                      label="Rechercher"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="2" lg="2"></v-col>
                </v-row>

                <!-- PRODUCT DETAILS MODAL TEMPLATE FOR EACH PRODUCT -->
                <v-dialog
                  v-model="dialog"
                  width="900"
                  overlay-color="black"
                  overlay-opacity="0.8"
                  mainBlueColor
                >
                  <v-card tile>
                    <!-- 
                      transition="dialog-bottom-transition"
                  
                      <v-toolbar flat color="Importantcolor Importantcolor--text" >
                              <v-btn icon dark @click="dialog = false">
                                <v-icon class="Titlecolor--text">mdi-close</v-icon>
                              </v-btn> 
                              <v-toolbar-title>POUET</v-toolbar-title>
                            </v-toolbar>             -->

                    <v-card-text>
                      <v-container>
                        <v-row class="detailsTemplate">
                          <EmployeTaskList :project_id = "selectedItem.id" :project_name = "selectedItem.title"></EmployeTaskList>
                        </v-row>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </v-dialog>
                <!-- END PRDUCT DETAILS MODAL TEMPLATE FOR EACH PRODUCT -->
              </template>

              <template v-slot:default="props">
                <v-row>
                  <v-col
                    v-for="item in props.items"
                    :key="item.name"
                    cols="12"
                    md="3"
                    lg="3"
                  >
                    <div
                      class="InvBox"
                      @click="openDialog(item)"
                    >
                      <div>
                        <v-icon color="mainBlueColor">mdi-ballot</v-icon>
                        <p>{{ item.title }}</p>
                        <p>{{ item.created_at_view }}</p>
                      </div>
                      <div class="price">
                        <v-btn icon style="margin-bottom:-15px" color="mainBlueColor" @click.stop="showItem(item)"
                          ><v-icon>mdi-dots-horizontal-circle</v-icon></v-btn>
                        <p>{{ item.city }}</p>
                      </div>
                    </div>
                  </v-col>
                </v-row>
              </template>

              <template v-slot:footer>
                <v-row class="mt-2" align="center" justify="center">
                  <v-spacer></v-spacer>

                  <span class="mr-4 grey--text">
                    Page {{ page }} sur {{ numberOfPages2 }}
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
        <v-col v-if="switch1" cols="12" md="11" lg="11" class="box">
          <div class="stationListboxWrapper">
            <v-data-iterator
              :items="Projects"
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
                      dense
                      solo
                      height="50"
                      hide-details
                      prepend-inner-icon="mdi-search"
                      label="Rechercher"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="2" lg="2"></v-col>
                </v-row>

                <!-- PRODUCT DETAILS MODAL TEMPLATE FOR EACH PRODUCT -->
                <v-dialog
                  v-model="dialog"
                  width="900"
                  overlay-color="black"
                  overlay-opacity="0.8"
                  mainBlueColor
                >
                  <v-card tile>
                    <!-- 
                      transition="dialog-bottom-transition"
                  
                      <v-toolbar flat color="Importantcolor Importantcolor--text" >
                              <v-btn icon dark @click="dialog = false">
                                <v-icon class="Titlecolor--text">mdi-close</v-icon>
                              </v-btn> 
                              <v-toolbar-title>POUET</v-toolbar-title>
                            </v-toolbar>             -->

                    <v-card-text>
                      <v-container>
                        <v-row class="detailsTemplate">
                          <UserTaskList :project_id = "selectedItem.id" :project_name = "selectedItem.title"></UserTaskList>
                        </v-row>
                      </v-container>
                    </v-card-text>
                  </v-card>
                </v-dialog>
                <!-- END PRDUCT DETAILS MODAL TEMPLATE FOR EACH PRODUCT -->
              </template>

              <template v-slot:default="props">
                <v-row>
                  <v-col
                    v-for="item in props.items"
                    :key="item.name"
                    cols="12"
                    md="3"
                    lg="3"
                  >
                    <div
                      class="InvBox"
                      @click="openDialog(item)"
                    >
                      <div>
                        <v-icon color="mainBlueColor">mdi-ballot</v-icon>
                        <p>{{ item.title }}</p>
                        <p>{{ item.created_at_view }}</p>
                      </div>
                      <div class="price">
                        <v-btn icon style="margin-bottom:-15px" color="mainBlueColor" @click.stop="showItem(item)"
                          ><v-icon>mdi-dots-horizontal-circle</v-icon></v-btn>
                          <v-btn icon style="margin-bottom:-15px" color="mainBlueColor" @click.stop="editItem(item)"
                          ><v-icon>mdi-pen</v-icon></v-btn>
                          <v-btn icon color="mainBlueColor" @click.stop="deleteItem(item)"
                          ><v-icon>mdi-trash-can</v-icon></v-btn>
                        <p>{{ item.city }}</p>
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
        <v-col cols="12" md="1" lg="1" class="leftNumber">
          <div class="stat1">
            <div class="N-icon">
              <v-switch
                inset
                v-model="switch1"
              ></v-switch>
            </div>
            <h5>tâches</h5>
            <h5 style="text-align: center">assignées</h5>
          </div>
        </v-col>
      </v-row>
    </v-container>



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
        {{ VisiteaAddingResponse.message }}</v-alert
      >
    </transition>
  </div>
</template>

<script>
import UserTaskList from "./UserTaskList.vue";
import EmployeTaskList from "./EmployeTaskList.vue";
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "UserProjetTaskList",

  components: {
    UserTaskList,
    EmployeTaskList,
  },

  data: () => ({
    
    // For the list dialog
    dialog: false,
    selectedItem: {},
    /* FOR DATA ITERATOR */
    itemsPerPageArray: [4, 8, 12],
    search: "",
    filter: {},
    sortDesc: false,
    page: 1,
    itemsPerPage: 8,
    sortBy: "name",
    keys: ["id", "name", "date", "heure"],
    items: [
      {
        name: "CREATION DE LOT DE CONSOLATION ",
        date: "21-01-2021",
        heure: "09:00",
        details: {
          vendus: 30,
          aVendre: 45,
          restant: 15,
          annules: 5,
          gains: 150000,
        },
      },
      {
        name: "MINO-Trans",
        date: "01-01-2021",
        heure: "09:00",
        details: {
          vendus: 45,
          aVendre: 45,
          restant: 0,
          annules: 5,
          gains: 160000,
        },
      },
      {
        name: "Strategie de communication",
        date: "25-03-2021",
        heure: "09:00",
        details: {
          vendus: 30,
          aVendre: 20,
          restant: 10,
          annules: 0,
          gains: 350000,
        },
      },
      {
        name: "Deploiement MINO-Trans",
        date: "25-03-2021",
        heure: "09:00",
        details: {
          vendus: 30,
          aVendre: 45,
          restant: 15,
          annules: 5,
          gains: 150000,
        },
      },
      {
        name: "Protocol de sécurité",
        date: "25-04-2021",
        heure: "09:00",
        details: {
          vendus: 30,
          aVendre: 45,
          restant: 15,
          annules: 5,
          gains: 150000,
        },
      },
      {
        name: "Site web Blooraid",
        date: "25-03-2021",
        heure: "09:00",
        details: {
          vendus: 30,
          aVendre: 45,
          restant: 15,
          annules: 5,
          gains: 150000,
        },
      },
      {
        name: "Strategie publicitaire",
        date: "25-03-2021",
        heure: "09:00",
        details: {
          vendus: 30,
          aVendre: 45,
          restant: 15,
          annules: 5,
          gains: 150000,
        },
      },
      {
        name: "Politique de recrutement",
        date: "15-02-2021",
        heure: "09:00",
        details: {
          vendus: 30,
          aVendre: 45,
          restant: 15,
          annules: 5,
          gains: 150000,
        },
      },
      {
        name: "Structuration des données",
        date: "25-03-2021",
        heure: "09:00",
        details: {
          vendus: 30,
          aVendre: 45,
          restant: 15,
          annules: 5,
          gains: 150000,
        },
      },
      {
        name: "Projet KitKat",
        date: "25-03-2021",
        heure: "09:00",
        details: {
          vendus: 30,
          aVendre: 45,
          restant: 15,
          annules: 5,
          gains: 150000,
        },
      },
    ],
     items2: [
      {
        name: "CREATION DE LOT DE CONSOLATION ",
        date: "21-01-2021",
        heure: "09:00",
        details: {
          vendus: 30,
          aVendre: 45,
          restant: 15,
          annules: 5,
          gains: 150000,
        },
      },
      {
        name: "MINO-Trans",
        date: "01-01-2021",
        heure: "09:00",
        details: {
          vendus: 45,
          aVendre: 45,
          restant: 0,
          annules: 5,
          gains: 160000,
        },
      },
      {
        name: "Politique de recrutement",
        date: "15-02-2021",
        heure: "09:00",
        details: {
          vendus: 30,
          aVendre: 45,
          restant: 15,
          annules: 5,
          gains: 150000,
        },
      },
      {
        name: "Structuration des données",
        date: "25-03-2021",
        heure: "09:00",
        details: {
          vendus: 30,
          aVendre: 45,
          restant: 15,
          annules: 5,
          gains: 150000,
        },
      },
      {
        name: "Projet KitKat",
        date: "25-03-2021",
        heure: "09:00",
        details: {
          vendus: 30,
          aVendre: 45,
          restant: 15,
          annules: 5,
          gains: 150000,
        },
      },
    ],


    // for alerte
    addingSuccess: false,
    addingfalse: false,

    VisiteaAddingResponse: "",
    // FOR PROJECT DETAILS
    dialogProjet:false,
    // POUR VOIR
    dialogEdit: false,
    editedItem: {},
    editedIndex:'',

    // POUR DELETE
    dialogDeleteOneVariante:false,

    // FOR SWICHING ADMIN TASKS
    switch1: false,
    // For User
    role: "",

  
  }),

  mounted() {
    setTimeout(() => {
      this.updateChart();
      this.showChart = true;
    }, 500);
  },

  computed: {
    ...mapGetters(["Projects","ProjectsEmploye", "items"]),

    numberOfPages() {
      return Math.ceil(this.Projects.length / this.itemsPerPage);
    },

    numberOfPages2() {
      return Math.ceil(this.ProjectsEmploye.length / this.itemsPerPage);
    },
  },

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
    openDialog(item) {
      this.selectedItem = Object.assign({}, item);
      this.$store.state.OneSTation = this.selectedItem.id;
      // this.editedIndex = this.selectedItem.id;
      this.dialog = !this.dialog;
    },

     showItem(item) {
      this.editedItem = Object.assign({}, item);
      this.editedIndex = this.editedItem.id;
      console.log("MOIII");
      this.dialogProjet = true;
    },
    // ------------------------
    // DATA
    // ------------------------


     // ------------------------
    // For Profil Edited
    // ------------------------
    editItem(item) {
      this.editedIndex = this.Projects.indexOf(item);
      this.editedItem = Object.assign({}, item);
      //  Open the Edit Dialogue
      this.dialogEdit = true;
    },

    editItemConfirm() {
      // this.editedItem.id_visite = this.editedItem.id;
      axios
        ({ url: "/api/v1/admin/update_projects/"+this.editedItem.id, data: this.editedItem, method: "PUT" })
        .then((response) => {
          // console.log(response.data);
          this.VisiteaAddingResponse = response.data;

          if (this.VisiteaAddingResponse) {
            // Annulation effectuée
            this.VisiteaAddingResponse.message = "modification effectuée";
            this.addingSuccess = !this.addingSuccess;
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
               this.$store.dispatch("init_project");
            }, 3000);
          } else if (!this.VisiteaAddingResponse) {
            this.VisiteaAddingResponse.message = "echec de l'opération";
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
    // For Profil DELETE
    // ------------------------
    deleteItem(item) {
      this.editedIndex = this.Projects.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDeleteOneVariante = true;
    },
     deleteItemVarinteConfirm() {
      // axios
      //   .delete(
      //     "/api/v1/admin/Archive_projects/" + this.editedItem.id
      //   )
         axios
        ({ url: "/api/v1/admin/Archive_projects/"+this.editedItem.id, method: "PUT" })
        .then((response) => {
          this.VisiteaAddingResponse = response.data;

          if (this.VisiteaAddingResponse) {
            // Annulation effectuée
            this.VisiteaAddingResponse.message = "Suppression effectuée";
            this.addingSuccess = !this.addingSuccess;
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
               this.$store.dispatch("init_project");
            }, 3000);
          } else if (!this.VisiteaAddingResponse) {
            this.VisiteaAddingResponse.message = "echec de l'opération";
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

      this.closeDeleteOnevariante();
    },

    closeDeleteOnevariante() {
      this.dialogDeleteOneVariante = false;
    },  
  },

   created() {
    this.$store.dispatch("init_project");
    this.$store.dispatch("init_project_employe");
    
    this.new_project.compagnie_id = localStorage.getItem("user-compagnie");
    this.new_project.id_user  = localStorage.getItem("user-id");
    this.new_task.compagnie_id = localStorage.getItem("user-compagnie");
    this.new_task.createur  = localStorage.getItem("user-id");
    this.role = localStorage.getItem("user-role");
    // this.new_task.id_departement  = localStorage.getItem("user-department");
    this.new_task.id_departement  = 1;


  },
};
</script>

<style scoped>
.bodyBox {
  height: inherit;
}

.statboxWrapper {
  padding-top: 10px;
  /* background: white; */
  border-radius: 10px;
  height: 56.5vh;
}
.statboxWrapper h4 {
  margin-left: 10px;
}

.statboxWrapper div {
  height: 94.5%;
}

.stationListboxWrapper {
  /* background: white; */
  border-radius: 10px;
  /* height: 53vh; */
  padding: 15px;
}

.v-input--selection-controls {
  margin-top: 10px;
  padding-top: 4px;
}

.InvBox {
  /* height: 130px; */
  border-radius: 10px;
  background: white;
  line-height: 14px;
  padding-left: 30px;
  color: var(--Important-font-color);
  display: flex;
  justify-content: space-around;
}

.price {
  padding-top: 15px;
  width: 40%;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 15px;
}
.price > p {
  font-size: 12px;
}
.price .v-icon {
  font-size: 15px;
  /* margin-bottom: -50px; */
  color: var(--Important-font-color);
}

.InvBox div:first-child {
  width: 70%;
  display: flex;
  flex-direction: column;
  /* background-color:red; */
  align-items: flex-start;
  justify-content: space-between;
}

.InvBox div:first-child .v-icon {
  margin-top: 20px;
  font-size: 25px;
  color: var(--font-color);
}
.InvBox div:first-child p:nth-child(2) {
  font-size: 13px;
  font-weight: bold;
  color: var(--Important-font-color);
}

.InvBox2 {
  height: 170px;
  border-radius: 10px;
  background: #60674b;
  line-height: 10px;
  padding-left: 30px;
  color: white;
  display: flex;
  justify-content: space-around;
}
.InvBox2 div:first-child {
  width: 70%;
}
.InvBox2 div:first-child .v-icon {
  margin-top: 20px;
  font-size: 35px;
  color: #35373a;
}
.InvBox2 div:first-child p:nth-child(2) {
  font-size: 30px;
  font-weight: bold;
  color: white;
}
.InvBox2 div:first-child p:nth-child(3) {
  line-height: 15px;
}




.stat1 {
  background: white;
  height: 100%;
  border-radius: 10px;
  margin-bottom: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.N-icon {
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center!important;
  align-items: center!important;
  padding-left:10px;
  /* background: #356eea24;
  border-radius: 100px; */
}

/* FOR THE TRAVEL LISTE DIALOG */
.splxoverlay {
  /* width: 50% !important; */
}
.theme--light.v-card {
  background-color: #ffffff;
}


/* Show details */
.showDialog{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
}
.imgAndTitle {
  margin: 15px 0px;
  /* margin-left: 110px; */
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
.statElment {
  margin-bottom: 20px;
  display: flex;
  text-align: center;
  /* background-color:red; */
}
.Elment1{
  text-transform: uppercase;
  font-size:12px;
}
.Elment2{
  /* text-transform: uppercase; */
  font-size:11px;
}
.Elment3{
  /* text-transform: uppercase; */
  width:100%;
  font-size:11px;
  display: flex;
  justify-content: space-between;
}
.statElment h5 {
  color: var(--main-blue-important);
}

.statusChange {
  display: flex;
  justify-content: center;
}

.status{
  display:inline-block;
  padding: 7px;
  border-radius:50px;
  font-size:11px;
  font-weight: bold
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


/* Delete travel */
.deleteIMG {
  margin-left: 37%;
  margin-bottom: 0px;
  /* background-color:red; */

  border: 3px solid grey;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.CancelVerification {
  text-align: center;
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 30px;
}
.verificationAction {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.verificationAction > button {
  width: 100px;
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
</style>
