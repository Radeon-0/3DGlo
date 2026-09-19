function formatDate() {
    const greeTing = document.getElementById('greeting');
    const today = document.getElementById('today');
    const time = document.getElementById('time');
    const untilNewYear = document.getElementById('until-new-year');
    const now = new Date();
    const daysRu = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    const dayName = daysRu[now.getDay()];
    const hours = now.getHours();
    let greeting;

    if (hours >= 5 && hours < 12) {
        greeting = 'Доброе утро';
    } else if (hours >= 12 && hours < 17) {
        greeting = 'Добрый день';
    } else if (hours >= 17 && hours < 23) {
        greeting = 'Добрый вечер';
    } else {
        greeting = 'Доброй ночи';
    }

    const pad = n => String('0' + n).slice(-2);
    const timeStr = `${pad(hours)}:${pad(now.getMinutes())}`;

    const getTime = () => {
        const nextYear = now.getFullYear() + 1;
        const newYear = new Date(nextYear, 0, 1, 0, 0, 0);
        const diffMs = newYear - now;
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

        return diffDays
    }

    getTime();
    greeTing.textContent = greeting;
    today.textContent = `Сегодня: ${dayName}`;
    time.textContent = `Текущее время: ${timeStr}`;
    untilNewYear.textContent = `До Нового года осталось: ${getTime()} `;
}

formatDate();