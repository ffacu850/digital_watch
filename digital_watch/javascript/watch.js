let clockTempo
const digitalClock = (e, clock, play, stop) => {
    if(e.target.matches(play)){
        clockTempo = setInterval(() => {
            let clockHour = new Date().toLocaleTimeString()
            document.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`
        },1000);

        e.target.disabled = true
    }

    if(e.target.matches(stop)){
        clearInterval(clockTempo)
        document.querySelector(clock).innerHTML = null
        document.querySelector(play).disabled = false
        
    }
}
export default digitalClock


