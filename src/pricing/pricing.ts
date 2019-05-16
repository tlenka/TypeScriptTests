enum Tax {
    VAT23 = 0.23,
    //VAT08 = 0.08
}

export interface CalcRequest {
    netto?: number;
    gross?: number;
    tax: Tax;
}

export class ItemPrice {
    netto: number;
    gross: number;
    taxValue: number;
    tax: Tax
}

export class PriceCalculator {
   
    res = new ItemPrice();
    
    calculate(calculationRequest: CalcRequest):ItemPrice{
        let netto = calculationRequest.netto;
        let gross = calculationRequest.gross;
        let tax = calculationRequest.tax;

        if(netto){
            this.res.netto = netto;
            
            this.res.gross = this.valueBasedOnOther(netto, tax)

            //this.res.gross = this.grossBasedOnNetto(netto, tax);
            
        }
        if(gross){
           // this.res.netto = this.nettoBasedOnGross(gross, tax);
            this.res.gross = gross;

            this.res.netto = this.valueBasedOnOther(gross, tax, true)
        }

        this.res.tax = tax;
        this.res.taxValue = parseFloat((tax * this.res.netto).toFixed(2));
        
        return  this.res;
    }

    // grossBasedOnNetto(nettoValue: number, tax: Tax): number{
    //     let gross:number  = parseFloat((nettoValue * (1+tax)).toFixed(2));
    //     return gross;
    // }

    // nettoBasedOnGross(grossValue: number, tax: Tax): number{
    //     let netto:number  = parseFloat((grossValue / (1+tax)).toFixed(2));
    //     return netto;
    // }

    valueBasedOnOther(base: number, tax: Tax, flag?: boolean){
        let result: number = flag ? base / (1+tax) : base * (1+tax) ;
        result = parseFloat(result.toFixed(2));

        return result;
    }
}

