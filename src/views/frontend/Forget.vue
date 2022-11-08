<template>
    <div class="auth-innerright">
        <div class="authentication-box">
            <h4>Forget Password</h4>
            <div class="card mt-4 p-4 mb-0">
                <form class="theme-form" id="forget_form" @submit.prevent="forget_submit">
                    <div class="form-group">
                        <label class="col-form-label"
                          >Email <sub>you will recive a token.</sub></label>
                        <input type="email" name="email" class="form-control" placeholder="test@gmail.com" />
                    </div>
                    <div class="form-group form-row mt-3 mb-0">
                        <div class="col-md-3">
                            <button type="submit" class="btn btn-secondary">Submit</button>
                        </div>
                        <div class="col-sm-8">
                            <div class="text-left mt-2 m-l-20">
                                Already have an account?&nbsp;&nbsp;
                                <router-link :to="{ name: 'login' }">LOGIN</router-link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="card mt-4 p-4 mb-0">
                <form class="theme-form" id="token_form" @submit.prevent="token_submit">
                    <div class="form-group">
                        <label class="col-form-label">Token <sub>you will recive a password</sub></label>
                        <input type="text" name="forget_token" class="form-control"  />
                    </div>
                    <div class="form-group">
                        <label class="col-form-label">Email</label>
                        <input type="email" name="email" class="form-control" placeholder="test@gmail.com" />
                    </div>
                    <div class="form-group form-row mt-3 mb-0">
                        <div class="col-md-3">
                            <button type="submit" class="btn btn-secondary">Submit</button>
                        </div>
                        <div class="col-sm-8">
                            <div class="text-left mt-2 m-l-20">
                                Already have an account?&nbsp;&nbsp;
                                <router-link :to="{ name: 'login' }">LOGIN</router-link>
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
    methods: {
        ...mapMutations([
            'set_auth_token',
            'set_auth_info'
        ]),
        forget_submit: function () {
            let form_data = new FormData(document.getElementById('forget_form'));
            window.axios.post('/user/forget-password', form_data).then((res) => {
                console.log(res.data);
             window.alert("a mail has been sent to your email");   
             document.getElementById('forget_form').reset();
            }).catch(err => {
                console.log(err.response);
            })
        },
        token_submit: function () {
            let form_data = new FormData(document.getElementById('token_form'));
            window.axios.post('/user/token', form_data).then((res) => {
                console.log(res.data);
                document.getElementById('token_form').reset();
                window.alert(
                "please check your email . soon you will recive a password."
                );
                this.$router.replace({ name: "login" });
        
            }).catch(err => {
                console.log(err.response);
            })
        }
    }
};
</script>
  
<style>

</style>
  