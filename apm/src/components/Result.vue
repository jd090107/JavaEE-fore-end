<template>
  <div id="Result">
    <span
      >host:{{ host }}&nbsp;&nbsp;status:{{ status }}&nbsp;&nbsp;users:{{users}}&nbsp;&nbsp;rps:{{ rps }}&nbsp;&nbsp;failures:{{ failures }}%</span
    >
    <el-tabs>
      <el-tab-pane label="Charts"
        ><Charts :record-id="recordId" :start="start"></Charts
      ></el-tab-pane>
      <el-tab-pane label="Statistics"><Statistics></Statistics></el-tab-pane>
      <el-tab-pane label="Failures"><Failures></Failures></el-tab-pane>
      <el-tab-pane label="Exceptions"><Exceptions></Exceptions></el-tab-pane>
      <el-tab-pane label="Download Data"><Download></Download></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Statistics from "./Statistics";
import Charts from "./Charts";
import Failures from "./Failures";
import Exceptions from "./Exceptions";
import Download from "./Download";
export default {
  name: "Result",
  components: { Download, Exceptions, Failures, Charts, Statistics },
  data() {
    return {
      status: "running",
      users: 50,
      rps: 5,
      failures: 56,
      recordId: 0,
      start:0,
      host:""
    };
  },
  mounted() {
    this.start = this.$route.query.start;
    this.recordId = this.$route.query.recordId;
  }
};
</script>

<style scoped>
#Result {
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
