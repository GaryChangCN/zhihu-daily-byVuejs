<template>
	<div class="view">
		<router-view class="router-view"></router-view>
	</div>
</template>
<script>
	export default{
		data(){
			return{

			}
		}
	}
</script>
<style lang="less" scope>
	.view{
		width:inherit;
		flex-grow: 2;
		flex-direction: column;
		justify-content: flex-start;
		position: relative;
		overflow-y: auto;
		display: block;
		.router-view{
			width: 100%;
			flex-direction: column;
			justify-content: flex-start;
		}
	}
</style>