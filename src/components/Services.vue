<template>
    <d-container fluid class="main-content-container ml-2 mr-2 section1">

        <!-- Second Row of Posts -->
        <!-- <d-row>
            <d-col v-for="(post, idx) in PostsListTwo" :key="idx" lg="6" sm="12" class="mb-4">
                <d-card class="card-small card-post card-post--aside card-post--1">
                    <div class="card-post__image" :style="{ backgroundImage: 'url(\'' + post.backgroundImage + '\')' }">
                        <d-badge pill :class="['card-post__category', 'bg-' + post.categoryTheme ]">{{ post.category }}
                        </d-badge>
                    </div>
                    <d-card-body>
                        <h5 class="card-title">
                            <a class="text-fiord-blue" href="#">{{ post.title }}</a>
                        </h5>
                        <p class="card-text d-inline-block mb-3">{{ post.body }}</p>
                        <span class="text-muted">{{ post.date }}</span>
                    </d-card-body>
                </d-card>
            </d-col>
        </d-row> -->

        <d-row class="mb-4">
            <d-col cols="12" md="3" lg="2"></d-col>
            <d-col cols="12" md="6" lg="8">
                <d-card class="card-small card-post">
                    <d-card-header class="border-bottom">
                        <h5 class="card-title">
                            Напишите нам если вас заинтересовал наш продукт
                        </h5>
                    </d-card-header>
                    <d-card-body>

                        <p class="card-text d-inline-block mb-3">на основе нашей разработки мы можем реализовать в
                            сжатые сроки любые системы управления в области охраны труда, промышленной безопасности,
                            охраны здоровья, охраны окружающей среды и устойчивого развития</p>
                        <form>
                            <d-button ouline>
                                <a class="text-white" :href="`mailto:info@ecomarine.kz`">Связатся с нами</a>
                            </d-button>
                        </form>
                    </d-card-body>
                </d-card>
            </d-col>
            <d-col cols="12" md="3" lg="2"></d-col>
        </d-row>

        <!-- <section class="services">
        <div class="main-content">
            <h2>Services</h2>
            <p class="subtitle">Meeting your needs</p>
        </div>

        <div class="services-image">
        <img src="images/phone2.png" alt="Image of two white mobile phones stack above each other showing different parts of the app.">
        </div>

        <div :class="'services-box services-box-' + serviceIndex" v-for="(service, serviceIndex) in services" :key="'service' + serviceIndex">
            <div class="container">
                <div class="services-box-icon">
                    <img :src="service.svg">
                </div>
                <div class="services-box-content">
                    <h4>{{ service.title }}</h4>
                    <p>{{ service.description }}</p>
                </div>
            </div>
        </div>

    </section> -->

    </d-container>
</template>

<script>
// Second Row of posts
const PostsListTwo = [{
  backgroundImage: require('@/assets/responsible.jpg'),
  category: 'Travel',
  categoryTheme: 'info',
  author: 'Anna Ken',
  authorAvatar: require('@/assets/reports.jpg'),
  title: 'Attention he extremity unwilling on otherwise cars backwards yet',
  body: 'Conviction up partiality as delightful is discovered. Yet jennings resolved disposed exertion you off. Left did fond drew fat head poor jet pan flying over...',
  date: '29 February 2019',
}, {
  backgroundImage: require('@/assets/inventory.jpg'),
  category: 'Business',
  categoryTheme: 'dark',
  author: 'John James',
  authorAvatar: require('@/assets/logo.png'),
  title: 'Totally words widow one downs few age every seven if miss part by fact',
  body: 'Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education to admitted speaking...',
  date: '29 February 2019',
}];

