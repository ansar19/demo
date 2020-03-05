<template>
  <d-container fluid class="blog section section-invert py-4">
    <h3 class="section-title text-center my-5">
      {{ $t('home.benefits_title') }}
    </h3>
    <d-row>
      <d-col v-for="(item, id) in myCardList" :key="id" lg="3" md="6" sm="12" class="mb-4">
        <d-card class="card-small card-post h-10">
          <d-card-body>
            <h5 class="card-title">
              <i class="material-icons">
                {{ item.icon }}
              </i><br>
              <p class="text-fiord-blue">
                {{ item.benefit_card_title }}
              </p>
            </h5>
            <p class="card-text">
              {{ item.benefit_card_text }}
            </p>
          </d-card-body>
        </d-card>
      </d-col>
    </d-row>
  </d-container>
</template>

<script>
import cardList from '@/locales/ru.json' 

export default {
  data() {
    return {
      myCardList: cardList.home.benefits_cards
    };
  },
  computed: {
    items() {
      return cardList.home.benefits_cards.map((item) => {
        return [
          item.icon,
          item.benefit_card_title,
          item.benefit_card_text,
        ]
      })
    }
  }
};
</script>