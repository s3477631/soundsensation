function updatesound(value) {
    var context = new AudioContext()
 
var o = context.createOscillator()
var  g = context.createGain()
var frequency = parseFloat(value);
o.frequency.value = frequency
o.connect(g)
g.connect(context.destination)
o.start(0)
}