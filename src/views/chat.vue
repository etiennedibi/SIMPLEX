<template>
<v-main>
  <div class="ChatMainWrapper">
    <div class="leftBox">
      <div class="TopWrapper">
        <div class="logo">        
          <!-- <img src="@/assets/img/avatarProfil.jpg" alt="" srcset="" /> -->
          <v-icon @click="$router.go(-1)">mdi-arrow-left-bold-circle</v-icon>
        </div>
        <div style="border-bottom:1px solid grey; margin-bottom:10px;" class="itembox">
          <div class="leftItem">
            <v-icon>mdi-forum</v-icon>
            <p>All</p>
          </div>
          <div class="leftItem">
            <v-icon>mdi-message</v-icon>
            <p>Work</p>
          </div>
          <div class="leftItem">
            <v-icon>mdi-message-text</v-icon>
            <p>Collab</p>
          </div>
          <div class="leftItem">
            <v-icon>mdi-message-video</v-icon>
            <p>Meet</p>
          </div>
        </div>
        <div class="itembox" style=" margin-top:10px;">
           <div class="leftItem">
            <v-icon>mdi-forum-plus</v-icon>
            <p>Add work</p>
          </div>
           <div class="leftItem">
            <v-icon>mdi-forum-plus-outline</v-icon>
            <p>Add collab</p>
          </div>
        </div>
      </div>
      <div class="BottomWrapper">
        <v-icon>mdi-information-slab-box</v-icon>
      </div>
    </div>

    <div class="mainBox">
      <v-container fluid>
        <v-row>
          <v-col cols="12" md="12" lg="12" style="display:flex">
            <div class="userBoxWrapper">
              <div class="seachBox">
                <div class="seach">
                  <v-icon style="color:white; font-size:25px; margin:0px 5px;">mdi-magnify</v-icon>
                  <v-text-field
                    hide-details
                    label="Rechercher"
                    color="white"
                    filled
                    rounded
                    height="20"
                    dense
                    background-color="mainBlueColor"
                  ></v-text-field>
                </div>
              </div>
              <div class="userBox">
                <div class="onUser onUserActive">
                  <div class="user-profil">
                    <img src="@/assets/img/team2.jpg" alt="" srcset="">
                  </div>
                  <div>
                    <p>Agrey Stephane</p>
                    <p>Developpement web</p>
                  </div>
                  <div>
                    <p>09:30</p>
                    <!-- <span class="number">30</span> -->
                  </div>
                </div>
                <div class="onUser">
                  <div class="user-profil">
                    <img src="@/assets/img/avatarProfil.jpg" alt="" srcset="">
                  </div>
                  <div>
                    <p>Niango Paul</p>
                    <p>Responsable Relation </p>
                  </div>
                  <div>
                    <p>09:30</p>
                    <span class="number">30</span>
                  </div>
                </div>
                <div class="onUser">
                  <div class="user-profil">
                    <img src="@/assets/img/profile-pic(3).png" alt="" srcset="">
                  </div>
                  <div>
                    <p>Gourou Abigaël</p>
                    <p>responsable commercial </p>
                  </div>
                  <div>
                    <p>09:30</p>
                    <!-- <span class="number">30</span> -->
                  </div>
                </div>
                <div class="onUser">
                  <div class="user-profil">
                    <img src="@/assets/img/profile-pic(1).png" alt="" srcset="">
                  </div>
                  <div>
                    <p>Coré Yvan</p>
                    <p>Responsable Relation </p>
                  </div>
                  <div>
                    <p>13:00</p>
                    <span class="number">02</span>
                  </div>
                </div>
                <div class="onUser">
                  <div class="user-profil">
                    <img src="@/assets/img/avatarProfil.jpg" alt="" srcset="">
                  </div>
                  <div>
                    <p>Eliphase Bletro</p>
                    <p>Cyber inspector</p>
                  </div>
                  <div>
                    <p>09:30</p>
                    <span class="number">03</span>
                  </div>
                </div>
                <div class="onUser">
                  <div class="user-profil">
                    <img src="@/assets/img/avatarProfil.jpg" alt="" srcset="">
                  </div>
                  <div>
                    <p>Eliphase Bletro</p>
                    <p>Cyber inspector</p>
                  </div>
                  <div>
                    <p>09:30</p>
                    <span class="number">03</span>
                  </div>
                </div>
                <div class="onUser">
                  <div class="user-profil">
                    <img src="@/assets/img/avatarProfil.jpg" alt="" srcset="">
                  </div>
                  <div>
                    <p>Eliphase Bletro</p>
                    <p>Cyber inspector</p>
                  </div>
                  <div>
                    <p>09:30</p>
                    <span class="number">03</span>
                  </div>
                </div>
                <div class="onUser">
                  <div class="user-profil">
                    <img src="@/assets/img/avatarProfil.jpg" alt="" srcset="">
                  </div>
                  <div>
                    <p>Eliphase Bletro</p>
                    <p>Cyber inspector</p>
                  </div>
                  <div>
                    <p>09:30</p>
                    <span class="number">03</span>
                  </div>
                </div>
              </div>
            </div>
            <v-container fluid>
              <v-row>
                <v-col cols="12" md="12" lg="12" class="messagewrapper">
                  <div>
                    <div class="messageHeader">
                      <div>
                        <p>Office chat </p>
                        <p>Discussion initié le 20-04-2022</p>
                      </div>
                      <div class="seachMessage">
                                  
                      </div>
                    </div>
                    <div class="messageWrapper">
                      <div class="oneMessage">
                        <div class="theMessage">
                          <p class="theMessageText">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, ratione fugit? Quae quidem illo fugit consectetur saepe et, officia temporibus, corrupti at mollitia sapiente, dicta est esse dolores repellendus aut?
                          </p>
                          <div class="messageDetails">
                            <v-icon>mdi-check-all</v-icon> 09:20
                          </div>
                        </div>
                      </div>
                      <div class="oneMessage OwnerMessage">
                        <div class="theMessage Owner">
                          <p class="theMessageText" style="text-align:right">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis.
                          </p>
                          <div class="messageDetails">
                            <v-icon>mdi-check-all</v-icon> 09:20
                          </div>
                        </div>
                      </div>
                      <div class="oneMessage ">
                        <div class="theMessage ">
                          <p class="theMessageText" style="text-align:right">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis.
                          </p>
                          <div class="messageDetails">
                            <v-icon>mdi-check-all</v-icon> 09:20
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="imputWrapper">
                      <v-btn icon>
                        <v-icon>mdi-emoticon-outline</v-icon>
                      </v-btn>
                      <div class="theInput">
                        <v-textarea
                        filled
                        auto-grow
                        background-color="#f5f5ff"
                        clearable
                        clear-icon="mdi-close-circle"
                        rows="3"
                        name="input-7-4"
                      ></v-textarea>
                      </div>
                      <v-btn icon>
                        <v-icon color="mainBlueColor" style="font-size:30px; transform:rotate(-25deg)">mdi-send-variant</v-icon>
                      </v-btn>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </div>


    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="discussionDetails" icon @click.stop="drawer = !drawer" v-bind="attrs" v-on="on">
          <v-icon v-if="!drawer">mdi-dots-horizontal-circle</v-icon>
          <v-icon v-if="drawer">mdi-close-circle</v-icon>
        </v-btn>
      </template>
      <span v-if="!drawer">Details</span>
      <span v-if="drawer">fermer</span>
    </v-tooltip>      
    <v-navigation-drawer v-model="drawer" floating right app>
      <div class="profilSpace">
          <div class="userImg"><img src="@/assets/img/team2.jpg" alt=""></div>
          <p>Agrey Stephane</p>
          <!-- <p>de</p> -->
          <p>Service Development</p>
      </div>
      <div class="notification">
        <p class="titleStyle2">Spaces <v-icon>mdi-bullhorn</v-icon></p>

        <div class="mail">
            <div><v-icon>mdi-message-text</v-icon></div>
            <div><p>DPSE - XIEMIE</p><p>Deuis juin 2020</p></div>
        </div>
        <div class="mail">
            <div><v-icon>mdi-message</v-icon></div>
            <div><p>TRIOOO - Team Dev</p><p>Depuis Mai 2022</p></div>
        </div>
        <div class="mail">
            <div><v-icon>mdi-message</v-icon></div>
            <div><p>AIDI - Team pigiste</p><p>Depuis Mars 2023</p></div>
        </div>
      </div>
    </v-navigation-drawer> 


    

  </div>
  </v-main>
