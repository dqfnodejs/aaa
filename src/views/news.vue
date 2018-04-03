<template>
    <div>
        <div id='news'>
            <div>
                <div id='hei'></div><dl>楼市动向 - NEWS</dl><button>阅读更多</button>
            </div>
            <ul v-for='i in datas'>
                <li>{{i.title}}
                    <li>{{i.neirong}}</li>
                </li>
            </ul>    
        </div>
        <div id='news2'>
            <div id='hei'></div><dl>联系我们</dl><span>-CONTACT</span>
            <ul>
                <li>Tom</li><br>
                <li>188 0000 0000  /  008-6666 6666</li><br>
                <li>Tom</li><br>
                <li>188 0000 0000  /  008-6666 6666</li><br>
                <li>Tom</li><br>
                <li>188 0000 0000  /  008-6666 6666</li><br>
            </ul>
        </div>
        <div id='news3'>
            <div id='hei'></div><dl>在线表单</dl><span>-FORM</span>
            <ul>
                <li><input type="text" placeholder='称呼'></li>
                <li><input type="text" placeholder='邮箱'></li>
                <li><input type="text" placeholder='电话'></li>
                <li><textarea name="" id="" cols="23" rows="3" placeholder='内容'></textarea></li>
                <li><input type="text" placeholder='验证码'></li>
                <li><button>提交</button></li>
            </ul>
        </div>
        <div id='news4'>
            <div id='hei'></div><dl>地址</dl><span>-ADDRESS</span>
            <ul>
                <li>郵箱：info@realestate.com</li>
                <li>地址：上海市静安区南京西路时代大厦</li>
            </ul>
        </div>
    </div>
</template>
<script>
	export default{
		data(){
			return{
				datas:[]
			}
		},
		methods:{

		},
		created(){
			this.$http.get('http://localhost:3000/four')
            .then(e=>this.datas=e.body)
		}
	}
</script>
<style>
    #news{
        width:100%;
        background:rgb(247, 247, 247);
        float:left;
    }
    ul{
        float:left;
    }
    li{
        list-style:none;
        float:left;
    }
    dl{
        text-align:left;
        float:left;
        margin-left:25px;
    }
    #news button{
        float:left;
        margin-top:12px;
		border:1px solid rgb(58, 121, 232);
		font-family: 微软雅黑;
  		font-size: 13px;
  		padding: 3px 13px;
  		border-width: 1px;
  		color: #000;
  		margin-left: 10px;
  		outline: none;
        margin-left:30px;
    }
    #s{
        margin-top:1000px;
    }
    #news2{
        width:100%;
        background:rgb(247, 247, 247);
        float:left;
        margin-top:20px;
    }
    #news2 span{
        float:left;
        margin-top:14px;
		font-family: 微软雅黑;
  		font-size: 13px;
  		padding: 3px 13px;
        font-weight:bold;
  		color: #000;
        margin-left:30px;
    }
    #news2 ul li:nth-child(1){
        font-weight:bold;
        color:#000;
        margin-bottom:10px;
    }
    #news2 ul li:nth-child(5){
        font-weight:bold;
        color:#000;
        margin-bottom:10px;
    }
    #news2 ul li:nth-child(9){
        font-weight:bold;
        color:#000;
        margin-bottom:10px;
    }
    #news2 ul li{
        color:#0000CD;;
    }
    #news3{
        width:100%;
        background:rgb(247, 247, 247);
        float:left;
        margin-top:20px;
    }
    #news3 span{
        float:left;
        margin-top:14px;
		font-family: 微软雅黑;
  		font-size: 13px;
  		padding: 3px 13px;
        font-weight:bold;
  		color: #000;
        margin-left:30px;
    }
    #news3 ul li{
        border-bottom:1px #ccc solid;
        margin-top:10px;
    }
    #news3 ul li:nth-child(6){
        border:0;
    }
    #news3 ul li:nth-child(5){
        margin-right:100px;
    }
    #news3 ul li input{
        border:0;
        outline:none;
        background:rgb(247, 247, 247);
    }
    #news3 ul li textarea{
        border:0;
        outline:none;
        background:rgb(247, 247, 247);
    }
    #news3 button{
        float:left;
        font-size: 12px;
        line-height: 12px;
        background-color: #393939;
        border: 1px solid #393939;
        padding: 8px 45px 8px 45px !important;
        text-align:center;
    }
    #news4{
        width:100%;
        background:rgb(247, 247, 247);
        float:left;
        margin-top:20px;
    }
    #news4 span{
        float:left;
        margin-top:14px;
		font-family: 微软雅黑;
  		font-size: 13px;
  		padding: 3px 13px;
        font-weight:bold;
  		color: #000;
        margin-left:30px;
    }
    #hei{
        width:20px;
        height:20px;
        float:left;
        background:#000;
        margin-top:16px;
        margin-left:15px;n
    }
</style>