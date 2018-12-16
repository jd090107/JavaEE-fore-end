<template>
  <div id="ModifyPassword">
    <el-col :span="8" :offset="8">
      <el-form>
        <el-form-item
          ><el-input
            v-model="veri"
            placeholder="please input the verification you have received"
          ></el-input><span><el-button @click="send" style="border:none;">重新发送</el-button></span>
        </el-form-item>
        <el-form-item
          ><el-input
            v-model="password"
            placeholder="please input new password"
          ></el-input
        ></el-form-item>
        <el-button type="primary" @click="save">保存</el-button>
      </el-form>
    </el-col>
  </div>
</template>

<script>
export default {
  name: "ModofyPassword",
  data() {
    return {
      veri: "",
      password: "",
      verification: "",
      account: "123@example.com"
    };
  },
  mounted() {
    this.account = this.$route.params.account;
    this.verification = "123";
  },
  methods: {
    save() {
      if (this.verification !== this.veri) {
        this.$message("验证码错误");
      } else {
        this.$message("修改成功");
      }
    },
    send(){
      this.verification="456"
    }
  }
};
</script>

<style scoped>
#ModifyPassword {
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
