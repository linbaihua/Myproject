<template>
    <div>
		<ul>
			<li v-for="m in messageList" :key="m.id">
				<!-- path只用写自己一级路径就可以了，虽然message在home中，但是不用写
				home路径，因为在home中路径已经写好了 -->
					<!-- path:'/home/message/students', -->
				<router-link :to="{
					name:'xuesheng',
					query:{
						id:m.id,
						name:m.name
					}
				}">{{m.id}}</router-link>
				<button @click="pushShow(m)">push查看</button>
				<button @click="replaceShow(m)">replace查看</button>
			</li>
		</ul>
		<hr>
		<router-view></router-view>
	</div>
</template>

<script>
    export default {
        name:'Message',
		data() {
            return {
                messageList:[
                    {id:'001',name:'jack'},
                    {id:'002',name:'mary'},
                    {id:'003',name:'tom'},
                    {id:'004',name:'angular'},
                ]
            }
        },
		methods: {
			pushShow(m){
				this.$router.push({
					name:'xuesheng',
					query:{
						id:m.id,
						name:m.name
					}
				})
			},
			replaceShow(m){
				this.$router.replace({
					name:'xuesheng',
					query:{
						id:m.id,
						name:m.name
					}
				})
			}
		},
		mounted() {
			console.log('message被销毁');
		},
    }
</script>

<style>

</style>