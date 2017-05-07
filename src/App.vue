<template>
	<div id="container">
		<div class="app-cover"></div>
		<div class="app">
			<!--<div class="main">-->
				<zHeader :onClick="handleClick"></zHeader>
				<zView></zView>
			<!--</div>-->
			<Slide :onClick="handleClick" :class="slideVisivle?'slide-show':''"></Slide>
		</div>
		<div class="app-cover"></div>
	</div>
</template>

<script>
import Header from './components/Header.vue';
import Slide from './components/Slide.vue';
import View from './components/View.vue';

export default {
	name:"app",
	data(){
		return {
			slideVisivle:false
		}
	},
	mounted(){
	},
	methods:{
		handleClick(){
			this.slideVisivle=!this.slideVisivle;
		}
	},
	computed:{
	},
	components:{
		zHeader:Header,
		Slide,
		zView:View
	}
}
</script>

<style lang="less" scope>
@import './style/set.less';
.app{
	height: inherit;
	background: #fff;
	align-items: flex-start;
	position: relative;
	flex-direction: column;
	justify-content: flex-start;
	width: 100%;
	// display: block;
}
.app-cover{
	flex-grow: 2;
	height: inherit;
	background: inherit;
	z-index: 20;
}
@media @pc{
	.app{
		width: 414px;
	}
	.app-cover{
		display: block;
	}
}
@media @mobile{
	.app{
		width: 100%;
	}
	.app-cover{
		display: flex;
	}
}
</style>
