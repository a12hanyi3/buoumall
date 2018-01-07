<template>
	<div id="all">
		<div id="header">
			<router-link tag="section" activeClass="active" to="/design">←</router-link>
			<section class="title">{{name}}</section>
		</div>
		<div class="photolist"> 
			<ul>
				<router-link v-for="data in datalist" tag="li" to="/shop" :key="data.id">
					<div class="pic"><img :src="'http://image.buoumall.com/'+ data.picture"/></div>
					<div class="black"></div>
					<h2>{{data.brandName}}</h2>
					<img class="see":src="'http://image.buoumall.com/'+ data.avatar"/>
					<p class="name">{{data.nickname}}</p>
					<p class="follw">{{data.fansNum+"人关注"}}</p>
					<button class="btn">+关注</button>
					<p class="jiesao">{{data.signature}}</p>
				</router-link>
			</ul>

		</div>
	</div>
</template>
		
<script>
import axios from "axios";
export default {

  name: 'designer',

  data () {
    return {
    	datalist:[],
    	name:''
    }
  },
   mounted(){
	this.name =this.$route.params.name
  		axios.post('/designer/findByDesignStyle',`memberToken=&styleId=${this.$route.params.id}&pageNum=1&pageSize=20`).then(res=>{
  		this.datalist = res.data.data.list
  	})
  },
};
</script>

<style lang="scss" scoped>
#all{
	#header{
		position:fixed;
		top:0;
		left:0;
		z-index:9999;
		height:0.4rem;
		background:white;
		width:100%;
		section{
			float:left;
			line-height:0.4rem;
		}
		section:nth-child(1){
			font-size:0.25rem;
			color:#999;
			width:0.4rem;
			margin-left:0.1rem;
		}
		.title{
			width:2.75rem;
			text-align:center;
			font-size:0.14rem;
			font-weight:600;
		}
	}
    .photolist{
    	height:2.37rem;
    	width:100%;
	    		ul{
	    			li:nth-child(1){
	    				margin-top:0.49rem;
	    			}
	    			li{
	    				position:relative;
	    				top:0;
	    				left:0;
	    				width:100%;
	    				height:2.37rem;
	    				.pic{
	    					width:100%;
	    					height:1.87rem;
	    					overflow:hidden;
	    					img{
	    						width:100%;
	    					}
	    				}
	    				.black{
	    					z-index:1;
	    					position:absolute;
	    					opacity:.6;
	    					top:0;
	    					left:0;
	    					width:100%;
	    					height:1.87rem;
	    					background:#000;
	    				}
	    				h2{
	    					z-index:2;
	    					color:white;
	    					position:absolute;
	    					top:0.65rem;
	    					left:0;
	    					padding-left:0.14rem;
	    					font-weight:100;	    				
	    				}
	    				.see{
	    					z-index:2;
	    					width:0.5rem;
	    					height:0.5rem;
	    					position:absolute;
	    					top:1.2rem;
	    					border:2px solid #ccc;
	    					left:0;
	    					border-radius:50%;
	    					margin-left:0.14rem;
	    					font-weight:100;	    				
	    				}
	    				.name{
	    					z-index:2;
	    					position:absolute;
	    					top:1.2rem;
	    					color:white;
	    					font-size:0.16rem;
	    					left:0.8rem;
	    				}
	    				.follw{
	    					z-index:2;
	    					position:absolute;
	    					top:1.5rem;
	    					color:white;
	    					font-size:0.12rem;
	    					left:0.8rem;
	    				}
	    				.btn{
	    					z-index:2;
	    					right:0;
	    					position:absolute;
	    					top:1.45rem;
	    					border:0;
	    					color:white;
	    					outline: none;
	    					background:#efb3a9;
	    					width:0.5rem;
	    					height:0.25rem;
	    					margin-right:0.15rem;
	    					border-radius:0.05rem;
	    				}
	    				.jiesao{
	    					color:#9e9e9e;
	    					font-size:0.14rem;
	    					line-height:0.5rem;
	    					padding-left:0.14rem;
	    				}
	    			}
	    		}
    	    }
}
</style>