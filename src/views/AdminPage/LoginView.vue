<script setup lang='ts'>
import { useAuthStore } from '@/stores/auth'
import { reactive } from 'vue'
import { User, View } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router';
import { ElNotification } from 'element-plus'

const router = useRouter()

const storeAuth = useAuthStore()
const handleClose = () => {
  storeAuth.$state.showLogin = false;
}

const form = reactive({
  username: '',
  password: '',
})

const handleLogin = async () => {
  const data = await storeAuth.login(form)
  if (data.success) {
    router.push({ name: 'Dashboard' });

    ElNotification({
      title: 'Acceso Correcto',
      message: data.message,
      type: 'success',
      position: 'top-left',
    })
  }else{
    ElNotification({
      title: 'Error',
      message: data.message,
      type: 'error',
      position: 'top-left',
    })
  }
}

</script>

<template>
  <el-drawer v-model="storeAuth.$state.showLogin" :before-close="handleClose">
    <template #header="{ titleId }">
      <h5 :id="titleId" style="text-align: center;">Acceso al Sistema</h5>
    </template>
      <div class="auto-container">
        <div class="login-form">
          <div class='logo'><el-image style="width: 150px; height: 150px" src="src/assets/images/logo.png" /></div>
            <el-form :model="form" label-position="top">
              <el-form-item class='login-label' label="Usuario">
                <el-input v-model="form.username" size="large" :suffix-icon="User" autocomplete="off" />
              </el-form-item>
              <el-form-item class='login-label' label="Contraseña">
                <el-input v-model="form.password" size="large" :suffix-icon="View" type="password" autocomplete="off" />
              </el-form-item>
            </el-form>
            <el-form-item>
              <el-button type="primary" @click='handleLogin()'>Ingresar</el-button>
            </el-form-item>
        </div>
      </div>

  </el-drawer>
</template>

<style>
.rtl {
  direction: initial!important;
}
.logo {
  text-align: center;
}
.login-label {
  color: #4b4342;
  line-height: 28px;
  font-size: 17px;
  font-weight: 400;
  background: #ffffff;
  font-family: 'Merienda One', cursive;
}
.el-form-item__content {
  justify-content: center;
}
</style>