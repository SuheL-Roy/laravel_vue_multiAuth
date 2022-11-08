import axios from "axios";

const state = {
    check_auth: false,
    auth_info:{
      first_name: null,
      last_name:null,
      email:null,
      username:null,
      image:null,
      phone:null,
      status:null,
      role_name:'guest',
    },
    auth_role_name: 'guest',
    auth_token: '',
    server_url:'http://127.0.0.1:8000'
};
const getters = {
    get_check_auth:state=>state.check_auth,
    get_auth_info:state=>state.auth_info,
    get_auth_role_name:state=>state.auth_role_name,
    get_auth_token:state=>state.auth_token,
    get_server_url:state=>state.server_url,
    get_profile_image_url: state=>state.server_url+'/'+state.auth_info.image
};
const actions = {
    fetch_auth_info:function(){
        axios.get('api/links').then((res)=>{
            console.log(res.data)
        })
    }
};
const mutations = {
    set_auth_role_name: function(state,auth_role_name){
        state.auth_role_name = auth_role_name
    },
    set_check_auth: function(state,check_auth){
        state.check_auth = check_auth;
    },
    set_auth_info:function(state,auth_info){
       state.auth_info.username = auth_info.name;
       state.auth_info.image = auth_info.image;
       state.auth_info.email = auth_info.email;
       state.auth_info.role_name = auth_info.user_role.name;
       this.commit('set_auth_role_name',auth_info.user_role.name);
       this.commit('set_check_auth',true);
    },
    set_logout:function(state){
        state.check_auth = false;
        state.auth_role_name ='guest'
    },
    set_auth_token:function(state,info){
      state.auth_token = info.token;
    }
};

export default {
  state,
  getters,
  mutations,
  actions,
};
