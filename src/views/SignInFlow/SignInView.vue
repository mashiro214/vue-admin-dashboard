<template>
  <div class="container">
    <div class="request">
      Don't have a Vue Dashboard account?
      <router-link to="/request">Request an account</router-link>
    </div>
    <div class="login">
      <img src="@/assets/DCHQ.svg" />
      <h4>Sign into Vue Dashboard HQ</h4>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Sign In</button>
      <router-link to="/recover">Forgot your password?</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignInView",
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  // horizontal
  justify-content: center;
  // vertical
  align-items: center;

  min-height: 100vh;
}

.login {
  width: 400px;
}

.request {
  position: absolute;
  top: 40px;
  right: 40px;

  color: rgba(255, 255, 255, 0.3);

  a {
    color: white;
  }
}

h4 {
  margin: 0;
  line-height: 34px;
  font-size: 24px;
  text-align: center;

  color: #ffffff;
}

input {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  border-radius: 4px;

  height: 60px;
  // width of the container
  width: 100%;

  font-size: 20px;
  color: white;
  padding-left: 20px;
  margin-top: 20px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
}

button {
  background: #56ccf2;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  border: none;

  height: 60px;
  width: 100%;

  font-size: 20px;
  color: white;

  margin-top: 20px;
  margin-bottom: 40px;
}

// style for router link
a {
  line-height: 25px;
  font-size: 16px;
  text-align: center;

  color: rgba(255, 255, 255, 0.3);
  // no underline
  text-decoration: none;
}
</style>
