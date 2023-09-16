<script setup lang='ts'>
import { ref } from 'vue'

const title = ref('Promociones')

const banners = ref([{
  img: '/src/assets/images/resource/banner-1.jpg',
  style: 'text-right',
  content: '<h4>Dulces<br>para tu<br> Fiesta</h4>',
}, {
  img: '/src/assets/images/resource/banner-2.jpg',
  style: '',
  content: '<h4>Diseñados<br>para ti</h4>',
}, {
  img: '/src/assets/images/resource/banner-3.jpg',
  style: 'text-center',
  content: '<h2>-50%</h2><h4>Solo Hoy</h4>',
},
])
</script>

<template>
  <!-- Recipes Section  -->
  <section class='pricing-section'>
    <div class='auto-container'>
      <div class='sec-title text-center'>
        <div class="divider"><img src="@/assets/images/icons/divider_1.png" alt=""></div>
        <h2>{{title}}</h2>
      </div>

      <div class="row">
<!--         Banner Box
        <div class="banner-box col-lg-4 col-md-12 col-sm-12">
          <div class="inner-box text-right" style="background-image: url(/src/assets/images/resource/banner-1.jpg);">
            <h4>Sweet<br>For Your<br> Party</h4>
          </div>
        </div>

        &lt;!&ndash; Banner Box &ndash;&gt;
        <div class="banner-box col-lg-4 col-md-12 col-sm-12">
          <div class="inner-box" style="background-image: url(/src/assets/images/resource/banner-2.jpg);">
            <h4>Any Design<br>For You</h4>
          </div>
        </div>

        &lt;!&ndash; Banner Box &ndash;&gt;
        <div class="banner-box col-lg-4 col-md-12 col-sm-12">
          <div class="inner-box text-center" style="background-image: url(/src/assets/images/resource/banner-3.jpg);">
            <h2>-50%</h2>
            <h4>Just Today</h4>
          </div>
        </div>-->

        <!-- Banner Box -->
        <div class="banner-box col-lg-4 col-md-12 col-sm-12" v-for='(banner, index) in banners' :key='index'>
          <div :class='"inner-box " + banner.style' :style='"background-image: url("+banner.img+");"' v-html='banner.content'>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Recipes Section  -->
</template>

<style scoped>
</style>
