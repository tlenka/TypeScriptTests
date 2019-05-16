export function rangeBorder(numString:string){

    
    let numbers: number[] = numString.split(' ').map(function(item){
        return parseInt(item, 10);
    });

    let result: [number, number] = [numbers[0],numbers[0]];

    for(var i = 1; i < numbers.length; i++){
        
        if(numbers[i] < result[0]){
            result[0] = numbers[i]
        }
        if(+numbers[i] > result[1]){
            result[1] = +numbers[i]
        }
    }

    return result;
}