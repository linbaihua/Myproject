<template>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model="keyWord"/>&nbsp;
        <button @click='searchUsers'>Search</button>
      </div>
    </section>
</template>

<script>
    import axios from 'axios'
    export default {
    name:'Search',
    data() {
        return {
            keyWord:''
        }
    },
    methods: {
        searchUsers(){
            // 请求前更新List的数据
            this.$bus.$emit('updateListDate', {
                isLoading:true,
                errMsg:'',
                users:[],
                isFirst:false
            })
            // `` 使用这个引号可以用es6 语法
            axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
                // 请求成功
                response => {
                    console.log('请求成功了');
                    this.$bus.$emit('updateListDate',{
                        isLoading:false,
                        errMsg:'',
                        users:response.data.items
                    })
                },
                // 请求失败
                error => {
                    console.log('请求失败');
					this.$bus.$emit('updateListDate',{
						isLoading:false,
						errMsg:error.message,
						users:[]
					})
                }
            )
        }
    },
}
</script>