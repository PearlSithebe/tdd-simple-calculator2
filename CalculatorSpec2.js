describe("Calculator", function() {
   let calculator;
    beforeEach(function() {
      calculator = new Calculator
    });

    it("should be able to add two numbers", function() {
        expect (calculator.add(0,0)).toEqual(0);
    })
    it("should be able to add negative numbers", function(){
        expect(calculator.add(-1,-1)).toEqual(-2);

    })
    it("should be able to add positive numbers", function(){
        expect (calculator.add(4,5)).toEqual(9);
    })
    
    it("should be able to add multiple numbers ", function(){
        expect (calculator.add(3,4,7)).toEqual(14);
    })
    it ("should be able to add decimal numbers", function(){
        expect(calculator.add(4.5,3.5)).toEqual(8);
    })
    it ("should be able to add string and numbers",function(){
        expect (calculator.add(7,"3",5)).toEqual(15);
    })
    it("should be able multiply two numbers", function(){
        expect (calculator.multiply(-1,-1)).toEqual(1);

    })
    it("should be able multiply multiple numbers", function(){
    expect (calculator.multiply(1,2,3,4)).toEqual(24);
    })

     it("should be able multiply decimal numbers", function(){   
         expect (calculator.multiply(3.5,6.7)).toEqual(23.45)
     })
     it("should be able multiply strings and numbers", function(){
         expect (calculator.multiply(2,"6",3)).toEqual(36)
     })
     it ("should be able to store last results", function(){
         let calculator = new Calculator;
         expect (calculator.add(1,3)).toEqual(4);
         expect (calculator.last()).toEqual(4)
     });

     it ("should be able to use the last results in other calculations", function(){
        expect (calculator.add(2,3)).toEqual(5);
        expect (calculator.add(calculator.last(),3)).toEqual(8);
        
     });

     it ("should take a single number as an argument.That argument is called the slot number. Also implement get_slot for getting the value from a memory slot.", function(){
        expect (calculator.add(1,2)).toEqual(3)
        expect (calculator.set_slot(1)).toEqual(3)
        expect (calculator.get_slot(1)).toEqual(3)

     })
     it ("should allow memory slots as parameters", function(){
        expect (calculator.add(1,2)).toEqual(3)
        expect (calculator.set_slot(1)).toEqual(3)
        expect (calculator.get_slot(1)).toEqual(3)
        expect (calculator.add(calculator.set_slot(1),5)).toEqual(8)

     })
     })
