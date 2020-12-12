<template>
  <div class="navbar">
    <div class="nav-logo">
      <li>CropBook</li>
    </div>
    <div class="nav-links">
      <li>About</li>
      <li>Listing</li>
      <li><router-link to="/auth">Authenticate</router-link></li>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
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
  font-weight: 400;
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
