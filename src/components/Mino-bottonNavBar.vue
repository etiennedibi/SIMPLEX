<template>
  <div class="BigWrapper">
    <div class="bottonNavBar">
        <div
          class="navBox"
          style="border-radius: 10px 0 0 0"
          v-on:click="activeMenu0"
          :class="{ visitMenu: isActive0}" 
        >
          <img src="@/assets/icone/visit.png" alt="" srcset="" />
          <p>Visite</p>
          <div class="menuBox" v-if="visteMenuClick">
          <div class="menuTitle">
             GESTION DES VISITES 
              <v-icon color="red" v-on:click.stop="visteMenuClick = false">mdi-close-circle</v-icon>
          </div>
          <div v-on:click.stop="visteMenuClick = false">
            <router-link :to="{ name: 'VisiteDeclaration' }">
              <div class="tab1">
                <v-icon color="mainBlueColor">mdi-arrow-right-thin</v-icon>
                <p>GESTION DES RDV</p>
              </div>
            </router-link>
            <router-link :to="{ name: 'RdvStory' }">
              <div class="tab1">
                 <v-icon color="mainBlueColor">mdi-arrow-right-thin</v-icon>
                <p>HISTORIQUE</p>
              </div>
            </router-link>
          </div>
        </div>
        </div>

      <div
        class="navBox"
        v-on:click="activeMenu"
        :class="{ naVBox2Active: isActive }"
      >
        <img src="@/assets/icone/staff.png" alt="" srcset="" />
        <p>Administration</p>
        <div class="menuBox" v-if="travelMenuClick">
          <div class="menuTitle">
             ADMINISTRATION
            <v-icon color="red" v-on:click.stop="travelMenuClick = false">mdi-close-circle</v-icon>
          </div>
          <div v-on:click.stop="travelMenuClick = false">
            <router-link :to="{ name: 'AddEmployer' }">
              <div class="tab1">
                 <v-icon color="mainBlueColor">mdi-arrow-right-thin</v-icon>
                <p>ENREGISTRER UN EMPLOYER</p>
              </div>
            </router-link>
            <router-link :to="{ name: 'StaffList' }">
              <div class="tab1">
                 <v-icon color="mainBlueColor">mdi-arrow-right-thin</v-icon>
                <p>LISTE DES EMPLOYES</p>
              </div>
            </router-link>
            <router-link :to="{ name: 'FicheEmploye' }">
              <div class="tab1">
                 <v-icon color="mainBlueColor">mdi-arrow-right-thin</v-icon>
                <p>FICHE EMPLOYER</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
     
      <div class="navBox" 
           v-on:click="activeMenu3"
           :class="{ taskNavActive: isActive3 }">
        <img src="@/assets/icone/tasks.png" alt="" srcset="" />
        <p>
          Tâches
        </p>
        <div class="menuBox" v-if="tastMenuClick">
          <div class="menuTitle">
              TÂCHES
            <v-icon color="red" v-on:click.stop="tastMenuClick = false">mdi-close-circle</v-icon>
          </div>
          <div v-on:click.stop="tastMenuClick = false">
            <router-link :to="{ name: 'TaskDeclaration' }">
              <div class="tab1">
                 <v-icon color="mainBlueColor">mdi-arrow-right-thin</v-icon>
                <p>CREER UNE TÂCHE</p>
              </div>
            </router-link>
            <router-link :to="{ name: 'UserTaskManage' }">
              <div class="tab1">
                 <v-icon color="mainBlueColor">mdi-arrow-right-thin</v-icon>
                <p>GERER MES TÂCHES</p>
              </div>
            </router-link>
            <router-link :to="{ name: 'FileManage' }">
              <div class="tab1">
                 <v-icon color="mainBlueColor">mdi-arrow-right-thin</v-icon>
                <p>GERER LES FICHIERS</p>
              </div>
            </router-link>
            <!-- <router-link :to="{ name: 'taskStory' }">
              <div class="tab1">
                 <v-icon color="mainBlueColor">mdi-arrow-right-thin</v-icon>
                <p>HISTORIQUE</p>
              </div>
            </router-link> -->
          </div>
        </div>
      </div>

      <div
        class="navBox"
        v-on:click="activeMenu2"
        :class="{ naVBox2Active1: isActive2 }"
      >
        <img src="@/assets/icone/conges.png" alt="" srcset="" />
        <p>Absences & Congés</p>
        <div class="menuBox" v-if="expeditionMenuClick">
          <div class="menuTitle">
            ABSENCES & CONGES
            <v-icon color="red" v-on:click.stop="expeditionMenuClick = false">mdi-close-circle</v-icon>
          </div>
          <div v-on:click.stop="expeditionMenuClick = false">
            <router-link :to="{ name: 'CongeDemande'}">
              <div class="tab1">
                 <v-icon color="mainBlueColor">mdi-arrow-right-thin</v-icon>
                <p>SOUMETTRE UNE DEMANDE</p>
              </div>
            </router-link>
            <!-- <router-link :to="{ name: 'BilanConge' }">
              <div class="tab1">
                 <v-icon color="mainBlueColor">mdi-arrow-right-thin</v-icon>
                <p>BILAN DES DEMANDES</p>
              </div>
            </router-link> -->
            <router-link :to="{ name: 'Congemanagment' }">
              <div class="tab1">
                 <v-icon color="mainBlueColor">mdi-arrow-right-thin</v-icon>
                <p>GESTION DES DEMANDES</p>
              </div>
            </router-link>
             <router-link :to="{ name: 'CongeStory' }">
              <div class="tab1">
                 <v-icon color="mainBlueColor">mdi-arrow-right-thin</v-icon>
                <p>HISTORIQUE</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>

      <div class="navBox navEnd" v-on:click="activeMenu4"
        :class="{ ConfigNavActive: isActive4 }">
        <img src="@/assets/icone/configs.png" alt="" srcset="" />
        <p>Configuration</p>
        <div class="menuBox" v-if="configMenuClick">
          <div class="menuTitle">
            CONFIGURATION
            <v-icon color="red" v-on:click.stop="configMenuClick = false">mdi-close-circle</v-icon>
          </div>
          <div v-on:click.stop="configMenuClick = false">
            <router-link :to="{ name: 'Contract' }">
              <div class="tab1">
                 <v-icon color="mainBlueColor">mdi-arrow-right-thin</v-icon>
                <p>CONTRATS</p>
              </div>
            </router-link>
            <router-link :to="{ name: 'congeType' }">
              <div class="tab1">
                 <v-icon color="mainBlueColor">mdi-arrow-right-thin</v-icon>
                <p>CONGES</p>
              </div>
            </router-link>
            <router-link :to="{ name: 'WorkManagment' }">
              <div class="tab1">
                 <v-icon color="mainBlueColor">mdi-arrow-right-thin</v-icon>
                <p>FONCTION</p>
              </div>
            </router-link>
            <router-link :to="{ name: 'ServiceManagment' }">
              <div class="tab1">
                 <v-icon color="mainBlueColor">mdi-arrow-right-thin</v-icon>
                <p>DEPARTEMENT</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MinoBottonNavBar",

  components: {},

  data: () => ({
     // visite menu group
    isActive0: false,
    visteMenuClick: true,

    // Administration menu group
    isActive: false,
    travelMenuClick: true,

    // Tast menu group
    isActive3: false,
    tastMenuClick: true,

    // Expedition menu group
    isActive4: false,
    configMenuClick: true,

    // Expedition menu group
    isActive2: false,
    expeditionMenuClick: true,

    // For User
    role: 0,
  }),

  methods: {
    activeMenu0: function () {
      this.isActive0 = true;
      this.isActive = false;
      this.isActive2 = false;
      this.isActive3 = false;
      this.visteMenuClick = true;
    },
    activeMenu: function () {
      this.isActive0 = false;
      this.isActive = true;
      this.isActive2 = false;
      this.isActive3 = false;
      this.travelMenuClick = true;
    },
    activeMenu2: function () {
      this.isActive2 = true;
      this.isActive0 = false;
      this.isActive = false;
      this.isActive3 = false;
      this.isActive4 = false;
      this.expeditionMenuClick = true;
    },
    activeMenu3: function () {
      this.isActive3 = true;
      this.isActive0 = false;
      this.isActive4 = false;
      this.isActive2 = false;
      this.isActive = false;
      this.tastMenuClick = true;
    },
    activeMenu4: function () {
      this.isActive4 = true;
      this.isActive0 = false;
      this.isActive2 = false;
      this.isActive = false;
      this.isActive3 = false;
      this.configMenuClick = true;
    },
    UnactiveMenu: function () {
      this.isActive = false;
      this.isActive0 = false;
      this.isActive2 = false;
      this.isActive3 = false;
      this.isActive4 = false;
    },
  },

  created() {
    this.$store.dispatch("init_analitic");
    this.$store.dispatch("init_ratings");
    this.role = localStorage.getItem("user-role");

    this.$store.dispatch("init_check");
    
   console.log(localStorage.getItem("Comapany-activation_state"));
    if ( localStorage.getItem("Comapany-activation_state") != true) {
      localStorage.removeItem("Comapany-activation_state")
      this.$store.dispatch("auth_logout").then(() => {
        this.$router.push("/abonnement");
      });
    }
  },
};
</script>

