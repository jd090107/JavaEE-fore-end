<template>
  <div id="Exceptions">
    <el-table :data="exceptions">
      <el-table-column prop="occurences" label="occurences"></el-table-column>
      <el-table-column prop="traceback" label="Traceback"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Exceptions",
  data() {
    return {
      exceptions: [{ occurences: 5, traceback: "error" }]
    };
  }
};
</script>

<style scoped>
#Exceptions {
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
