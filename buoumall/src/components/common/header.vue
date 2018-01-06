<template>
  <div style="height:0.4rem">

    <el-header style="height:0.4rem">
    <router-link to="/shop" class="iconfont" tag="i">&#xe5a4;</router-link>
    <h1>MAGIC CLOSET</h1>
    <router-link to="/login" class="iconfont" tag="i">&#xe66f;</router-link></el-header>

  </div>
</template>

<script>
export default {
  name: 'headers'
}
</script>

<style lang="scss" scoped>


h1{
  font-size: 20px;
}
.el-header {
  position: fixed;
  top: 0;
  left: 0;
   display: flex;
   background-color: #fff;
   color: #333;
   line-height: 0.4rem;
   z-index:99;
   width: 100%;
   justify-content: space-between;
 }

 @font-face {
  font-family: 'iconfont';
  src: url('../../assets/font/iconfont.eot');
  src: url('../../assets/font/iconfont.eot?#iefix') format('embedded-opentype'),
  url('../../assets/font/iconfont.woff') format('woff'),
  url('../../assets/font/iconfont.ttf') format('truetype'),
  url('../../assets/font/iconfont.svg#iconfont') format('svg');
}

.iconfont{
  font-family:"iconfont" !important;
  font-size:22px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>
