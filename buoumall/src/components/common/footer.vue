<template>
  <div class="all" style="height:0.49rem">

    <el-footer style="height:0.49rem">
    	<router-link to="/" tag="div" activeClass="active">
    		<i class="iconfont">&#xe694;</i>
    		<p>首页</p>
    	</router-link>
    	<router-link to="/design" tag="div" activeClass="active">
    		<i class="iconfont">&#xe602;</i>
    		<p>设计师</p>
    	</router-link>
    	<router-link to="/shop" tag="div" activeClass="active">
    		<i class="iconfont">&#xe5a4;</i>
    		<p>商店</p>
    	</router-link>
    	<router-link to="/login" tag="div" activeClass="active">
    		<i class="iconfont">&#xe66f;</i>
    		<p>购物袋</p>
    	</router-link>
    	<router-link to="/login" tag="div" activeClass="active">
    		<i class="iconfont">&#xe63a;</i>
    		<p>我</p>
    	</router-link>
    </el-footer>

  </div>
</template>

<script>
export default {
  name: 'footers'
}
</script>

<style lang="scss" scoped>
.router-link-exact-active {
  color:#f00;
}
 .el-footer,.all {
  z-index: 99;
  position: fixed;
  bottom: 0;
  left: 0;
 	display: flex;
   background-color: #fff;
   color: #333;
   justify-content: space-between;
   width: 100%;
   overflow: hidden
 }


 div{
 	  text-align: center;
 	  margin: auto 0rem;

 }

 p{
 	font-size: 12px;
 	padding: 0.03rem 0;
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
  padding: 0.04rem 0;
}
</style>