<template>
	<div class="header">
		<div class="menu" @click="handleClick"></div>
		<span>{{title}}</span>
	</div>
</template>

<script>
export default {
	name:"header",
	data(){
		return {

		}
	},
	computed:{
		title(){
			return this.$store.state.header.title;
		}
	},
	methods:{
		handleClick(){
			this.onClick();
		}
	},
	props:['onClick']
}
</script>

<style lang="less">
@import '../style/set.less';
.header{
	width: inherit;
	height: 70px;
	background-color: @blue;
	justify-content: flex-start;
	padding-left: 30px;
	flex-basis: 70px;
	flex-shrink: 0;
	.menu{
		height: 16px;
		width: 20px;
		border-color: #fff;
		border-style: solid;
		border-width: 2px 0;
		cursor: pointer;
		&::before{
			content:"";
			width: 20px;
			height: 2px;
			background-color: #fff;
		}
	}
	span{
		color: #fff;
		margin-left: 20px;
	}
}
</style>
