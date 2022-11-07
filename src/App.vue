<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/> -->
  <div>
    <div v-if="get_check_auth"> 
      <DashBoard></DashBoard>
    </div>
    <div v-else>  
      <router-view/>
    </div>
  </div>
</template>

<script>
import DashBoard from './views/backend/dashboard.vue';
import {mapGetters, mapMutations} from 'vuex'
//import axios from 'axios';
export default {
  components:{
     DashBoard
  },
  data: function () {
  },
  created: function () {
    this.check_role();
  },
  updated: function(){
      this.check_role();
      console.log(this.get_check_auth);
  },
  watch: {
    get_check_auth:{
      handler: function(){
         console.log('changes');
         if (this.get_check_auth == true) {
          // console.log('set token');
        window.axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${this.get_auth_token}`;
      } else {
        this.set_auth_token({ token: null });
        delete window.axios.defaults.headers.common.Authorization;
      }
      }

    }
  },
  methods:{
    ...mapMutations([
      'set_logout',
      'set_auth_token'
    ]),

    check_role: function(){
      if (this.get_check_auth) {
      if(this.get_auth_role_name == 'admin'){
        this.$router.replace({ name: "admin" });
      }else if(this.get_auth_role_name == 'student'){
        this.$router.replace({ name: "student" });
      }else if(this.get_auth_role_name == 'management'){
        this.$router.replace({ name: "management" });
      }else{
        this.set_logout();
        this.$router.replace({ name: "login" });
      }
      
    } else {
      this.$router.replace({ name: "login" });
    }
    }
  },
  computed: {
   ...mapGetters([
    'get_check_auth',
    'get_auth_role_name',
    'get_auth_token'
   ])
  }
};
</script>
