
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// Инициализация библиотеки
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(savedPlayTime, 1000));

// Сохранение  времени просмотра в  localStorage
function savedPlayTime(data) {
        localStorage.setItem('videoplayer-current-time', data.seconds)
    }

// Получение времени просмотра в  localStorage

const savedTime = Number(localStorage.getItem('videoplayer-current-time'));
player.setCurrentTime(savedTime).then().catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:
            break;
    }
});
