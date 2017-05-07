import {fetchWheelList} from '../../service';

export default {
	state:{
		wheelList:[]
	},
	mutations:{
		UPDATEWHEELLIST(state,{wheelList}){
			state.wheelList=wheelList;
		}
	},
	actions:{
		async updateWheelList(context){
			var wheelList=await fetchWheelList();
			context.commit("UPDATEWHEELLIST",{wheelList:wheelList['top_stories']});
		}
	}
}