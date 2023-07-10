<template>
<v-main>
  <div class="ChatMainWrapper">

     <!-- LISTE EMPLOYER -->
      <v-dialog v-model="showemploye" max-width="370">
      <v-card>
          <v-card-text>
          <v-container>
              <div class="editIMGO">
              <p style="text-align:center; font-weight:bold">DISCUTER AVEC</p>
              </div>
              <v-container fluid class="addcongeAsk">
              <v-row>
                <v-col cols="12" md="12" lg="12" v-for="(item) in Employers" :key="item.index" style="display:flex; justify-content:center;">
                  <div v-if="item.the_user_id != theUser" class="user_box" @click="chooseSalared(item)">
                      <img v-if="item.avatar" :src="`${axios.defaults.baseURL}/uploads/user/profil/${item.avatar}`"/>
                      <img v-if="!item.avatar" src="@/assets/img/avatarProfil.jpg" alt="" srcset="" />
                      <div class="user_info">
                        <p>{{item.nom}} {{item.prenoms}}</p>
                        <p>{{item.nom_fonction}}</p>
                      </div>
                  </div>
                </v-col>
              </v-row>  
            </v-container>
          </v-container>
          </v-card-text>

      </v-card>
      </v-dialog>

    <div class="leftBox">
      <v-icon @click="$router.go(-1)">mdi-arrow-left-bold-circle</v-icon>
      <v-icon>mdi-information-slab-box</v-icon>
      <!-- <div class="TopWrapper">
        <div class="logo">        
          <img src="@/assets/img/avatarProfil.jpg" alt="" srcset="" />
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
      </div> -->
    </div>

    <div class="mainBox">
      <v-container fluid>
        <v-row>
          <v-col cols="12" md="12" lg="12" style="display:flex">
            <div class="userBoxWrapper">
              <div class="seachBox">
                <div class="seach">
                  <v-icon style="color:black; font-size:25px; margin:0px 5px;">mdi-forum-plus</v-icon>
                  <p @click="showemploye = true">Nouvelle discussion</p>
                </div>
              </div>
              <div class="userBox">
                <div  v-for="(item) in AllConversation" :key="item.index" class="onUser onUserActive" v-on:click="displayMessage(item)">
                  <div class="user-profil">
                    <img v-if="item.avatar" :src="`${axios.defaults.baseURL}/uploads/user/profil/${item.avatar}`"/>
                    <img v-if="!item.avatar" src="@/assets/img/avatarProfil.jpg" alt="" srcset="" />
                  </div>
                  <div>
                    <p>{{item.nom}}</p>
                    <p>Developpement web</p>
                  </div>
                  <div>
                    <!-- <p>{{displayDate(item.updated_at)}}</p> -->
                  </div>
                </div>
              </div>
            </div>
            <v-container fluid>
              <v-row>
                <v-col cols="12" md="12" lg="12" class="messagewrapper">
                  <div v-if="!messageview">
                    <div class="masssageEmptyBox">
                      <div>
                        <p>Simplex-chat</p>
                        <p>Veuillez selectionner ou <br> initialiser une nouvelle discussion</p>
                        <img src="@/assets/img/talking-1988_256.gif" alt="" srcset="">
                      </div>
                    </div>
                  </div>
                  <div v-if="messageview">
                    <div class="messageHeader">
                      <div>
                        <p>{{conversation.nom}}</p>
                        <p v-if="conversation.created_at">Discussion initié le {{displayDate(conversation.created_at)}}</p>
                        <p v-else style="font-size:12px">Nouvelle discussion avec <b>{{SalaredChoosen.nom}} {{SalaredChoosen.prenoms}}</b></p>
                      </div>
                      <div class="seachMessage">
                                  
                      </div>
                    </div>
                    <div class="messageWrapper">
                      <div v-for="(item) in allMessage" :key="item.index">

                        <div  v-if="item.id_auteur == theUser" class="oneMessage OwnerMessage">
                          <div class="theMessage Owner">
                            <p class="theMessageText" style="text-align:right">
                             {{item.content_text}}
                            </p>
                            <div class="messageDetails">
                              <v-icon>mdi-check-all</v-icon> {{displayDate(item.created_at)}}
                            </div>
                          </div>
                        </div>

                        <div v-else class="oneMessage">
                          <div class="theMessage">
                            <p class="theMessageText">
                              {{item.content_text}}
                            </p>
                            <div class="messageDetails">
                              <v-icon>mdi-check-all</v-icon> {{displayDate(item.created_at)}}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                    <div class="imputWrapper">
                      <v-btn icon>
                        <v-icon>mdi-emoticon-outline</v-icon>
                      </v-btn>
                      <div class="theInput">
                      <v-form ref="form1" >
                        <v-textarea
                        filled
                        auto-grow
                        background-color="#f5f5ff"
                        clearable
                        clear-icon="mdi-close-circle"
                        rows="3"
                        v-model="message"
                        v-on:keyup.enter="SendMessageForInit"
                        name="input-7-4"
                      ></v-textarea>
                      </v-form>
                      </div>
                      <v-btn icon>
                        <v-icon color="mainBlueColor" 
                        style="font-size:30px; transform:rotate(-25deg)"
                         v-on:click.prevent="SendMessageForInit"
                        >mdi-send-variant</v-icon>
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
          <div class="userImg" v-if="SalaredChoosen">
            <img v-if="SalaredChoosen.avatar" :src="`${axios.defaults.baseURL}/uploads/user/profil/${SalaredChoosen.avatar}`"/>
            <img v-if="!SalaredChoosen.avatar" src="@/assets/img/avatarProfil.jpg" alt="" srcset="" />
          </div>
          <p  v-if="SalaredChoosen">{{SalaredChoosen.nom}} {{SalaredChoosen.prenoms}}</p>
          <!-- <p>de</p> -->
          <p  v-if="SalaredChoosen">{{SalaredChoosen.nom_fonction}}</p>

          <div class="userImg" v-if="conversation">
            <img v-if="conversation.avatar" :src="`${axios.defaults.baseURL}/uploads/user/profil/${conversation.avatar}`"/>
            <img v-if="!conversation.avatar" src="@/assets/img/avatarProfil.jpg" alt="" srcset="" />
          </div>
          <p  v-if="conversation">{{conversation.nom}}</p>

      </div>
      <div class="otherForProfilSpace">
        <p>Note</p>
        <p>
         <b>simplex-chat</b> utilise un chiffrement de bout en bout pour garantir la confidentialité de vos échanges. Nous protégeons également contre les menaces en ligne. Si vous rencontrez un problème, signalez-le facilement. Votre sécurité est notre priorité absolue.
        </p>  
      </div>
      <!-- <div class="notification"> A EMPLEMENTER DANS LA MAJ DES GROUPE
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
      </div> -->
    </v-navigation-drawer> 


    

  </div>
  </v-main>
