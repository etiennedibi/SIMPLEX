<template>
  <div class="bodyBox">
    <div class="TheBoxBody">
      <p class="sectionTitle">Types de Congés</p>
      <v-container fluid class="pouletBr">
        <v-row>
          <v-col cols="12" md="3" lg="3">
            <div class="numberWrapper formBox">
              <v-form ref="form1">
                <v-container fluid class="addconge">
                  <v-row>
                    <v-col cols="12" md="12" lg="12">
                      <v-text-field
                        height="40"
                        solo
                        append-icon="mdi-call-missed"
                        ref="location"
                        type="text"
                        v-model="new_Conge.type_conge"
                        :rules="[() => !!new_Conge.type_conge]"
                        value=""
                        label="Denomination"
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                    <div style="width:100%; padding: 0px 10px">
                      <v-textarea
                        solo
                        clearable
                         v-model="new_Conge.description"
                        :rules="[() => !!new_Conge.description]"
                        background-color="#356eea24"
                        clear-icon="mdi-close-circle"
                        rows="4"
                        name="input-7-4"
                        label="Description"
                        class="the-message-area"
                      ></v-textarea>
                    </div>
                    <v-col cols="12" md="12" lg="12">
                      <v-text-field
                        height="40"
                         v-model="new_Conge.cota_conge"
                        :rules="[() => !!new_Conge.cota_conge,(v) => /[0-9]+/i.test(v)]"
                        solo
                        append-icon="mdi-numeric"
                        ref="pla_number"
                        label="Nombre de jours"
                        type="text"
                        maxlength="3"
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12" lg="12">
                      <v-btn
                        small
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
          <v-col cols="12" md="1" lg="1" class="leftNumber">
            <div class="stat1">
              <div class="N-icon">
                <v-icon color="mainBlueColor">mdi-calendar-badge</v-icon>
              </div>
              <h1>{{ congeNumber }}</h1>
              <h5 style="text-align: center">types</h5>
            </div>
          </v-col>
          <v-col cols="12" md="8" lg="8">
            <div class="numberWrapper">
              <allCongeType></allCongeType>
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
        Type de congé Enregistré avec succes</v-alert
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
        Echec de l'Ajout</v-alert
      >
    </transition>
  </div>
</template>

<script>
import axios from "axios";
import allCongeType from "../components/Config/allCongeType.vue";

export default {
  name: "conge",
  components: {
    allCongeType,
  },

  data: () => ({
    // FOR FORM SENDING
    new_Conge: {
      type_conge: "",
      cota_conge: "",
      compagnie_id:"",
    },

    congeaAddingResponse: "",
    addingSuccess: false,
    addingfalse: false,

    congecomponentKey1: 0,

    // FOR ANALYTICS
    // theNumberconge = 0,
  }),

  methods: {
    submit1() {
      if (this.$refs.form1.validate()) {
        axios({ url: "admin/store_type_conges", data: this.new_Conge, method: "POST" })
        .then((response) => {
          this.congeaAddingResponse = response.data;
          console.log(response.data);
          if (this.congeaAddingResponse) {
            this.addingSuccess = !this.addingSuccess;
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
              this.$store.dispatch("init_conge");
            }, 3000);
          } else {
            this.addingfalse = !this.addingfalse;
            setTimeout(() => {
              this.addingfalse = !this.addingfalse;
            }, 3000);
          }
        })
        .catch((error) => {
          this.congeaAddingResponse = error.message;
          console.error("There was an error!", error);
        });

      this.$refs.form1.reset();
      }
      
    },

    
  },

  computed: {
    

    congeNumber() {
      return this.$store.getters.Conges.length;
    },
  },

  created() {
    this.new_Conge.compagnie_id = localStorage.getItem("user-compagnie");
  },
};
</script>

<style scoped>
.sectionTitle {
  margin: 0;
  margin-left: 15px;
  margin-bottom: 5px;
  font-size: 15px;
  font-weight: bold;
}
.numberWrapper {
  height:55vh; /*100% de Thebody qui est dans le CSS global*/
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
  height: 57vh;
} */
/* .addconge {
  height: 150px;
} */

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
  justify-content: center;
  align-items: center;
  background: #356eea24;
  border-radius: 100px;
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
  .col-md-12 {
    height: 68px;
  }
}

/*------------------------
    ---RESPONSIVE--- 
--------------------------*/

/*++++++++++++++++
===> MEDIUM Large tablet to laptop	960px > < 1264px*<===
+++++++++++++++++*/
@media screen and (min-width: 960px) and (max-width: 1190px){
  .stat1 {
    font-size: 12px;
  }
  .N-icon {
    height: 35px;
    width: 35px;
  }
  .v-btn:not(.v-btn--round).v-size--large {
    width: 100%;
  }
}
/*-------END------------*/
</style>
