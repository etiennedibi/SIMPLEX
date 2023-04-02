<template>
  <div class="bodyBox">
    <div class="TheBoxBody">
      <p class="sectionTitle">Types de Contrats</p>
      <v-container fluid class="pouletBr">
        <v-row>
          <v-col cols="12" md="3" lg="3">
            <div class="numberWrapper formBox">
              <v-form ref="form1">
                <v-container fluid class="addContract">
                  <v-row>
                    <v-col cols="12" md="12" lg="12">
                      <v-text-field
                        height="60"
                        solo
                        ref="location"
                        type="text"
                        v-model="new_Contract.type_contrat"
                        :rules="[() => !!new_Contract.type_contrat]"
                        value=""
                        label="Denomination"
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                    <div style="width:100%; padding: 0px 10px; margin-top:5px;">
                      <v-textarea
                        solo
                        v-model="new_Contract.description"
                        clearable
                        background-color="#356eea24"
                        clear-icon="mdi-close-circle"
                        rows="9"
                        name="input-7-4"
                        label="Description"
                        class="the-message-area"
                      ></v-textarea>
                    </div>
                    <v-col cols="12" md="12" lg="12">
                      <v-btn
                        large
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
            <div class="numberWrapper">
              <alleContractList :key="forceRerenderReturn"></alleContractList>
            </div>
          </v-col>
          <v-col cols="12" md="1" lg="1" class="leftNumber">
            <div class="stat1">
              <div class="N-icon">
                <v-icon color="mainBlueColor">mdi-file-sign</v-icon>
              </div>
              <h1> {{ContractNumber}} </h1>
              <h5 style="text-align: center">Contrat</h5>
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
        color="mainGreenColor"
      >
        Type de Contrat Enregistré avec succes</v-alert
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
        Echec d'enregistrement </v-alert
      >
    </transition>
  </div>
</template>

<script>
import axios from "axios";
import alleContractList from "../components/Config/alleContractList.vue";

export default {
  name: "Sender",
  components: {
    alleContractList,
  },

  data: () => ({
    // FOR FORM SENDING
    new_Contract: {
      type_contrat: "",
      description: "",
      // user:
    },

    ContractaAddingResponse: "",
    addingSuccess: false,
    addingfalse: false,

    ContractcomponentKey1: 0,

    // FOR ANALYTICS
    // theNumberContract = 0,
  }),

  methods: {
    submit1() {
      axios({ url: "admin/store_type_contrat", data: this.new_Contract, method: "POST" })
        .then((response) => {
          this.ContractaAddingResponse = response.data;
          console.log(response.data);
          if (this.ContractaAddingResponse) {
            this.addingSuccess = !this.addingSuccess;
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
              this.$store.dispatch("init_contract");
            }, 3000);
          } else {
            this.addingfalse = !this.addingfalse;
            setTimeout(() => {
              this.addingfalse = !this.addingfalse;
            }, 3000);
          }
        })
        .catch((error) => {
          this.ContractaAddingResponse = error.message;
          console.error("There was an error!", error);
        });

      this.$refs.form1.reset();
    },


  },

  computed: {

    ContractNumber() {
      // let sernders = this.$store.getters.Contracts
      // for (let index = 0; index < sernders.length; index++) {
      //     if (sernders[index].activation_state == 1) {

      //     }

      // }

      return this.$store.getters.Contracts.length;
    },
  },

  created() {
    this.new_Contract.company_id = localStorage.getItem("user-station");
  },
};
</script>

<style scoped>
.sectionTitle {
  margin: 0;
  margin-left: 15px;
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: bold;
}
.numberWrapper {
  height: 100%; /*100% de Thebody qui est dans le CSS global*/
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
/* .addContract {
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
    height: 78px;
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
