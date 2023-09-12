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
            <!-- <div class="ListBox">
              <img src="@/assets/img/team2.jpg" alt="" srcset="">
            </div>        -->
            <v-tooltip bottom v-for="(empl) in DisponibilityList" :key="empl.index">
              <template v-slot:activator="{ on, attrs }">
                <div v-if="empl.id_disponibility == 1" class="ListBox" v-bind="attrs" v-on="on">
                  <img v-if="empl.avatar" :src="`${axios.defaults.baseURL}/uploads/user/profil/${empl.avatar}`"/>
                  <img v-if="!empl.avatar" src="@/assets/img/avatarProfil.jpg" alt="" srcset="" />
                </div>
                <div v-if="empl.id_disponibility == 2 || empl.id_disponibility == 3" class="ListBox ListBox1" v-bind="attrs" v-on="on">
                  <img v-if="empl.avatar" :src="`${axios.defaults.baseURL}/uploads/user/profil/${empl.avatar}`"/>
                  <img v-if="!empl.avatar" src="@/assets/img/avatarProfil.jpg" alt="" srcset="" />
                </div>
                <div v-if="empl.id_disponibility == 4" class="ListBox ListBox2" v-bind="attrs" v-on="on">
                  <img v-if="empl.avatar" :src="`${axios.defaults.baseURL}/uploads/user/profil/${empl.avatar}`"/>
                  <img v-if="!empl.avatar" src="@/assets/img/avatarProfil.jpg" alt="" srcset="" />
                </div>
              </template>
              <span>{{empl.nom}} {{empl.prenoms}}</span>
            </v-tooltip> 

                <!-- <div v-if="empl.id_disponibility == 2 || empl.id_disponibility == 3" class="ListBox ListBox1" v-bind="attrs" v-on="on">
                  <img v-if="empl.avatar" :src="`${axios.defaults.baseURL}/uploads/user/profil/${empl.avatar}`"/>
                  <img v-if="!empl.avatar" src="@/assets/img/avatarProfil.jpg" alt="" srcset="" />
                </div>
                <div v-if="empl.id_disponibility == 3" class="ListBox ListBox2" v-bind="attrs" v-on="on">
                  <img v-if="empl.avatar" :src="`${axios.defaults.baseURL}/uploads/user/profil/${empl.avatar}`"/>
                  <img v-if="!empl.avatar" src="@/assets/img/avatarProfil.jpg" alt="" srcset="" />
                </div>
              </template> -->
          </div>
        </v-col>
        <v-col cols="12" md="3" lg="3">
          <div class="stat1">
            <div class="N-icon">
              <v-icon color="mainBlueColor">mdi-calendar-badge</v-icon>
            </div>
            <h2>{{ today }}</h2>
            <h5 style="text-align:center">Date <br> du bilan quotidien</h5>
          </div>
        </v-col>
        <v-col cols="12" md="9" lg="9" >
          <div class="stat1 stat4">
            <v-btn
              medium
              depressed
              desable
              color="mainBlueColor"
              style="color: white"
              >PRESENT</v-btn
            >
            <v-btn
              medium
              depressed
              desable
              color="orange"
              style="color: white"
              >INDISPONIBLE</v-btn
            >
            <v-btn
              medium
              depressed
              desable
              color="red"
              style="color: white"
              >ABSENT</v-btn
            >
          </div>
        </v-col>
        <v-col cols="12" md="3" lg="3" >
          <div class="stat1 stat2">
            <h1>{{ timestamp }}</h1>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";


export default {
  name: "BilanConge",
  components: {
  },

  data() {
    return {
      timestamp:"",
      today:"",
    };
  },

  methods: {
    getNow() {
        const today = new Date();
        const thedate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        const time = this.padzero(today.getHours()) + ":" + this.padzero(today.getMinutes());
        this.timestamp = time;
        this.today = thedate;
    },
    padzero(num) {
        return num<10? "0"+ num:num
    },
  },

  computed: {
    ...mapGetters(["DisponibilityList"]),
    forceRerender() {
      return this.$store.state.travelcomponentKey;
      // console.log(this.componentKey);
    },
  },



   created() {
    this.$store.dispatch("init_list_disponibility")
    
    setInterval(this.getNow, 1000);
    
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
  justify-content: space-around;
  padding: 0px 100px;
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
.ListBox1{
  background: rgba(255, 166, 0, 0.459);
}
.ListBox2{
  background: rgba(255, 0, 0, 0.459);
}
.ListBox img{
  height: 30px;
  width: 30px;
  border-radius: 100px;
}
.stat2{
    background: linear-gradient(to right bottom,  #356eea, #037bb8, #9238ce);
    color:white;
}
.stat2 > h1 {
  display: inline-block;
  padding: 5px 25px;
  border: solid 1px white;
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
