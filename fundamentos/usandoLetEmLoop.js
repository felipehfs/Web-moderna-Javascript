const funcs = [];

for(let i=0; i < 10; i++){
    funcs.push(function(){
        console.log(i);
    });
}

funcs[1]();
funcs[2]();
funcs[3]();
funcs[5]();
funcs[8]();