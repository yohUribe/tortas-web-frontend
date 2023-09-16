import { defineStore } from 'pinia';
import { collection, query, where, getDocs } from 'firebase/firestore'
import { db } from '@/services/firebase'

export const useAuthStore = defineStore({
  id: 'auth',
  state: () =>({
    showLogin: false,
    user: null,
    isAuthenticated: false,
  }),
  actions: {
    async login({ username , password }) {
      try {
        const usersRef = collection(db, "users");
        const q = await query(usersRef, where("dni", "==", username), where('password', '==', password))
        const querySnapshot = await getDocs(q);
        if (querySnapshot.size === 1) {
          const userData = querySnapshot.docs[0].data();
          this.user = userData.name
          this.isAuthenticated = true
          localStorage.user = userData.name
          localStorage.isAuthenticated = true
          return { success: true, message: 'Bienvenido', user: userData };
        } else {
          return { success: false, message: 'Credenciales incorrectas' }
        }
      } catch (error) {
        return { success: false, message: 'Error al iniciar sesión' }
      }
    },
  },
});