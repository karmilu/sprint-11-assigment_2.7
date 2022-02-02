// do something every 2 sec

const HydrateFn = setInterval(function(){
    document.write('Hello!') 
}, 2000);

// cancel after 1 min

setTimeout(StopFn, 1 * 60 * 1000)

// clear the interval

function StopFn() {
    clearInterval(HydrateFn);
}
