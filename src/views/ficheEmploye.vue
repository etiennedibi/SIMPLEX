<template>
  <div class="bodyBox">
    <div class="TheBoxBody">
      <!-- <p class="sectionTitle">Chiffres Importants</p> -->
      <v-container fluid class="pouletBr">
        <v-row>
          <v-col cols="12" md="8" lg="8">
            <div class="Jumbultron">
              <div>
                <h2>{{ Current_employer.nom }} {{ Current_employer.prenoms }}</h2>
                <p class="postP">{{ Current_employer.nom_fonction }}</p>
                <!-- <p class="postP2">niangopaul blooraid.com</p> -->
                <p>
                   {{ Current_employer.description }}
                </p>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="4" lg="4">
            <div class="numberWrapper">
              <div class="N-icon">
                <img src="@/assets/img/team2.jpg" alt="" srcset="" />
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
                  <p><span>departement</span><br> {{ Current_employer.nom_departement }}</p>
                  <p v-if="Current_employer.role_id==1"><span>Attribution</span><br>tache & conge</p>
                  <p v-if="Current_employer.role_id==2"><span>Attribution</span><br>Standart</p>
                  <p><span>Habitation</span><br> {{ Current_employer.lieu_naissance }}</p>
                  <p><span>contact</span><br>{{ Current_employer.contact }}</p>
                </div>
                <div>CDI</div>
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
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "FicheEmploye",
  components: {
    // HelloWorld
  },

  data: () => ({
    /* FOR  SERVICE STATS */
    showChart: false,

    series: [
      //     {
      // name: 'series7',
      // data: [31, 40, 28, 51, 42, 109,31, 40, 28, 70, 30, 1]
      // },
      // {
      // name: 'series2',
      // data: [11, 32, 22, 12, 30, 52,0, 32, 45, 33, 14, 22]
      // },
      // {
      // name: 'series3',
      // data: [20, 50, 10, 83, 56, 22,20, 50, 20, 19, 30, 120]
      // }
    ],

    chartOptions: {
      chart: {
        id: "FirstChart",
        type: "area",
        sparkline: {
          enabled: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#3e886d", "#4c5d70", "#b6bbc2"],
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Aug",
          "Sep",
          "Oct",
        ],
      },
    },

    /* FOR SERVICE MARCK */
    series2: [45, 55, 30],

    chartOptions2: {
      chart: {
        // width: 380,
        type: 'polarArea'
      },
      fill: {
        opacity: 1
      },
      stroke: {
        width: 1,
        colors: undefined
      },
      yaxis: {
          show: false
        },
      legend: {
          position: 'bottom'
        },
      plotOptions: {
          polarArea: {
            rings: {
              strokeWidth: 0
            },
            spokes: {
              strokeWidth: 0
            },
          }
        },
      // theme: {
      //   monochrome: {
      //     enabled: true,
      //     shadeTo: 'light',
      //     shadeIntensity: 0.6
      //   }
      // },

      colors: ["#3e886d", "#4c5d70", "#b6bbc2"],
      labels: ["SBTA", "ABOUSSOUAN", "VOUS 4eme"],
    },
  }),

  mounted() {
    setTimeout(() => {
      this.updateChart();
      this.showChart = true;
    }, 500);
  },

  methods: {
    // ------------------------
    // DATA
    // ------------------------
    updateChart() {
      this.series = this.Analytics.GraphData.series;
      this.chartOptions = {
        ...this.chartOptions,
        ...{
          xaxis: {
            categories: this.Analytics.GraphData.month,
          },
        },
      };

      this.series2 = this.Ratings.rates;
      this.chartOptions2 = {
        labels: this.Ratings.station,
      };
    },
  },

  computed: {
    ...mapGetters(["Current_employer"]),
  },

   created() {
    this.$store.dispatch("init_current_employer_infos")
  },
};
</script>

<style scoped>
.sectionTitle {
  margin: 0;
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: bold;
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
  background: white;
  color: var(--Important-font-color);
}

.Jumbultron p {
  font-size: 12px;
}

.postP{
  margin-top: -2px;
  font-weight: bold;
 color: var(--main-blue-important);
 background-color: #fff;
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
  background: white;
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
  /* background-color: red; */
  padding-left: 10px;
  text-transform: uppercase;
  font-weight: bold;
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
  background: white ;
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
  background: white ;
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

</style>
