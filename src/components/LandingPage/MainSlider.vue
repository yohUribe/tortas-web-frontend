<script setup lang='ts'>
import { ref } from 'vue'

const sliders = ref([{
  title: 'Home Cakes',
  url: '/src/assets/images/main-slider/1.jpg'
}, {
  title: 'Home Cakes',
  url: '/src/assets/images/main-slider/2.jpg'
}, {
  title: 'Home Cakes',
  url: '/src/assets/images/main-slider/3.jpg'
}
])

</script>

<template>
  <!--Main Slider-->
  <section class='main-slider'>
    <div class='slider_wave'></div>
    <div class='rev_slider_wrapper fullwidthbanner-container' id='rev_slider_one_wrapper' data-source='gallery'>
      <div class='rev_slider fullwidthabanner' id='rev_slider_one' data-version='5.4.1'>
        <ul>
          <li :data-index='`rs-${index}`' data-transition='zoomout' data-slotamount='default' data-hideafterloop='0'
              data-hideslideonmobile='off' data-easein='default' data-easeout='default' data-masterspeed='850'
              data-thumb='#' data-delay='5999' data-rotate='0' data-saveperformance='off' data-title='Slide'
              data-param1='' data-param2='' data-param3='' data-param4='' data-param5='' data-param6=''
              data-param7='' data-param8='' data-param9='' data-param10='' data-description=''
              v-for='(slider, index) in sliders' :key='index'>

            <!-- MAIN IMAGE -->
            <img :src=slider.url alt='' :title=slider.title data-bgposition='center center'
                 data-bgfit='cover' data-bgrepeat='no-repeat' class='rev-slidebg' data-no-retina>
            <!-- LAYERS -->

            <!-- LAYER NR. 1 -->
            <div class='tp-caption tp-shape tp-shapewrapper  tp-resizeme'
                 :id='`slide-${index}-layer-44`'
                 data-x='center' data-hoffset='1'
                 data-y='center' data-voffset='-3'
                 data-width="['full','full','full','full']"
                 data-height="['full','full','full','full']"
                 data-type='shape'
                 data-basealign='slide'
                 data-responsive_offset='on'
                 data-frames='[{"delay":10,"speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                 data-textAlign="['inherit','inherit','inherit','inherit']"
                 data-paddingtop='[0,0,0,0]'
                 data-paddingright='[0,0,0,0]'
                 data-paddingbottom='[0,0,0,0]'
                 data-paddingleft='[0,0,0,0]'
                 style='z-index: 5;background-color:rgba(80,81,92,0.15);'></div>

            <!-- LAYER NR. 2 -->
            <div class='tp-caption   tp-resizeme'
                 :id='`slide-${index}-layer-40`'
                 data-x='center' data-hoffset=''
                 data-y='center' data-voffset=''
                 data-width="['none','none','none','none']"
                 data-height="['none','none','none','none']"
                 data-type='image'
                 data-responsive_offset='on'
                 data-frames='[{"delay":500,"speed":1000,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                 data-textAlign="['inherit','inherit','inherit','inherit']"
                 data-paddingtop='[0,0,0,0]'
                 data-paddingright='[0,0,0,0]'
                 data-paddingbottom='[0,0,0,0]'
                 data-paddingleft='[0,0,0,0]'
                 style='z-index: 6;'><img src='@/assets/images/main-slider/slider_bg_1.png' alt='' data-ww='654px'
                                          data-hh='654px' width='654' height='654' data-no-retina></div>

            <!-- LAYER NR. 3 -->
            <div class='tp-caption   tp-resizeme'
                 :id='`slide-${index}-layer-33`'
                 data-x='center' data-hoffset=''
                 data-y='center' data-voffset='100'
                 data-width="['auto']"
                 data-height="['auto']"
                 data-visibility="['on','on','off','off']"
                 data-type='text'
                 data-responsive_offset='on'
                 data-frames='[{"delay":500,"speed":1000,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"nothing"}]'
                 data-textAlign="['center','center','center','center']"
                 data-paddingtop='[0,0,0,0]'
                 data-paddingright='[0,0,0,0]'
                 data-paddingbottom='[0,0,0,0]'
                 data-paddingleft='[0,0,0,0]'
                 style='z-index: 7; white-space: nowrap; font-size: 20px; line-height: 24px; font-weight: 400; color: #4b4342;font-family:ABeeZee;'>
              Endulzando momentos,<br> creando memorias
            </div>

            <!-- LAYER NR. 4 -->
            <div class='tp-caption   tp-resizeme'
                 :id='`slide-${index}-layer-31`'
                 data-x='center' data-hoffset=''
                 data-y='center' data-voffset='-18'
                 data-width="['399']"
                 data-height="['auto']"
                 data-type='text'
                 data-responsive_offset='on'
                 data-frames='[{"delay":500,"speed":1000,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"nothing"}]'
                 data-textAlign="['center','center','center','center']"
                 data-paddingtop='[0,0,0,0]'
                 data-paddingright='[0,0,0,0]'
                 data-paddingbottom='[0,0,0,0]'
                 data-paddingleft='[0,0,0,0]'
                 style='z-index: 8; min-width: 399px; max-width: 399px; white-space: normal; font-size: 72px; line-height: 72px; font-weight: 400; color: #4b4342;font-family:Leckerli One;'>
              Bienvenido <br>a DolceVita
            </div>

            <!-- LAYER NR. 5 -->
            <div class='tp-caption   tp-resizeme'
                 :id='`slide-${index}-layer-41`'
                 data-x='center' data-hoffset=''
                 data-y='center' data-voffset='-150'
                 data-width="['none','none','none','none']"
                 data-height="['none','none','none','none']"
                 data-type='image'
                 data-responsive_offset='on'
                 data-frames='[{"delay":500,"speed":1000,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                 data-textAlign="['inherit','inherit','inherit','inherit']"
                 data-paddingtop='[0,0,0,0]'
                 data-paddingright='[0,0,0,0]'
                 data-paddingbottom='[0,0,0,0]'
                 data-paddingleft='[0,0,0,0]'
                 style='z-index: 9;'><img src='@/assets/images/main-slider/slider_bg_4.png' alt='' data-ww='125px'
                                          data-hh='60px' width='125' height='60' data-no-retina></div>

            <!-- LAYER NR. 6 -->
            <div class='tp-caption tp-resizeme hide-sm'
                 :id='`slide-${index}-layer-42`'
                 data-x='398'
                 data-y='center' data-voffset=''
                 data-width="['none','none','none','none']"
                 data-height="['none','none','none','none']"
                 data-type='image'
                 data-responsive_offset='on'
                 data-frames='[{"delay":500,"speed":1000,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                 data-textAlign="['inherit','inherit','inherit','inherit']"
                 data-paddingtop='[0,0,0,0]'
                 data-paddingright='[0,0,0,0]'
                 data-paddingbottom='[0,0,0,0]'
                 data-paddingleft='[0,0,0,0]'
                 style='z-index: 10;'><img src='@/assets/images/main-slider/slider_bg_3.png' alt='' data-ww='196px'
                                           data-hh='107px' width='196' height='107' data-no-retina></div>

            <!-- LAYER NR. 7 -->
            <div class='tp-caption tp-resizeme hide-sm'
                 :id='`slide-${index}-layer-43`'
                 data-x='1325'
                 data-y='center' data-voffset=''
                 data-width="['none','none','none','none']"
                 data-height="['none','none','none','none']"
                 data-type='image'
                 data-responsive_offset='on'
                 data-frames='[{"delay":500,"speed":1000,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                 data-textAlign="['inherit','inherit','inherit','inherit']"
                 data-paddingtop='[0,0,0,0]'
                 data-paddingright='[0,0,0,0]'
                 data-paddingbottom='[0,0,0,0]'
                 data-paddingleft='[0,0,0,0]'
                 style='z-index: 11;'><img src='@/assets/images/main-slider/slider_bg_2.png' alt='' data-ww='196px'
                                           data-hh='107px' width='196' height='107' data-no-retina></div>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <!--End Main Slider-->
</template>

<style scoped>
</style>
