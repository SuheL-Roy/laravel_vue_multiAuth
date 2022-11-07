<template>
  <div class="auth-innerright">
    <div class="authentication-box">
      <h4>SignUp</h4>
      <h6>Enter your Username and Password For Login or Signup</h6>
      <div class="card mt-4 p-4 mb-0">
        <form class="theme-form">
          <div class="form-group">
            <label class="col-form-label pt-0">Your Email</label>
            <input type="Email" class="form-control form-control-lg" required />
          </div>
          <div class="form-group">
            <label class="col-form-label">Password</label>
            <input
              type="password"
              class="form-control form-control-lg"
              required
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
export default {};
</script>

<style></style>
