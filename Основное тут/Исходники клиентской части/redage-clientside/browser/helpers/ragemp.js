var RAGE = {};

RAGE.CallClient = (eventName, ...args) => { 
    if(window.mp) window.mp.trigger(eventName, ...args);
    else console.log(`[TRIGGER DEBUG] Trigged: ${eventName} - ${args}`);
}

export default RAGE;