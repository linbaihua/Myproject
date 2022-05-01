<template>
  <div>
      <ul>
          <li>编号：{{id}}</li>
          <li>姓名：{{name}}</li>
      </ul>
  </div>
</template>

<script>
    export default {
        name:'Students',
        props:['id','name']
    }
</script>