</template>


<script>
// import Vue from 'vue'
export default {
  name: "chat",
  components: {},

  data: () => ({
    // USER SEACH
    drawer: null,
    SeachActive:false,
    
  }),

  methods: {
   
  },
};
</script>





<style scoped>
.ChatMainWrapper{
  display: flex;
}
.leftBox{
  height: 100vh;
  width:100px;
  background: white;
}
.TopWrapper{
  height: 90vh;
  width:100%;
  /* background: blue; */
}
.logo{
  height: 17vh;
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  /* background: rgb(61, 61, 102); */
}
.logo > img{
  height: 50px;
  width:50px;
  border-radius:100px;
  /* #f5f5ff */
}
.logo > .v-icon{
  cursor: pointer;
  font-size:25px;
  color:red
}

.itembox{
  /* height: 25vh; */
  width:100%;
  /* background: rgb(61, 102, 71); */
}
.leftItem{
  width:100%;
  color:var( --Important-font-color);
  display:flex;
  flex-direction:column;  
  justify-content: center;
  align-items:center;
  cursor:pointer;
  /* background-color:red; */
}
.leftItem .v-icon{ 
  font-size:24px;
  color:#f5f5ff;
  color:var( --Important-font-color);
  margin-top: 20px;
}
.leftItem p{
  font-size:8px; 
  margin-top: -2px;
}
.BottomWrapper{
  height: 10vh;
  width:100%;
  /* background: green; */
  display: flex;
  justify-content:center;
  align-items:center;
  font-size:20px;
}
.BottomWrapper .v-icon{
  font-size:22px;
  color:var( --Important-font-color);
}







