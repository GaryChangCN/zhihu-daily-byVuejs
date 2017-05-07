import {fetchSlideList} from '../../service';

export default {
	state:{
		list:[]
	},
	mutations:{
		UPDATELIST(state,{list}){
			state.list=list;
		}
	},
	actions:{
		async updateList(context){
			var {slideList}=window.sessionStorage;
			if(slideList){
				context.commit('UPDATELIST',{list:JSON.parse(slideList)});
			}else{
				var {others}=await fetchSlideList();
				window.sessionStorage.slideList=JSON.stringify(others);
				context.commit('UPDATELIST',{list:others});
			}
		}
	}
}