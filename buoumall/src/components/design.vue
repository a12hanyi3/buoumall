<template>
	  <div id="all">
		<headers></headers>
			<div id="middle">
				<div id="design-style">
					<router-link tag="span" activeClass="active" to="/shop">设计师风格</router-link>
					<router-link tag="span" activeClass="active" to="/shop">全部设计师 〉 </router-link></div>
				<div id="style-list">
						<ul>
							<router-link v-for="data in datalist" tag="li" :to="'/designer/'+data.id+'/'+data.name"  :key="data.id">
								<img :src="'http://image.buoumall.com/'+data.background"/>
								<p>{{data.name}}</p>
								<span>{{data.ename}}</span>
								<div id="opa"></div>
						    </router-link>
						</ul></div>
				<div id="style-head">
					<span class="left">本周设计师人气榜</span>
					<span class="right" @click="handleclick">换一批</span>	</div>
				<div id="design-list">
				<ul>				
					<router-link tag="li" to="/shop" v-for="data in designlist" :key="data.id">
						<div class="bag">
							<div class="pic">
								<img :src="'http://image.buoumall.com/'+ data.avatar"/>
							</div>
							<div class="name">
								<span class="dsn">{{data.nickname}}</span>
								<span class="btn">+关注</span>
								<p class="article">{{data.signature}}</p>
							</div>	
						</div>	
					</router-link>
				</ul>
				</div>
			</div>
		<footers></footers>
	</div>
</template>

<script>
import headers from "@/components/common/header"
import footers from "@/components/common/footer"

import axios from "axios";
export default {

  name: 'design',

  data () {
    return {
    	datalist:[],
    	designlist:[]
    }
  },
  methods:{
  	handleclick(){
  		axios.post("/designer/v2/findPopularDesigner",'memberToken=&randomPlace='+ Math.floor(Math.random()*1000)).then(res=>{
  		console.log(res.data.data);

  		this.designlist = res.data.data.designers;
  	})
  	}
  },
  mounted(){
  	//http://api.buoumall.com/designer/v2/getDesignStyleList
  		axios.get("/designer/v2/getDesignStyleList").then(res=>{
  		// console.log(res.data.data);

  		this.datalist = res.data.data
  	}),

  		axios.get("/designer/v2/findPopularDesigner").then(res=>{
  		console.log(res.data.data);

  		this.designlist = res.data.data.designers;
  	})
  },
   components:{
    headers,
    footers,
  },
};
</script>

<style lang="scss" scoped>
	#all{
		flex:1;
		#middle{
			display: flex;
			flex-wrap: wrap;
			//height:5.78rem;
			#design-style{
				padding:0rem 0.1rem 0rem 0.1rem;
				height:0.55rem;
				width:100%;
				font-size:0.16rem;
			span{
				line-height:0.55rem;
			}
			span:nth-child(1){
				float:left;
			}
			span:nth-child(2){
				color:#999;
				float:right;
			}	
			}
			#style-list{
				width:100%;
				height:1rem;
				border-bottom:0.10rem solid #ccc;
				ul{	
					display: flex;
					padding:0rem 0.10rem 0.2rem 0.10rem;
					li{
						border-radius:0.1rem;
						position: relative;
						top:0px;
						left:0px;
						z-index:1;
						height:0.8rem;
						width:0.8rem;
						img{
							border-radius:0.1rem;
							position:absolute;
							top:0px;
							left:0px;
							height:0.8rem;
							width:0.8rem;
							z-index: -1;
						}
						#opa{
							border-radius:0.1rem;
							opacity:.4;
							position:absolute;
							top:0px;
							left:0px;
							z-index:3;
							position:absolute;
							height:0.8rem;
							width:0.8rem;
							background:#000;
						}
						p{
							z-index:4;
							position:absolute;
							top:0.15rem;
							left:50%;
							transform:translateX(-50%);
							font-size:0.14rem;
						}
						span{
							font-size:0.08rem;
							text-align: center;
							z-index:4;
							position:absolute;
							top:0.4rem;
							left:50%;
							transform:translateX(-50%);
						}
						font-size:14px;
						flex:1;
						float:left;
						color:white;
						height:0.8rem;
						width:0.8rem;
						text-align:center;
						margin-right:0.02rem;
						margin-left:0.02rem;
					}
				}
			}	
		}
		#style-head{
			width:100%;
			line-height:0.55rem;
			height:0.55rem;
			padding:0rem 0.14rem 0rem 0.14rem;
			font-size:.14rem;
			border-bottom:1px solid #ccc;
			.left{
				float:left;
			}
			.right{
				color:#f60;
				float:right;
			}
		}
		#design-list{
			ul{
				li{
					width:100%;
					height:0.92rem;
					padding-left:0.14rem;
					border-bottom:1px solid #ccc;
					overflow: hidden;
					.bag{
						width:100%;
						.pic{
							float:left;
							width:0.6rem;
							height:0.92rem;
							img{
								width:0.6rem;
								height:0.6rem;
								border:1px solid #999;
								border-radius:50%;
								margin-top:0.15rem;
							  }
						  }
						.name{
							width:2.75rem;
							float:left;
							height:0.92rem;
							margin-left:0.1rem;
							.dsn{
								width:2.1rem;
								display:block;
								float:left;
								font-size:0.18rem;
								color:#848484;
								margin-left:0.1rem;
								margin-top:0.2rem;
							}
							.btn{
								display:block;
								margin-top:0.2rem;
								float:right;
								border-radius:0.05rem;
								background:#efb3a9;
								color:white;
								font-size:0.16rem;
								width:0.5rem;
								text-align:center;
								height:0.25rem;
								line-height:0.25rem;
							}
							.article{
								font-size:0.1rem;
								line-height:3;
							    margin-left:0.1rem;
							    color:#bcbcbc;
							}
						}
					}
					
				}
				li:nth-last-child(1){
					margin-bottom:0.49rem;
				}
			}
		}
	}
</style>