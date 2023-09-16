<script setup lang="ts">
import { Expand, Fold,Setting } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const name = localStorage.getItem('user');

defineProps({
  isCollapse: Boolean,
})

const handleLogout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('isAuthenticated');
  router.push('/');
}
</script>

<template>
  <el-header>
    <el-row :gutter="20" class="padding-header">
      <el-col :span="4">
        <el-button link @click="$emit('onIsCollapse', !isCollapse)">
          <el-icon size="large">
            <Fold v-show='!isCollapse'/>
          </el-icon>
        </el-button>
      </el-col>
      <el-col :span="4" :offset="16" style='text-align: right;'>
        <div class='toolbar'>
          <el-dropdown trigger="click">
            <span style='font-size: 14pt;'>{{name}} <el-icon class="el-icon--right" size="large"><setting/></el-icon></span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click='handleLogout()'>Cerrar Sesion</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-col>
    </el-row>
  </el-header>
</template>

<style scoped>
.el-header{
  background-color: rgb(247, 248, 252);
}

.padding-header {
  position: relative;
  color: var(--el-text-color-primary);
  padding: 10pt 0 0 0;
  font-size: 18px;
}

.toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>
