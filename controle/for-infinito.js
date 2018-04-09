// for quase infinito
let i = 0;
for(;;){
    try{
        console.log(i);
        i++;
    } catch(e){
        console.log(e);
    }
}