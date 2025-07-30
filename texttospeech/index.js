const button = document.querySelector(".button")
const voicelist = document.querySelector(".select")
const maintext = document.querySelector(".textarea")
let synth = speechSynthesis
let isspeaking = true;
function voices(){
  for(let voice of synth.getVoices()){
    console.log(voice)
    const select = `
     <option value=${voice.name}>${voice.name} (${voice.lang})</option>
    `
    voicelist.insertAdjacentHTML("beforeend",select)
  }
}
synth.addEventListener("voiceschanged",voices)

function textToSpeech(text){
  let utterance = new SpeechSynthesisUtterance(text)
    for(let voice of synth.getVoices()){
if(voice.name === voicelist.value){
  utterance.voice = voice;
}
    }
    synth.speak(utterance)

}

button.addEventListener("click",(e)=>{
  e.preventDefault()
  if(maintext.value !== ""){
    if(!synth.speaking){

      textToSpeech(maintext.value)
    }
    if(maintext.value.length>80){
      if(isspeaking){
        synth.resume()
        isspeaking  = false
        button.innerHTML = "Pause speech"
      }
    else{
      isspeaking = true;
      synth.pause()
      button.innerHTML = "Resume speech"
    }
    setInterval(() => {
     if(!isspeaking &&!synth.speaking){
      isspeaking = true;
      button.innerHTML = "Convert to speech"
     } 
    });
    
    }
 else{
      button.innerHTML = "Convert to speech"
     }
  }
 
})