let octave = 1
let impact = 0.4
function usersounds(note){
    console.log(octave)
    let context = new AudioContext()
    let o = context.createOscillator()
    let  g = context.createGain()
    const freq = [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25]
    let frequency = freq[note];
    o.frequency.value = parseFloat(frequency/octave) * 2
    o.connect(g)
    g.connect(context.destination)
    o.start(0)
    o.stop(impact)
 
}
function userinput(e) {
    switch(e.code) {
        case "KeyA":
            note = 0 
          usersounds(note)
          document.getElementById("c").setAttribute("style", "background-color: red; padding: 4.2%;")
          setTimeout( function(){
            document.getElementById("c").setAttribute("style", "background-color: rgb(30, 102, 236) padding: 4%;")
          }, 50)
          break;
        case "KeyS":
            note = 1
            document.getElementById("d").setAttribute("style", "background-color: red; padding: 4.2%;")
            setTimeout( function(){
              document.getElementById("d").setAttribute("style", "background-color: rgb(30, 102, 236); padding: 4%;")
            }, 50)
        usersounds(note)
        break;
        case "KeyD":
              note= 2
        document.getElementById("e").setAttribute("style", "background-color: red; padding: 4.2%;")
        setTimeout( function(){
        document.getElementById("e").setAttribute("style", "background-color: rgb(30, 102, 236); padding: 4%;")
          }, 50)
        usersounds(note)
        break;
        case "KeyF":
              note= 3
         document.getElementById("f").setAttribute("style", "background-color: red; padding: 4.2%;")
              setTimeout( function(){
        document.getElementById("f").setAttribute("style", "background-color: rgb(30, 102, 236); padding: 4%;")
                }, 50)
        usersounds(note)
        break;
        case "KeyG":
            if (octave == 8){
                octave = 0
            }
             else {
                octave++
             }  
             document.getElementById("output").innerHTML = octave
        break;
        case "KeyH":
            impact-=0.05;
        document.getElementById("impactouput").innerHTML = impact.toFixed(2);
        break; 
        case "KeyU":
            impact+=0.05;
        document.getElementById("impactouput").innerHTML = impact.toFixed(2);
        break;
        case "KeyJ":
            note = 4
        document.getElementById("g").setAttribute("style", "background-color: red; padding: 4.2%")
            setTimeout( function(){
        document.getElementById("g").setAttribute("style", "background-color: rgb(30, 102, 236); padding: 4%;")
              }, 50)
            usersounds(note)
        break;
        case "KeyK": 
            note = 5
            document.getElementById("a").setAttribute("style", "background-color: red; padding: 4.2%;")
            setTimeout( function(){
        document.getElementById("a").setAttribute("style", "background-color: rgb(30, 102, 236); padding: 4%;")
              }, 50)
            usersounds(note)
        break;
        case "KeyL":
            note = 6
            document.getElementById("b").setAttribute("style", "background-color: red; padding: 4.2%;")
            setTimeout( function(){
        document.getElementById("b").setAttribute("style", "background-color: rgb(30, 102, 236); padding: 4%;")
              }, 50)
            usersounds(note)
        break;
        case "Semicolon":
            note = 7 
            document.getElementById("cup").setAttribute("style", "background-color: red; padding: 4.2%;")
            setTimeout( function(){
        document.getElementById("cup").setAttribute("style", "background-color: rgb(30, 102, 236); padding: 4%;")
              }, 50)
            usersounds(note)
        break;
        default:
         console.log('error')
      }
    }

    function modalshow(){
        document.getElementById("modal").setAttribute("style", "z-index: 100;")
    }

window.addEventListener('keydown', userinput)

window.onload("load", modalshow);

function stop(decreaseTime)
{g.gain.exponentialRampToValueAtTime(0.00001,context.currentTime+decreaseTime)}


