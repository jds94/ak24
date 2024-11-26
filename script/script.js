function checkDate(day) {
    return;
    const date = new Date();
    if (!(date.getDate() >= day && date.getMonth() === 11)) {
        redirectDelayed('tag/zu_frueh.html');
    }
}

function checkDateAndDelayRedirect(day) {
    checkDate(day);
    redirectDelayed('tag/' + day + '.html', 2000);
}

function checkDateAndDelayRedirectAfter(day, time) {
    checkDate(day);
    redirectDelayed('tag/' + day + '.html', time);
}

function redirectDelayed(URL, time) {
    setTimeout(function () {
        window.location = URL;
    }, time);
}
