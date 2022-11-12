<template>
  <div class="frontend_page">
    <header class="header-area section" style="position:unset">
        <!-- Header Top -->
        <div class="header-top section">
            <div class="container">
                <div class="row">
                    <!-- Header Top Left -->
                    <div class="header-top-left text-left col-sm-6">
                        <p>Have any question? +968 547856 254</p>
                    </div>
                    <!-- Header Top Right -->
                    <div class="header-top-right text-right col-sm-6">
                        <ul>
                            <li><router-link :to="{name:'login'}">Log In</router-link></li>
                            <li><router-link :to="{name:'signUp'}">Register</router-link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- Header Bottom -->
        <div class="header-bottom bg-white sticker section sticker">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                          <!-- Header Logo -->
                        <div class="header-logo float-left">
                            <a href="index.html"><img src="/landing_page/img/logo/logo.png" alt="logo"></a>
                        </div>
                        <!-- Header Buttons -->
                        <div class="header-buttons float-right">
                            <div class="header-search float-left">
                                <button class="search-toggle"><i class="zmdi zmdi-search"></i></button>
                                <div class="search-form">
                                    <form action="#">
                                        <input type="text" placeholder="Search here..." name="search" />
                                        <button type="submit"><i class="zmdi zmdi-search"></i></button>
                                    </form>                                
                                </div>
                            </div>
                        </div>
                        <!-- Main Menu -->
                        <div class="main-menu float-right hidden-xs">
                            <nav>
                                <ul>
                                    <li class="active">
                                      <router-link :to="{name:`portfolio`}">Home</router-link>
                                    </li>
                                    <li>
                                      <router-link :to="{name:`portfolio`}">About</router-link>
                                    </li>
                                    <li>
                                      <router-link :to="{name:`portfolio`}">Portfolio</router-link>
                                    </li>
                                    <li>
                                      <a href="courses.html">Courses</a>
                                        <ul class="sub-menu">
                                            <li><a href="courses.html">Courses</a></li>
                                            <li><a href="course-details.html">Course Details</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                      <a href="event.html">event</a>
                                        <ul class="sub-menu">
                                            <li><a href="event.html">event</a></li>
                                            <li><a href="event-details.html">event Details</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                        <!-- Mobile Menu -->
                        <div class="mobile-menu"></div>
                    </div>
                </div>
            </div>
        </div>   
    </header>

    <router-view />


    
  </div>
</template>

<script>
export default {};
</script>

<style></style>
