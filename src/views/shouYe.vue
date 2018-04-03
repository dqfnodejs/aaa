<template>
	<div>
		<div id='banner'><img src="../assets/bannerTwo.jpg" alt=""></div>
		<div id='ww'>
			<div id='one'>
				<img src="../assets/1.jpg" alt="">
				<img src="../assets/2.jpg" alt="">
				<img src="../assets/3.jpg" alt="">
				<img src="../assets/4.jpg" alt="">
			</div>
			<div id='qq'>
				<one></one>
				<two></two>
				<three></three>
			</div>
			<div id='oo'><news></news></div>
		</div>
		<div id='footer'><a href='#'>地产REALSTATE  © 2020 All Rights Reserved.</a></div>
	</div>
</template>
<script>
	import one from './one.vue'
	import two from './two.vue'
	import three from './three.vue'
	import news from './news.vue'

	export default{
		data(){
			return{
				arr:[]
			}
		},
		components:{
			one,
			two,
			three,
			news
		},
		methods:{

		},
		created(){
			
		}
	}
</script>
<style type="text/css">
	#ww{
		width:100%;
	}
	#oo{
		width:25%;
		float:right;
		margin-top:-298px;
		margin-right:4%;
	}
	#qq{
		width:65%;
		float:left;
	}
	#one{
		width: 65%;
		margin-left: 4.7%;
		margin-top: 7%;
		float:left;
	}
	#banner img{
		width:100%;
		float:left;
	}
	#one img{
		width: 49%;
		float:left;
	}
	#one img:nth-child(2){
		margin-left: 1%;
	}
	#one img:nth-child(4){
		margin-left: 1%;
	}
	#one img:nth-child(3){
		margin-top: 1%;
	}
	#one img:nth-child(4){
		margin-top: 1%;
	}
	#footer{
		width:100%;
		float:left;
		background:#262626;
		padding-top:30px;
		padding-bottom:30px;
		font-weight: 700;
		font-size:14px;
	}
	#footer a{
		text-decoration:none;
		color:#666666;
	}
</style>
