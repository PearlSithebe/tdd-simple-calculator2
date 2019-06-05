class Calculator {
    constructor(){
        this.getSlot = [];
    }
    
    add(parameters){
        let sum = 0;
        
        for(let i = 0; i < arguments.length; i++){
            sum += parseFloat(arguments[i]);
            this.x = sum;}
        return sum;
        
     }

     multiply(parameters){
        var multiplication = 1;
        for(let i = 0; i < arguments.length; i++){
            multiplication *= parseFloat(arguments[i]);
        this.x = multiplication;}
        return multiplication;
        
    }
    last(){
    let result = this.x;
    return result;

    }
    set_slot(slotNum){
    this.getSlot.push(this.x);
    return this.getSlot[slotNum-1];
    }

    get_slot(k) {
        return this.getSlot[k-1]; 
    }
}