<style scoped>
.BigWrapper {
  width: 5vw;
  position: fixed;
  top: 84.9vh;
  margin-left: 690px;
  /* left: 25.5vw; */
  display: flex;
  justify-content: center;
}
.bottonNavBar {
  background: var(--main-white-color);
  height: 15vh;
  /* width: 60vw; */
  /* position: fixed;
    top: 84.9vh;
    left: 25.5vw; */
  display: flex;
  align-items: center;
  border-radius: 10px 10px 0px 0px;
  box-shadow: -1px -10px 23px -1px rgb(206 204 204 / 50%);
}

.navBox {
  border-right: solid 1px var(--Important-font-color);
  height: 60%;
  width: 165px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.1s ease-in;
  /*background: red;*/
}
.navBox > img {
  height: 27px;
  width: 27px;
  margin-bottom: 3px;
}
.navBox > p {
  margin: 0;
  font-size: 12px;
  font-weight: bold;
  color: var(--main-blue-important);
  text-align: center;
}

.navBox:hover {
  background: white;
  border-right: dashed 0px;
  height: 15vh;
  box-shadow: 2px 6px 20px -1px rgb(206 204 204 / 90%);
}
.navBox:hover > p {
  margin: 0;
  font-size: 12px;
  font-weight: bold;
  color: var(--Important-font-color);
}
.navBox:hover::before {
  content: "";
  height: 20px;
  width: 20px;
  background: white;
  position: absolute;
  z-index: 1;
  top: -10px;
  transform: rotate(45deg);
  transition: 0.1s ease-in;
  /* box-shadow: 2px 6px 20px -1px rgb(206 204 204 / 90%); */
}
.navEnd {
  border-right: none;
}

