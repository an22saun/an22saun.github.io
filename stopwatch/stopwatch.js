

let timerId;
let count = 0;
document.getElementById("start").addEventListener("click", () => {
    if(!timerId){
        timerId = setInterval(() => {
            count++;
            document.getElementById("counter").textContent = count;
        }, 1000);
    }
})