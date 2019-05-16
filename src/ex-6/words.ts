export {findShortest, findLongest}

function findShortest(text: string){

    let textArr: string[] = text.split(' ');
    let theShortest: string = textArr[0];

    for(let i=1; i<textArr.length; i++){
        if(textArr[i].length < theShortest.length){
            theShortest = textArr[i]
        }
    }

    return theShortest;
}

function findLongest(text: string){
    let textArr: string[] = text.split(' ');
    let theLongest: string = textArr[0];

    for(let i=1; i<textArr.length; i++){
        if(textArr[i].length > theLongest.length){
            theLongest = textArr[i]
        }
    }

    return theLongest;
}