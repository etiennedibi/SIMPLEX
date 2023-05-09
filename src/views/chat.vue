<template>
  <div class="singInContentBox">
    <div class="profilInformationBox">
      <div class="profilBox">
        <div class="rightBoxherder">
          <div>
            <p>Box <br> <span>chat <v-icon color="white" small> mdi-circle-small </v-icon></span></p>
            <v-btn icon color="white" @click="SeachActive=!SeachActive"
              ><v-icon small> mdi-comment-search </v-icon></v-btn
            >
          </div>
          <div class="seachBox" v-if="SeachActive">
            <v-text-field
              v-model="search"
              solo
              height="30"
              hide-details
              label="Rechercher"
              class="theSeachBar"
            ></v-text-field>
          </div>
        </div>
      </div>
      <div class="userBoxWrapper">
        <div class="userBox">
          <img src="@/assets/img/avatarProfil.jpg" alt="" srcset="" />
          <p>DIBI Agoussi pierre <br> 
            <span>Directeur des ressources Humaines</span>
          </p>
          <span class="number"><span>5</span></span>
        </div>
        <div class="userBox">
          <img src="@/assets/img/avatarProfil.jpg" alt="" srcset="" />
          <p>DIBI Agoussi pierre <br> 
            <span>Directeur des ressources Humaines</span>
          </p>
          <span class="number"><span>5</span></span>
        </div>
        <div class="userBox">
          <img src="@/assets/img/avatarProfil.jpg" alt="" srcset="" />
          <p>DIBI Agoussi pierre <br> 
            <span>Directeur des ressources Humaines</span>
          </p>
          <span class="number"><span>5</span></span>
        </div>
        <div class="userBox">
          <img src="@/assets/img/avatarProfil.jpg" alt="" srcset="" />
          <p>DIBI Agoussi pierre <br> 
            <span>Directeur des ressources Humaines</span>
          </p>
          <span class="number"><span>5</span></span>
        </div>
        <div class="userBox">
          <img src="@/assets/img/avatarProfil.jpg" alt="" srcset="" />
          <p>DIBI Agoussi pierre <br> 
            <span>Directeur des ressources Humaines</span>
          </p>
          <span class="number"><span>5</span></span>
        </div>
        <div class="userBox">
          <img src="@/assets/img/avatarProfil.jpg" alt="" srcset="" />
          <p>DIBI Agoussi pierre <br> 
            <span>Directeur des ressources Humaines</span>
          </p>
          <span class="number"><span>5</span></span>
        </div>
        <div class="userBox">
          <img src="@/assets/img/avatarProfil.jpg" alt="" srcset="" />
          <p>DIBI Agoussi pierre <br> 
            <span>Directeur des ressources Humaines</span>
          </p>
          <span class="number"><span>5</span></span>
        </div>
        <div class="userBox">
          <img src="@/assets/img/avatarProfil.jpg" alt="" srcset="" />
          <p>DIBI Agoussi pierre <br> 
            <span>Directeur des ressources Humaines</span>
          </p>
          <span class="number"><span>5</span></span>
        </div>
        
      </div>
    </div>

    <div class="header2">
      <router-link :to="{ name: 'Dashboard' }">
        <div class="Header2logoBox">
          <img src="@/assets/icone/simplexLogo.jpeg" alt="" srcset="" />
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
// import Vue from 'vue'
export default {
  name: "chat",
  components: {},

  data: () => ({
    // USER SEACH
    SeachActive:false,
    
  }),

  methods: {
   
  },
};
</script>





<style scoped>
.profilInformationBox {
  height: 100vh;
  width: 300px;
  z-index: 50;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  box-shadow: 10px 0px 23px -1px #cecccc80;
}

.profilBox {
  width: 100%;
  border-bottom: solid 2px var(--main-white-color);
  max-height: 40vh;
  /* background:#356eea24; */
  background:linear-gradient(to left top,  #356eea, #037bb8, #9238ce);
}
.rightBoxherder >div{
  height:10vh;
  width: 100%;
  padding:0 20px;
  /* background:yellow; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.rightBoxherder >div >p{
  color: white;
  font-size: 25px;
  line-height:10px;
  padding-top:10px;
  font-weight: bold;
  /* background:green; */
}
.rightBoxherder >div >p>span{
  font-size: 10px;
}
.rightBoxherder .v-icon{
  font-size: 25px !important;
}

.userBoxWrapper{
  /* background:green; */
  width: 100%;
  padding:20px 0px;
  height: 87vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.userBox{
  height:80px;
  width:95%;
  /* background:#356eea24; */
  border-radius:10px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  /* justify-content:space-around; */
  cursor: pointer;
}
.userBox img {
  /* margin-top: 30px; */
  height: 55px;
  width:55px;
  border-radius: 100px;
  border: solid 2px;
  border-color: var(--main-blue-important) var(--main-white-color);
  margin-right:5px;
  margin-left:5px;
}
.userBox:hover{
  background:#356eea24;
}

.userBox > p {
  display:inline-block;
  /* background: pink; */
  font-size:12px;
  font-weight: bold;
  line-height:17px;
  width:75%;
}
.userBox > p >span {
  font-size: 8px;
  font-weight: normal;
}

.number {
  display:inline-block;
  height: 100%;
  width:20%;
  /* background:rgb(214, 208, 208); */
  color:white;
  display: flex;
  justify-content:center;
  align-items: center;
  font-size: 10px;
  font-weight:bold;
  /* margin-top:-30px; */
}
.number >span {
  padding:2.5px 7px;
  border-radius: 100px;
  background:red;
  /* font-size: 8px; */
  font-weight: normal;
}







.header2 {
  width: 100%;
  width: 71vw;
  margin-left: 300px;
  position: fixed;
  top: -290px;
  left: 0;
  /* background: red; */
  display: flex;
  justify-content: center;
  z-index: 99;
}

.Header2logoBox {
  height: 400px;
  /* margin-top: -30vh; */
  width: 450px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  border-radius: 100%;
  box-shadow: -1px 10px 23px -1px rgb(206 204 204 / 50%);
}
.Header2logoBox img {
  height: 80px;
  margin-bottom: 30px;
}

</style>
