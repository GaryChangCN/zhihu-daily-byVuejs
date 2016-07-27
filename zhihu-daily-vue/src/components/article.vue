<template>
    <div id="content">
        <div id="listContent">
            <span>{{title}}</span>
            <ul id="list">
                <li v-for="item in api.stories" v-link="{path:'/contents?id='+item.id}">
                    <span>{{item.title}}</span>
                    <div id="imgContainer">
                        <img v-bind:src="tin+'/tiny-pic?img='+item.images" v-on:error="err($event)">
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: "article",
    el: function() {
        return "#content";
    },
    data: function() {
        return {
            msg: "article",
            api: {},
            title: "今日要闻",
            tin:Tin
        }
    },
    methods: {
        err: function(event) {
            var _this = event.target;
            _this.style.visibility = "hidden";
        }
    },
    route: {
        data: function() {
            var query = this.$route.query;
            this.$http.get(Tin+'/tiny-theme', {
                params: {
                    id: query.id
                }
            }).then(function(response) {
                this.$data.api = response.json();
                this.$data.title = query.name;
                this.$root.$data.headerTitle = query.name;
            });
        }
    },
    events: {
    }
}
</script>
<style lang="sass" scoped>
$grey:#f4f4f4;
$darkgrey:#f2f2f2;
$lightblack:#bdbdbd;
#content {
    background-color: $grey;
}

li {
    list-style-type: none;
}

#listContent {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

#listContent>span {
    align-self: flex-start;
    padding: {
        top: 10px;
        left: 3%;
    }
    font-size:10px;
    color:$lightblack;
}

#list {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding-top: 10px;
    li {
        width: 90%;
        height: 70px;
        background-color: #fff;
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
        box-shadow: 0px 1px 2px 0px $lightblack;
        border-radius: 2px;
        padding: {
            top: 10px;
            bottom: 10px;
            left: 3%;
            right: 3%;
        }
        &:hover,
        &:active {
            background-color: $darkgrey;
        }
        span {
            display: block;
            width: calc(100% - 110px);
        }
        div {
            width: 70px;
            height: 70px;
            background-image: url("./../../dist/loadfailed.gif");
            img {
                width: inherit;
                height: inherit;
            }
        }
    }
}
</style>
