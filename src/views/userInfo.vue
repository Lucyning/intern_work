<template>
  <div id="userInfo">
   <div id="right">
     这是用户信息录入页面
   </div>
  </div>
</template>


<script>
import Navtab from '../components/left-tag.vue'

export default {
  name: 'userInfo' ,
  components: {
    Navtab,
  }
}
</script>

<style>
#right{
    position:relative;
    margin-left:15%;
}
</style>