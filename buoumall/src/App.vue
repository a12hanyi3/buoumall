<template>
  <div id="app">

    <el-container>
      <headers></headers>
      <el-main>
        <router-view></router-view>
      </el-main>
      <footers></footers>
    </el-container>

  </div>
</template>

<script>
import headers from "@/components/common/header"
import footers from "@/components/common/footer"
export default {
  name: 'app',
  components: {
    headers,
    footers
  }
}
</script>

<style lang="scss">

*{
  margin: 0;
  padding: 0;
}

html,body{
  height:100%;
}

#app,.el-container {
  height:100%;
} 


 .el-main {
   background-color: #E9EEF3;
   color: #333;
   text-align: center;
   line-height: 160px;
 }
 
 .el-container {
   margin-bottom: 40px;
   flex-direction: column;
 }
 
</style>
