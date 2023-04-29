<template>
  <div class="bodyBox">
    <div class="TheBoxBody">
      <p class="sectionTitle">Communiqué</p>
      <v-container fluid class="pouletBr">
        <v-row>
          <v-col cols="12" md="3" lg="3">
            <div class="numberWrapper formBox">
              <v-form ref="form1">
                <v-container fluid class="addMessage">
                  <v-row>
                    <v-col cols="12" md="12" lg="12"> 
                      <v-text-field height="40" 
                        background-color="#356eea24" 
                        solo
                        label="Objet"
                        append-icon="mdi-text-box-edit"
                        ref="topic"
                        type="text"
                        v-model="new_message.titre"
                        :rules="[() => !!new_message.titre]"
                        persistent-hint
                        required
                      ></v-text-field>
                    </v-col>
                    <div style="width:100%; padding: 0px 10px">
                      <v-textarea
                        solo
                        clearable
                        clear-icon="mdi-close-circle"
                        rows="6"
                        name="input-7-4"
                        label="Communiqué"
                        class="the-message-area"
                        v-model="new_message.contenu_comminuque"
                        :rules="[() => !!new_message.contenu_comminuque]"
                        required
                      ></v-textarea>
                    </div>
                    <v-col cols="12" md="12" lg="12">
                      <p class="simplex-btn simplex-submit-btn" v-on:click.prevent="submit1">Enregistrer</p>
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </div>
          </v-col>
          <v-col cols="12" md="9" lg="9">
            <div class="numberWrapper">
              <allMessageList></allMessageList>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <transition name="slide">
      <v-alert
        v-if="addingSuccess"
        elevation="13"
        type="success"
        max-width="300"
        class="alert"
        color="mainBlueColor"
      >
        Communiqué éffectué avec succes</v-alert
      >
    </transition>
    <transition name="slide">
      <v-alert
        v-if="addingfalse"
        elevation="13"
        type="error"
        max-width="300"
        class="alert"
        color="error"
      >
        communiqué pas éffectué</v-alert
      >
    </transition>
  </div>
</template>












<script>
import axios from "axios";
import allMessageList from "../components/messageList/alleMessagesList.vue";

export default {
  name: "Messagerie",
  components: {
    allMessageList,
  },

  data: () => ({
    // FOR DEST CHOSING
    switch1: false,


    // FOR FORM SENDING
    new_message: {
      compagnie_id:"",
    },
    manualTopicdata:"",
    messageaAddingResponse: "",
    addingSuccess: false,
    addingfalse: false,
    

  }),

  methods: {
    submit1() {
      if (this.$refs.form1.validate()) {
        axios({ url: "/api/v1/admin/store_communique", data: this.new_message, method: "POST" })
        .then((response) => {
          this.messageaAddingResponse = response.data;
          console.log(response.data);
          if (this.messageaAddingResponse) {
            this.addingSuccess = !this.addingSuccess;
            setTimeout(() => {
              this.addingSuccess = !this.addingSuccess;
              this.$store.dispatch("init_message");
            }, 3000);
          } else {
            this.addingfalse = !this.addingfalse;
            setTimeout(() => {
              this.addingfalse = !this.addingfalse;
            }, 3000);
          }
        })
        .catch((error) => {
          this.messageaAddingResponse = error.message;
          console.error("There was an error!", error);
        });
        this.$refs.form1.reset();
      }
      
    },

  


  },

  computed: {
    
    
  },

  created() {
    this.new_message.compagnie_id = localStorage.getItem("user-compagnie");
  },
};
</script>


















<style scoped>
.sectionTitle {
  margin: 0;
  margin-left: 15px;
  margin-bottom: 5px;
  font-size: 15px;
  font-weight: bold;
}
.numberWrapper {
  border-radius: 10px;
  background: white;
  height: 55vh;
}
.formBox{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
/* .rightBox,
.middleBox {
  height: 60vh;
} */
.addMessage {
   overflow-y: auto;
}

.addMessage::-webkit-scrollbar {
  width: 7px;
}
.addMessage::-webkit-scrollbar-track {
  background: rgb(255, 255, 255);
}

.addMessage::-webkit-scrollbar-thumb {
  background-color: var(--main-green-color);
  border-radius: 30px;
  border: 1px solid rgb(255, 255, 255);
}

.the-message-area{
  /* background: chocolate !important; */
}






@media (min-width: 960px) {
  .col-md-12 {
    height: 75px;
  }
}

/*++++++++++++++++
===> MEDIUM Large tablet to laptop	960px > < 1264px*<===
+++++++++++++++++*/
@media screen and (min-width: 960px) and (max-width:1100px){
  .addMessage {
    height: 65.5vh;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .v-btn:not(.v-btn--round).v-size--large {
    width: 100%;
}
    
}
</style>
