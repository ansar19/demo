<template>
  <d-container fluid class="main-content-container px-0 mt-0 mx-0 my-0">
    <d-row>
      <d-col>
        <div class="header">
          <div class="info">
            <h1 class="text-white">Смена правил</h1>
            <h5 class="text-white">Расчеты выбросов больше не должны создавать проблем</h5>
          </div>
        </div>
        <section class="content">
          <blockquote>
            Почему мы создаем платформу "ЭкоМарин"? Что это такое? Для кого она предназначена? Какие проблемы решает?
            На эти и другие вопросы мы постарались ответить ниже.
          </blockquote>

          <p>
            За годы работы в области охраны окружающей среды на производстве, а также в области инжиниринга и
            проектирования нам приходилось сталкиваться со множеством расчетов выбросов загрязняющих веществ. Расчеты
            требовались для отчетов в государственные органы, расчетов платежей, для анализа на предстоящий период, ну и
            конечно же, для целей проектирования и нормирования.
          </p>

          <p>
            Каждый раз, вне зависимости от инструмента, который применялся, будь то традиционные специализированные
            программы, которые устанавливались на компьютер, или же обычный эксель в котором велись все расчеты
            приводили к одному и тому же: ошибкам при подсчетах, переносе данных, случайной замене с трудом настроенных
            формул, или отказу программ от полного сотрудничества в следствии внезапного скачка напряжения.
          </p>

          <p>
            Мы старались найти инструменты удобные для нас, которые бы автоматизировали бы наши рутинные задачи,
            напоминали нам о сроках, были доступны из дома или когда мы находимся в командировке или на обучении.
          </p>

          <p>
            Но все инструменты, что мы видели или использовали - не подходили, не предназначалось или откровенно
            вызывали боль и страдания, это были инструменты, которые диктовали нам свои условия, вместо того что бы
            помогать нам в нашей работе.
          </p>

          <p>
            Нас всегда интересовало, почему у юристов есть adilet.zan.kz, Параграф, Договор24.кз, а у бухгалтеров 1С,
            InBuh.kz, Мой учет.kz, Бухта.кз, у производственников SAP, Oracle и другие продукты, а работа экологов
            практически никак не автоматизирована?
          </p>

          <p>
            Мы подумали, возможно, мы что ни будь придумаем на замену традиционным и довольно устаревшим инструментам,
            что ни будь простое, удобное, функциональное и быстрое.
            Поэтому мы приняли решение, которое изменило бы нашу жизнь и жизнь тысячи других специалистов в области
            охраны окружающей среды на производстве. Мы решили построить свою собственную платформу для проведения
            расчетов с нуля.
          </p>

          <p>
            Дизайн этой новой платформы казался нам очевидным с самого начала. Речь шла не только о том, что бы просто
            проводить расчеты, но о том, как собирать исходные данные для них на периодической основе, формировать
            необходимые отчеты для государственных органов и напоминать ответственным о необходимости предоставления
            исходных данных. Поэтому мы разработали всю систему вокруг работы эколога на производстве.
          </p>
          <p></p>
          <p>
            Вот некоторые из наших основных правил: использовать повторно данные которые уже были внесены (данные при
            регистрации -> данные для отчетов), давать возможность скачивания генерированных расчетов и отчетов,
            возможность проводить быстрые расчеты на лету, возможность доступа с любых устройств с выходом в интернет.
          </p>
          <p>
            Мы всегда знали, что это возможно, но теперь мы действительно создаем продукт, который будет удобен в
            работе.
          </p>
          <p>
            В ТОО "ЭкоМарин" мы вкладываем инновации в суть всего, что мы делаем, поэтому ожидаем больших достижений в
            этом новом пространстве.
          </p>
          <p>
            В обмен на ваше доверие мы обещаем оставаться человечными, честными и, конечно же, держать вас в курсе
            развития проекта.
          </p>

          <p>С уважением,</p>

          <p>Команда "ЭкоМарин"</p>

        </section>
      </d-col>
    </d-row>
  </d-container>
</template>

<style scoped>
html,
body {
  margin: 0;
  /* height: 120%; */
}

a {
  text-decoration: none;
}

.header {
  position: relative;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  height: 50vw;
  min-height: 400px;
  max-height: 550px;
  min-width: 300px;
  color: #eee;
}

.header:after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.12) 40%,
    rgba(27, 32, 48, 1) 100%
  );
}

.header:before {
  content: "";
  width: 100%;
  height: 200%;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-backface-visibility: hidden;
  -webkit-transform: translateZ(0);
  backface-visibility: hidden;
  scale: (1, 1);
  transform: translateZ(0);
  background: #1b2030 url(../assets/mountain.jpeg) 50% 0 no-repeat;
  background-size: 100%;
  background-attachment: fixed;
  animation: grow 360s linear 10ms infinite;
  transition: all 0.4s ease-in-out;
  z-index: -2;
}

.header a {
  color: #eee;
}

.menu {
  display: block;
  width: 40px;
  height: 30px;
  border: 2px solid #fff;
  border-radius: 3px;
  position: absolute;
  right: 20px;
  top: 20px;
  text-decoration: none;
}

.menu:after {
  content: "";
  display: block;
  width: 20px;
  height: 3px;
  background: #fff;
  position: absolute;
  margin: 0 auto;
  top: 5px;
  left: 0;
  right: 0;
  box-shadow: 0 8px, 0 16px;
}

.logo {
  border: 2px solid #fff;
  border-radius: 3px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  align-content: center;
  margin: 20px;
  padding: 0px 10px;
  font-weight: 900;
  font-size: 1.1em;
  line-height: 1;
  box-sizing: border-box;
  height: 40px;
}

.sides,
.info {
  flex: 0 0 auto;
  width: 50%;
}

.info {
  width: 100%;
  padding: 15% 10% 0 10%;
  text-align: center;
  text-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
}

.info h4,
.meta {
  font-size: 0.7em;
}

.meta {
  font-style: italic;
}

@keyframes grow {
  0% {
    transform: scale(1) translateY(0px);
  }

  50% {
    transform: scale(1.2) translateY(-400px);
  }
}

.content {
  padding: 5% 10%;
  text-align: justify;
}

.btn {
  color: #333;
  border: 2px solid;
  border-radius: 3px;
  text-decoration: none;
  display: inline-block;
  padding: 5px 10px;
  font-weight: 600;
}

.twtr {
  margin-top: 100px;
}

.btn.twtr:after {
  content: "\1F426";
  padding-left: 5px;
}

blockquote {
  border: 1px solid #e6e9ec;
  padding: 12px 20px;
  border-radius: 5px;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.03);
  background-color: #fff;
  border-left: 3px solid #2d53fe;
  font-size: 18px;
  line-height: 1.5;
  margin: 0 0 1rem;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 40px;
  margin-inline-end: 40px;
}
</style>