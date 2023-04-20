<template>
  <div class="bodyBox">
    <div class="TheBoxBody ForTravelDeclaration">
      <p class="sectionTitle">Historique des visites</p>
      <v-row>
        <v-col cols="12" md="3" lg="3" class="leftNumber">
          <div class="stat1">
            <div class="N-icon">
              <v-icon color="mainBlueColor">mdi-account-clock</v-icon>
            </div>
            <h1 v-if="visiteNumber"> {{ visiteNumber }}</h1>
            <h1 v-else>0</h1>
            <h5>RDV Enregistrés</h5>
          </div>
          <div class="stat1 stat2">
            <div class="N-icon icon2">
              <v-icon color="white">mdi-account-cancel</v-icon>
            </div>
            <h1 v-if="canceRDVNumber" style="color: white"> {{ canceRDVNumber }}</h1>
            <h1 v-else style="color: white">0</h1>
            <h5 style="color: white">RDV annulés</h5>
          </div>
        </v-col>
        <v-col cols="12" md="9" lg="9">
          <allVisitStory></allVisitStory>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import allVisitStory from "../components/Visite/allVisitStory";

export default {
  name: "RdvStory",
  components: {
    allVisitStory,
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
    
    visiteNumber() {
      return this.$store.getters.AllVisitesStorys.visites.length;
    },
    canceRDVNumber() {
      return this.$store.getters.AllVisitesStorys.visites_annulle.length;
    }
  },
  created() {
    this.$store.dispatch("init_allVisite");
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
.stat2{
    background: linear-gradient(to right top,  #356eea, #037bb8, #9238ce);

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
