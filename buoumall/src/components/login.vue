<template>
 	<div class="all">
 		<div class="back" @click="back">
 			<i class="iconfont">&#xe697;</i>
 		</div>
 		<div class="login">登录</div>
 		<!-- <form action="/api/login" method="post"> -->
 			<div class="con">
 				<input type="text" name="name" placeholder="用户名" class="name" v-onblurA>

 				<input type="password" name="password" placeholder="密码" class="password" v-onblurB>
 			</div>
 			<div class="wrong">
 				
 			</div>
 			<input type="button" @click='login' value="登录" class="submit">
 		<!-- </form> -->
 		<div class="register">
 			没有账号么？<router-link to="/register" tag="span" class="zhuce">注册</router-link>
 		</div>
 	</div>
</template>

<script>
import Vue from "vue"
import axios from "axios"
import router from "@/router"

Vue.directive("onblurA",function(el,binding){
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

Vue.directive("onblurB",function(el,binding){
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

export default {
  name: 'login',
  data(){
  	return{

  	}
  },
  methods:{
  	back(){
  		this.$router.go(-1)
  	},
  	login(){
  		var wrong = document.querySelector('.wrong').innerHTML
  		var username = document.querySelector('.name').value
  		var password = document.querySelector('.password').value

  		if(!wrong&&username&&password){
  			axios.post('/api/login',`username=${username}&password=${password}`).then(res=>{
  				console.log(res.data)
  				if(!res.data.result){
  					document.querySelector('.wrong').innerHTML=res.data.message
  				}else{
  					router.push('/')
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


