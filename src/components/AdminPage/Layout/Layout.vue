<script setup lang='ts'>
import Header from '@/components/AdminPage/Layout/Header.vue'
import Menu from '@/components/AdminPage/Layout/Menu.vue'
import { ref } from 'vue'

const isCollapse = ref(false)

const onIsCollapse = (data) => {
  isCollapse.value = data;
}
</script>

<template>
  <el-container class='layout-container' style='height: 100vh;'>
    <Menu :isCollapse='isCollapse' @onIsCollapse='onIsCollapse'/>
    <el-container>
      <Header :isCollapse='isCollapse' @onIsCollapse='onIsCollapse'/>
      <el-main><slot></slot></el-main>
      <el-footer>
        <div class="row align-items-center justify-content-lg-between">
          <div class="col-lg-6">
            <div class="copyright text-center text-lg-left text-muted">
              © 2023 <a href="#" class="font-weight-bold ml-1 foot">Oficina de Seguros - Diris Lima Sur</a>
            </div>
          </div>
          <div class="col-lg-6">
            <ul class="nav nav-footer justify-content-center justify-content-lg-end">
            <li class="nav-item">
              <a href="#" class="nav-link foot">Creado por el Ing. Carlos Uribe</a>
            </li>
          </ul>
          </div>
        </div>
      </el-footer>
    </el-container>
  </el-container>
</template>

<style scoped>
.layout-container .el-main {
  background-color: rgb(247, 248, 252);
}

.foot{
  color: var(--el-text-color-primary);
  background-color: rgb(247, 248, 252);
}
</style>