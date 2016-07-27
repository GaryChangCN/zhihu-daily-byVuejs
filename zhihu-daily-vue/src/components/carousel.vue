<template>
	<div id="carouselContainer">
		<div id="carousel" v-bind:style="{'right':right}">
			<a v-for="item in api.top_stories" id="imgBack" v-link="{path:'/contents?id='+item.id}">
				<div id="img" v-bind:style="{'background-image':'url('+tin+'/tiny-pic?img='+item.image+')'}"><span>{{item.title}}</span></div>
			</a>
		</div>
	</div>
</template>
<script>
	export default {
		name:"carousel",
		el:function(){
			return "#carouselContainer";
		},
		data:function(){
			return{
				rightBase:0,
				tin:Tin
			}
		},
		props:['api'],
		computed:{
			right:function(){
				return this.$data.rightBase+"%";
			}
		},
		ready:function(){
			var _this=this;
			setInterval(function(){
				if(_this.$data.rightBase>=400){
					_this.$data.rightBase=0;
				}else{
					_this.$data.rightBase+=100;
				}
			}, 2000);
		}
	}
</script>
<style>
	#carouselContainer{
		overflow-x:hidden; 
	}
	#carousel{
		height: 240px;
		position: relative;
		overflow: hidden;
		width: 500%;
		transition: right 0.5s;
		position: relative;
	}
	#imgBack{
		display: block;
		height: inherit;
		width: calc(100% / 5);
		float: left;
		background-color: #f6f6f6;
		background-image: url("../../dist/loadfailed.gif");
		background-size: 30%;
		background-repeat: no-repeat;
		background-position: center;
	}
	#img{
		width: 100%;
		height: inherit;
		background-size: 100%;
		background-position: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-end;
	}
	#img>span{
		color: #fff;
		display: flex;
		width: 90%;
		letter-spacing: 3px;
		padding: 40px 5% 10px 5%;
		overflow: hidden;
		background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.7));
	}
</style>