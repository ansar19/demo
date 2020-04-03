<template>
  <d-container fluid class="main-content-container px-0 mt-0 mx-0 my-0">
    <Hero />
    <!-- Our Blog Section -->
    <div class="blog section section-invert py-4">
      <h3 class="section-title text-center m-5">{{ $t('home.steps_title') }}</h3>

      <div class="my-5">
        <div class="row mb-4 ml-4 mr-4">
          <div class="card-deck">
            <d-col cols="12" md="4" lg="4">
              <div class="card">
                <img class="card-img-top" src="@/assets/inventory.jpg" alt="Быстрая инвентаризация" />
                <div class="card-body">
                  <h4 class="card-title">{{ $t('home.card1_title') }}</h4>
                  <p class="card-text">{{ $t('home.card1_text') }}</p>
                </div>
              </div>
            </d-col>

            <d-col cols="12" md="4" lg="4">
              <div class="card">
                <img class="card-img-top" src="@/assets/responsible.jpg" alt="Система напоминаний" />
                <div class="card-body">
                  <h4 class="card-title">{{ $t('home.card2_title') }}</h4>
                  <p class="card-text">{{ $t('home.card2_text') }}</p>
                </div>
              </div>
            </d-col>

            <d-col cols="12" md="4" lg="4">
              <div class="card">
                <img class="card-img-top" src="@/assets/reports.jpg" alt="Автоматические отчеты" />
                <div class="card-body">
                  <h4 class="card-title">{{ $t('home.card3_title') }}</h4>
                  <p class="card-text">{{ $t('home.card3_text') }}</p>
                </div>
              </div>
            </d-col>
          </div>
        </div>
      </div>
    </div>

    <Features />
    <!-- / Our Blog Section -->
    <section class="features white-bg" id="features-scroll">
      <div class="section m-5">
        <h2 class="text-center">{{ $t('home.calc_example_title') }}</h2>
        <p class="subtitle text-center">{{ $t('home.calc_example_text1') }}</p>
        <p class="subtitle text-center">{{ $t('home.calc_example_text2') }}</p>
        <p class="subtitle text-center">{{ $t('home.calc_example_text3') }}</p>
      </div>

      <d-container class="container text-center">
        <d-row>
          <d-col>
            <div>
              <d-btn
                v-d-toggle.my-collapse
                outline
                variant="primary"
              >{{ $t('home.buttons.calc_example_btn') }}</d-btn>
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

import Features from "@/components/Features.vue";
import Usability from "@/components/Usability.vue";
import Services from "@/components/Services.vue";
import Hero from "@/components/Hero.vue";
import Cards from "@/components/Cards.vue";

import GhgCalc from "@/components/GhgCalc.vue";

export default {
  name: "Home",
  components: {
    Features,
    Usability,
    Services,
    Hero,
    Cards,
    GhgCalc
    // HelloWorld
  }
};
</script>

<style scoped>
.features {
  padding: 100px 0 130px 0;
}

.white-bg {
  background: #fff;
}
</style>