<script setup lang='ts'>
import Header from '@/components/LandingPage/Layout/Header.vue'
import Footer from '@/components/LandingPage/Layout/Footer.vue'
import ScrollTop from '@/components/LandingPage/ScrollTop.vue'

import { onBeforeMount } from 'vue'

onBeforeMount(() => {
  loadScript({ src: '/js/jquery.js' })
    .then(() => loadScript({ src: '/js/popper.min.js' }))
    .then(() => loadScript({ src: '/js/bootstrap.min.js' }))
    .then(() => loadScript({ src: '/js/jquery.fancybox.js' }))
    .then(() => loadScript({ src: '/js/owl.js' }))
    .then(() => loadScript({ src: '/js/wow.js' }))
    .then(() => loadScript({ src: '/js/isotope.js' }))
    .then(() => loadScript({ src: '/js/appear.js' }))
    .then(() => loadScript({ src: '/js/script.js' }))
    .then(() => {
      // Todos los scripts se han cargado, ahora puedes realizar inicializaciones
      // Por ejemplo, puedes inicializar componentes que dependen de las librerías cargadas
      // ...
    })
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
</script>

<template>
  <main>
    <div class='page-wrapper'>
      <Header/>

      <!--Page Title-->
      <section class="page-title" style="background-image:url(/src/assets/images/background/34.jpg)">
        <div class="auto-container">
          <h1>Contacts</h1>
          <ul class="page-breadcrumb">
            <li><a href="index-2.html">home</a></li>
            <li>Contacts</li>
          </ul>
        </div>
      </section>
      <!--End Page Title-->

      <!-- Contact Section -->
      <section class="contact-section">
        <div class="auto-container">
          <div class="sec-title text-center">
            <div class="divider"><img src='/src/assets/images/icons/divider_1.png' alt=""></div>
            <h2>Our Contacts</h2>
            <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nisi et dolor ornare pellentesque. Nullam porttitor,<br> odio id facilisis, mauris dolor rhoncus elit, ultricies nulla eros at dui. In suscipit leo sagittis aliquam.</div>
          </div>

          <div class="row clearfix">
            <div class="column col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div class="inner-column">
                <div class="title">
                  <div class="icon"><img src='/src/assets/images/icons/icon-devider-gray.png' alt=""></div>
                  <h4>Opening Hours</h4>
                </div>

                <ul class="contact-info">
                  <li>Monday – Friday <br>08:00 – 17:30</li>
                  <li>Saturday <br>09:00 – 16:00</li>
                  <li>Sunday <br>CLOSED</li>
                </ul>
              </div>
            </div>

            <div class="column col-xl-3 col-lg-6 col-md-6 col-sm-12 order-3">
              <div class="inner-column">
                <div class="title">
                  <div class="icon"><img src='/src/assets/images/icons/icon-devider-gray.png' alt=""></div>
                  <h4>Our Contacts</h4>
                </div>

                <ul class="contact-info">
                  <li>785 Carriage Drive, Jacksonville Beach, FL</li>
                  <li><a href="tel:12032842818">+1 203-284-2818</a><br><a href="tel:12032842919">+1 203-284-2919</a></li>
                  <li><a href="mailto:info@your-site.com">info@your-site.com</a><br> <a href="mailto:sales@your-site.com">sales@your-site.com</a></li>
                </ul>
              </div>
            </div>

            <!-- Form Column -->
            <div class="column col-xl-6 col-lg-12 col-md-12 col-sm-12">
              <div class="inner-column">
                <div class="title">
                  <div class="icon"><img src='/src/assets/images/icons/icon-devider-gray.png' alt=""></div>
                  <h4>Send Message</h4>
                </div>
                <div class="contact-form">
                  <form action="#" method="post" id="email-form">

                    <div class="form-group">
                      <div class="response"></div>
                    </div>

                    <div class="form-group">
                      <input type="text" name="username" class="username" placeholder="Your Name *">
                    </div>

                    <div class="form-group">
                      <input type="email" name="email" class="email" placeholder="Your Email *">
                    </div>

                    <div class="form-group">
                      <textarea name="contact_message" placeholder="Text Message"></textarea>
                    </div>

                    <div class="form-group">
                      <button class="theme-btn" type="button" id="submit" name="submit-form">Send</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--End Contact Section -->

      <!-- Map Section -->
      <section class="map-section portfolio-masonry">
        <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=university%20of%20san%20francisco&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe>
      </section>
      <!-- End Map Section -->

      <Footer/>
    </div><!-- End Page Wrapper -->

    <ScrollTop/>
  </main>
</template>

<style>
@import url('/css/bootstrap.css');
@import url('/css/style.css');
@import url('/css/responsive.css');
</style>
