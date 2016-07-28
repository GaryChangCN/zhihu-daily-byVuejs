<template>
    <div id="slideContainer" v-bind:style="{left:left}" v-on:transitionend="end">
        <div id="slideLeft">
            <div id="user">
            	<div id="ll">
            		<span></span><iframe src="https://ghbtns.com/github-btn.html?user=garychangcn&repo=zhihu-daily-byVuejs&type=watch&count=true&size=small&count=false" frameborder="0" scrolling="0" width="55px" height="20px"></iframe>
            	</div>
            	<div id="rr">
            		ZhiHu-Daily-VueJs<br>Demo
            	</div>
            </div>
            <div id="index" v-on:click="close" v-link="{path:'/index'}">
                <span></span> 首页
            </div>
            <ul>
                <li v-for="item in api.others" v-bind:data-id="item.id" v-on:click="close" v-link="{path:'/article?id='+item.id+'&name='+item.name+'&thumbnail='+item.thumbnail+'&thumbnail='+item.thumbnail+'&description='+item.description}">
                    <span>{{item.name}}</span>
                </li>
            </ul>
        </div>
        <div id="slideRight" v-bind:style="{opacity:opacity}" v-on:click="close"></div>
    </div>
</template>
<script>
export default {
    name: "slideTheme",
    el: function() {
        return "#slideContainer";
    },
    data: function() {
        return {
            left: "-100%",
            opacity: '0',
            api: {}
        }
    },
    methods: {
        end: function() {
            if (this.$data.left == "0px") {
                this.$data.opacity = "0.5";
            } else {
                this.$data.opacity = "0";
            }
        },
        close: function() {
        	this.$data.opacity = "0";
            this.$data.left = "-100%";
            this.$parent.rotate=false;
        }
    },
    compiled: function() {
        this.$http.get(Tin+'/tiny-themes').then(function(response) {
            this.$data.api = response.json();
        }, function(response) {
            alert("出现错误");
        });
    }
}
</script>
<style lang="sass" scoped>
$blue:#00a2ea;
$th:transparent;
#slideContainer {
    height: inherit;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: inherit;
    position: absolute;
    left: -100%;
    transition: left 0.5s;
    z-index: 50;
}

#slideLeft {
    width: 70%;
    height: inherit;
    overflow: auto;
    background-color: #fff;
}

#slideRight {
    width: 30%;
    height: inherit;
    background-color: #000;
    opacity: 0;
    transition: opacity 0.3s;
}

#user {
    height: 130px;
    background-color: $blue;
    display: flex;
    align-items: center;
    justify-content: space-between;
    #ll{
    	display: flex;
    	height: 100px;
    	margin-left: 20px;
    	flex-direction: column;
    	justify-content: space-around;
    	align-items: center;
    	span{
    		display: block;
    		height: 60px;
    		width: 60px;
    		background-color: #f9f9f9;
    		border-radius: 2px solid #fff;
    		background-image: url("../../dist/vue.png");
    		background-size: 70%;
    		background-position: center 70%;
    		background-repeat: no-repeat;
    		border-radius: 50%;
    	}
    }
    #rr{
    	color: #fff;
    	text-align: left;
    	margin-right: 20px;
    }
}

ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 0px;
    li {
        list-style-type: none;
        display: flex;
        width: 95%;
        padding-left: 5%;
        justify-content: flex-start;
        align-items: center;
        height: 50px;
        &:hover {
            background-color: #f2f2f2;
        }
        &:active {
            background-color: #f4f4f4;
        }
    }
}

#index {
    width: 95%;
    height: 50px;
    background-color: #F2F2F2;
    color: #00a2ea;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 5%;
    cursor: pointer;
    span {
        display: block;
        position: relative;
        bottom: 8px;
        border: {
            style: solid;
            width: 10px;
            color: $th $th $blue $th;
        }
        margin-right: 15px;
        &::before {
            display: block;
            position: absolute;
            width: 12px;
            height: 8px;
            background-color: $blue;
            content: "";
            left: -6px;
            top: 8px;
        }
        &::after {
            display: block;
            position: absolute;
            width: 4px;
            height: 3px;
            background-color: #fff;
            content: "";
            right: -2px;
            top: 13px;
        }
    }
}
</style>
