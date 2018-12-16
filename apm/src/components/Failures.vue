<template>
  <div id="Failures">
    <el-table :data="failures">
      <el-table-column prop="fails" label="Fails"></el-table-column>
      <el-table-column prop="method" label="Method"></el-table-column>
      <el-table-column prop="name" label="Name"></el-table-column>
      <el-table-column prop="type" label="Type"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Failures",
  data() {
    return {
      failures: [
        { fails: 100, method: "GET", name: "/", type: "connectionError" }
      ]
    };
  }
};
</script>

<style scoped>
#Failures {
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
</style>