.mainBox{
  width:90%;
  background: blue;
  background: var(--main-white-color)
}

.userBoxWrapper{
  width: 350px;
  /* height:96.4vh */
}
.seachBox{
  height:13vh;
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  /* background: red; */
}
.seach{
  width:80%;
  height:55px;
  border-radius:10px;
  background:var(--main-blue-important);
  display: flex;
  /* background:green; */
}
/* .theme--light.v-input input, .theme--light.v-input textarea {
  color: white !important;
} */

.userBox{
  margin-top:10px;
  /* background:maroon; */
  height:80.4vh;
  overflow-y: auto;
  cursor: pointer;
}
.onUser{
  width:95%;
  height:72px;
  /* background:pink; */
  border-radius:10px;
  line-height:5px;
  display:flex;
  align-items:center;
  margin-bottom:10px;
}
.onUser:hover{
  background:#356eea24;
}
.onUserActive{
  background:var(--main-blue-important);
}
.onUserActive:hover{
  background:var(--main-blue-important);
}
.user-profil{
  height:47px;
  width:47px;
  border-radius:10px;
  margin: 0 12px;
  display:flex;
  align-items:center;
  justify-content:center;
  background:white;
}
.user-profil > img{
  height:37px;
  width:37px;
  border-radius:10px;
}
.onUser div:nth-child(2){
  width: 55%;
}
.onUser div:nth-child(2)>p:nth-child(1){
  font-size:12px;
  color:var(--Important-font-color);
  /* font-weight: bold; */
}
.onUser div:nth-child(2)>p:nth-child(2), .onUser div:nth-child(3)>p:nth-child(1){
  font-size:9px;
  color:var(--Important-font-color);
}
.onUserActive div:nth-child(2)>p:nth-child(1){
  font-size:12px;
  color:white;
  /* font-weight: bold; */
}
.onUserActive div:nth-child(2)>p:nth-child(2), .onUserActive div:nth-child(3)>p:nth-child(1){
  font-size:9px;
  color:white;
}
.onUser div:nth-child(3){
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
}
.number{
  font-size:8px;
  background:var(--main-green-color);
  color:white;
  font-weight:bold;
  padding:7px 5px;
  border-radius:100px;
}



