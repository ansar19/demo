<template>
  <d-container fluid class="main-content-container section1 px-4 py-4">
    <d-row class="mb-4">
      <d-col cols="12" md="3" lg="2"></d-col>
      <d-col cols="12" md="6" lg="8">
        <d-card class="card-small card-post">
          <d-card-header class="border-bottom">
            <h5 class="card-title">{{ $t('home.write_us_title') }}</h5>
          </d-card-header>
          <d-card-body>
            <p class="card-text d-inline-block mb-3">{{ $t('home.write_us_text') }}</p>
            <form>
              <d-button ouline>
                <a
                  class="text-white"
                  :href="`mailto:info@ecomarine.kz`"
                >{{ $t('renderer.buttons.emailus') }}</a>
              </d-button>
            </form>
          </d-card-body>
        </d-card>
      </d-col>
      <d-col cols="12" md="3" lg="2"></d-col>
    </d-row>
  </d-container>
</template>

<script>
export default {
  data: () => ({})
};
</script>

<style lang="scss" scoped>
.section1 {
  //   padding: 100px 0 130px 0;
  background: #efefef;
}

.services {
  padding: 40px 0;
  text-align: center;
  color: var(--white);
  background: -webkit-linear-gradient(
    left,
    var(--primary-dark),
    var(--primary)
  );
  background: linear-gradient(to right, var(--primary-dark), var(--primary));

  @media only screen and (min-width: 768px) {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: (1fr) [10];
    grid-template-columns: repeat(10, 1fr);
    grid-gap: 0;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-grid-row-align: center;
    align-items: center;
  }

  .main-content {
    -ms-grid-column-span: 4;
    -ms-grid-column: 4;
    grid-column: 4 / span 4;
    -ms-grid-row-span: 2;
    -ms-grid-row: 1;
    grid-row: 1 / span 2;

    @media only screen and (min-width: 820px) {
      -ms-grid-column-span: 8;
      -ms-grid-column: 2;
      grid-column: 2 / span 8;
    }
  }

  img {
    display: none;

    @media only screen and (min-width: 768px) {
      display: inline;
      height: 250px;
    }

    @media only screen and (min-width: 900px) {
      height: 300px;
    }

    @media only screen and (min-width: 1300px) {
      height: 350px;
    }
  }

  .subtitle {
    margin-bottom: 40px;
    color: var(--white);
  }

  &-image {
    -ms-grid-column-span: 2;
    -ms-grid-column: 1;
    grid-column: 1 / span 2;
    -ms-grid-row-span: 10;
    -ms-grid-row: 5;
    grid-row: 5 / span 10;
    -webkit-animation: MoveUpDown 1.8s linear infinite;
    animation: MoveUpDown 1.8s linear infinite;
    position: relative;

    @media only screen and (min-width: 820px) {
      -ms-grid-column-span: 1;
      -ms-grid-column: 2;
      grid-column: 2 / span 1;
    }
  }
}

.services-box {
  margin: 20px;
  padding: 20px;
  display: inline-block;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-align: left;
  -webkit-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;

  @media only screen and (min-width: 768px) {
    margin: 10px;
    padding: 10px;
    -ms-grid-column-span: 6;
    -ms-grid-column: 5;
    grid-column: 5 / span 6;
    -ms-grid-row-span: 2;
    -ms-grid-row: 6;
    grid-row: 6 / span 2;
  }

  @media only screen and (min-width: 820px) {
    -ms-grid-column-span: 7;
    -ms-grid-column: 4;
    grid-column: 4 / span 7;
  }

  @media only screen and (min-width: 980px) {
    -ms-grid-column-span: 6;
    -ms-grid-column: 4;
    grid-column: 4 / span 6;
  }

  .container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  &-icon {
    padding: 20px;
    display: inline-block;
    border-radius: 50px;
    background: -webkit-linear-gradient(55deg, var(--primary) 0%, var(--green));

    img {
      height: 45px;
      margin: 0;
      display: inline-block;
    }
  }

  &-content {
    padding: 0 20px;

    h4 {
      margin: 0 0 10px 0;
    }
  }

  &:hover {
    border: 1px solid var(--white);
  }
}

// Media Queries for the other three service boxes
.services-box-0 {
  @media only screen and (min-width: 768px) {
    -ms-grid-column-span: 6;
    -ms-grid-column: 5;
    grid-column: 5 / span 6;
    -ms-grid-row-span: 2;
    -ms-grid-row: 8;
    grid-row: 8 / span 2;
  }

  @media only screen and (min-width: 820px) {
    -ms-grid-column-span: 7;
    -ms-grid-column: 4;
    grid-column: 4 / span 7;
  }

  @media only screen and (min-width: 980px) {
    -ms-grid-column-span: 6;
    -ms-grid-column: 4;
    grid-column: 4 / span 6;
  }
}

.services-box-1 {
  @media only screen and (min-width: 768px) {
    -ms-grid-column-span: 6;
    -ms-grid-column: 5;
    grid-column: 5 / span 6;
    -ms-grid-row-span: 2;
    -ms-grid-row: 10;
    grid-row: 10 / span 2;
  }

  @media only screen and (min-width: 820px) {
    -ms-grid-column-span: 7;
    -ms-grid-column: 4;
    grid-column: 4 / span 7;
  }

  @media only screen and (min-width: 980px) {
    -ms-grid-column-span: 6;
    -ms-grid-column: 4;
    grid-column: 4 / span 6;
  }
}

.services-box-2 {
  @media only screen and (min-width: 768px) {
    -ms-grid-column-span: 6;
    -ms-grid-column: 5;
    grid-column: 5 / span 6;
    -ms-grid-row-span: 1;
    -ms-grid-row: 12;
    grid-row: 12 / span 1;
  }

  @media only screen and (min-width: 820px) {
    -ms-grid-column-span: 7;
    -ms-grid-column: 4;
    grid-column: 4 / span 7;
  }

  @media only screen and (min-width: 980px) {
    -ms-grid-column-span: 6;
    -ms-grid-column: 4;
    grid-column: 4 / span 6;
  }
}
</style>