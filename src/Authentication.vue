<template>
  <div>
    <div v-if="isToggle">
      <div class="auth-header">
        <h1>Signup</h1>
        <div class="btt-header">
          <button @click="isToggle = !isToggle">Login instead?</button>
        </div>
      </div>
      <Signup />
    </div>
    <div v-else>
      <div class="auth-header">
        <h1>Login</h1>
        <div class="btt-header">
          <button @click="isToggle = !isToggle">Register instead?</button>
        </div>
      </div>
      <Login />
    </div>
  </div>
</template>

<script>
import Signup from './components/Signup.vue';
import Login from './components/Login.vue';
export default {
  data() {
    return {
      isToggle: false,
    };
  },
  components: { Login, Signup },
};
</script>

<style>
.auth-header {
  display: block;
  text-align: center;
  margin: 50px;
}
.btt-header {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
