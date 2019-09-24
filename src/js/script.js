function example4() {
    var context = new AudioContext()
var o = context.createOscillator()
var  g = context.createGain()
o.connect(g)
g.connect(context.destination)
o.start(0)
}