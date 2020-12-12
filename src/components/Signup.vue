<template>
  <div class="form-container">
    <form action="" class="form-design">
      <label for="">Full Name</label>
      <input type="text" />
      <label for="">Email</label>
      <input type="email" name="" id="" />
      <label for="">Password</label>
      <input type="password" name="" id="" />
      <label for="">Select role</label>
      <select name="" id="">
        <option value="">Farmer</option>
        <option value="">Buyer</option>
      </select>
      <button type="submit">REGISTER</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
.form-container {
  display: flex;
  width: 100%;
  height: 70vh;
  justify-content: center;
}
.form-design {
  display: flex;
  flex-direction: column;
  width: 40%;
}
label {
  margin: 10px 10px 5px 10px;
}
option {
  padding: 5px;
  height: 1.5em;
  font-size: 1em;
}
select {
  padding: 5px;
  height: 2em;
  font-size: 1.5em;
  border-width: 0px 0px 5px;
  border-color: #9359ff;
  border-radius: 15px 15px 0px 0px;
}
input {
  padding: 5px;
  height: 2em;
  font-size: 1.5em;
  border-width: 0px 0px 5px;
  border-color: #9359ff;
  border-radius: 15px 15px 0px 0px;
}
input:focus {
  outline: none;
}
</style>
