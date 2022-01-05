const wakeUp = () => 'Acordando!';
const breakfast = () => 'Indo tomar um café com pão quentinho!';
const sleeping = () => 'Hora de amimir!';

const doThing = action => console.log(action());

doThing(wakeUp);
doThing(breakfast);
doThing(sleeping);
