<template>
  <div id="Download">
    <a href="#">Download request statistics CSV</a> <br />
    <a href="#">Download response time distribution CSV</a> <br />
    <a href="#">Download exceptions CSV</a>
  </div>
</template>

<script>
export default {
  name: "Download"
};
</script>

<style scoped>
#Download {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  position: relative;
  height: 100%;
  width: 100%;
}
a,
a:active {
  color: #2c3e50;
  text-decoration-line: none;
}
</style>
