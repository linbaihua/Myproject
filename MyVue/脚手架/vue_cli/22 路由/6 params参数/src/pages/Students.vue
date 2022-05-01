<template>
  <div>
      <ul>
          <li>编号：{{$route.params.id}}</li>
          <li>姓名：{{$route.params.name}}</li>
      </ul>
  </div>
</template>

<script>
    export default {
        name:'Students',
    }
</script>
