let next = document.getElementById("next")
let img = document.getElementById("img");
let n = 0;
function change(input){
    if(input === 'next'){
    img.src = `img/${n = n+1}.jpg`
        if( n == 14){
            n = 13;
        }
    
    console.log(n);
    }
    else if(input === 'previous'){
        img.src = `img/${n = n-1}.jpg`
            if(n == 0  ){
                n = 1;
            }
        console.log(n);
    }
}