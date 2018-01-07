<template>
 	<div class="all">
 		<div class="back" @click="back">
 			<i class="iconfont">&#xe697;</i>
 		</div>
 		<div class="login">注册</div>
 		<!-- <form action="/api/login" method="post"> -->
 			<div class="con">
 				<input type="text" name="name" placeholder="用户名" class="name" v-onblura>

 				<input type="password" name="password" placeholder="密码" class="password" v-onblurb>
 				<input type="password" name="rspassword" placeholder="重复密码" class="rspassword" v-onblurc>
 			</div>
 			<div class="wrong">
 				
 			</div>
 			<input type="button" @click='register' value="注册" class="submit">
 		<!-- </form> -->
 		<div class="register">
 			没有账号么？<router-link to="/login" tag="span" class="zhuce">登录</router-link>
 		</div>
 	</div>
</template>

<script>
import Vue from "vue"
import axios from "axios"
import router from "@/router"

Vue.directive("onblura",function(el,binding){
	el.onblur = function(){
		var $preg=/^[\w\_]{6,20}$/
		if(!$preg.test(el.value)){
			el.value = ""
			document.querySelector('.wrong').innerHTML = "用户名必须为：英文、数字、下划线6-20位字符"
		}else{
			document.querySelector('.wrong').innerHTML =""
		}
	}
})

Vue.directive("onblurb",function(el,binding){
	el.onblur = function(){
		var $preg= /^[a-zA-Z0-9_-]{4,16}$/
		if(!$preg.test(el.value)){
			el.value = ""
			document.querySelector('.wrong').innerHTML = "密码必须为：4到16位（字母，数字，下划线，减号）"
		}else{
			document.querySelector('.wrong').innerHTML =""
		} 
	}
})
Vue.directive("onblurc", function(el,binding){
	el.onblur = function(){
		var password = document.querySelector('.password').value
		var rspassword = document.querySelector('.rspassword').value
		if(password==rspassword){
			document.querySelector('.wrong').innerHTML =""
		}else{
			document.querySelector('.wrong').innerHTML ="密码不一致"
		}
	}
})

export default {
  name: 'register',
  data(){
  	return{

  	}
  },
  methods:{
  	back(){
  		this.$router.go(-1)
  	},
  	register(){
  		var wrong = document.querySelector('.wrong').innerHTML
  		var username = document.querySelector('.name').value
  		var password = document.querySelector('.password').value
  		var rspassword = document.querySelector('.rspassword').value

  		if(!wrong&&username&&password&&rspassword){
  			axios.post('/api/register',`username=${username}&password=${password}`).then(res=>{
  				console.log(res.data)
  				if(!res.data.result){
  					document.querySelector('.wrong').innerHTML=res.data.message
  				}else{
  					router.push('/login')
  				}
  			})
  		}
  	}
  	

  	
  }


}
</script>
<style src="@/assets/iconfont/iconfont.css"></style>
<style lang="scss" scoped>
.all{
	width:100%;
	height:100%;
	box-sizing: border-box;
	.back{
		height:0.25rem;
		width:100%;
		line-height:0.25rem;
		margin-top:0.1rem;
		.iconfont{
			font-size:0.4rem;
		}
	}
	.login{
		height:1rem;
		font-size: 0.3rem;
		text-align: center;
		padding-top:0.5rem;
	}
	.con{
		margin-left:0.2rem;
		width:3.35rem;
		border:0;
		border-radius: 5px;
		border:1px solid #000;
		input{
			box-sizing: border-box;
			width:3.35rem;
			border:0;
			height:0.45rem;
			padding:0.1rem;
		}
		.name{
			border-bottom:1px solid #ccc;
		}

	}
	.submit{
		margin-left:0.2rem;
		width:3.35rem;
		border:0;
		border-radius: 5px;
		height:0.45rem;
		line-height: 0.45rem;
		margin-top:0.2rem;
		font-size:0.24rem;
		color:#666;
	}
	.register{
		color:#ccc;
		box-sizing: border-box;
		padding:0.2rem;
		width:100%;
		height:0.2rem;
		font-size:0.14rem;
		line-height: 0.2rem;
		text-align: right;
		margin-top:0.1rem;
		.zhuce{
			width:0.28rem;
			height:0.2rem;;
			display:inline-block;
			color:pink;
			padding:0.05rem;
		}
	}
	.wrong{
		margin-top:0.1rem;
		height:0.2rem;
		padding:0 0.3rem;
		font-size:0.14rem;
		color:red;
	}

}
</style>


