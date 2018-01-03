<template>
  <div>

    <el-header style="height: 44px;"><i class="iconfont">&#xe5a4;</i><h1>MAGIC CLOSET</h1><i class="iconfont">&#xe66f;</i></el-header>

  </div>
</template>

<script>
export default {
  name: 'headers'
}
</script>

<style lang="scss" scoped>

div{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
}

h1{
  font-size: 20px;
}
.el-header {
   display: flex;
   background-color: #fff;
   color: #333;
   line-height: 44px;

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
