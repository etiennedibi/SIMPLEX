<template>
  <div class="bodyBox">
    <div class="TheBoxBody">
      <!-- <p class="sectionTitle">Chiffres Importants</p> -->
      <v-container fluid class="pouletBr">
        <v-row>
          <v-col cols="12" md="6" lg="6">
            <div class="Jumbultron">
              <div>
                <h3>101ème client</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br />
                  Sunt, repellat odit? Corrupti earum natus ullam iusto
                  doloribus esse?
                </p>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="3" lg="3">
            <div class="numberWrapper">
              <div class="N-icon">
                <v-icon color="mainBlueColor">mdi-archive</v-icon>
              </div>
              <h1>10</h1>
              <h6>Tâches en cours</h6>
            </div>
          </v-col>
          <v-col cols="12" md="3" lg="3">
            <div class="numberWrapper">
              <div class="N-icon">
                <v-icon color="mainBlueColor">mdi-truck-delivery</v-icon>
              </div>
              <h1>7</h1>
              <h6 style="text-align:center">nouveaux Fichiers <br> partagés</h6>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" md="9" lg="9">
            <!-- <p class="sectionTitle">Statistique</p> -->
            <div class="statWrapper">
               <p><span>+</span> <span>17</span> <span>U Simplex</span> </p>
            </div>
          </v-col>
          <v-col cols="12" md="3" lg="3">
            <div class="statWrapper1">
              <h1>09:05</h1>
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
  name: "Dashboard",
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
    ...mapGetters(["Analytics", "Ratings"]),
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
  margin-top: 3%;
  height: 130px;
  border-radius: 10px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.N-icon {
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #356eea24;
  border-radius: 100px;
}
.numberWrapper h1 {
  margin-bottom: -10px;
  font-size: 30px;
}
.numberWrapper h6 {
  color: var(--font-color);
}

.Jumbultron {
  margin-top: 1%;
  height: 130px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  display: flex;
  align-items: flex-start;
  padding-left: 30px;
  background: white;
  background: linear-gradient(to right top,  #356eea, #037bb8, #9238ce);
  color: white;
}


/* .Jumbultron h2{
 color: var(--Important-font-color);
} */

.Jumbultron p {
  font-size: 11px;
}


.statWrapper {
  margin-top: 1%;
  height: 175px;
  border-radius: 10px;
  background: white;
  display: flex;
  justify-content:center;
  align-items: center;
}

.statWrapper span:nth-child(2){
  font-size: 60px;
  font-weight: bold;
}
.statWrapper span:nth-child(3){
  font-weight: bold;
  color:var(--font-color)
}
.statWrapper1 {
  height: 190px;
  border-radius: 10px;
  display: flex;
  justify-content:center;
  align-items: center;
  background: white;
}
.statWrapper1 p {
  margin-left: 10px;
}
.noteWrapper {
  margin-top: 5%;
  height: 80%;
}

</style>
