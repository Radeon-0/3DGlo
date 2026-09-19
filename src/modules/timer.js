const timer = (deadline) => {
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');


    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRenaining = (dateStop - dateNow) / 1000;
        // let days = Math.floor(timeRenaining / 60 / 60 / 24);
        let hours = Math.floor(timeRenaining / 60 / 60 % 24);
        let minutes = Math.floor((timeRenaining / 60) % 60);
        let seconds = Math.floor(timeRenaining % 60);

        return { timeRenaining, hours, minutes, seconds }

    }

    const pad = num => ('0' + num).slice(-2);

    const updateClock = () => {

        let getTime = getTimeRemaining();

        timerHours.textContent = pad(getTime.hours);
        timerMinutes.textContent = pad(getTime.minutes);
        timerSeconds.textContent = pad(getTime.seconds);

        if (getTime.timeRenaining <= 0) {
            clearInterval(intervalId);
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
        }
    }

    const intervalId = setInterval(updateClock, 1000);
    updateClock();


}

export default timer