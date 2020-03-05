<template>
  <section class="features" id="features-scroll">
    <h2>
      {{ $t('home.video_title') }}
    </h2>
    <p class="subtitle">
      {{ $t('home.video_sub_title') }}
    </p>

    <d-embed type="iframe" aspect="16by9" src="https://www.youtube.com/embed/hXL3dhTdX9k" allowfullscreen />

  </section>
</template>

<script>
export default {
  data: () => ({
  })
}
</script>

<style lang="scss" scoped>
.features {
    margin: 20px 35px;
    text-align: center;

    .box {
        display: inline-block;
    
        @media only screen and (min-width: 768px) {
            padding: 20px 30px;
        }
    
        @media only screen and (min-width: 1150px) {
            padding: 20px 10px;
        }
    
        @media only screen and (min-width: 1300px) {
            padding: 20px 25px;
        }
    
        &-icon {
            margin-top: 50px;
            padding: 20px;
            display: inline-block;
            border-radius: 50%;
            background-image: -webkit-linear-gradient(55deg, var(--blue) 0%, var(--green));
            -webkit-animation: colorchange 5s linear infinite;
            animation: colorchange 5s linear infinite;
            -webkit-transition: all 0.3 ease-in;
            -o-transition: all 0.3 ease-in;
            transition: all 0.3 ease-in;
        }
    
        &-content {
    
            p {
                max-width: 350px;
                text-align: center;
                line-height: 150%;
                
                @media only screen and (min-width: 768px) {
                    max-width: 280px;
                }
    
                @media only screen and (min-width: 1024px) {
                    max-width: 350px;
                }
    
                @media only screen and (min-width: 1150px) {
                    max-width: 240px;
                }
                @media only screen and (min-width: 1300px) {
                    max-width: 250px;
                }
            }
        }
    
        img {
            margin: 0;
            height: 50px;
        }
    
    }

    .border-bottom {
        border-bottom: 1px solid var(--grey);
        margin: 50px;
    }
}
</style>
