export const remote=process.env.NODE_ENV=="production"?"http://zhapi.garychang.cn":"http://localhost:9999";
const url=require("url");

async function fetchMore(path){
	var res=await fetch(remote+path);
	var json=await res.json();
	return json;
}

//获取文章详情
export async function fetchArticleDetail(id){
	return await fetchMore("/api/4/news/"+id);
}
//获取文章列表
export async function fetchArticleList(path){
	return await fetchMore(path);
}
//获取侧栏列表
export async function fetchSlideList(){
	return await fetchMore("/api/4/themes");
}
//获取轮播列表
export async function fetchWheelList(){
	return await fetchMore("/api/4/news/latest");
}
//图片filter
export function imageFilter(value){
	value=value;
	var {path}=url.parse(value);
	return remote+path;
}