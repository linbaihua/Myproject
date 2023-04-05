<template>
	<div>
		<!-- :age是 v-bind:age, 通过这个绑定的是age就是一个属性，age初始赋值18 -->
		<Student name="李四" sex="女" :age="18"/>
	</div>
</template>

<script>
	import Student from './components/Student'

	export default {
		name:'App',
		components:{Student}
	}
</script>
