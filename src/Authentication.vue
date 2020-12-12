<template>
  <div>
    <Signup />
    <Login />
  </div>
</template>

<script>
import Signup from './components/Signup.vue';
import Login from './components/Login.vue';
export default {
  components: { Login, Signup },
};
</script>

<style></style>
