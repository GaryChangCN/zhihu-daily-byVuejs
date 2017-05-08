<template>
	<div class="wheel" ref="wheel">
		<div
			class="wheel-container"
			:style="{
				width:`${wheelList.length*100}%`,
				transform:`translateX(${translateX}px)`
			}"
		>
			<div
				class="item"
				v-for="item in wheelList"
				:style="{width:width}"
			>
				<img :src="item.image|image"/>
				<div class="title">{{item.title}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"wheel",
		data(){
			return{
				width:"414px",
				translateX:0
			}
		},
		methods:{
			changeWidth(){
				var css=window.getComputedStyle(this.$refs.wheel,null);
				this.width=css.width;
			},
			move(start){
				var count=this.wheelList.length-2;
				var width=parseInt(this.width);
				var end=start-width;
				this.translateX=end;
				setTimeout(()=>{
					if(end<-(width*count)){
						this.move(0);
					}else{
						this.move(end);
					}
				}, 2000);
			}	
		},
		mounted(){
			this.changeWidth();
			this.move(0);
			var _this=this;
			window.addEventListener("resize",function(){
				_this.changeWidth()
			});
			this.$store.dispatch('updateWheelList');
		},
		computed:{
			wheelList(){
				return this.$store.state.wheel.wheelList;
			}
		}
	}
</script>

<style lang="less">
	@import '../style/set.less';
	.wheel{
		width: 100%;
		overflow-x: auto;
		position: relative;
		display: block;
		.wheel-container{
			display: block;
			position: static;
			height: 200px;
			transition: transform 0.4s;
			.item{
				position: relative;
				float: left;
				height:200px;
				background-color:transparent;
				overflow: hidden;
				.title{
					width: inherit;
					position: absolute;
					height: 60px;
					bottom: 0;
					background-color: @cover;
					color: #fff;
					padding: 0 10px;
				}
			}
		}
	}
</style>