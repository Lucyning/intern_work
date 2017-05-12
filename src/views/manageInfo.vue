<template>
  <div id="manageInfo">
   <div id="right">
     这是信息采集管理页面
   </div>
  </div>
</template>


<script>
import Navtab from '../components/left-tag.vue'

export default {
  name: 'manageIfo' ,
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