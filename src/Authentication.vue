<template>
  <div>
    <Navbar />
    Authentication
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
export default {
  components: { Login, Signup },
};
</script>

<style></style>
