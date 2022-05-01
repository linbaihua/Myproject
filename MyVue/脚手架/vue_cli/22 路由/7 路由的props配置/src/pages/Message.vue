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
    }
</script>

<style>

</style>