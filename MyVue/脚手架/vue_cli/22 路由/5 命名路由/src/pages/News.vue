<template>
    <div>
        <ul>
            <li v-for="n in newsList" :key="n.id">
                <router-link :to="{
                    path:'/home/news/detail',
                    query:{
                        id:n.id,
                        title:n.title
                    }
                }">{{n.id}}</router-link>
            </li>
        </ul>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name:'News',
        data() {
            return {
                newsList:[
                    {id:'001',title:'canon'},
                    {id:'002',title:'nikon'}
                ]
            }
        },
    }
</script>