.router-link-exact-active > .navBox {
  /* border-radius: 10px 0 0 0; */
  background: white;
  border-right: dashed 0px;
  height: 15vh;
  box-shadow: 2px 6px 20px -1px rgb(206 204 204 / 90%);
  transition: 0.1s ease-in;
}

.router-link-exact-active > .navBox > p {
  margin: 0;
  font-size: 14px;
  font-weight: bold;
  color: var(--Important-font-color);
}

.router-link-exact-active > .navBox::before {
  content: "";
  height: 20px;
  width: 20px;
  background: white;
  position: absolute;
  z-index: 1;
  top: -10px;
  transform: rotate(45deg);
  /* box-shadow: 2px 6px 20px -1px rgb(206 204 204 / 90%); */
}

.naVBox2Active,
.naVBox3Active,
.taskNavActive,
.ConfigNavActive,
.visitMenu,
.naVBox2Active1 {
  background: white;
  border-right: dashed 0px;
  height: 15vh;
  box-shadow: 2px 6px 20px -1px rgb(206 204 204 / 90%);
}
.naVBox2Active > p,
.naVBox3Active > p,
.taskNavActive > p,
.ConfigNavActive > p,
.visitMenu > p,
.naVBox2Active1 > p {
  margin: 0;
  font-size: 14px;
  font-weight: bold;
  color: var(--Important-font-color);
}
.naVBox2Active::before,
.visitMenu::before,
.naVBox3Active::before,
.taskNavActive::before,
.ConfigNavActive::before,
.naVBox2Active1::before {
  content: "";
  height: 20px;
  width: 20px;
  background: white;
  position: absolute;
  z-index: 1;
  top: -10px;
  transform: rotate(45deg);
  /* box-shadow: 2px 6px 20px -1px rgb(206 204 204 / 90%); */
}

