export function multiplicate(text:string){
    let effect: string = "";
    for(let i=0; i<text.length; i++){
        
        effect += text[i].toUpperCase();
        
        for(let j=0; j<i; j++){
            effect += text[i].toLowerCase();
        }

        if(i < text.length-1){
            effect += "-";
        }
    }
    return effect;
}