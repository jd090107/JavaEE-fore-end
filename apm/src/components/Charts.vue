<template>
  <div id="Charts">
    <div id="time" style="width: 600px;height: 400px"></div>
    <div id="requestPerSecond" style="width: 600px;height: 400px"></div>
    <div id="users" style="width: 600px;height: 400px"></div>
    <!--<el-button @click="add">add</el-button>-->
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "Charts",
  props:['recordId',"start"],
  data() {
    return {
      time:{
        times:[],
        medianResponseTime:[],
        averageResponseTime:[],
        minResponseTime:[],
        maxResponseTime:[],
        requestPerSecond:[]
      },
      i:0,
      users: {
        times: [1, 2, 3, 4, 5, 6, 7, 8],
        statistic: [2, 3, 4, 5, 7, 8, 9, 67]
      },
      mytime: undefined,
      myresPerSec: undefined,
      myusers: undefined
    };
  },
  mounted() {
    let _self = this;
    _self.mytime = echarts.init(document.getElementById("time"));
    _self.myresPerSec=echarts.init(document.getElementById("requestPerSecond"));
    // _self.myres = echarts.init(document.getElementById("response"));
    // _self.myusers = echarts.init(document.getElementById("users"));
    let timer=window.setInterval(()=>{
      _self.axios.get("/history/task_information?reportId=" + _self.recordId).then(function (res) {
        if (parseInt(_self.i)>=_self.start){
          window.clearInterval(timer)
        }
        if (res.data.length >= 1) {
          let a = res.data[0]["dateTime"].split('T')[0];
          let b = res.data[0]["dateTime"].split('T')[1].split('.')[0];
          let start = new Date((a + ' ' + b).replace(/-/g, "/"));
         _self.time.maxResponseTime.splice(0, _self.time.maxResponseTime.length);
          _self.time.minResponseTime.splice(0, _self.time.minResponseTime.length);
          _self.time.medianResponseTime.splice(0, _self.time.medianResponseTime.length);
          _self.time.averageResponseTime.splice(0, _self.time.averageResponseTime.length);
          _self.time.requestPerSecond.splice(0,_self.time.requestPerSecond.length);
          _self.time.times.splice(0,_self.time.times.length);
          for (let i = 0; i < res.data.length; i++) {
            a = res.data[i]["dateTime"].split('T')[0];
            b = res.data[i]["dateTime"].split('T')[1].split('.')[0];
            _self.time.times.push((new Date((a + " " + b).replace(/-/g, "/")).getTime() - start.getTime()) / 1000);
            _self.time.medianResponseTime.push(parseInt(res.data[i]["medianResponseTime"]));
            _self.time.minResponseTime.push(parseInt(res.data[i]["minResponseTime"]));
            _self.time.maxResponseTime.push(parseInt(res.data[i]["maxResponseTime"]));
            _self.time.averageResponseTime.push(parseInt(res.data[i]["averageResponseTime"]));
            _self.time.requestPerSecond.push(parseInt(res.data[i]["requestPerSecond"]));
          }
        }
        _self.fresh();
        _self.i++;
      }).catch(function () {
          _self.$message("网络错误")
        }
      )
    },1000)
  },
  methods: {
    fresh() {
      let _self = this;
      _self.mytime.setOption({
        title: {
          text: "RESPOND TIME\n",
        },
        tooltip: {
          trigger: "axis"
        },
        legend:{data:['','',"medianResponseTime","averageResponseTime","minResponseTime","maxResponseTime",'','']},
        xAxis: {
          data: _self.time.times,
          type: "category"
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
             name: "medianResponseTime",
            type: "line",
            symbolSize:"none",
            smooth:true,
            data: _self.time.medianResponseTime
          },
          {
            name:"averageResponseTime",
            type:"line",
            symbolSize:"none",
            smooth:true,
            data:_self.time.averageResponseTime
          },
          {
            name:"minResponseTime",
            type:"line",
            symbolSize:"none",
            smooth:true,
            data:_self.time.minResponseTime
          },
          {
            name:"maxResponseTime",
            type:"line",
            symbolSize:"none",
            smooth:true,
            data:_self.time.maxResponseTime
          }
        ]
      },true);
      _self.myresPerSec.setOption({
        title: {
          text: "REQUEST PER SECOND\n",
        },
        tooltip: {
          trigger: "axis"
        },
        legend:{data:['','','','']},
        xAxis: {
          data: _self.time.times,
          type: "category"
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            type: "scatter",
            symbolSize:5,
            data: _self.time.requestPerSecond
          }
        ]
      },true);
    },
  }
};
</script>

<style scoped>
#Charts {
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
