// let alarmTempo
const alarmTouch = document.createElement("audio")

const alarm = (e, sound, play, stop) => {
     let alarmTempo
    // const alarmTouch = document.createElement("audio")
    alarmTouch.src = sound
    if(e.target.matches(play)){
        alarmTempo = setTimeout(() => {
            alarmTouch.play()
        },2000)

        e.target.disabled = true
    }
    if(e.target.matches(stop)){
        clearTimeout(alarmTempo)
        alarmTouch.pause()
        alarmTouch.currentTime = 0

        document.querySelector(play).disabled = false
    }
}  

export default alarm

