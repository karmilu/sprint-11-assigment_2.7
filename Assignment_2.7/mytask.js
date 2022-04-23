// Step 1
const HydrateFn = setInterval(function(){
    document.write('Hello!') 
}, 2000);

// Step 2
setTimeout(StopFn, 1 * 60 * 1000)

// Step 3
function StopFn() {
    clearInterval(HydrateFn);
}
