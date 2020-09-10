

var budgetController = (function(){

        var Expense = function(id, description, value){
            
            this.id = id;
            this.description = description;
            this.value = value;

        };

        var Income = function(id, description, value){
            
            this.id = id;
            this.description = description;
            this.value = value;

        };

       
         
       var data = {

            allItems:{
                exp:[],
                inc:[]
            },

            totals:{
                exp:0,
                inc:0
            } 
       };


       return{

           addItem: function(type, des, val){
               
            var newItem, ID;
            if (data.allItems[type].length > 0){
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            }else{
                ID = 0;
            } 

           
                //create new item

               if(type === 'exp'){
                  newItem = new Expense(ID, des, val);
               }else if(type === 'inc'){
                  newItem = new Income(ID, des, val);
               }
               //push it into 
               data.allItems[type].push(newItem);
               return newItem;
           },

           testing: function(){
               console.log('eiei');
           }

       };

})();

var UIController = (function(){

        var DOMstring = {
            inputType:'.add__type',
            inputDescription:'.add__description',
            inputValue:'.add__value',
            inputBtn:'.add__btn',
            incomeContainer:'.income__list',
            expensesContainer:'.expenses__list' 
        };

        return {
            getinput: function(){
                return{ 
                    type: document.querySelector(DOMstring.inputType).value,
                    description: document.querySelector(DOMstring.inputDescription).value,
                    value: parseFloat(document.querySelector(DOMstring.inputValue).value)   
                };    
            },

            addListItem: function(obj, type){
                        var html;

                        if(type === 'inc'){
                            element = DOMstring.incomeContainer;
                           html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'; 

                        }else if(type === 'exp'){
                            element = DOMstring.expensesContainer;
                           html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>' 
                          
                        }

                        newHtml = html.replace('%id%',obj.id);
                        newHtml = newHtml.replace('%description%',obj.description);
                        newHtml = newHtml.replace('%value%',obj.value);
                        document.querySelector(element).insertAdjacentHTML('beforeend',newHtml);

                },

                    clearFields: function(){
                    
                        var fields, fieldsArr;

                      fields =  document.querySelectorAll(DOMstring.inputDescription + ', ' + DOMstring.inputValue);
                        
                      fieldsArr = Array.prototype.slice.call(fields);  
                      fieldsArr.forEach(function(current, index, array){
                            current.value = "";
                      });

                        fieldsArr[0].focus();

                    },

                     getDOMstrings:function(){
                           return DOMstring;
                    }
        };
})();

var controller = (function(budgetCtrl,UICtrl){

        var setupEventListeners = function(){
        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click',ctrlAddItem);
        document.addEventListener('keypress',function(event){
        if(event.keys === 13 || event.which === 13){
                ctrlAddItem();
            }
        });      
    }
    

    var updateBudget = function(){

        //Calculate the Budget


        //Reture the  budget


        //Display the budget on the  UI 

    };


    var ctrlAddItem = function(){

        var input, newItem;

           //Get the field input data
        var input = UICtrl.getinput();


                if(input.description !== ""  && !isNaN(input.value) && input.value > 0){
                              // Add the item to the budget
                             newItem = budgetCtrl.addItem(input.type , input.description, input.value); 

                            //Add the item to the UI
                            UICtrl.addListItem(newItem, input.type);

                            //Clear the fields
                            UICtrl.clearFields();

                            //Calculate
                            updateBudget();   
                }


               

    };


    return{
            init:function(){
                console.log('Application has started');
                setupEventListeners();
            }
    };
})(budgetController, UIController);


controller.init();
