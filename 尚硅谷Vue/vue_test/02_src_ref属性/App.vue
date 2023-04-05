<template>
	<div>
		<h1 v-text="msg" ref="title"></h1>
		<button ref="btn" @click="showDOM">点我输出上方的DOM元素</button>
		<School ref="sch"/>
	</div>
</template>

<script>

	/* 
		ref引用
			使用vm.$refs.refname 可以获得DOM对象，通过这个可以对DOM对象操作
			每个元素都有一个 $refs 对象，vue中想要获得这个对象通过给dom绑定一个
				ref,然后通过 this.$refs.refname 就可以获得
	*/

	//引入School组件
	import School from './components/School'

	export default {
		name:'App',
		components:{School},
		data() {
			return {
				msg:'欢迎学习Vue！'
			}
		},
		methods: {
			showDOM(){
				console.log(this.$refs.title) //真实DOM元素
				console.log(this.$refs.btn) //真实DOM元素
				console.log(this.$refs.sch) //School组件的实例对象（vc）
			}
		},
	}
</script>
