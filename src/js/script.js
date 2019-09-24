function updatesound(value) {
var context = new AudioContext()
var o = context.createOscillator()
var  g = context.createGain()
var frequency = parseFloat(value);
o.frequency.value = frequency
o.connect(g)
g.connect(context.destination)
o.start(0)
o.stop(20)
// sets latency
}

function updatesound2(value){
   var context = new AudioContext()
   var o = context.createOscillator()
   var  g = context.createGain()
   var frequency = parseFloat(value);
   o.frequency.value = frequency
   o.connect(g)
   g.connect(context.destination)
   o.start(0)
   o.stop(0.2)
   // sets latency
}



function stop(decreaseTime)
{g.gain.exponentialRampToValueAtTime(0.00001,context.currentTime+decreaseTime)}


