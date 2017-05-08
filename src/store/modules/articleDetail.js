import {fetchArticleDetail,remote} from '../../service';

export default{
	state:{
		body:"",
		css:[]
	},
	mutations:{
		UPDATEBODY(state,{body}){
			state.body=body;
		}
	},
	actions:{
		async updateBody(context,id){
			var {body,css}=await fetchArticleDetail(id);
			var cssList=css.map((item)=>{
				return `<link rel="stylesheet" href="${item}"/>`;
			});
			var convert=cssList.join("")+body.replace(/htt(ps|p):\/\/pic[0-9]\.zhimg\.com/g,remote);
			console.log(convert);
			context.commit('UPDATEBODY',{body:convert});
		}
	}
}