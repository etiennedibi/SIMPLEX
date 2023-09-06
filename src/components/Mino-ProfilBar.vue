<template>
  <div class="profilInformationBox">
    <div class="profilBox">
      <div class="profilImg">
        <img v-if="profilIMG!='null'" :src="`${axios.defaults.baseURL}${profilIMG}`"/>
        <img v-if="profilIMG=='null'" src="@/assets/img/avatarProfil.jpg" alt="" srcset="" />
      
      </div>
      <p>{{ uUser }}</p>
      <!-- <p>GOUROu</p> -->
      <p v-if="this.role==1">ADMINISTRATEUR</p>
      <p v-if="this.role==2">MANAGEUR</p>
      <p v-if="this.role==3">CHEF D'EQUIPE</p>
      <p v-if="this.role==4">EMPLOYE</p>
      <p class="simplex-btn" v-on:click.prevent="logOut">DECONNEXION</p>
      <router-link :to="{name: 'param'}">
      <div class="settingdiv">
        <v-icon>mdi-cog</v-icon>
      </div>
      </router-link>
    </div>
    <router-link :to="{ name: 'Messagerie' }">
      <div class="timeBox" v-if="this.role==1">
        <!-- <div>35</div> -->
        <v-icon color="mainBlueColor" x-large class="messgaeicon"
          >mdi-bullhorn-outline</v-icon
        >
        <p style="margin-top:25px">communiqués</p>
      </div>
    </router-link>
    <!-- <router-link :to="{ name: 'chat' }">
      <div class="timeBox">
         <div>35</div>
        <v-icon style="transform: rotate(0deg)" color="mainBlueColor" x-large class="messgaeicon"
          >mdi-forum-outline</v-icon
        >
        <p style="margin-top:25px">chat</p>
      </div>
    </router-link> -->
    <div class="footerBox">
      <div class="locationBox">
        <div>
          <v-icon style="font-size:12px">mdi-security</v-icon>
        </div>
        <div @click="dialog1 = true">
          <P>POLITIQUE DE SECURITE</P>
          <P>cliquez ici pour plus de détails</P>
        </div>
      </div>
      <div class="locationBox">
        <div>
          <v-icon style="font-size:12px">mdi-notebook</v-icon>
        </div>
        <div  @click="dialog2 = true">
          <P>MANUEL D'UTILISATION</P>
          <P>cliquez ici pour plus de détails</P>
        </div>
      </div>
    </div>






 <!-- SHOW POLITIQUE DE SECURITE -->
    <v-dialog
      v-model="dialog1"
      width="850"
      overlay-color="black"
      overlay-opacity="0.8"
      mainBlueColor
    >
      <v-card tile>
        <v-card-text>
          <v-container>
            <v-row class="detailsTemplate">
             <div class="ORHeader">
              <v-icon style="font-size:50px; margin-right:10px; color:#037bb8">mdi-security</v-icon>
              <p>POLITIQUE DE SECURITE </p>
             </div>
             <div class="ORBody">
              <p>
                L’entreprise doit restreindre l’accès aux données confidentielles et 
                sensibles pour éviter qu’elles ne soient perdues ou compromises, 
                de façon à ne pas nuire à nos clients, à ne pas encourir de sanctions pour 
                non-conformité et à ne pas nuire à notre réputation. Parallèlement, nous 
                devons faire en sorte que les utilisateurs puissent accéder aux données 
                qui leur sont nécessaires pour travailler efficacement.
                Il n’est pas attendu de cette politique qu’elle élimine tous les vols de 
                données. Son principal objectif est plutôt de sensibiliser les utilisateurs 
                et d’éviter les scénarios de perte accidentelle, c’est pourquoi elle décrit 
                les exigences de prévention des fuites de données.
              </p>

              <h4 style="margin-bottom:5px">2. CHAMP D'APPLICATION</h4>
              <h4 style="margin-bottom:20px; margin-left:10px;">2.1 Dans le champ d’application</h4>
              <p style=" margin-left:10px;">Dans cette section, vous dressez la liste de tous les aspects qui relèvent de 
                la politique, par exemple les sources de données et les types de données. 
                Exemple : Cette politique de sécurité des données s’applique à toutes les
                 données clients, données personnelles ou autres données de l’entreprise 
                 définies comme sensibles par la politique de classification des données de 
                 l’entreprise. Elle s’applique donc à tous les serveurs, bases de données et 
                 systèmes informatiques qui traitent ces données, y compris tout appareil 
                 régulièrement utilisé pour le courrier électronique, l’accès au Web ou 
                 d’autres tâches professionnelles. Tout utilisateur qui interagit avec les 
                 services informatiques de l’entreprise est également soumis à cette politique.
                 </p>

              <h4 style="margin-bottom:20px; margin-left:10px;">2.2 Hors du champ d’application</h4>
              <p style=" margin-left:10px;">
                Vous indiquez ici ce qui ne relève pas de votre politique de 
                sécurité des données. Les informations classées comme publiques ne sont pas 
                soumises à cette politique. D’autres données peuvent être exclues de la 
                politique par la direction de l’entreprise, en fonction d’impératifs spécifiques,
                 par exemple le fait que la protection des données est trop coûteuse ou trop
                complexe.
                
                 </p>
             </div>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>

 <!-- SHOW MANUEL D'UTILISATION -->
    <v-dialog
      v-model="dialog2"
      width="850"
      overlay-color="black"
      overlay-opacity="0.8"
      mainBlueColor
    >
      <v-card tile>
        <v-card-text>
          <v-container>
            <v-row class="detailsTemplate">
             <div class="ORHeader">
              <v-icon style="font-size:50px; margin-right:10px; color:#037bb8">mdi-notebook</v-icon>
              <p>MANUEL D'UTILISATION</p>
             </div>
             <div class="ORBody">
              <p>
                L’entreprise doit restreindre l’accès aux données confidentielles et 
                sensibles pour éviter qu’elles ne soient perdues ou compromises, 
                de façon à ne pas nuire à nos clients, à ne pas encourir de sanctions pour 
                non-conformité et à ne pas nuire à notre réputation. Parallèlement, nous 
                devons faire en sorte que les utilisateurs puissent accéder aux données 
                qui leur sont nécessaires pour travailler efficacement.
                Il n’est pas attendu de cette politique qu’elle élimine tous les vols de 
                données. Son principal objectif est plutôt de sensibiliser les utilisateurs 
                et d’éviter les scénarios de perte accidentelle, c’est pourquoi elle décrit 
                les exigences de prévention des fuites de données.
              </p>

             </div>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>


  </div>
