<template>
  <div class="auth-innerright">
    <div class="authentication-box">
      <h4>SignUp</h4>
      <h6>Enter your Username and Password For Login or Signup</h6>
      <div class="card mt-4 p-4 mb-0">
    <form class="theme-form" id="signup_form" @submit.prevent="signup_submit">
       <div class="form-group">
        <label class="col-form-label">name</label>
        <input
          type="text"
          name="name"
          class="form-control"
          placeholder="mr.karim"
        />
      </div>
      <div class="form-group">
        <label class="col-form-label">Email</label>
        <input
          type="email"
          name="email"
          class="form-control"
          placeholder="test@gmail.com"
        />
      </div>
      <div class="form-group">
        <label class="col-form-label">Password</label>
        <input
          type="password"
          name="password"
          class="form-control"
          placeholder="**********"
        />
      </div>
      <div class="form-group">
        <label class="col-form-label">Retype Password</label>
        <input
          type="password"
          name="password_confirmation"
          class="form-control"
          placeholder="**********"
        />
      </div>

          <div class="checkbox p-0">
            <input id="checkbox1" type="checkbox" />
            <label for="checkbox1">Remember me</label>
          </div>
          <div class="form-group form-row mt-3 mb-0">
            <div class="col-md-3">
              <button type="submit" class="btn btn-secondary">SignUp</button>
            </div>
            <div class="col-sm-8">
              <div class="text-left mt-2 m-l-20">
                Already have an account?&nbsp;&nbsp;
                <router-link  :to="{ name:'login'}">LOGIN</router-link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  methods:{
    ...mapMutations([
      'set_auth_token',
      'set_auth_info'
    ]),
    signup_submit:function(){
      let form_data = new FormData(document.getElementById('signup_form'));
      window.axios.post('/user/reg',form_data).then((res)=>{
         console.log(res.data);
         this.set_auth_token({token:res.data.access_token});
         this.set_auth_info(res.data.user);
      }).catch(err=>{
        console.log(err.response);
      })
    }
  }
};
</script>

<style></style>
