<template>
  <div class="container-lists">
    <div v-for="index in 10" :key="index">
      <div class="list">
        <div class="crop-descritption">
          <p>{{ descritption }}</p>
        </div>
        <div class="price">{{ price }}</div>
        <input type="text" id="" placeholder="place bet" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      descritption:
        'Wheat is a grass widely cultivated for its seed, a cereal grain which is a worldwide staple food. The many species of wheat together make up the genus Triticum; the most widely grown is common wheat.',
      price: 200,
      lists: 5,
    };
  },
};
</script>

<style scoped>
.list {
  display: flex;
  justify-content: space-between;
  height: 10vh;
  padding: 30px;
  margin: 20px;
  background-color: rgb(228, 205, 255);
  border-radius: 35px;
}
.price {
  font-weight: 700;
}
.container-lists {
  width: 80%;
  padding: 20px;
  margin: 20px;
}
.bet {
  font-size: 1em;
  padding: 0;
  border-width: 0;
}
</style>
