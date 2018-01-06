<template>
	<div id="all">
		<div id="header">
			<router-link tag="section" activeClass="active" to="/design">←</router-link>
			<section class="title">{{name}}</section>
		</div>
		<div class="photolist"> 
			<ul>
				<router-link v-for="data in datalist" tag="li" to="/design" :key="data.id">
					<div class="pic"><img :src="'http://image.buoumall.com/'+ data.picture"/></div>
					<div class="article">{{data.brandName}}</div>
				</router-link>
			</ul>
		</div>
		<footers></footers>
	</div>
</template>
		
<script>
import footers from "@/components/common/footer"

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
  components:{
  	footers,
  },
};
</script>

<style lang="scss" scoped>
#all{
	#header{
		height:0.4rem;
		border-bottom:1px solid #CCC;
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
    		li{
    			.pic{
    				width:100%;
    				height:1.87rem;
    				overflow:hidden;
    				img{
	    				width:100%;
    				}
    			}
    		}
    	}
    }
}
</style>