<script lang="ts" setup>
import {
  Setting, Expand, House
} from '@element-plus/icons-vue'
import { paths } from '@/router/index'
import { useRoute } from 'vue-router'

const route = useRoute()

defineProps({
  isCollapse: Boolean,
})

</script>
<template>
  <el-menu
    :default-active="route.path"
    class="el-menu-vertical-demo"
    router
    :collapse="isCollapse"
  >
    <div class='logo-dash' v-show='!isCollapse'><el-image style="width: 150px; height: 40px" src="/src/assets/images/logo-small-2.png" /></div>
    <div class='logo-dash' v-show='isCollapse'>
      <el-button link @click="$emit('onIsCollapse', !isCollapse)">
        <el-icon size="large" color='white'>
          <Expand/>
        </el-icon>
      </el-button>
    </div>
    <el-menu-item :index="paths.dashboard.url">
      <el-icon><House/></el-icon>
      <template #title>Dashboard</template>
    </el-menu-item>
    <el-sub-menu index='2'>
      <template #title>
        <el-icon><setting/></el-icon>
        <span>Administrar</span>
      </template>
        <el-menu-item :index="paths.user.url">Usuarios</el-menu-item>
        <el-menu-item :index="paths.specialties.url">Especialidades</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.logo-dash {
  text-align: center;
  padding: 30px 0 30px 0;
}
.el-menu {
  border-right: none;
  background-color: var(--el-text-color-primary);
}
.el-menu-item, .el-sub-menu__title {
  color: var(--el-border-color-light);
}

.el-menu-item.is-active{
  color: var(--el-border-color-light);
  background-color: rgb(62, 64, 73);
  border-left: 5px solid var(--el-border-color-light);
  padding-left: 10px;
}

.el-menu-item:hover, .el-sub-menu__title:hover{
  background-color: rgb(62, 64, 73);
}
</style>