export default {
  data: () => ({
    PostsListTwo,
    services: [
      {
        svg: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512.001 512.001' fill='%23FFF'%3E%3Cpath d='M268.662 243.351a10 10 0 0 0-14.15 0c-3.9 3.9-3.9 10.23 0 14.14 3.91 3.9 10.24 3.9 14.15 0 3.9-3.91 3.9-10.24 0-14.14zM395.933 116.07c-19.54-19.539-51.172-19.54-70.713 0-19.489 19.489-19.49 51.209.003 70.714 19.496 19.484 51.216 19.492 70.71-.002 19.538-19.538 19.542-51.171 0-70.712zm-14.142 56.569c-11.693 11.694-30.727 11.694-42.426.002-11.695-11.702-11.696-30.736-.002-42.429 11.723-11.723 30.703-11.725 42.428 0 11.723 11.722 11.725 30.703 0 42.427z'/%3E%3Cpath d='M509.07 2.929a9.965 9.965 0 0 0-7.43-2.922c-2.261.081-56.096 2.245-120.091 24.864-51.28 18.106-94.023 44.029-127.042 77.049a380.537 380.537 0 0 0-21.488 23.396c-32.648-19.218-58.81-13.192-75.349-4.341-38.081 20.38-61.652 75.716-61.652 115.296a10.007 10.007 0 0 0 10.001 10 10 10 0 0 0 7.073-2.929c20.083-20.083 44.854-18.827 52.946-17.763l3.502 3.502c-6.892 16.4-12.444 32.708-16.516 48.569-1.47 5.74-.974 11.814 1.211 17.37-9.628 4.437-18.917 10.952-27.005 19.04-25.741 25.742-30.968 88.476-31.178 91.134a10 10 0 0 0 10.755 10.756c2.658-.209 65.394-5.436 91.135-31.177 8.085-8.085 14.599-17.373 19.036-26.999 5.882 2.313 11.936 2.598 17.38 1.203 15.854-4.071 32.16-9.621 48.562-16.514l3.502 3.502c1.063 8.093 2.319 32.864-17.763 52.945a10 10 0 0 0 7.071 17.07c39.58 0 94.915-23.571 115.295-61.652 8.851-16.537 14.877-42.699-4.341-75.348a380.674 380.674 0 0 0 23.396-21.488c33.02-33.02 58.942-75.763 77.048-127.039 22.62-63.998 24.783-117.834 24.864-120.094.1-2.775-.959-5.466-2.922-7.43zM118.376 214.762c6.212-30.063 24.255-63.052 48.735-76.154 16.359-8.754 34.24-7.896 53.252 2.511a404.33 404.33 0 0 0-42.015 68.487c-.149-.092-1.949-2.355-5.293-3.109-1.375-.311-27.834-6.002-54.679 8.265zM183.8 370.63c-13.75 13.75-46.005 21.002-66.392 23.963 2.962-20.388 10.215-52.642 23.964-66.391 7.7-7.7 16.628-13.538 25.602-16.826l33.652 33.652c-3.288 8.974-9.125 17.902-16.826 25.602zm45.59-31.027c-2.894.741-6.246-.347-8.738-2.835l-19.586-19.585-25.826-25.827c-2.494-2.499-3.582-5.85-2.843-8.739 3.203-12.474 7.392-25.272 12.486-38.193l82.695 82.695c-12.923 5.095-25.719 9.283-38.188 12.484zm144.004 5.288c-13.102 24.479-46.09 42.523-76.152 48.734 9.585-18.037 11.698-40.998 8.196-54.921-.813-3.234-2.923-4.86-3.041-5.051a404.48 404.48 0 0 0 68.486-42.015c10.407 19.014 11.264 36.897 2.511 53.253zM395.94 243.35a362.965 362.965 0 0 1-28.84 25.872c-24.342 19.6-51.134 36.202-79.718 49.418l-94.02-94.018c13.216-28.586 29.818-55.378 49.416-79.717 8.164-10.133 16.868-19.837 25.875-28.843 29.625-29.626 67.859-53.204 113.671-70.176l83.792 83.792c-16.97 45.811-40.548 84.045-70.176 113.672zm77.371-134.763l-69.896-69.896c38.081-11.828 71.21-16.257 87.746-17.849-1.593 16.539-6.023 49.668-17.85 87.745z'/%3E%3Cpath d='M240.371 413.049c-3.907-3.905-10.239-3.903-14.143.002l-28.28 28.29c-3.904 3.906-3.903 10.238.002 14.142 3.907 3.904 10.239 3.904 14.143-.002l28.28-28.29c3.904-3.906 3.903-10.238-.002-14.142zM98.954 271.631c-3.904-3.906-10.235-3.906-14.142-.002l-28.29 28.28c-3.906 3.904-3.907 10.236-.003 14.142 3.903 3.904 10.234 3.908 14.142.002l28.29-28.28c3.906-3.904 3.907-10.236.003-14.142zM169.663 427.2c-3.903-3.905-10.236-3.905-14.142-.001l-67.74 67.73c-3.906 3.905-3.906 10.237-.001 14.142 3.903 3.905 10.236 3.907 14.142.001l67.74-67.73c3.906-3.905 3.906-10.237.001-14.142zM89.663 427.2c-3.904-3.905-10.237-3.905-14.142-.001l-67.74 67.73c-3.906 3.905-3.906 10.237-.001 14.142 3.903 3.905 10.236 3.907 14.142.001l67.74-67.73c3.906-3.905 3.906-10.237.001-14.142zM84.802 342.338c-3.904-3.904-10.237-3.904-14.142.001l-67.73 67.74c-3.905 3.906-3.905 10.237.001 14.143 3.905 3.905 10.237 3.905 14.142-.001l67.73-67.74c3.905-3.906 3.905-10.237-.001-14.143zM311.083 200.919c-3.906-3.905-10.236-3.905-14.143 0l-14.14 14.14c-3.905 3.905-3.905 10.237 0 14.143 3.906 3.905 10.237 3.905 14.143 0l14.14-14.14c3.905-3.905 3.905-10.237 0-14.143z'/%3E%3C/svg%3E%0A",
        title: "Fast & Powerful",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, nulla."
      },
      {
        svg: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 480 480' fill='%23FFF'%3E%3Cpath d='M456 240h-8V72c-.026-22.08-17.92-39.974-40-40H72c-22.08.026-39.974 17.92-40 40v120h-8c-13.255 0-24 10.745-24 24v208c0 13.255 10.745 24 24 24h304a8 8 0 0 0 8-8c-.026-22.08-17.92-39.974-40-40h-24v-48h96v72c0 13.255 10.745 24 24 24h64c13.255 0 24-10.745 24-24V264c0-13.255-10.745-24-24-24zM176 424a8 8 0 0 1-8 8H24a8 8 0 0 1-8-8v-8h160v8zm0-24H16V216a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8v184zm120 16a24.047 24.047 0 0 1 22.632 16H190.528a23.725 23.725 0 0 0 1.472-8v-8h104zm-104-16v-48h16v48h-16zm32 0v-48h32v48h-32zm144-64H192v-48h176v48zm0-72v8H192v-56a23.713 23.713 0 0 0-2.736-10.888c.12-.112.28-.144.392-.264l79.2-79.2a8 8 0 0 0-11.312-11.312l-79.2 79.2c-.192.2-.272.456-.44.664A23.699 23.699 0 0 0 168 192H48V72c0-13.255 10.745-24 24-24h336c13.255 0 24 10.745 24 24v168h-40c-13.255 0-24 10.745-24 24zm96 160a8 8 0 0 1-8 8h-64a8 8 0 0 1-8-8v-8h80v8zm0-24h-80V264a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8v136z'/%3E%3Cpath d='M95.592 289.376a8 8 0 0 0-11.312 0l-33.936 33.936a8 8 0 0 0-.196 11.312 8 8 0 0 0 11.508 0l33.936-33.936c1.428-2.475-1.442-7.18 0-11.312zM143.396 289.376a8.001 8.001 0 0 0-11.116 0l-33.936 33.936a8 8 0 0 0-.196 11.312 8 8 0 0 0 11.508 0l33.936-33.936a8 8 0 0 0-.196-11.312zM317.46 114.344a8.001 8.001 0 0 0-11.116 0l-79.2 79.2a8 8 0 1 0 11.312 11.312l79.2-79.2a8 8 0 0 0-.196-11.312zM440.772 311.032a8 8 0 0 0-11.116 0l-22.624 22.624a8 8 0 0 0-.196 11.312 8 8 0 0 0 11.508 0l22.624-22.624a8 8 0 0 0-.196-11.312zM240.16 304h-.08a8 8 0 0 0 .08 16 8 8 0 0 0 0-16zM256 64h-32a8 8 0 0 0 0 16h32a8 8 0 0 0 0-16z'/%3E%3C/svg%3E%0A",
        title: "Fully Responsive",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, nulla."
      },
      {
        svg: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 333.135 333.135' fill='%23FFF'%3E%3Cpath d='M308.771 128.916c.527-3.985.778-7.731.778-11.375 0-50.206-40.843-91.049-91.043-91.049-30.103 0-58.375 15.142-75.245 39.917-8.49-4.409-17.905-6.71-27.578-6.71-31.177 0-56.877 23.908-59.712 54.57C24.165 119.79 0 147.952 0 180.729c0 37.211 30.27 67.482 67.482 67.482h73.189v42.514c0 8.773 7.14 15.919 15.919 15.919h32.815c8.785 0 15.932-7.14 15.932-15.919v-42.513h60.316c37.218 0 67.482-30.27 67.482-67.482-.013-19.956-9.055-39.038-24.364-51.814zm-116.3 161.815a3.077 3.077 0 0 1-3.078 3.066h-32.815a3.07 3.07 0 0 1-3.066-3.066v-89.674h-43.343l60.123-77.938c1.658-2.147 3.747-2.147 5.399-.006l60.104 77.945h-43.33v89.673h.006zm73.169-55.367h-60.316v-21.453h30.791c5.887 0 10.444-2.391 12.487-6.562 2.044-4.171 1.17-9.235-2.436-13.895l-60.29-78.189c-3.278-4.235-7.969-6.665-12.879-6.665-4.917 0-9.615 2.429-12.879 6.665L99.796 193.46c-3.599 4.666-4.48 9.73-2.429 13.895 2.044 4.158 6.594 6.555 12.481 6.555h30.81v21.453H67.475c-30.123 0-54.628-24.506-54.628-54.628 0-28.066 21.89-51.955 49.847-54.384l5.855-.771v-5.893c0-25.99 21.144-47.128 47.128-47.128a46.897 46.897 0 0 1 26.119 7.905l5.688 3.792 3.432-5.906c13.99-24.056 39.884-38.998 67.584-38.998 43.118 0 78.189 35.078 78.189 78.195 0 4.055-.379 8.323-1.183 13.046l-.656 3.882 3.175 2.339c14.133 10.45 22.23 26.453 22.23 43.915.013 30.123-24.492 54.635-54.615 54.635z'/%3E%3C/svg%3E%0A",
        title: "Active Updates",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, nulla."
      },
      {
        svg: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 480 480' fill='%23FFF'%3E%3Cpath d='M208 152c-13.232 0-24 10.768-24 24h16c0-4.408 3.584-8 8-8s8 3.592 8 8h16c0-13.232-10.768-24-24-24zM272 152c-13.232 0-24 10.768-24 24h16c0-4.408 3.584-8 8-8s8 3.592 8 8h16c0-13.232-10.768-24-24-24zM240 368c-17.648 0-32 14.352-32 32s14.352 32 32 32 32-14.352 32-32-14.352-32-32-32zm0 48c-8.824 0-16-7.176-16-16s7.176-16 16-16 16 7.176 16 16-7.176 16-16 16z'/%3E%3Cpath d='M432 464V360c0-66.168-53.832-120-120-120h-8.712a96.32 96.32 0 0 0 8.064-8H320c22.056 0 40-17.944 40-40v-14.096c9.64-6.464 16-17.456 16-29.904 0-12.496-6.408-23.504-16.096-29.96C358.84 52.784 305.512 0 240 0S121.16 52.784 120.096 118.04C110.408 124.496 104 135.504 104 148c0 19.848 16.152 36 36 36h5.448c3.744 22.168 15.072 41.744 31.272 56H168c-66.168 0-120 53.832-120 120v104H0v16h480v-16h-48zm-88-272c0 12.136-9.088 22.088-20.792 23.672A95.14 95.14 0 0 0 334.552 184H340c1.368 0 2.672-.256 4-.408V192zm16-44c0 11.024-8.968 20-20 20h-4v-40h4c11.032 0 20 8.976 20 20zm-216 20h-4c-11.032 0-20-8.976-20-20s8.968-20 20-20h4v40zm-4-56c-1.24 0-2.408.24-3.616.368C140.32 58.584 185.232 16 240 16s99.68 42.584 103.616 96.368c-1.208-.128-2.376-.368-3.616-.368h-5.448c-7.648-45.328-47.08-80-94.552-80s-86.904 34.672-94.552 80H140zm179.992 15.8C262.256 125.768 224 102.16 224 80c0-4.416-3.576-8-8-8s-8 3.584-8 8c0 19.992-20.672 36.56-47.536 39.496C164.728 79.368 198.768 48 240 48c44.04 0 79.88 35.784 79.992 79.8zM160 168v-32.448c24.984-2.168 46.184-14.216 56.768-31.088C233.504 126.64 272.616 142.248 320 143.84V168c0 18.024-6.064 34.608-16.152 48H240v16h47.792a79.77 79.77 0 0 1-14.824 8.8c-20.992 9.536-44.952 9.536-65.952 0C179.336 228.208 160 200.352 160 168zm55.272 92.656C223.176 262.768 231.44 264 240 264s16.824-1.232 24.728-3.344L240 310.112l-24.728-49.456zM227.056 320h-14.112l-32-64h14.112l32 64zm57.888-64h14.112l-32 64h-14.112l32-64zM88 360v104H64V360c0-55.72 44.08-101.208 99.176-103.752L195.056 320H128c-22.056 0-40 17.944-40 40zm288 104H104V360c0-13.232 10.768-24 24-24h224c13.232 0 24 10.768 24 24v104zm40 0h-24V360c0-22.056-17.944-40-40-40h-67.056l31.88-63.752C371.92 258.792 416 304.28 416 360v104z'/%3E%3Cpath d='M344 392h16v56h-16zM344 360h16v16h-16zM416 72h16v16h-16zM416 104h16v16h-16zM416 136h16v16h-16zM48 168h16v16H48zM48 200h16v16H48zM48 232h16v16H48z'/%3E%3C/svg%3E",
        title: "Excellent Support",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, nulla."
      }
    ]
  })
}
</script>

<style lang="scss" scoped>

.section1 {
    padding: 100px 0 130px 0;
    background: #efefef;

}

.services {
    padding: 40px 0;
    text-align: center;
    color: var(--white);
    background: -webkit-linear-gradient(left, var(--primary-dark), var(--primary));
    background: linear-gradient(to right, var(--primary-dark), var(--primary));

    @media only screen and (min-width: 768px) {
        display: -ms-grid;
        display: grid;
        -ms-grid-columns: (1fr)[10];
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