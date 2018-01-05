<template>
<ul>
	<li v-for="data,index in datalist">
		<div class="dyn-list">
	<div class="dynamic-card">
		<div class="dyn-info">
			<div class="dyn-avatar avatar-designer">
				<img :src="'http://image.buoumall.com/'+data.author.avatar" :alt="data.author.nickname">
			</div>
			<div class="dyn-det">
				<div class="dyn-auth">
					<span>{{data.author.nickname}}</span>
					<span>{{data.author.signature}}</span>
				</div>
				<div class="dyn-btn">
					<span>+关注</span>
				</div>
			</div>
		</div>
		<div class="dyn-cont">
			<div class="dyn-content">
				{{data.content}}
			</div>
			<div class="dyn-imgs">
				<ul>
					<li v-for="imgPic,i in data.imgList">
						<div class="li-img">
								<img :src="'http://image.buoumall.com/'+imgPic" alt=""  v-imgs="data.imgList">
						</div>
					</li>
				</ul>
			</div>
			<div class="dyn-action">
				<div class="dyn-time">
					{{data.createTime}}
				</div>
				<div class="dyn-nums">
					<span>
						<i class="iconfont">&#xe611;</i>
						{{data.likeNum}}
					</span>
					<span>
						<i class="iconfont">&#xe6e6;</i>
						{{data.commentNum}}
					</span>
				</div>
			</div>
		</div>
	</div>
</div>
	</li>
</ul>


</template>

<script>
import axios from "axios";
import Vue from "vue";
Vue.directive('imgs',function(el,binding,vnode){
			console.log(binding.value.length)
			for(let i=0; i<10000; i++){
				if(binding.value.length == 1){
					el.setAttribute('class','img-col-1');
				} else if ((binding.value.length) == 2 || (binding.value.length) == 4){		
					el.setAttribute('class','img-col-2');
				} else {
					el.setAttribute('class','img-col-3');
				}


			}
		

})
export default {

  name: 'trends',

  data () {
    return {
    	datalist:[],
    	imgList:[],
    }
  },
  mounted(){
  	axios.post('/v2/dynamic/list','memberToken=&pageNo=1&pageSize=20').then(res=>{
  		this.datalist = res.data.data.list
  		this.imgList = res.data.data.list.imgList
  	})
  },
}
</script>

<style lang="scss" scoped>
.dynamic-card{
	margin-bottom: .1rem;
    padding: .14rem;
    background: #fff;
    .dyn-info{
    	height: .3rem;
    	.dyn-avatar{
    	height: .3rem;
    	width: .3rem;
    	border-radius: 50%;
    	overflow: hidden;
    	float: left;
    	img{
    		height: .3rem;
    		width: .3rem;
    	}
    	}
    	.dyn-det{
    	margin-left: .36rem;
    	position: relative;
    	.dyn-auth{
    		margin-right: 0.55rem;
    		span{
    			display: block;
    			height: .15rem;
    			line-height: .15rem;
    			text-overflow: ellipsis;
    			overflow: hidden;
    			white-space: nowrap;
    			color: #333;
    			font-size: 14px;
    		}
    		span:last-child{
    			color: #888;
    			font-size: 12px;
    		}
    	}
    	.dyn-btn{
    		width: 0.5rem;
    		height: .25rem;
    		line-height: .25rem;
    		position: absolute;
    		right: 0;
    		top: .025rem;
    		text-align: center;
    		background: #ec9182;
    		color: #fff;
    		font-size: 12px;
    		border-radius: 5px;
    	}
    	}
    }
    .dyn-cont{
    	padding-left: .36rem;
    	.dyn-content{
    		padding: .16rem 0 .12rem;
    		font-size: 16px;
    		line-height: .2rem;
    		color: #333;
    	}
    	.dyn-imgs{
    		ul{
				width: 3.12rem;

    			overflow: hidden;
    			background: #e4e5ea; 
    			li{ 
    				padding: .01rem;
    				max-height: 2.53rem;
    				float: left;
    				overflow: hidden;
    				.li-img{
    					
    					//width: 100%;
    					 					
    					img{ 
    						//width: 100%;
    					}
    				}
    			}
    		}
    	}
    	.dyn-action{
    		margin-top: .2rem;
    		height: .2rem;
    		line-height: .2rem;
    		color: #bfc1c4;
    		.dyn-time{
    			float: left;
    			width: 1rem;
    			font-size:14px;
    		}
    		.dyn-nums{
    			margin-left: 1rem;
    			text-align: right;
    			font-size:14px;
    			span{
    				margin-right: .1rem;
    			}
    		}
    	}
    }
}
.avatar-designer{
	position: relative;
    overflow: visible!important;
    img{
	    border-radius: 50%;
    	overflow: hidden;
    }
}
.avatar-designer::before{
	content: "";
    width: .15rem;
    height: .15rem;
    background-image: url(../assets/logo.png);
    background-repeat: no-repeat;
    background-size: .15rem .15rem;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 9;
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

.img-col-1{
    // 		ul{
				// width: 2.5rem;
				// height: 2.5rem;
    // 			overflow: hidden;
    // 			li{ 
    // 				padding-bottom: .025rem;

    // 				overflow: hidden;
    // 				.li-img{
    					width: 100%;
    		// 			background: #e4e5ea;  					
    		// 			img{ 
    		// 				// width: 100%;
    						
    		// 			}
    		// 		}
    		// 	}
    		// }
    	}
.img-col-2{
    // 		ul{
				// width: 2.5rem;
				// height: 2.5rem;
    // 			overflow: hidden;
    // 			li{ 
    // 				padding-bottom: .025rem;

    // 				overflow: hidden;
    // 				.li-img{
    					width: 1.52rem;
    					height: 1.52rem;
    		// 			background: #e4e5ea;  					
    		// 			img{ 
    		// 				// width: 100%;
    						
    		// 			}
    		// 		}
    		// 	}
    		// }
    	}
.img-col-3{
    // 		ul{
				// width: 2.5rem;
				// height: 2.5rem;
    // 			overflow: hidden;
    // 			li{ 
    // 				padding-bottom: .025rem;

    // 				overflow: hidden;
    // 				.li-img{
    					width: 1.02rem;
    					height: 1.02rem;
    		// 			background: #e4e5ea;  					
    		// 			img{ 
    						
    		// 				// width: 100%;
    		// 			}
    		// 		}
    		// 	}
    		// }
    	}
</style>