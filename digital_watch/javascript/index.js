import digitalClock from "./watch.js"
import alarm from "./alarm.js"



document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("click", (e) => {
        digitalClock(e, "#reloj", "#activar-reloj", "#desactivar-reloj")
        alarm(e, "/digital_watch/assets/alarma_2.mp3", "#activar-alarma", "#desactivar-alarma")
    })  
})