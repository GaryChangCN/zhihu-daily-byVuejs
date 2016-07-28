<template>
    <div id="container" v-bind:style="{height:containerHeight}">
        <div id="header" v-bind:style="{opacity:opacity,visibility:visibility}">
            <div id="left">
                <a class="menu" v-on:click="slide" v-bind:class="{'menu_active':rotate}"></a>
                <div id="headerText" v-show="headerText">{{headerTitle}}</div>
            </div>
            <div id="right">
                <div id="like" v-show="like"></div>
                <div id="comments" v-show="like"></div>
            </div>
        </div>
        <slidetheme></slidetheme>
        <div id="contentContainer" v-on:scroll="scroll($event)" v-bind:style="{height:contentContainerHeight}">
            <router-view></router-view>
        </div>
    </div>
    <div id="qrcodeContainer">
        <img src="../../dist/qrcode.png" alt="zhihu.garychang.cn">
        <span>手机打开效果更佳</span>
        <br>
        <span>带宽低打开稍慢</span>
    </div>
</template>
<script>
import slidetheme from './slideTheme.vue';
export default {
    name: "app",
    el: function() {
        return "#container";
    },
    data: function() {
        return {
            headerTitle: "首页",
            height: 960,
            headerText: true,
            like: false,
            rotate: false,
            opacity: 1,
            visibility: 'visible'
        }
    },
    computed: {
        contentContainerHeight: function() {
            return (this.height - 60) + "px";
        },
        containerHeight: function() {
            return this.height + "px";
        }
    },
    methods: {
        slide: function() {
            this.$data.rotate = true;
            this.$children[0].$set("left", "0px");
        },
        scroll: function(event) {
            var _this = event.target;
            var scrollTop = _this.scrollTop;
            if (scrollTop <= 200) {
                this.$data.visibility = 'visible';
                this.$data.opacity = (200 - scrollTop) / 200;
            } else {
                this.$data.visibility = 'hidden';
            }
        }
    },
    components: {
        slidetheme
    },
    beforeCompile: function() {
        this.$data.height = window.innerHeight;
    }
}
</script>
<style>
* {
    font-family: "微软雅黑";
    padding: 0;
    bottom: 0;
    margin: 0;
}

::-webkit-scrollbar {
    width: 0px
}
</style>
<style lang="sass" scoped>
$blue:#00a2ea;
$white:#fff;
body {
    background-color: #f2f2f2;
    display: flex;
}
#container{
	position: relative;
	overflow-x:hidden; 
}
#header {
    width: 100%;
    height: 60px;
    background-color: $blue;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: $white;
    font-size: 15px;
    position: fixed;
    top: 0px;
}

#left {
    margin-left: 20px;
    width: 200px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.menu {
    position: relative;
    width: 18px;
    height: 12px;
    border-top: 2px solid $white;
    border-bottom: 2px solid $white;
    margin-right: 20px;
    transition: transform 1s;
    &::before {
        content: "";
        display: block;
        width: 18px;
        height: 2px;
        background-color: #FFF;
        position: absolute;
        top: 5px;
    }
}

.menu_active {
    transform: rotate(720deg);
}

#contentContainer {
    padding-top: 60px;
    overflow: auto;
}

@media screen and (max-width:640px) {
    #container {
        width: 100%;
    }
    #qrcodeContainer {
        display: none;
    }
}

@media screen and (min-width:640px) {
    #container {
        width: 640px;
        margin: 0px auto;
        box-shadow: 0px 0px 3px 0px #eee;
    }
    #header {
        width: 640px;
    }
    #qrcodeContainer {
        position: fixed;
        left: 20px;
        top: 150px;
        width: 100px;
        text-align: center;
        img {
            width: 100px;
        }
        span {
            font-size: 10px;
        }
        iframe {
            margin-top: 10px;
        }
    }
}
</style>
