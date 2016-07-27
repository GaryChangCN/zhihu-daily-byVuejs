<template>
	<div id="content">
		<div id="body">{{{body}}}</div>
	</div>
</template>
<script>
	export default{
		name:"contents",
		el:function(){
			return "#content";
		},
		data:function(){
			return {
				body:"正在加载"
			}
		},
		route:{
			data:function(){
				this.$root.$data.headerTitle="文章";
				var query=this.$route.query;
				this.$http.get(Tin+'/tiny-news',{
					params:{
						id:query.id
					}
				}).then(function(res){
					var json=res.json();
					this.$data.body=json.body.replace(/src="http/g,'src="'+Tin+'/tiny-pic?img=http');
					this.$data.title=json.title;
				});
			}
		}
	}
</script>
<style>
	@import url("http://news-at.zhihu.com/css/news_qa.auto.css");
</style>