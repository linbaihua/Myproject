2.Teleport

●  什么是Teleport？—— Teleport 是一种能够将我们的组件html结构移动到指定位置的技术。 
<teleport to="移动位置">
	<div v-if="isShow" class="mask">
		<div class="dialog">
			<h3>我是一个弹窗</h3>
			<button @click="isShow = false">关闭弹窗</button>
		</div>
	</div>
</teleport>