</template>

<script>
// import axios from "axios";
import SocketioService from '../services/socketio.service';
export default {
  name: "MinoProfilBar",
  components: {},

  data: () => ({
    uUser: "",
    role: "",
    profilIMG:"",

    dialog1: false,
    dialog2: false,
  }),

  methods: {
    logOut() {
      this.$store.dispatch("auth_logout").then(() => {
        this.$router.push("/login");
      });
    },
  },

  created() {
    this.uUser = localStorage.getItem("user-name");
    this.profilIMG = localStorage.getItem("user-profil");
    this.role = localStorage.getItem("user-role");
    // CONNECTER LE SOCKET
    SocketioService.saveMe(localStorage.getItem("user-id"));
    
    
  },
};
</script>

<style scoped>
.profilInformationBox {
  height: 100vh;
  width: 181px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 10px 0px 23px -1px #cecccc80;
}

.profilBox {
  /* height: 32vh; */
  height: 36vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: solid 2px var(--main-white-color);
}
.profilImg {
  height: 85px;
  width: 85px;
  border-radius: 100px;
  border: solid 3px var(--main-blue-important);
  display: flex;
  justify-content: center;
  align-items: center;
}
.profilImg > img {
  height: 100%;
  width: 100%;
  border-radius: 100px;
}
.profilBox p:nth-child(2) {
  text-transform: uppercase;
  font-size: 15px;
  font-weight: bold;
  color: var(--Important-font-color);
  text-align: center;
}
.profilBox p:nth-child(3) {
  font-size: 13px;
  margin-top: -15px;
  color: var(--font-color);
}
.profilBox p:nth-child(4) {
  margin-top: -5px;
}

.settingdiv {
  position: absolute;
  top: 12vh;
  left: 100px;
  height: 25px;
  width: 25px;
  border: solid 3px var(--main-blue-important);
  border-radius: 100px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.settingdiv .v-icon{
  font-size: 15px;
}

.timeBox {
  /* height: 260px; */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color:red; */
  /* cursor: pointer; */
}
.timeBox div:nth-child(1) {
  position: relative;
  top: 25px;
  left: 25px;
  z-index: 10;
  height: 20px;
  width: 20px;
  border-radius: 100px;
  background: #b71c1c;
  font-size: 10px;
  font-weight: bold;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.timeBox p:nth-child(3) {
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: var(--Important-font-color);
}
.timeBox p{
  color: var(--main-blue-important);
}
.messgaeicon {
  font-size: 50px !important;
  margin-bottom: -20px;
  transform: rotate(-25deg);
}

.footerBox {
  width: 100%;
  margin-bottom: 30px;
}
.locationBox {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.locationBox div:nth-child(1) {
  height: 20px;
  width: 20px;
  margin-left: 7px;
  border-radius: 100px;
  border: solid 1px var(--font-color);
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.locationBox div:nth-child(1) img {
  height: 10px;
  width: 10px;
}
.locationBox div:nth-child(2) {
  font-size: 10px;
  line-height: 8px;
}
.locationBox div:nth-child(2) p:nth-child(1) {
  color: var(--font-color);
}



.ORHeader{
  width:100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  text-align: center;
  font-size: 12px;
  height: 150px;
}
.ORHeader > p{
  font-weight: bold;
  border: solid 1px grey;
  padding:5px;
}

.ORBody{
  width: 100%;
  font-size: 12px;
  margin-bottom: 30px;
}
.ORBody > p{
  margin-bottom: 30px;
}
.ORBody > h4{
  /* text-align: center; */
}


/*++++++++++++++++
===> MEDIUM Large tablet to laptop	960px > < 1264px*<===
1100 -- 1190px --> avant
+++++++++++++++++*/
@media screen and (min-width: 960px) and (max-width: 1264px){
  .profilBox {
    /* height: 36vh; */
  }
}
</style>
