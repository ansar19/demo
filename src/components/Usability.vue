<template>
    <section class="usability bg-white" id="usability-scroll">

        <h2>
            {{ $t('home.facts_title') }}
        </h2>

        <div class="stats" v-for="(item, index) in factsList" :key="index">

            <div class="container">
                <img :src="item.svg">
                <div class="stats-content">
                    <span>
                        {{ item.title}}
                    </span>
                    <p>
                        {{ item.text}}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import factsList from '@/locales/ru.json' 


export default {
  data: () => ({
      factsList: factsList.home.facts,
  }),
  computed: {
    items() {
      return factsList.home.facts.map((item) => {
        return [
          item.title,
          item.text
        ]
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.usability {
    // margin: 40px;
    padding: 100px 0 130px 0;
    // text-align: center;

    .white-bg {
    background: #fff;
}

    &-video {
        position: relative;
        margin: 20px 0;

        img {
            height: auto;
            max-width: 100%;
            border-radius: 20px;

            @media only screen and (min-width: 768px) {
                max-width: 720px;
            }
        }

        svg {
            position:absolute;
            top: 20%;
            left: 50%;
            -webkit-transform: translateX(-50%);
            -ms-transform: translateX(-50%);
            transform: translateX(-50%);
            fill: var(--primary-dark);
            stroke: var(--primary-dark);
            padding: 20px;
        
            @media only screen and (min-width: 375px) {
                top: 40%;
            }
        
            @media only screen and (min-width: 545px) {
                top: 35%;
                padding: 10px;
            }
        
            @media only screen and (min-width: 768px) {
                top: 40%;
                padding: 0;
            }
        }
    }

    .stats {
        display: inline-block;
        margin: 30px 60px;
    
        @media only screen and (min-width:650px) {
            margin: 30px 40px;
        }
    
        @media only screen and (min-width:809px) {
            margin: 30px 50px;
        }
        
        @media only screen and (min-width:950px) {
            margin: 30px 13px;
        }  
        
        @media only screen and (min-width: 1024px) {
            margin: 30px 22px;
        }  
        
        @media only screen and (min-width: 1150px) {
            margin: 30px 35px;
        }    
    
        @media only screen and (min-width: 1300px) {
            margin: 30px 50px;
        }    
    
        .container {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
    
            img {
                margin: 0;
                height: 55px;
            }
        }
    
        &-content {
            text-align: left;
            margin: 0 20px;
    
            span {
                font-size: 35px;
            }
    
            p {
                margin-left: 2px;
                font-weight: 300;
                color: var(--grey-dark);
            }
        }
    }

}

</style>