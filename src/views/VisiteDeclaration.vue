<template>
  <div class="bodyBox">
    <div class="TheBoxBody">
      <p class="sectionTitle">Gestion des RDV</p>
      <v-container fluid class="pouletBr">
        <v-row>
          <v-col cols="12" md="3" lg="3">
            <div class="numberWrapper">
              <v-form ref="form1" class="forme1">
                <v-container fluid class="addwithdrawal">
                  <v-row>
                    <v-col cols="12" md="12" lg="12">
                      <v-text-field
                        height="60"
                        solo
                        label="Nom complet"
                        append-icon="mdi-account-arrow-right"
                        ref="matri"
                        v-model="new_withdrawal.denomination"
                        type="text"
                        value=""
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                     <v-col cols="12" md="12" lg="12">
                      <v-text-field
                        height="60"
                        background-color="#356eea24"
                        solo
                        label="Telephone"
                        v-model="new_withdrawal.min_size"
                        append-icon="mdi-phone"
                        type="text"
                        value=""
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" md="12" lg="12">
                      <v-text-field
                        height="60"
                        solo
                        label="email"
                        append-icon="mdi-at"
                        ref="desc"
                        v-model="new_withdrawal.description"
                        type="text"
                        value=""
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                   
                    <v-col cols="12" md="12" lg="12">
                      <v-text-field
                        height="60"
                        background-color="#356eea24"
                        solo
                        v-model="new_withdrawal.min_weight"
                        ref="transport"
                        type="date"
                        label="Date du RDV"
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                    <div style="width:100%; padding: 15px 10px 0px 10px">
                      <v-textarea
                        solo
                        clearable
                        clear-icon="mdi-close-circle"
                        rows="3"
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
          <v-col cols="12" md="9" lg="9">
            <div class="numberWrapper ">
              <allWithdrawalsList
                :key="forceRerenderReturn"
              ></allWithdrawalsList>
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
        Nouveau type Enregistré avec succes</v-alert
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
        {{ withdrawalaAddingResponse.message }}</v-alert
      >
    </transition>
  </div>
</template>

<script>

// import Vue from "vue";
import axios from "axios";
import allWithdrawalsList from "../components/expeditionList/allWithdrawalsList.vue";

export default {
  name: "VisiteDeclaration",
  components: {
    allWithdrawalsList,
  },

  data: () => ({
    // FOR FORM SENDING
    new_withdrawal: {
      denomination: "",
      min_weight: "",
      max_weight: "",
      min_size: "",
      max_size: "",
      unit_price: "",
      description: "",
      company_id: "",
    },

    withdrawalaAddingResponse: "",
    addingSuccess: false,
    addingfalse: false,

    withdrawalcomponentKey1: 0,

    // FOR ANALYTICS
    // theNumberwithdrawal = 0,
  }),

  methods: {
    submit1() {
        axios({ url: "withdrawal/add", data: this.new_withdrawal, method: "POST" })
        .then((response) => {
          this.withdrawalaAddingResponse = response.data;
          console.log(response.data);
          if (this.withdrawalaAddingResponse.message == "success") {
            this.addingSuccess = !this.addingSuccess;
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
              this.forceRerender1();
            }, 3000);
          } else {
            this.addingfalse = !this.addingfalse;
            setTimeout(() => {
              this.addingfalse = !this.addingfalse;
            }, 3000);
          }
        })
        .catch((error) => {
          this.withdrawalaAddingResponse = error.message;
          console.error("There was an error!", error);
        });

      this.$refs.form1.reset();
    },

    // For table re-render after delete or update an item
    forceRerender1() {
      this.$store.state.withdrawalcomponentKey += 1;
    },
  },

  computed: {
    forceRerenderReturn() {
      return this.$store.state.withdrawalcomponentKey;
    },
  },

  created() {
    this.new_withdrawal.company_id = localStorage.getItem("user-station");
  },
};
</script>

<style scoped>
.sectionTitle {
  margin: 0;
  margin-bottom: 5px;
  margin-left: 15px;
  font-size: 18px;
  font-weight: bold;
}
.numberWrapper {
  border-radius: 10px;
  background: white;
}
/* ,
.middleBox {
  height:58vh;
} */
.addwithdrawal {
  height: 465px;
  /* background-color:red; */
}
.addwithdrawal::-webkit-scrollbar {
  width: 7px;
}
.addwithdrawal::-webkit-scrollbar-track {
  background: rgb(255, 255, 255);
}

.addwithdrawal::-webkit-scrollbar-thumb {
  background-color: var(--main-green-color);
  border-radius: 30px;
  border: 1px solid rgb(255, 255, 255);
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
    height: 85px;
    margin-bottom: -15px;
  }
}
/*++++++++++++++++
===> MEDIUM Large tablet to laptop	960px > < 1264px*<===
+++++++++++++++++*/
@media screen and (min-width: 960px) and (max-width: 1264px){
  .addwithdrawal {
    height: 57vh;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .v-btn:not(.v-btn--round).v-size--large {
    width: 100%;
  } 
}
</style>
