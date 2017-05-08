<template>
	<div class="article">
		<div class="body" v-html="body">
		</div>
	</div>
</template>
<script>
	export default {
		name:"article",
		data(){
			return{}
		},
		mounted(){
			this.dispatch();
			this.$store.commit('UPDATETITLE',{title:"内容详情"});
		},
		computed:{
			id(){
				return this.$route.query.id;
			},
			body(){
				return this.$store.state.articleDetail.body;
			}
		},
		methods:{
			dispatch(){
				this.$store.dispatch('updateBody',this.id)
			}
		},
		watch:{
			id(value){
				this.dispatch();
			}
		}
	}
</script>
<style lang="less" scope>
	.article{
		display: block;
		padding: 0 10px;
		div,span,p,ul,li{
			display: initial;
		}
	}
</style>