function hello(){
    console.log("Hello from the other siiiiiide!");
}

setTimeout(hello, 1000);


for(let i = 0; i < 5; i++){
    setTimeout(function(){console.log(i)}, i*1000);
}


