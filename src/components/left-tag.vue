<template>
  <div id="navtab">
   <el-col>
   <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">
        <el-submenu  index="1">
               <template slot="title">实时数据</template>
               <el-menu-item index="1-1">
                   <router-link to="/home">机构与人数分布</router-link>
               </el-menu-item>
               <el-menu-item index="1-2">
                   <router-link to="/manageInfo">机构与人数分布</router-link>
               </el-menu-item>
               <el-menu-item index="1-3">
                   <router-link to="/userInfo">机构与人数分布</router-link>
               </el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">指标统计</template>
            <el-menu-item index="2-1">体格与营养状况</el-menu-item>
            <el-menu-item index="2-2">行为和生活方式</el-menu-item>
            <el-menu-item index="2-3">营养相关慢性病</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
                 <template slot="title">系统管理</template>
                 <el-menu-item index="3-1">机构维护</el-menu-item>
        </el-submenu>
   </el-menu>
   </el-col>
 </div>
</template>

<script>
</script>

<style>
#navtab {
  width: 12%;
  height:100%;
  display: inline-block;
  float: left;
  background-color:#0DBFFF;
}
.el-menu--dark .el-menu-item, .el-menu--dark .el-submenu__title{
  color:#1B26E8;
  background-color:#0DBFFF;
}
.el-menu--dark .el-menu-item:hover, .el-menu--dark .el-submenu__title:hover {
 background-color:#46E8E8;
}
.el-menu-vertical {
  height: 100%;
}
.el-menu-item a{
   color: #1B26E8;
}
.link {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
