<template>
    <div class="bg-wrap">
        <h1>Платформа<br>ЭкоМарин<br><br>
            <small class="text-white">Автоматизация расчетов выбросов загрязняющих веществ любых производств.</small>
        </h1>

        <div class="gooey-rec one"></div>
        <div class="gooey-rec"></div>
    </div>
</template>

<style scoped>
/* @import url('https://fonts.googleapis.com/css?family=Playfair+Display:400,900'); */

body {
    margin: 0;
    padding: 0;
}

.bg-wrap {
    background: #01bdec;
    min-height: 100vh;
    min-width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
}

.gooey-rec {
    background: linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%);
    height: 400px;
    width: 400px;
    border-radius: 30% 70% 20% 40%;
    animation:
        transform 20s ease-in-out infinite both alternate,
        movement_one 40s ease-in-out infinite both;
    opacity: .5;
    position: absolute;
    left: 70%;
    top: 50%;
}

.gooey-rec.one {
    background: linear-gradient(90deg, #92FE9D 0%, #00C9FF 100%);
    height: 1000px;
    width: 1000px;
    left: -500px;
    top: -250px;
    transform: rotate(-180deg);
    animation: transform 30s ease-in-out infinite both alternate, movement_two 60s ease-in-out infinite both;
}

@keyframes transform {

    0%,
    100% {
        border-radius: 33% 67% 70% 30% / 30% 30% 70% 70%;
    }

    20% {
        border-radius: 37% 63% 51% 49% / 37% 65% 35% 63%;
    }

    40% {
        border-radius: 36% 64% 64% 36% / 64% 48% 52% 36%;
    }

    60% {
        border-radius: 37% 63% 51% 49% / 30% 30% 70% 70%;
    }

    80% {
        border-radius: 40% 60% 42% 58% / 41% 51% 49% 59%;
    }
}


@keyframes movement_one {

    0%,
    100% {
        transform: none;
    }

    50% {
        transform: translate(50%, 20%) rotateY(10deg) scale(1.2);
    }
}

@keyframes movement_two {

    0%,
    100% {
        transform: none;
    }

    50% {
        transform: translate(50%, 20%) rotate(-200deg) scale(1.2);
    }
}

h1 {
    /* font-family: 'Playfair Display', serif; */
    font-size: 3em;
    letter-spacing: 2px;
    font-weight: 900;
    color: white;
    line-height: .9em;
    position: relative;
    z-index: 4;
    text-shadow: 2px 3px 15px rgba(0, 0, 0, .15);
}
</style>
