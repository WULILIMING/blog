<template>
  <div class="hello">
    <div class="carousel">
      	<div class="cover">
			<router-link class="enterBtn" to="main">
				<div class="logo"><img src="../assets/images/logo.png" alt="LiLiMing的LOGO"></div>
				<h1>LLMing的个人博客</h1>
				<p>以这里的文字记录我们的成长<br>
					回敬过去的岁月<br>
					能走多远<br>
					全靠自己<br>
					加油，平凡的自己
				</p>
				<div class="right_arrow">
					<img src="../assets/images/right.png" alt="右箭头">
					<img src="../assets/images/circle.png" class="animate" alt="圆圈">
				</div>
			</router-link>
		</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  data () {
    return {
    }
  },
  mounted () {
	  this.arrowAnimate();
  },
  methods: {
		arrowAnimate : function(){
			var node1 = document.querySelector('.right_arrow>img:first-child');
			var node2 = document.querySelector('.right_arrow>img:last-child');
			node1.onmouseover = function(){
				node2.className = 'animate';
			}
			node1.onmouseout = function(){
				node2.className = '';
			}
		}//水波动画
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.carousel{
	position: absolute;
	top: 0;
	left: 0;
  	width: 100%;
  	height: 100%;
  	background: url(../assets/images/carousel.jpg) no-repeat; 
	background-size: 100%;
}
.cover{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0,0,0,.6);
}
.enterBtn{
	display: block;
	position: absolute;
	width: 20%;
	height: 50%;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	text-decoration: none;
	background-color:rgba(255,255,255,.5);
	border-radius: 5px;
	overflow-y: scroll;
	/* opacity: 0.5; */
}
.enterBtn::-webkit-scrollbar {
    display: none;
}
.enterBtn .logo{
	padding: 20px 0;
	text-align: center;
}
.enterBtn>h1{
	text-align: center;
	color: #fff;
	margin: 0;
}
.enterBtn>p{
	font-size: 14px;
	color: #eee;
	line-height: 2;
	text-align: center;
}
/* 箭头动画 Start*/
.enterBtn .right_arrow{
    position: relative;
    width:100%;
    height:60px;
    background: transparent;
}
.enterBtn .right_arrow>img{
    position: absolute;
    bottom:-25px;
    left:50%;
	width: 50px;
	height: 50px;
    margin-left:-25px;
}
.enterBtn .right_arrow>img:first-child{
    z-index:99;
	transform: scale(0.85);
    cursor: pointer;
}
.enterBtn .right_arrow>img.animate{
    -webkit-animation:shuibo 2s ease-in infinite;
    -o-animation:shuibo 2s ease-in infinite;
    animation:shuibo 2s ease-in infinite;
}

@keyframes shuibo {
    100%{
        opacity: 0;
        -webkit-transform: scale(2.5);
        -moz-transform: scale(2.5);
        -ms-transform: scale(2.5);
        -o-transform: scale(2.5);
        transform: scale(2.5);
    }
}
/* 箭头动画 End*/
</style>
