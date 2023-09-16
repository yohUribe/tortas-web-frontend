<script setup lang='ts'>
import Header from '@/components/LandingPage/Layout/Header.vue'
import Footer from '@/components/LandingPage/Layout/Footer.vue'
import MainSlider from '@/components/LandingPage/MainSlider.vue'
import Services from '@/components/LandingPage/Services.vue'
import CallAction from '@/components/LandingPage/CallAction.vue'
import Porfolio from '@/components/LandingPage/Porfolio.vue'
import Features from '@/components/LandingPage/Features.vue'
import Banners from '@/components/LandingPage/Banners.vue'
import ScrollTop from '@/components/LandingPage/ScrollTop.vue'

import { onMounted, ref } from 'vue'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/services/firebase'

onMounted(async () => {
  try {
    await getSpecialties();
  } catch (error) {
    console.error('Error en getSpecialty:', error);
    return;
  }
  loadScript({ src: '/js/jquery.js' })
    .then(() => loadScript({ src: '/js/popper.min.js' }))
    .then(() => loadScript({ src: '/js/bootstrap.min.js' }))
    .then(() => loadScript({ src: '/plugins/revolution/js/jquery.themepunch.revolution.min.js' }))
    .then(() => loadScript({ src: '/plugins/revolution/js/jquery.themepunch.tools.min.js' }))
    .then(() => loadScript({ src: '/plugins/revolution/js/extensions/revolution.extension.actions.min.js' }))
    .then(() => loadScript({ src: '/plugins/revolution/js/extensions/revolution.extension.carousel.min.js' }))
    .then(() => loadScript({ src: '/plugins/revolution/js/extensions/revolution.extension.kenburn.min.js' }))
    .then(() => loadScript({ src: '/plugins/revolution/js/extensions/revolution.extension.layeranimation.min.js' }))
    .then(() => loadScript({ src: '/plugins/revolution/js/extensions/revolution.extension.migration.min.js' }))
    .then(() => loadScript({ src: '/plugins/revolution/js/extensions/revolution.extension.navigation.min.js' }))
    .then(() => loadScript({ src: '/plugins/revolution/js/extensions/revolution.extension.parallax.min.js' }))
    .then(() => loadScript({ src: '/plugins/revolution/js/extensions/revolution.extension.slideanims.min.js' }))
    .then(() => loadScript({ src: '/plugins/revolution/js/extensions/revolution.extension.video.min.js' }))
    .then(() => loadScript({ src: '/js/main-slider-script.js' }))
    .then(() => loadScript({ src: '/js/jquery.fancybox.js' }))
    .then(() => loadScript({ src: '/js/owl.js' }))
    .then(() => loadScript({ src: '/js/wow.js' }))
    .then(() => loadScript({ src: '/js/appear.js' }))
    .then(() => loadScript({ src: '/js/script.js' }))
    .catch(error => {
      console.error('Error al cargar los scripts:', error);
    });
});



// Función para cargar un script
async function loadScript({ src }: { src: any }) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

const specialties = ref([])

const getSpecialties = async () => {
  const specialtiesCol = collection(db, 'specialties');
  const specialtySnapshot = await getDocs(specialtiesCol);

  specialtySnapshot.forEach((doc) => {
    specialties.value.push({ id: doc.id, data: doc.data() });
  })
}
</script>

<template>
  <main>
    <div class='page-wrapper'>
      <Header/>

      <MainSlider/>

      <Services :services='specialties'/>

      <CallAction/>

      <Porfolio/>

      <Features/>

      <Banners/>

      <Footer/>

    </div><!-- End Page Wrapper -->

    <ScrollTop/>
  </main>
</template>

<style>
@import url('/css/bootstrap.css');
@import url('/plugins/revolution/css/settings.css');
@import url('/plugins/revolution/css/layers.css');
@import url('/plugins/revolution/css/navigation.css');
@import url('/css/style.css');
@import url('/css/responsive.css');
</style>