</template>


<script>
// import Vue from 'vue'
import { mapGetters } from "vuex";
import SocketioService from '../services/socketio.service';
import { formatDateForChat } from "../Utils/WorkDate";
export default {
  name: "chat",
  components: {},

  data: () => ({
    // USER SEACH
    drawer: null,
    SeachActive:false,

    // LISTE EMPLOYE
    showemploye: false,
    SalaredChoosen:"",
    seachChatRoom:"",

    // CONVERSATION
    AllConversation:"",

    // MESSAGE VIEW
    messageview:false,
    conversation:'',
    allMessage:'',
    theUser:'',

    // MESSAGE SEND
    message:'',
    
  }),

  methods: {
    
    displayMessage(item){
      this.SalaredChoosen = ""
      this.messageview = true
    // GET message from SOCKET
      SocketioService.getMessages(localStorage.getItem("user-id"), item.nom_room);
      this.conversation = item
      // this.conversation.created_at = formatDateForChat(date)
      this.allMessage = this.$store.state.AllConncersationMessage 

      this.drawer = true
      console.log(this.conversation, this.allMessage);    
    },
    displayDate(date) {
      return formatDateForChat(date);
    },


    chooseSalared(item){
      this.conversation = '',
      this.allMessage = '',

       this.SalaredChoosen = item
       this.showemploye = false
       this.seachChatRoom = this.theUser + "_" + this.SalaredChoosen.the_user_id
       const chatSeach02 = this.SalaredChoosen.the_user_id + "_" + this.theUser
       if (this.Chat_notifs.length == 0) {
        this.messageview = true
          this.drawer = true
       } else {
        for (let index = 0; index < this.Chat_notifs.length; index++) {
        // VERIFIER SI LA conversation existe
        if ((this.Chat_notifs[index].nom_room == this.seachChatRoom )|| (this.Chat_notifs[index].nom_room == chatSeach02)) {
          this.displayMessage(this.Chat_notifs[index])
          break
        } else {
          this.messageview = true
          this.drawer = true
        }
        
       }
       }
       
      
      
    },

    SendMessageForInit(){
    // Send message from SOCKET
      SocketioService.sendFirstMessage(localStorage.getItem("user-id"), this.SalaredChoosen.the_user_id, this.message);
      this.$refs.form1.reset();
      this.allMessage = this.$store.state.AllConncersationMessage 
      this.AllConversation = this.$store.state.AllNotification
    },


  },

  computed: {
    ...mapGetters(["Chat_notifs", "Employers"]),

  },

  created() {
    this.$store.dispatch("init_chat_notif");
    this.$store.dispatch("init_employers")
    this.theUser = localStorage.getItem("user-id");

    // GET message from SOCKET
    SocketioService.getConversation(localStorage.getItem("user-id"));
    this.AllConversation = this.$store.state.AllNotification
     console.log(this.$store.state.AllNotification);
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
  /* FOR ACTUAL */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
/* ACTUAL CHAT START */
.leftBox > .v-icon{
  font-size:22px;
  color:var( --Important-font-color);
}
.leftBox > .v-icon:nth-child(1){
  font-size:25px;
  margin-bottom: 20px;
  color:red
}
/* ACTUAL CHAT END */

/* CHAT FEATURE FOR UPDATE START */
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

/* CHAT FEATURE FOR UPDATE END */







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
  /* color: white; */
  background:#e1f5ff;
  justify-content:center;
  align-items:center;
  cursor:pointer;
}

.user_box{
  height:10vh;
  background:#356eea24;
  width:90%;
  border-radius:7px;
  display:flex;
  align-items:center;
  cursor: pointer;
}
.user_box img {
  height: 40px;
  width:40px;
  margin-right:7px;
  margin-left:7px;
  border-radius: 100px;
  border: solid 2px;
  border-color: var(--main-blue-important);
}
.user_info{
  /* background:yellow; */
  height:100%;
  margin-right:7px;
  font-size:8px;
  display:flex;
  flex-direction:column;
  justify-content:center;
}
.user_info > p:nth-child(1){
  font-size:12px;
  margin-bottom:-12px;
  font-weight:bold;
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


.masssageEmptyBox{
  /* background:red; */
  height: 92vh;
  display: flex;
  justify-content:center;
  align-items: center;
}
.masssageEmptyBox > div{
  height: 45vh;
  width:35%;
  padding:10px;
  background: #e1f5ff;
  border-radius: 10px;
  text-align: center;
  font-size:12px;
}
.masssageEmptyBox > div p:nth-child(1){
  font-weight: bold;
  font-size:16px;
}
.masssageEmptyBox > div img{
  margin-top: 10px;
  height:150px;
  width:150px;
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

/* ----DETAIL----------*/
.otherForProfilSpace{
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.otherForProfilSpace p:nth-child(1){
  background: var(--main-white-color);
  width: fit-content;
  text-align: center;
  padding:2px 18px;
  font-size:10px;
  text-transform: uppercase;
  font-weight: bold;
}
.otherForProfilSpace p:nth-child(2){
  text-align:justify;
  padding: 0px 25px;
  font-size:10px;
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
