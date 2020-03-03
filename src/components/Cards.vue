<template>
  <d-container fluid class="main-content-container px-4">
      <h3 class="section-title text-center my-5">Узнайте о преимуществах системы "ЭкоМарин"</h3>
    <!-- Fourth Row of Posts -->
    <d-row>
      <d-col v-for="(post, idx) in PostsListFour" :key="idx" lg="3" md="6" sm="12" class="mb-4">
        <d-card class="card-small card-post h-10">
          <d-card-body>
            <h5 class="card-title">
              <a class="text-fiord-blue" href="#">{{ post.title }}</a>
            </h5>
            <p class="card-text">{{ post.body }}</p>
          </d-card-body>
          <!-- <d-card-footer class="text-muted border-top py-3">
            <span class="d-inline-block">By <a class="text-fiord-blue" :href="post.authorUrl">{{ post.author }}</a> in <a class="text-fiord-blue" :href="post.categoryUrl">{{ post.category }}</a></span>
          </d-card-footer> -->
        </d-card>
      </d-col>
    </d-row>
  </d-container>
</template>

<script>
const PostsListFour = [{
  author: 'Alene Trenton',
  authorUrl: '#',
  category: 'News',
  categoryUrl: '#',
  title: 'Быстрая инвентаризация', 
  body: 'Данные об источнике выбросов можно вносить "на лету", находясь рядом с оборудованием.',
  date: '29 February 2019',
}, {
  author: 'Chris Jamie',
  authorUrl: '#',
  category: 'News',
  categoryUrl: '#',
  title: 'Моментальный расчет выбросов',
  body: 'Как только внесли данные о расходе топлива или количестве отработанных часов, система моментально произведет пересчет.',
  date: '29 February 2019',
}, {
  author: 'Monica Jordan',
  authorUrl: '#',
  category: 'News',
  categoryUrl: '#',
  title: 'Полное соотвествие законодательству',
  body: 'Всегда корректные и действующие методики расчетов выбросов загрязняющих веществ.',
  date: '29 February 2019',
}, {
  author: 'Monica Jordan',
  authorUrl: '#',
  category: 'News',
  categoryUrl: '#',
  title: 'Оптимизация',
  body: 'Возможность оптимизировать платежи за эмиссию с полным соблюдением требований государственных органов.',
  date: '29 February 2019',
},
{
  author: 'Monica Jordan',
  authorUrl: '#',
  category: 'News',
  categoryUrl: '#',
  title: 'Автоматические отчеты',
  body: 'Система "ЭкоМарин" подготовит за вас отчеты в государственные органы (налоговые и статистические) в необходимых форматах.',
  date: '29 February 2019',
},
{
  author: 'Monica Jordan',
  authorUrl: '#',
  category: 'News',
  categoryUrl: '#',
  title: 'Легко освоить',
  body: 'Использовать платформу "ЭкоМарин" сможет любой человек, который умеет пользоваться компьютером или смартфоном.',
  date: '29 February 2019',
},
{
  author: 'Monica Jordan',
  authorUrl: '#',
  category: 'News',
  categoryUrl: '#',
  title: 'Точное планирование',
  body: 'Точное планирование выплат в следующем периоде путем автоматической экстраполяции данных. ',
  date: '29 February 2019',
},
{
  author: 'Monica Jordan',
  authorUrl: '#',
  category: 'News',
  categoryUrl: '#',
  title: 'Доступность 24/7',
  body: 'Вы имеете доступ ко всем данным за любой период времени в режиме 24/7 с любой точки планеты.',
  date: '29 February 2019',
},
{
  author: 'Monica Jordan',
  authorUrl: '#',
  category: 'News',
  categoryUrl: '#',
  title: 'Аналитика',
  body: 'Постоянное понимание объемов предстоящих выплат, быстрый анализ различных вариантов бизнес решений.',
  date: '29 February 2019',
},
{
  author: 'Monica Jordan',
  authorUrl: '#',
  category: 'News',
  categoryUrl: '#',
  title: 'Минимум оборудования',
  body: 'Подойдет любой компьютер, ноутбук или планшет (даже тот у которого нет жесткого диска) имеющий выход в интернет.',
  date: '29 February 2019',
},
{
  author: 'Monica Jordan',
  authorUrl: '#',
  category: 'News',
  categoryUrl: '#',
  title: 'Назначение и отслеживание задач',
  body: 'В автоматическом режиме позволяет контролировать сотрудников и снизить бизнес - риски. ',
  date: '29 February 2019',
},
{
  author: 'Monica Jordan',
  authorUrl: '#',
  category: 'News',
  categoryUrl: '#',
  title: 'Безопасно',
  body: 'Каждый день делается резервная копия ваших данных, а передача данных шифруется (криптографический протокол SSL).',
  date: '29 February 2019',
}];
export default {
  data() {
    return {
      PostsListFour,
    };
  },
};
</script>