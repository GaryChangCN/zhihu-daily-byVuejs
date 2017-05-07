<template>
	<ul class="articleList">
		<li v-for="item in articleList">
			<img :src="item.thumbnail|image"/>
			<span>
				{{item.title}}
			</span>
		</li>
	</ul>
</template>
<script>
	export default {
		name:"articleList",
		data(){
			return {
			}
		},
		mounted(){
			this.$store.dispatch('latestArticleList');
		},
		computed:{
			articleList(){
				return this.$store.state.articleList.articleList;
			}
		}
	}
</script>
<style lang="less" scope>
.articleList{
	flex-direction: column;
}
</style>