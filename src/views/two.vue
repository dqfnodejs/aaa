<template>
	<div id="quanxin">
			<div class="quanxinloupan">
				<p>全新商铺<br><span>- New Apartment -</span></p>
			</div>
			<div class='one' v-for='i in state'>
				<img :src='i.img' alt="">
				<ul>
					<li><p>{{i.title}}</p></li>
					<li>地区：{{i.diqu}}</li>
					<li>户型：{{i.huxing}}</li>
					<li>价格：{{i.price}}</li>
				</ul>
			</div>
			<div class="footer"><button>浏览更多商铺</button></div>
		</div>
</template>
<script>
	export default{
		data(){
			return{
				state:[]
			}
		},
		methods:{

		},
		created(){
			this.$http.get('http://localhost:3000/two/')
            .then(e=>this.state=e.body)
		}
	}
</script>
<style>
	#quanxin{
		width: 100%;
		margin-left: 7%;
		margin-bottom:450px;
	}
	.quanxinloupan{
		background: rgb(247, 247, 247);
		line-height: 50px;
	}
	.quanxinloupan p{
		font-size: 20px;
		font-weight: bold;
	}
	.quanxinloupan p span{
		font-size: 14px;
		font-weight:normal;
	}
	.one{
		width: 33%;	
		float: left;
	}
	.one p{
		color: #000000;
    	font-size: 15px;
    	font-family: 微软雅黑;
    	line-height: 21px;
    	font-weight: bold;
    	text-align: left;
	}
	.one ul{
		padding:0;
	}
	.one ul li{
		width: 100%;
		font-size: 14px;
		list-style: none;
		margin-right: 120px;
		text-align: left;
	}
	.footer{
		width: 100%;
		background:rgb(247, 247, 247);
		height: 80px;
		float: left;
	}
	.footer button{
		margin-top: 25px;
		border:1px solid rgb(58, 121, 232);
		font-family: 微软雅黑;
  		font-size: 13px;
  		padding: 6px 16px;
  		border-width: 1px;
  		color: #000;
  		margin-left: 10px;
  		outline: none;
	}
</style>