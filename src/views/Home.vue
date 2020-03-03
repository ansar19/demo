<template>

  <d-container fluid class="main-content-container px-0 mt-0">
    <Hero />
    <!-- Inner Wrapper -->
    <!-- <div class="inner-wrapper mt-auto mb-auto container">
          <div class="row">
            <div class="col-md-7">
                <h1 class="welcome-heading display-4 text-white">Платформа ЭкоМарин</h1>
                <p class="text-white">Автоматизация расчетов выбросов загрязняющих веществ любых производств.</p>
                <a href="#our-services" class="btn btn-lg btn-outline-white btn-pill align-self-center">Learn More</a>
            </div>
          </div>
        </div> -->
    <!-- / Inner Wrapper -->



    <!-- Our Blog Section -->
    <div class="blog section section-invert py-4">
      <h3 class="section-title text-center m-5">Как в три шага автоматизировать процесс управления выбросами
        предприятия?</h3>

      <div class="container">
        <div class="py-4">
          <div class="row">
            <div class="card-deck">
              <div class="col-md-12 col-lg-4">
                <div class="card mb-4">
                  <img class="card-img-top" src="http://promo.ecomarine.kz/assets/images/mbr-1547x1080.jpg"
                    alt="Card image cap">
                  <div class="card-body">
                    <h4 class="card-title">Проведите инвентаризацию</h4>
                    <p class="card-text">Зарегистрируйтесь в системе "ЭкоМарин" и проведите инвентаризацию источников
                      выбросов находясь рядом с оборудованием или получив данные из проектной документации.
                      Укажите методику расчета выбросов на каждый источник будь то оборудование или процесс и иные
                      характеристики по желанию. </p>
                    <a class="btn btn-primary btn-pill" href="#">Read More &rarr;</a>
                  </div>
                </div>
              </div>

              <div class="col-md-12 col-lg-4">
                <div class="card mb-4">
                  <img class="card-img-top" src="http://promo.ecomarine.kz/assets/images/02.jpg" alt="Card image cap">
                  <div class="card-body">
                    <h4 class="card-title">Назначьте ответственных лиц</h4>
                    <p class="card-text">Назначьте ответственных лиц за предоставление периодических данных и укажите
                      периодичность (ежемесячно или ежеквартально).
                      Ответственный сотрудник получит уведомление на электронную почту и будет заполнять только
                      необходимый минимум данных (расход материалов, количество часов работы).
                      Если вы работаете в небольшой компании, вы можете назначить даже самого себя в качестве
                      ответственного за предоставление данных. </p>
                    <a class="btn btn-primary btn-pill" href="#">Read More &rarr;</a>
                  </div>
                </div>
              </div>

              <div class="col-md-12 col-lg-4">
                <div class="card mb-4">
                  <img class="card-img-top"
                    src="http://promo.ecomarine.kz/assets/images/william-iven-22449-4288x2848.jpg" alt="Card image cap">
                  <div class="card-body">
                    <h4 class="card-title">Получайте автоматические отчеты</h4>
                    <p class="card-text">Как только ответственные лица заполнят периодические данные – “ЭкоМарин”
                      автоматический рассчитает и сформирует отчеты в налоговый комитет, департамент статистики,
                      подготовит отчет акционерам и т.д.
                      Вы также можете передать рассчитанные данные вашим проектировщикам для ускорения сроков
                      проектирования. </p>
                    <a class="btn btn-primary btn-pill" href="#">Read More &rarr;</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- / Our Blog Section -->

    <Features />

    <Usability />

    <Services />

    <Cards />

    <!-- Our Services Section -->
    <div id="our-services" class="our-services section py-4">
      <h3 class="section-title text-center my-5">Our Services</h3>
      <!-- Features -->
      <div class="features py-4 mb-4">
        <div class="container">
          <div class="row">
            <div class="feature py-4 col-md-6 d-flex">
              <div class="icon text-primary mr-3"><i class="fa fa-paint-brush"></i></div>
              <div class="px-4">
                <h5>Design & Branding</h5>
                <p>Quisque mollis mi ac aliquet accumsan. Sed sed dapibus libero. Nullam luctus purus duis sensibus
                  signiferumque.</p>
              </div>
            </div>
            <div class="feature py-4 col-md-6 d-flex">
              <div class="icon text-primary mr-3"><i class="fa fa-code"></i></div>
              <div class="px-4">
                <h5>Programming</h5>
                <p>Quisque mollis mi ac aliquet accumsan. Sed sed dapibus libero. Nullam luctus purus duis sensibus
                  signiferumque.</p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="feature py-4 col-md-6 d-flex">
              <div class="icon text-primary mr-3"><i class="fa fa-font"></i></div>
              <div class="px-4">
                <h5>Copywriting</h5>
                <p>Quisque mollis mi ac aliquet accumsan. Sed sed dapibus libero. Nullam luctus purus duis sensibus
                  signiferumque.</p>
              </div>
            </div>
            <div class="feature py-4 col-md-6 d-flex">
              <div class="icon text-primary mr-3"><i class="fa fa-support"></i></div>
              <div class="px-4">
                <h5>Training & Support</h5>
                <p>Quisque mollis mi ac aliquet accumsan. Sed sed dapibus libero. Nullam luctus purus duis sensibus
                  signiferumque.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- / Features -->
    </div>
    <!-- / Our Services Section -->

  </d-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import Features  from '@/components/Features.vue'
import Usability  from '@/components/Usability.vue'
import Services from '@/components/Services.vue'
import Hero from '@/components/Hero.vue'
import Cards from '@/components/Cards.vue'


export default {
  name: 'Home',
  components: {
    Features,
    Usability,
    Services,
    Hero,
    Cards
    // HelloWorld
  }
}
</script>

