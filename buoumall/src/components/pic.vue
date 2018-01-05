<template>
	<div class="post-list">
		<ul v-for="data,index in datalist">
			<li>
				<div>
					<img :src="'http://image.buoumall.com/'+data.post.cover" alt="" class="bigPic">
				</div>
				<div class="post-li-cont">
					<h3 class="post-li-name">
						{{data.post.title}}
					</h3>
					<div class="post-li-auth">
						<div class="post-li-avatar">
							<div class="li-avatar">
								<img :src="'http://image.buoumall.com/'+data.post.author.avatar" alt="">	
							</div>
							<span>
								{{data.post.author.nickname}}
							</span>
						</div>
						<div class="post-li-action">
							<div class="post-act-li post-li-like">
								<i class="iconfont">&#xe611;</i>
								{{data.post.likeNum}}
							</div>
							<div class="post-act-li post-li-commend">
								<i class="iconfont">&#xe6e6;</i>
								{{data.post.commentNum}}
							</div>
						</div>
					</div>
				</div>
			</li>
		</ul>
	</div>	
</template>

<script>
import axios from "axios";
export default {

  name: 'pic',

  data () {
    return {
    	datalist:[]
    }
  },
  mounted(){
  	axios.post('/v2/index/recommend','memberToken=&pageNo=1&pageSize=20').then(res=>{
  		this.datalist=res.data.data.list})
  }
}
</script>

<style lang="scss" scoped>
.post-list{
	height: 100%;
}
.bigPic{
	width: 3.75rem;
	height: 2.11rem;
}
li{
	margin-bottom: .1rem;
	background: #fff;
}
.post-li-cont{
	padding: .14rem;
	.post-li-name{
		font-size: 14px;
    	font-weight: 400;
   		margin: 0;
    	color: #333;
    	overflow: hidden;
    	text-overflow: ellipsis;
    	white-space: nowrap;
	}
	.post-li-auth{
		height: 0.3rem;
		line-height: 0.3rem;
		color: #333;
		font-size: 12px;
		margin-top: .14rem;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		display: -webkit-flex;
		-webkit-box-align: start;
		-ms-flex-align: start;
		align-items: flex-start;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
		.post-li-avatar{
			height: .3rem;
    	line-height: .3rem;
    	overflow: hidden;
    	margin-right: .07rem;
    	.li-avatar{
    		border-radius: 50%;
    		height: 100%;
    		width: .3rem;
    		overflow: hidden;
    		float: left;
    		img{
    			width: 0.3rem;
    			height: 0.3rem;
    		}
    	}
    	span{
    		display: block;
    		margin-left: .37rem;
    		overflow: hidden;
    		text-overflow: ellipsis;
    		white-space: nowrap;
    	}
		}
	}
	.post-li-action{
		text-align: right;
    	white-space: nowrap;
	}
	.post-li-like{
		margin-right: .15rem;
	}
	.post-act-li{
		display: inline-block;
    	vertical-align: middle;
	}
}

 @font-face {
  font-family: 'iconfont';
  src: url('../assets/fontx/iconfont.eot');
  src: url('../assets/fontx/iconfont.eot?#iefix') format('embedded-opentype'),
  url('../assets/fontx/iconfont.woff') format('woff'),
  url('../assets/fontx/iconfont.ttf') format('truetype'),
  url('../assets/fontx/iconfont.svg#iconfont') format('svg');
}

.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
</style>