.messagewrapper{
  padding-left: 2.5vw;
  padding-right: 2.5vw;
}
.messageHeader{
  display: flex;
  justify-content:space-between;
  margin-bottom:40px;
}
.messageHeader p{
  font-size:18px;
  font-weight: bold;
  line-height:5px
}
.messageHeader p:nth-child(2){
  font-size:10px;
  font-weight: normal;
}
.seachMessage{
  /* background-color:yellow; */
  height: 50px;
  width: 250px;
}
.discussionDetails{
  /* color:white; */
  font-size: 25px;
  position: fixed;
  left: 93.5vw;
  top: 6vh;
  z-index: 100;
  cursor: pointer;
  color: var(--Important-font-color)
}

.messageWrapper{
  height: 68vh;
  overflow: auto;
}



.imputWrapper{
  height: 12.5vh;
  display: flex;
  align-items: flex-start;
  justify-content:space-between;
  /* background:red; */
}
.theInput{
  height: 100%;
  width:90%;
  background:var(--main-white-color);
  overflow-y: auto;
}





.oneMessage{
  /* background:yellow; */
  margin-bottom: 10px;
  font-size: 12px;
}
.OwnerMessage{
  display: flex;
  /* flex-direction:column; */
  justify-content:flex-end
}
.theMessage{
  /* min-width:30%; */
  max-width:50%;
  background:#356eea24;
  padding: 10px;
  border-radius:10px;
}
.Owner{
  background: var(--main-blue-important);
  color: white;
}
.theMessageText{
  margin-top:0px;
  /* background: red; */
}
.messageDetails{
  margin-top:10px;
  text-align: right;
}







/*----PROFIL-----*/
.profilSpace{
    height: 35vh;
    margin-top: 8vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.profilSpace p:nth-child(2){
    font-weight: bold;
    line-height: 5px;
}
.profilSpace p:nth-child(3){
  /* background:red; */
    /* font-weight: bold; */
  background: var(--main-white-color);
  padding:2px 18px;
  margin-top:-2px;
  /*  */
  font-size: 11px;
}
.profilSpace p:nth-child(4){
    font-size: 11px;
    color: var(--Default-Font-Color);
    line-height: 0px;
    margin-top: 2px;
    margin-bottom: 20px;
}

.userImg{
    height: 80px;
    width: 80px;
    border-radius: 100px;
    border-right: solid 5px;
    border: 3px solid;
    border-color: var(--Default-Font-Color) var(--Default-Font-Color)  var(--Important-color)  var(--Important-color);
    transform: rotate(45deg);
    display: flex;
    justify-content: center;
    align-items: center;
}
.userImg img{
    height: 70px;
    width: 70px;
    border-radius: 100px;
    transform: rotate(-45deg);
}

/*----NOTIFICATION-----*/
.titleStyle2{
    /* background: red; */
    background: var(--main-white-color);
    padding: 10px;
    padding-left: 5vw;
    width:fit-content;
    text-align: center;
    color:var(--Important-font-color);
    font-weight: bold;
    border-radius: 0px 7px 7px 0px;
}
.titleStyle2 .v-icon{
    color:var(--Important-font-color);
    transform: rotate(-25deg);
}
.mail{
    background: var(--splx-White);
    height: 70px;
    display: flex;
    align-items: center;
}

.mail div:nth-child(1){
    height: 40px;
    width: 40px;
    border-radius: 10px;
    text-transform: uppercase;
    font-size: 14px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-weight: bold;
    color: var(--splx-White);
    background: var(--main-white-color);
    margin-left: 18px;
    margin-right: 5px;
   
}

.mail div:nth-child(2){
    line-height: 7px;
    color: var(--Default-Font-Color);
    font-size: 9px;
}

.mail div:nth-child(2) p:first-child{
    font-size: 11px;
    font-weight: bold;
    color:var(--Title-color);
}
.mail .v-icon{
    font-size: 17px;
    color:  var(--Important-color);
}

.mailUrgent  .v-icon{
    color: #f47e68;
}
.mailUrgent div:nth-child(1){
    background: #f47d6865;
}



</style>
