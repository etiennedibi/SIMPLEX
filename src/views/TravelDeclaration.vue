<template>
  <div class="bodyBox">
    <div class="TheBoxBody ForTravelDeclaration">
      <p class="sectionTitle">Enregistrement d'employer</p>
      <v-row>
        <v-col cols="12" md="12" lg="12">
          <v-form>
            <v-container fluid class="lolplp">
              <v-row>
                <v-col cols="12" md="4" lg="4">
                  <v-text-field
                    solo
                    height="70"
                    v-model="newTravel_1.departure_date"
                    :rules="[() => !!newTravel_1.departure_date]"
                    ref="dep_date"
                    type="date"
                    value=""
                    label="Date de départ"
                    persistent-hint
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4" lg="4">
                  <v-text-field
                    background-color="#356eea24"
                    solo
                    append-icon="mdi-map-marker"
                    height="70"
                    v-model="newTravel_1.destination"
                    :rules="[() => !!newTravel_1.destination]"
                    ref="dest_place"
                    type="text"
                    label="Destination"
                    persistent-hint
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4" lg="4">
                  <v-text-field
                    solo
                    height="70"
                    v-model="newTravel_1.departure_time"
                    :rules="[() => !!newTravel_1.departure_time]"
                    ref="dep_time"
                    type="time"
                    label="Heure départ"
                    persistent-hint
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4" lg="4">
                  <v-text-field
                    solo
                    append-icon="mdi-car-seat"
                    height="70"
                    v-model="newTravel_1.total_car_place_number"
                    :rules="[() => !!newTravel_1.total_car_place_number]"
                    ref="pla_number"
                    type="number"
                    label="Nombre de place à disponible"
                    persistent-hint
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4" lg="4">
                  <v-text-field
                    background-color="#356eea24"
                    solo
                    append-icon="mdi-clipboard-text"
                    height="70"
                    v-model="newTravel_1.car_informations"
                    :rules="[() => !!newTravel_1.car_informations]"
                    ref="car_infos"
                    type="text"
                    label="type de car. ex: climatisé, dernière generation ..."
                    persistent-hint
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4" lg="4">
                  <v-text-field
                    solo
                    append-icon="mdi-numeric"
                    height="70"
                    v-model="newTravel_1.car_matriculation"
                    :rules="[() => !!newTravel_1.car_matriculation]"
                    ref="car_matri"
                    type="number"
                    prefix="DEPART N°"
                    label=""
                    persistent-hint
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4" lg="4">
                  <v-text-field
                    solo
                    append-icon="mdi-cash-multiple"
                    height="70"
                    v-model="newTravel_1.place_price"
                    :rules="[() => !!newTravel_1.place_price]"
                    ref="pl_price"
                    type="number"
                    label="Prix du ticket"
                    persistent-hint
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4" lg="4">
                  <v-text-field
                    background-color="#356eea24"
                    solo
                    append-icon="mdi-bus-stop"
                    height="70"
                    v-model="newTravel_1.Intemediatestation"
                    ref="st_inter"
                    type="text"
                    label="station intermediaires"
                    persistent-hint
                    
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4" lg="4">
                  <v-text-field
                    solo
                    height="70"
                    v-model="newTravel_1.travel_duration"
                    :rules="[() => !!newTravel_1.travel_duration]"
                    ref="dur_time"
                    type="time"
                    label="Durée du voyage"
                    persistent-hint
                  ></v-text-field>
                </v-col>
                

                <v-col cols="12" md="4" lg="4">
                  <v-text-field
                    solo
                    append-icon="mdi-car-seat"
                    height="70"
                    v-model="newTravel_1.total_car_place_number"
                    :rules="[() => !!newTravel_1.total_car_place_number]"
                    ref="pla_number"
                    type="number"
                    label="Nombre de place à disponible"
                    persistent-hint
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4" lg="4">
                  <v-text-field
                    background-color="#356eea24"
                    solo
                    append-icon="mdi-clipboard-text"
                    height="70"
                    v-model="newTravel_1.car_informations"
                    :rules="[() => !!newTravel_1.car_informations]"
                    ref="car_infos"
                    type="text"
                    label="type de car. ex: climatisé, dernière generation ..."
                    persistent-hint
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4" lg="4">
                  <v-text-field
                    solo
                    append-icon="mdi-numeric"
                    height="70"
                    v-model="newTravel_1.car_matriculation"
                    :rules="[() => !!newTravel_1.car_matriculation]"
                    ref="car_matri"
                    type="number"
                    prefix="DEPART N°"
                    label=""
                    persistent-hint
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4" lg="4">
                  <v-text-field
                    solo
                    append-icon="mdi-cash-multiple"
                    height="70"
                    v-model="newTravel_1.place_price"
                    :rules="[() => !!newTravel_1.place_price]"
                    ref="pl_price"
                    type="number"
                    label="Prix du ticket"
                    persistent-hint
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4" lg="4">
                  <v-text-field
                    background-color="#356eea24"
                    solo
                    append-icon="mdi-bus-stop"
                    height="70"
                    v-model="newTravel_1.Intemediatestation"
                    ref="st_inter"
                    type="text"
                    label="station intermediaires"
                    persistent-hint
                    
                  ></v-text-field>
                </v-col>

                




                <v-col cols="12" md="4" lg="4">
                  <v-btn
                    large
                    depressed
                    color="mainBlueColor"
                    v-on:click.prevent="submit1"
                    >Enregistrer</v-btn
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
        color="mainGreenColor"
      >
        Voyage ajouté avec succes</v-alert
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
        {{ traveladdingResponse.message }}</v-alert
      >
    </transition>
  </div>
</template>

<script>
// import Vue from "vue";
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  name: "TravelDeclaration",
  components: {},

  data: () => ({
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
      company_id: "1",
      user_id: "1",
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

      company_id: "1",
      user_id: "1",
    },
    traveladdingResponse: "",
    addingSuccess: false,
    addingfalse: false,
  }),

  methods: {
    submit1() {
      // for intermadiate station 
      if (this.newTravel_1.Intemediatestation) {
        this.newTravel_1.Intemediatestation = this.newTravel_1.Intemediatestation.split(
          " "
        );
        for (
          let index = 0;
          index < this.newTravel_1.Intemediatestation.length;
          index++
        ) {
          this.newTravel_1.Intemediatestation[index] = {
            station_name: this.newTravel_1.Intemediatestation[index],
          };
        }
      }
      axios({ url: "travel/add", data: this.newTravel_1, method: "POST" })
        .then((response) => {
          this.traveladdingResponse = response.data;
          console.log(response.data);
          if (this.traveladdingResponse.message == "success") {
            this.addingSuccess = !this.addingSuccess;
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
            }, 3000);
          } else {
            this.addingfalse = !this.addingfalse;
            setTimeout(() => {
              this.addingfalse = !this.addingfalse;
            }, 3000);
          }
        })
        .catch((error) => {
          this.traveladdingResponse = error.message;
          console.error("There was an error!", error);
        });

      this.newTravel_1.Intemediatestation = "";
    },

    // dateGeneration(){
    //   const CurrentDate =  new Date()
    //   var day= CurrentDate.getDate()+1
    //   var year = CurrentDate.getFullYear();
    //   var month = CurrentDate.getMonth()+1;
    //   this.newTravel_1.departure_date= year+"-"+month+"-"+day;
    // }
  },

  computed: {
    ...mapGetters(["Analytics"]),
  },

  created() {
    this.newTravel_1.company_id = localStorage.getItem("user-station");
    this.newTravel_1.user_id = localStorage.getItem("user-id");
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
  font-size: 18px;
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
