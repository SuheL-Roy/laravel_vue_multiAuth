<template>
  <div class="page-sidebar custom-scrollbar">
    <div class="sidebar-user text-center">
      <div>
        <img
          v-if="get_auth_info.image"
          alt=""
          class="img-50 rounded-circle"
          :src="get_profile_image_url"
        />
        <img
          v-else
          class="img-50 rounded-circle"
          src="/assets/images/user/1.jpg"
          alt="#"
        />
      </div>
      <h6 class="mt-3 f-12">{{ get_auth_info.username }}</h6>
    </div>
    <ul class="sidebar-menu">
      <li v-if="get_auth_role_name == 'admin'">
        <div class="sidebar-title">Admin</div>
        <a href="#" class="sidebar-header">
          <i class="icon-desktop"></i><span>Link</span>
       </a>
        <ul >
          <li>
            <router-link :to="{ name: 'admin' }">Home</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'users' }">Users</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'BookEntry' }">BookEntry</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'BookList' }">BookList</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'profile' }">Profile</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'EntryList' }">EntryList</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'NewEntry' }">NewEntry</router-link>
          </li>
        </ul>
      </li>
      <li v-if="get_auth_role_name == 'student'">
        <div class="sidebar-title">Student</div>
        <a href="#" class="sidebar-header">
          <i class="icon-desktop"></i><span>Link</span>
        </a>
        <ul>
          <li>
            <router-link :to="{ name: 'student' }">Student</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'StudentProfile' }">Profile</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'EntryDetails' }">EntryDetails</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Book-Lists' }">BookList</router-link>
          </li>
        </ul>
      </li>
      <li v-if="get_auth_role_name == 'management'">
        <div class="sidebar-title">Management</div>
        <a href="#" class="sidebar-header">
          <i class="icon-desktop"></i><span>Link</span>
        </a>
        <ul>
          <li>
            <router-link :to="{ name: 'management' }">Management</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'ManagementProfile' }">Profile</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'ManageMentBookList' }">BookList</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'ManagementEntryList' }">EntryList</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'ManagementNewEntry' }">NewEntry</router-link>
          </li>
        </ul>
      </li>
      <li>

        <a href="#" @click="get_logout()" class="sidebar-header">
          <i class="icon-desktop"></i><span>logout</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import $ from "jquery";
import { mapMutations, mapGetters } from 'vuex';
//import axios from 'axios';
export default {
  name: "sidebar-page",

  created: function () {
    this.init();
  },
  methods: {
    init: function () {
      "use strict";
      setTimeout(() => {
        $.sidebarMenu = function (menu) {
          var animationSpeed = 300,
            subMenuSelector = ".sidebar-submenu";
          $(menu).on("click", "li a", function () {
            var $this = $(this);
            var checkElement = $this.next();
            if (
              checkElement.is(subMenuSelector) &&
              checkElement.is(":visible")
            ) {
              checkElement.slideUp(animationSpeed, function () {
                checkElement.removeClass("menu-open");
              });
              checkElement.parent("li").removeClass("active");
            } else if (
              checkElement.is(subMenuSelector) &&
              !checkElement.is(":visible")
            ) {
              var parent = $this.parents("ul").first();
              var ul = parent.find("ul:visible").slideUp(animationSpeed);
              ul.removeClass("menu-open");
              var parent_li = $this.parent("li");
              checkElement.slideDown(animationSpeed, function () {
                checkElement.addClass("menu-open");
                parent.find("li.active").removeClass("active");
                parent_li.addClass("active");
              });
            }
          });
        };
        $(".mobile-sidebar .switch-state").click(function () {
          $(".page-body-wrapper").toggleClass("sidebar-close");
        });
        $.sidebarMenu($(".sidebar-menu"));
      }, 300);
    },
    ...mapMutations([
       'set_logout'
    ]),
    get_logout: function () {
     window.axios.get('/user/logout')
      .then((res)=>{
          console.log(res.data);
      }).catch(err=>{
        console.log(err);
      })
      this.set_logout();
      this.$router.replace({ name: 'login' });

    },
  },

  computed: {
    ...mapGetters([
      'get_check_auth',
      'get_auth_role_name',
      'get_profile_image_url',
      'get_auth_info'
    ])
  }
};
</script>

<style>

</style>
