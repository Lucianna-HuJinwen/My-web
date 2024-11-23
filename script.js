// 实现动态时间
function updateTime() {
    const dateElement = document.getElementById("date");
    const timeElement = document.getElementById("time");

    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    dateElement.textContent = now.toLocaleDateString('zh-CN', options);

    timeElement.textContent = now.toLocaleTimeString('zh-CN');
}

// 定时更新时间
setInterval(updateTime, 1000);
updateTime();


