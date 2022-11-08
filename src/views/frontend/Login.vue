<template>
  <div class="auth-innerright">
    <div class="authentication-box">
      <h4>LOGIN</h4>
      <h6>Enter your Username and Password For Login or Signup</h6>
      <div class="card mt-4 p-4 mb-0">
        <form class="theme-form" id="login_form" @submit.prevent="login_submit">
          <div class="form-group">
            <label class="col-form-label pt-0"> Your Email</label>
            <input type="email" name="email" class="form-control form-control-lg" required />
          </div>
          <div class="form-group">
            <label class="col-form-label">Password</label>
            <input
              type="password"
              name="password"
              class="form-control form-control-lg"
              required
            />
          </div>
          <div class="checkbox p-0">
            <input id="checkbox1" type="checkbox" />
            <label for="checkbox1">Remember me</label>
          </div>
           <div class="form-group">
             <button class="btn btn-success m-1" @click.prevent="login(true,'admin')">admin</button>
             <button class="btn btn-success m-1" @click.prevent="login(true,'student')">student</button>
             <button class="btn btn-success m-1" @click.prevent="login(true,'management')">management</button>
           </div>
          <div class="form-group form-row mt-3 mb-0">
            <div class="col-md-3">
              <button type="submit" class="btn btn-secondary">LOGIN</button>
            </div>
            <div class="col-sm-8">
              <div class="text-left mt-2 m-l-20">
                Don,t have an account?&nbsp;&nbsp;
                <router-link  :to="{ name:'signUp'}">SIGNUP</router-link>
              </div>
              <br />
          <div class="text-left mt-2 m-l-20">
            Forget Password??
            <router-link :to="{ name:'forget'}">Click here</router-link>
          </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
//import axios from 'axios';
import { mapMutations} from 'vuex'; 
export default {
    methods:{
        ...mapMutations([
            'set_auth_role_name',
            'set_check_auth',
            'set_auth_token',
            'set_auth_info'
        ]),
     login: function(status,role_name) {
         this.set_check_auth(status);
        this.set_auth_role_name(role_name);
     },
     login_submit:function(){
      let form_data = new FormData(document.getElementById('login_form'));
       window.axios.post('/user/login',form_data).then((res)=>{
           console.log(res.data);
           this.set_auth_token({token:res.data.access_token});
           this.set_auth_info(res.data.user);
          //  localStorage.setItem('b-token',res.data.user.access_token);
      }).catch(err=>{
         console.log(err.response);
      })
     }  
    },
  
};
</script>

<style></style>
