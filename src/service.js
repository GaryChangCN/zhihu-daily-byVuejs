const remote="http://192.168.0.112:9999"
var url=require("url");

async function fetchList(path){
	var res=await fetch(remote+path);
	var json=await res.json();
	return json;
}

//获取文章列表
export async function fetchArticleList(path){
	return await fetchList(path);
}

//获取侧栏列表
export async function fetchSlideList(){
	return await fetchList("/api/4/themes");
}
//获取轮播列表
export async function fetchWheelList(){
	return await fetchList("/api/4/news/latest");
}

export function imageFilter(value){
	var {path}=url.parse(value);
	return remote+path;
}