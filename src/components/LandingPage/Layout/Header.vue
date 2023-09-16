<script setup lang="ts">
import { useRoute } from 'vue-router'
import LoginView from '@/views/AdminPage/LoginView.vue'
import { useAuthStore } from '@/stores/auth'

const route = useRoute()

const storeAuth = useAuthStore()

</script>

<template>
  <header class='main-header'>
    <!-- Menu Wave -->
    <div class='menu_wave'></div>

    <!-- Main box -->
    <div class='main-box'>
      <div class='menu-box'>
        <div class='logo'><router-link to="/home"><img src='../../../assets/images/logo.png' alt='' title=''></router-link></div>

        <!--Nav Box-->
        <div class='nav-outer clearfix'>
          <!-- Main Menu -->
          <nav class='main-menu navbar-expand-md navbar-light'>
            <div class='collapse navbar-collapse clearfix' id='navbarSupportedContent'>
              <ul class='navigation menu-left clearfix'>
                <li :class='route.name === "home" ? "current": ""'><router-link to="/home">Inicio</router-link></li>
                <li :class='route.name === "about" ? "current": ""'><router-link to="/about">Nosotros</router-link></li>
              </ul>

              <ul class='navigation menu-right clearfix'>
                <li :class='route.name === "portfolio" ? "current": ""'><router-link to="/portfolio">Portafolio</router-link></li>
                <li :class='route.name === "contact" ? "current": ""'><router-link to="/contact">Contactanos</router-link></li>
              </ul>
            </div>
          </nav>
          <!-- Main Menu End-->

          <div class="outer-box clearfix">
            <div class="search-box">
              <button class="search-btn" @click="storeAuth.$state.showLogin = true" ><i class="fa fa-lock"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Sticky Header  -->
    <div class='sticky-header'>
      <div class='auto-container clearfix'>
        <!--Logo-->
        <div class='logo'>
          <router-link to="/home"><img src='../../../assets/images/logo-small.png' alt='Sticky Logo'></router-link>
        </div>

        <!--Nav Outer-->
        <div class='nav-outer'>
          <!-- Main Menu -->
          <nav class='main-menu'>
            <!--Keep This Empty / Menu will come through Javascript-->
          </nav><!-- Main Menu End-->
        </div>
      </div>
    </div><!-- End Sticky Menu -->

    <!-- Mobile Header -->
    <div class='mobile-header'>
      <div class='logo'><router-link to="/home"><img src='../../../assets/images/logo-small.png' alt='' title=''></router-link></div>

      <!--Nav Box-->
      <div class='nav-outer clearfix'>
        <!--Keep This Empty / Menu will come through Javascript-->
        <div class="search-box">
          <button class="search-btn" @click="storeAuth.$state.showLogin = true" ><i class="fa fa-lock"></i></button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu  -->
    <div class='mobile-menu'>
      <nav class='menu-box'>
        <div class='nav-logo'><router-link to="/home"><img src='../../../assets/images/logo-small.png' alt='' title=''></router-link></div>
        <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header-->
      </nav>
    </div><!-- End Mobile Menu -->

  </header>
  <!--End Main Header -->

  <LoginView />
</template>

<style scoped>
</style>
