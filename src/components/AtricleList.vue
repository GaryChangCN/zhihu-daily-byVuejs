<template>
	<ul class="articleList">
		<li v-show="articleList.length==0"><span>列表为空</span></li>
		<li class="li" v-for="item in articleList" @click="handleClick(item.id)">
			<img :src="item.images|image"/>
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
			this.dispatch();
		},
		watch:{
			id(value,oldValue){
				this.dispatch();
			}
		},
		methods:{
			handleClick(id){
				this.$store.commit('UPDATETITLE',{title:"内容详情"});
				this.$router.push({
					path:'article',
					query:{
						id
					}
				});
			},
			dispatch(){
				if(this.id){
					this.$store.dispatch('themeArticeList',this.id);
				}else{
					this.$store.dispatch('latestArticleList');
				}
			}
		},
		computed:{
			articleList(){
				return this.$store.state.articleList.articleList;
			}
		},
		props:['id']
	}
</script>
<style lang="less" scope>
@import '../style/set.less';
.articleList{
	flex-direction: column;
	background-color: @grey;
	padding: 10px;
	width: 100%;
	.li{
		width: 100%;
		margin-bottom: 10px;
		height: 100px;
		justify-content: flex-start;
		background-color: #fff;
		border-radius: 2px;
		box-shadow: 0px 0px 1px 1px @shadow;
		padding-left: 15px;
		img{
			width: 70px;
			height: 70px;
			flex-basis: 70px;
			flex-shrink: 0;
		}
		span{
			margin-left: 15px;
		}
	}
}
</style>