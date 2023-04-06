<template>
  <div class="bodyBox">
    <UserProjetTaskList></UserProjetTaskList>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserProjetTaskList from "../components/Task/UserProjetTaskList";

export default {
  name: "UserTaskManage",
  components: {
    UserProjetTaskList,
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
      return this.$store.getters.AllVisitesStorys.length;
    },
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
  font-size: 18px;
  font-weight: bold;
  /* text-align: start; */
}
.lolplp {
  background: white;
  border-radius: 10px;
  padding: 20px;
}


</style>
