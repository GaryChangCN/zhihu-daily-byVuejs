<template>
	<div class="themeList">
		<ArticleList :id="id"></ArticleList>
	</div>
</template>
<script>
	import ArticleList from '../components/AtricleList.vue';
	export default {
		name:"themeList",
		data(){
			return {

			}
		},
		computed:{
			id(){
				return this.$route.query.id;
			}
		},
		components:{
			ArticleList
		}
	}
</script>