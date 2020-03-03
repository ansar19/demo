<template>

  <d-container fluid class="main-content-container px-0 mt-0">
    <Hero />
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Features />
    <!-- / Our Blog Section -->
    <section class="features" id="features-scroll">
    <h2>Пример расчета</h2>
    <p class="subtitle">Конструктор расчетов ЭкоМарин позволяет очень легко и быстро реализовывать существующие методики расчетов любого вида.</p>
    <p class="subtitle">Вы можете создавать любые расчеты, как например: расчет выбросов загрязняющих веществ в атмосферу, расчет выбросов парниковых газов, расчет образования отходов и т.д.</p>

    <p class="subtitle">Ниже вы можете ознакомится с примером расчета выбросов парниковых газов, просто заполните необходимые поля и вы сразу получите результат.</p>

    <d-container class="dr-example-container">
      <d-row>
        <d-col>
          <div>
            <d-btn v-d-toggle.my-collapse outline variant="primary">Посмотреть пример расчета выбросов парниковых газов</d-btn>
            <d-collapse id="my-collapse">
              <div class="p-3 mt-3 border rounded">
                <GhgCalc />
              </div>
            </d-collapse>
          </div>
        </d-col>
      </d-row>
    </d-container>

    </section>

    <Cards />

    <Usability />

    <Services />

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

import GhgCalc from '@/components/GhgCalc.vue'


export default {
  name: 'Home',
  components: {
    Features,
    Usability,
    Services,
    Hero,
    Cards,
    GhgCalc
    // HelloWorld
  }
}
</script>

