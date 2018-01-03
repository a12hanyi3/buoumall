<template>
  <div class="all">

    <el-footer style="height:0.49rem">
    	<div>
    		<i class="iconfont">&#xe694;</i>
    		<p>首页</p>
    	</div>
    	<div>
    		<i class="iconfont">&#xe602;</i>
    		<p>设计师</p>
    	</div>
    	<div>
    		<i class="iconfont">&#xe5a4;</i>
    		<p>商店</p>
    	</div>
    	<div>
    		<i class="iconfont">&#xe66f;</i>
    		<p>购物袋</p>
    	</div>
    	<div>
    		<i class="iconfont">&#xe63a;</i>
    		<p>我</p>
    	</div>
    </el-footer>

  </div>
</template>

<script>
export default {
  name: 'footers'
}
</script>

<style lang="scss" scoped>
 .el-footer {
 	display: flex;
   background-color: #fff;
   color: #333;
   justify-content: space-between;
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