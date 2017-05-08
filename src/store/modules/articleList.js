import {fetchArticleList} from '../../service';

export default{
	state:{
		articleList:[]
	},
	mutations:{
		UPDATEARTICLELIST(state,{articleList}){
			state.articleList=articleList;
		}
	},
	actions:{
		//获取最热列表
		async latestArticleList(context){
			context.commit('UPDATEARTICLELIST',{
				articleList:[]
			});
			var res=await fetchArticleList("/api/3/news/hot");
			context.commit('UPDATEARTICLELIST',{
				articleList:res.recent.map((item)=>{
					item.images=item.thumbnail;
					item.id=item.news_id;
					return item;
				})
			});
		},
		async themeArticeList(context,id=11){
			context.commit('UPDATEARTICLELIST',{
				articleList:[]
			});
			var {stories,image}=await fetchArticleList("/api/4/theme/"+id);
			context.commit('UPDATEARTICLELIST',{
				articleList:stories.map((item)=>{
					if(!item.hasOwnProperty("images")){
						item.images=image||"http://oj7lzlt0w.bkt.clouddn.com/haida3.jpg"
					}else{
						item.images=item.images[0]
					}
					return item;
				})
			});
		}
	}
}