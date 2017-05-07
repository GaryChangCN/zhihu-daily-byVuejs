export default {
	state:{
		title:"热门消息"
	},
	mutations:{
		UPDATETITLE(state,{title}){
			state.title=title;
		}
	}
}