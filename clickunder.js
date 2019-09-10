// let click_cnt = 0;

// function ClickUnder() {
//     if (!click_cnt) {
//         window.open("https://www.youtube.com/");
//         window.focus();
//         click_cnt = 1;
//         setTimeout(function() {
//             click_cnt = 0;
//         }, 3600000)
//     }
// }
// document.onmouseup = ClickUnder

function clickUnder() {

    const shouldOpenAd = !localStorage.getItem('lastOpenedAdTime') || new Date() - new Date(localStorage.getItem('lastOpenedAdTime')) > 10000;
    console.log(!localStorage.getItem('lastOpenedAdTime'),(new Date() - new Date(localStorage.getItem('lastOpenedAdTime')) > 10000))
   if (shouldOpenAd) {
   		localStorage.setItem('lastOpenedAdTime', new Date());
       window.open("https://www.youtube.com/");
       window.focus();
   }
}
document.addEventListener('click', clickUnder)
