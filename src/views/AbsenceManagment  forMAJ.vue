<template>
  <div class="bodyBox">
    <div class="TheBoxBody ForTravelDeclaration">
      <p class="sectionTitle">Bilan des Présences</p>
      <v-row>
        <v-col cols="12" md="3" lg="3">
          <div class="stat1">
            <v-icon style="font-size:70px;color:#4c5d70" x-large>mdi-qrcode</v-icon>
          </div>
        </v-col>
        <v-col cols="12" md="3" lg="6">
          <div class="stat1 stat3">
            <div class="ListBox">
              <img src="@/assets/img/team2.jpg" alt="" srcset="">
            </div>
            <div class="ListBox">
              <img src="@/assets/img/profile-pic(1).png" alt="" srcset="">
            </div>
            <div class="ListBox">
              <img src="@/assets/img/profile-pic(3).png" alt="" srcset="">
            </div>
            
          </div>
        </v-col>
        <v-col cols="12" md="3" lg="3">
          <div class="stat1">
            <div class="N-icon">
              <v-icon color="mainBlueColor">mdi-weather-cloudy-clock</v-icon>
            </div>
            <h1>12500</h1>
            <h5 style="text-align:center">minutes <br> de présence employé</h5>
          </div>
        </v-col>
        <v-col cols="12" md="9" lg="9" >
          <div class="stat1 stat4">
            <v-form class="signInBodyBox">
                <v-row>
                  <v-col cols="12" sm="12" md="10" lg="10">
                    <v-text-field
                      solo
                      ref="deno"
                      background-color="white"
                      height="40"
                      type="number"
                      prefix="Frequence actualisation QRcode : "
                      suffix="min"
                      persistent-hint
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
            </v-form>
            <v-btn
              medium
              depressed
              color="mainBlueColor"
              style="color: white"
              v-on:click.prevent="submit1"
              >MODIFIER</v-btn
            >
          </div>
        </v-col>
        <v-col cols="12" md="3" lg="3" >
          <div class="stat1 stat2">
            <div class="N-icon icon2">
              <v-icon color="white">mdi-account-group</v-icon>
            </div>
            <h1 style="color: white">3</h1>
            <h5 style="color: white">Présence du jour</h5>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";


export default {
  name: "AbsenceManagment",
  components: {
  },

  data() {
    return {
      // componentKey: 0,
    };
  },

  methods: {
    // ------------------------
    // RE-RENDER CHILD  COMPONENT
    // ------------------------
    // forceRerender() {
    //     this.componentKey = this.$store.state.travelcomponentKey;
    //     // console.log(this.componentKey);
    //   }
  },

  computed: {
    ...mapGetters(["Analytics"]),
    forceRerender() {
      return this.$store.state.travelcomponentKey;
      // console.log(this.componentKey);
    },
  },
};
</script>

<style scoped>
/* .TheBoxBody{
    height: 60vh;
    margin-top: 0px;
} */
.ForTravelDeclaration {
  /* background: white;
  text-align: center; */
  /* background: red; */
}
.sectionTitle {
  margin: 0;
  margin-bottom: 5px;
  font-size: 15px;
  font-weight: bold;
  /* text-align: start; */
}
.lolplp {
  background: white;
  border-radius: 10px;
  padding: 20px;
}

.stat1 {
  background: white;
  height: 26.2vh;
  border-radius: 10px;
  margin-bottom: 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.stat4{
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.stat3{
  padding: 10px;
  background: linear-gradient(to left top,  #356eea, #037bb8, #9238ce);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  overflow-y: auto;
}
.ListBox{
  height: 45px;
  width: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FCFCFC56;
  border-radius: 100px;
  margin: 3px;
}
.ListBox img{
  height: 30px;
  width: 30px;
  border-radius: 100px;
}
.stat2{
    background: linear-gradient(to right bottom,  #356eea, #037bb8, #9238ce);

}
.N-icon {
  height: 35px;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #356eea24;
  border-radius: 100px;
}
.icon2{
  background: #1A223124;
}
.stat1 h1 {
  margin-bottom: -10px;
  font-size: 35px;
}
.stat1 h5 {
  color: var(--font-color);
}
</style>
