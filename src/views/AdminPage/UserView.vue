<script setup lang='ts'>
import Layout from '@/components/AdminPage/Layout/Layout.vue'
import { ElMessage } from 'element-plus'
import {
  Edit,
  Delete,
} from '@element-plus/icons-vue'
import { onMounted, ref } from 'vue'
import { collection, getDocs, doc, updateDoc, addDoc, deleteDoc } from 'firebase/firestore'
import { db } from '@/services/firebase'
onMounted(() => {
 getCities();
})
const tableData = ref([])

const getCities = async () => {
  tableData.value = []
  const usersCol = collection(db, 'users');
  const userSnapshot = await getDocs(usersCol);

  userSnapshot.forEach((doc) => {
    tableData.value.push({ id: doc.id, data: doc.data() });
  })
}

interface User {
  id: string
  data:{
    name: string
    lastName: string
    momLastName: string
    dni: string
    position: string
    password: string
  }
}

const user = {
  id: '',
  data: {
    name: '',
    lastName: '',
    momLastName: '',
    dni: '',
    position: '',
    password: '',
  }
}

const formUser = ref<User>({...user})

const handleEdit = (index: number, row: User) => {
  formUser.value = row
}

const handleDelete = async (index: number, row: User) => {
  try {
    const userRef = doc(db, 'users', row.id);

    await deleteDoc(userRef);
    ElMessage({
      showClose: true,
      message: `Documento eliminado`,
      type: 'success',
    })

    getCities();
  } catch (error) {
    ElMessage({
      showClose: true,
      message: `Error al eliminar el documento: ${error}`,
      type: 'error',
    })
  }
}

const handleCancel = () => {
  formUser.value = {...user}
}

const handleCreate = async () => {
  try {
    if(formUser.value.id === ''){
      const newUserColeccionRef = collection(db, 'users')
      const newDocumentRef = await addDoc(newUserColeccionRef, formUser.value.data);
      ElMessage({
        showClose: true,
        message: `Documento creado con ID: ${newDocumentRef.id}`,
        type: 'success',
      })
      formUser.value.data.name = ''
      formUser.value.data.lastName = ''
      formUser.value.data.momLastName = ''
      formUser.value.data.dni = ''
      formUser.value.data.position = ''
      formUser.value.data.password = ''

    } else {
      const userColeccionRef = doc(db, 'users', formUser.value.id);
      await updateDoc(userColeccionRef, formUser.value.data);
      ElMessage({
        showClose: true,
        message: `Documento actualizado con ID: ${formUser.value.id}`,
        type: 'success',
      })
      formUser.value = {...user}
    }

    getCities();

  } catch (error) {
    ElMessage({
      showClose: true,
      message: `Error al crear la nueva colección: ${error}`,
      type: 'error',
    })
  }
}

</script>

<template>
  <Layout>
    <span style='font-size: 20pt'> <strong>Usuarios</strong> </span>
    <el-divider />
    <el-row :gutter="20">
      <el-col :span="14">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column fixed label="Nº" min-width="50" >
            <template #default="scope">{{ scope.$index + 1  }} </template>
          </el-table-column>
          <el-table-column label="Nombres y Apellidos" min-width="230">
            <template #default="scope">{{ scope.row.data.name }} {{ scope.row.data.lastName }} {{ scope.row.data.momLastName }}</template>
          </el-table-column>
          <el-table-column prop="data.dni" label="DNI" min-width="120" />
          <el-table-column prop="data.position" label="Cargo" min-width="120" />
          <el-table-column fixed="right" label="Operations" width="110" >
            <template #default="scope">
              <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
              ><el-icon><Edit /></el-icon></el-button>
              <el-popconfirm width="260"
                             confirm-button-text="Si"
                             cancel-button-text="No, Gracias"
                             title="¿Desea eliminar este registro?"
                             @confirm="handleDelete(scope.$index, scope.row)">
                <template #reference>
                  <el-button
                    size="small"
                    type="danger"
                  ><el-icon><Delete /></el-icon></el-button>
                </template>
              </el-popconfirm>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="10">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <strong v-if="formUser.id === ''">Nuevo usuario</strong>
              <strong v-else>Editar usuario</strong>
            </div>
          </template>
          <el-form
            label-position="top"
            label-width="100px"
            :model="formUser.data"
          >
            <el-row :gutter="24">
              <el-col :span="12">
                <el-form-item label="Nombres">
                  <el-input v-model='formUser.data.name'/>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Apellido Paterno">
                  <el-input v-model='formUser.data.lastName' />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="24">
              <el-col :span="12">
                <el-form-item label="Apellido Materno">
                  <el-input v-model='formUser.data.momLastName' />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="DNI">
                  <el-input v-model='formUser.data.dni' />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="24">
              <el-col :span="12">
                <el-form-item label="Cargo">
                  <el-input v-model='formUser.data.position' />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="Contraseña">
                  <el-input type='password' v-model='formUser.data.password'/>
                </el-form-item>
              </el-col>
            </el-row>
            <el-form-item>
              <el-button type="primary" @click='handleCreate()'>Guardar</el-button>
              <el-button @click='handleCancel()'>Cancelar</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </Layout>
</template>

<style scoped>
.card-header{
  background-color: var(--white);
  font-size: 16pt;
  text-align: center;
  border: 0;
}
</style>