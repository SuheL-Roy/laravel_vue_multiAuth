<template>
 <div class="page-wrapper">
        <div class="container-fluid">
            <!--login page start-->
            <div class="authentication-main">
                <div class="row">
                    <div class="col-md-4 p-0">
                        <div class="auth-innerleft">
                            <div class="text-center">
                                <img src="/assets/images/logo-login.png" class="logo-login" alt="" />
                                <hr />
                                <div class="social-media">
                                    <ul class="list-inline">
                                        <li class="list-inline-item">
                                            <i class="fa fa-facebook txt-fb" aria-hidden="true"></i>
                                        </li>
                                        <li class="list-inline-item">
                                            <i class="fa fa-google-plus txt-google-plus" aria-hidden="true"></i>
                                        </li>
                                        <li class="list-inline-item">
                                            <i class="fa fa-twitter txt-twitter" aria-hidden="true"></i>
                                        </li>
                                        <li class="list-inline-item">
                                            <i class="fa fa-linkedin txt-linkedin" aria-hidden="true"></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8 p-0">
                        <router-view/>
                    </div>
                </div>
            </div>
            <!--login page end-->
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>