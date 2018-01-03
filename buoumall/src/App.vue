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

.el-container{
  display: flex;
  flex-direction:column;
}

 .el-main {
   background-color: #E9EEF3;
   color: #333;
   text-align: center;
   line-height: 1.6rem;
   flex:1;
 }
 
 .el-container {
   flex-direction: column;
 }
 
</style>
