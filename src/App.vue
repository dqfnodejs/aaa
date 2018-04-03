<template>
  <div id="app">
    <div id='img'><a href='#'><img src="./assets/logo.png" alt=""></a>
      <div id="nav">
        <router-link to="/">首页</router-link>
        <router-link to="/shouYe">全新楼盘</router-link>
        <router-link to="/erShou">二手楼盘</router-link>
        <router-link to="/quanXin">全新商铺</router-link>
        <router-link to="/dongTai">楼市动态</router-link>
        <router-link to="/lianXi">联系我们</router-link>
      </div> 
    </div>
    <a href='#'><img src="./assets/tel.png" alt="" id='imgTwo'></a>
    <p id='p'>008-6666 6666<button>咨询电话</button></p>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#img{
  float: left;
  margin-left: 100px;
}
#nav {
  float: right;
  margin-top: 15px;
  margin-left: 120px;
}

#nav a {
  padding-left: 25px;
  padding-right: 25px;
  text-decoration: none;
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
#p{
  float: right;
  margin-right: 60px;
  color: #ccc;
}
#imgTwo{
  margin-top: 20px;
}
#p button{
  font-family: 微软雅黑;
  font-size: 13px;
  padding: 6px 16px;
  border-width: 1px;
  border-color: rgb(58, 121, 232);
  background-color: rgb(58, 121, 232);
  color: rgb(255, 255, 255);
  border-radius: 5px;
  margin-left: 10px;
  outline: none;
}
</style>