.menuBox {
  display: none;
}

.naVBox2Active .menuBox,
.naVBox3Active .menuBox,
.naVBox2Active1 .menuBox,
.ConfigNavActive .menuBox,
.visitMenu .menuBox,
.taskNavActive .menuBox {
  position: absolute;
  top: -145px;
  /* height: 160px; */
  width: 300px;
  border-radius: 10px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 6px 20px -1px rgb(206 204 204 / 90%);
  transition: 0.1s ease-in;
}
.naVBox2Active .menuTitle,
.naVBox3Active .menuTitle,
.taskNavActive .menuTitle,
.ConfigNavActive .menuTitle,
.visitMenu .menuTitle,
.naVBox2Active1 .menuTitle {
  height: 40px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 100px;
  font-size: 14px;
  font-weight: bold;
  border-bottom: solid 1px var(--font-color);
  transition: 0.1s ease-in;
}
/* .naVBox2Active .menuTitle > img,
.naVBox3Active .menuTitle > img,
.taskNavActive .menuTitle > img,
.ConfigNavActive .menuTitle > img,
.visitMenu .menuTitle > img,
.naVBox2Active1 .menuTitle > img {
  height: 15px;
  width: 15px;
  position: relative;
  left: 27px;
  top: -18px;
}
.naVBox2Active .menuTitle > .v-icon,
.naVBox3Active .menuTitle > .v-icon,
.taskNavActive .menuTitle > .v-icon,
.ConfigNavActive .menuTitle > .v-icon,
.visitMenu .menuTitle > .v-icon,
.naVBox2Active1 .menuTitle > .v-icon {
  margin-left:50px
} */


.naVBox2Active .menuBox div:last-child,
.naVBox3Active .menuBox div:last-child,
.taskNavActive .menuBox div:last-child,
.ConfigNavActive .menuBox div:last-child,
.visitMenu .menuBox div:last-child,
.naVBox2Active1 .menuBox div:last-child {
  margin-top: 7px;
  margin-bottom: 7px;
  width: 90%;
}
.tab1 {
  display: flex;
  align-items: center;
  height: 15px;
  font-size: 12px;
  
  margin: 0px;
  color: var(--main-blue-important);
}
.tab1 > img {
  height: 10px;
  margin-right: 10px;
}

.router-link-exact-active > .tab1 #travelMenuClick {
  background: red;
}


/*++++++++++++++++
===> MEDIUM Large tablet to laptop	960px > < 1264px*<===
+++++++++++++++++*/
@media (min-width: 1100px) and (max-width: 1264px) {
  .navBox {
    width: 150px;
  }
  .BigWrapper {
    margin-left: 250px;
  }
}
@media screen and (min-width: 960px) and (max-width: 1100px){
  .BigWrapper {
    margin-left: 235px;
  }
  .navBox {
    width: 125px;
  }
  .navBox > img {
    height: 30px;
    width: 30px;
  }
  .navBox > p {
    font-size: 12px;
  }
}
</style>
