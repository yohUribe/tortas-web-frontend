<script setup lang='ts'>
import Layout from '@/components/AdminPage/Layout/Layout.vue'
import {
  Edit,
  Delete,
} from '@element-plus/icons-vue'
import { onMounted, ref } from 'vue'
import { collection, getDocs, doc, updateDoc, addDoc, deleteDoc } from 'firebase/firestore'
import { db } from '@/services/firebase'
import { ElMessage } from 'element-plus'

onMounted(() => {
  getSpecialties();
})

const tableData = ref([])

const getSpecialties = async () => {
  tableData.value = []
  const specialtiesCol = collection(db, 'specialties');
  const specialtySnapshot = await getDocs(specialtiesCol);

  specialtySnapshot.forEach((doc) => {
    tableData.value.push({ id: doc.id, data: doc.data() });
  })
}
interface Specialties {
  id: string,
  data: {
    img: string
    subTitle: string
    description: string
  }
}

const specialties = {
  id: '',
  data: {
    img: '',
    subTitle: '',
    description: '',
  }
}

const formSpecialties = ref<Specialties>({...specialties})

const handleEdit = (index: number, row: Specialties) => {
  formSpecialties.value = row
}
const handleDelete = async (index: number, row: Specialties) => {
  try {
    const specialityRef = doc(db, 'specialties', row.id);

    await deleteDoc(specialityRef);
    ElMessage({
      showClose: true,
      message: `Documento eliminado`,
      type: 'success',
    })

    getSpecialties();
  } catch (error) {
    ElMessage({
      showClose: true,
      message: `Error al eliminar el documento: ${error}`,
      type: 'error',
    })
  }
}
const handleCancel = () => {
  formSpecialties.value = {...specialties}
}

const handleCreate = async () => {
  try {
    if(formSpecialties.value.id === ''){
      const newSpecialityColeccionRef = collection(db, 'specialties')
      const newDocumentRef = await addDoc(newSpecialityColeccionRef, formSpecialties.value.data);
      ElMessage({
        showClose: true,
        message: `Documento creado con ID: ${newDocumentRef.id}`,
        type: 'success',
      })
      formSpecialties.value.data.img = ''
      formSpecialties.value.data.subTitle = ''
      formSpecialties.value.data.description = ''

    } else {
      const specialityColeccionRef = doc(db, 'specialties', formSpecialties.value.id);
      await updateDoc(specialityColeccionRef, formSpecialties.value.data);
      ElMessage({
        showClose: true,
        message: `Documento actualizado con ID: ${formSpecialties.value.id}`,
        type: 'success',
      })
      formSpecialties.value = {...specialties}
    }

    getSpecialties();

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
    <span style='font-size: 20pt'> <strong>Especialidades</strong> </span>
    <el-divider />

    <el-row :gutter="20">
      <el-col :span="14">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column fixed label="Nº" min-width="50">
          <template #default="scope">{{ scope.$index + 1  }} </template>
          </el-table-column>
          <el-table-column prop="data.img" label="Imagen" min-width="120" />
          <el-table-column prop="data.subTitle" label="Subtitulo" min-width="140" />
          <el-table-column prop="data.description" label="Descripción" min-width="210" />
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
              <strong v-if="formSpecialties.id === ''">Nueva especialidad</strong>
              <strong v-else>Editar especialidad</strong>
            </div>
          </template>
          <el-form
            label-position="top"
            label-width="100px"
            :model="formSpecialties.data"
          >
            <el-form-item label="Imagen">
              <el-input v-model='formSpecialties.data.img'/>
            </el-form-item>
            <el-form-item label="Subtitulo">
              <el-input v-model='formSpecialties.data.subTitle' />
            </el-form-item>
            <el-form-item label="Descripción">
              <el-input type="textarea" v-model='formSpecialties.data.description' />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click='handleCreate()'>Crear</el-button>
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