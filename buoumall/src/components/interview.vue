<template>
	<div class="video-list">
		<ul>
			<li v-for="(data,index) in datalist">
				<div class="video-top">
					<div class="video-img">
						<img :src="'http://image.buoumall.com/'+data.videoCover" :alt="data.title">
					</div>
					<div class="video-back">
						<div class="video-cont">
							<div class="video-name">
								{{data.title}}
							</div>
							<div class="video-time">
								{{data.videoTime}}
							</div>
						</div>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
import { Indicator } from 'mint-ui';
import axios from 'axios'
export default {

  name: 'interview',

  data () {
    return {
    	datalist:[]
    }
  },
  mounted(){
  	Indicator.open();
  	axios.post('/v2/index/originalVideo','memberToken=&pageNum=1&pageSize=20').then(res=>{
  		this.datalist = res.data.data.list
  		Indicator.close();
  	})
  }
}
</script>

<style lang="scss" scoped>
.video-list{
	height: 100%;
	.video-img{
		width: 3.75rem;
		height: 2.11rem;
		img{
		width: 3.75rem;
		height: 2.11rem;
		}
	}
	.video-top{
		position: relative;
    	width: 100%;
   	 	height: 2.11rem;
	}
	.video-back{
		position: absolute;
		top: 0;
    	z-index: 9;
    	width: 100%;
    	height: 100%;
    	color: #fff;
    	text-align: center;
    	background-color: rgba(0,0,0,.3);
	}
	.video-cont{
		padding: 0 .14rem;
	    position: absolute;
	    left: 50%;
	    top: 50%;
	    width: 100%;
	    -webkit-transform: translate(-50%,-50%);
	    transform: translate(-50%,-50%);
	}
	.video-name{
	    font-size: 18px;
    	line-height: .225rem;
	}
	.video-time{
		margin-top: .16rem;
    	font-size: 12px;
	}
}
	
</style>