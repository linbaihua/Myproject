<template>
    <div>
        <h2>我是Home的内容</h2>
        <div>
			<ul class="nav nav-tabs">
				<li>
                    <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
				</li>
				<li>
                    <router-link class="list-group-item" active-class="active" to="/home/message">Messages</router-link>
				</li>
                <li>
                    <router-link class="list-group-item" active-class="active" to="/home/students">Students</router-link>
                </li>
			</ul>
			<router-view></router-view>
		</div>
    </div>
</template>

<script>
    export default {
        name:'Home',
        beforeDestroy() {
            console.log('home即将被销毁');
        },
        mounted() {
            console.log('home被使用');
            console.log(this);
            window.homeRoute = this.$route
            window.homeRouter = this.$router
        },
    }
</script>

<style>

</style>