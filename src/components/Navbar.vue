<template>
  <div class="navbar">
    <div class="nav-logo">
      <li><router-link to="/">CropBook</router-link></li>
    </div>
    <div class="nav-links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/listings">Listings</router-link></li>
      <li><router-link to="/auth">Authenticate</router-link></li>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  display: flex;
  width: 100%;
  justify-content: space-between;
  -webkit-box-shadow: 0px 4px 67px -19px rgba(0, 0, 0, 0.63);
  -moz-box-shadow: 0px 4px 67px -19px rgba(0, 0, 0, 0.63);
  box-shadow: 0px 4px 67px -19px rgba(0, 0, 0, 0.63);
}
.nav-links {
  display: flex;
  font-weight: 500;
}
.nav-logo {
  font-size: 1.25em;
  font-weight: 700;
}
li {
  list-style: none;
  padding: 15px;
  margin: 15px;
}
</style>
