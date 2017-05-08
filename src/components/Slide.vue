<template>
	<div class="slide">
		<div class="panel">
			<div class="title">
				<img src="https://cn.vuejs.org/images/logo.png" alt="">
				<div class="div">
					<iframe src="https://ghbtns.com/github-btn.html?user=garychangcn&repo=zhihu-daily-byVuejs&type=watch&count=true&size=small&count=false" 	frameborder="0" scrolling="0" width="55px" height="20px"></iframe>
				</div>
			</div>
			<ul>
				<li @click="handleToIndex('热门消息')"><span>首页</span></li>
				<li v-for="item in slideList" @click="handleClick(item.id,item.name)">
					<span>{{item.name}}</span>
				</li>
			</ul>
		</div>
		<div class="panel-cover" @click.stop="handleHide"></div>
	</div>
</template>

<script>

export default {
	name:"slide",
	data(){
		return {
		}
	},
	computed:{
		slideList(){
			return this.$store.state.slide.list;
		}
	},
	mounted(){
		this.$store.dispatch('updateList');
	},
	methods:{
		handleToIndex(title){
			this.$router.push('/');
			this.$store.commit("UPDATETITLE",{title});			
			this.onClick();			
		},
		handleHide(){
			this.onClick();
		},
		handleClick(id,title){
			this.$router.push({
				path:'themeList',
				query:{
					id
				}
			});
			this.$store.commit("UPDATETITLE",{title});
			this.onClick();
		}
	},
	props:['onClick']
}
</script>

<style lang="less" scope>
@import '../style/main.less';
.slide{
	position: absolute;
	height: inherit;
	left: 0;
	width: 100%;
	transform: translateX(-100%);
	transition: transform 0.3s;
	background: @cover;
	.panel-cover{
		width: 30%;
		height: 100%;
		position: absolute;
		right: 0;
		background-color: transparent;
	}
	.panel{
		width: 70%;
		height: 100%;
		position: absolute;
		background-color: #fff;
		left: 0;
		flex-direction: column;
		justify-content: flex-start;
		.title{
			background-color: @blue;
			height: 120px;
			width: 100%;
			justify-content: flex-start;
			img{
				width: 70px;
				margin:0 20px;
			}
			div{
				height: 70px;
				align-items: flex-end;
			}
		}
		ul{
			width: 100%;
			flex-direction: column;
			li{
				width: 100%;
				height: 40px;
				span{
					width: 90%;
					height: 40px;
					justify-content: flex-start;
					cursor: default;
					border-bottom: 1px dashed @grey;
				}
				&:hover{
					background-color: @grey;
				}
			}
		}
	}
}
.slide-show{
	transform: translateX(0);
}
</style>
