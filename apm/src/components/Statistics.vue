<template>
  <div id="Statistics">
    <el-table :data="data">
      <el-table-column prop="type" label="Type"></el-table-column>
      <el-table-column prop="name" label="Name"></el-table-column>
      <el-table-column prop="requests" label="Requests"></el-table-column>
      <el-table-column prop="fails" label="Fails"></el-table-column>
      <el-table-column prop="median" label="Median(ms)"></el-table-column>
      <el-table-column prop="average" label="Average(ms)"></el-table-column>
      <el-table-column prop="min" label="Min(ms)"></el-table-column>
      <el-table-column prop="max" label="Max(ms)"></el-table-column>
      <el-table-column
        prop="content_size"
        label="Content Size(bytes)"
      ></el-table-column>
      <el-table-column prop="reqsPerSec" label="Reqs/Secs"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "Statistics",
  data() {
    return {
      data: [
        {
          type: "GET",
          name: "/",
          requests: 3,
          fails: 3,
          median: 3,
          average: 3,
          min: 8,
          max: 9,
          content_size: 9,
          reqsPerSec: 9
        }
      ]
    };
  }
};
</script>

<style scoped>
#Statistics {
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
