

var budgetController = (function(){

        var Expense = function(id, description, value){
            
            this.id = id;
            this.description = description;
            this.value = value;
            this.percentage = -1;

        };


        

        Expense.prototype.calcPercentage = function(totalIncome){

            if(totalIncome > 0){
               this.percentage = Math.round(this.value / totalIncome * 100); 
            }else{
                this.percentage = -1;
            }
        };


        Expense.prototype.getPercentages = function(){
            return this.percentage;
        };

        var Income = function(id, description, value){
            
            this.id = id;
            this.description = description;
            this.value = value;
           

        };

            var calculateTotal = function(type){
                var sum = 0;
                data.allItems[type].forEach(function(cur){ 
                        sum += cur.value;
                });

                data.totals[type] = sum;
            }; 
       
         
       var data = {

            allItems:{
                exp:[],
                inc:[]
            },

            totals:{
                exp:0,
                inc:0
            },
            budget: 0,
            percentage: -1 
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

           deleteItem : function(type, id){

                var ids, index;

                ids = data.allItems[type].map(function(current){
                        
                    return current.id;

                });

                index = ids.indexOf(id);
                    if(index !== -1){
                        data.allItems[type].splice(index,1);
                    }
            },

            calculateBudget : function(){

                //calculate total income and expenses
                calculateTotal('exp');
                calculateTotal('inc');  
    
                    data.budget = data.totals.inc - data.totals.exp;
                    //Calculate the bug


                    if(data.totals.inc > 0){
                        data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100); 
                    } else{

                        data.percentage = -1;
                    }

           },


           calculatePercentages:function(){

                data.allItems.exp.forEach(function(cur){
                    cur.calcPercentage(data.totals.inc);
                });
           },

           getPercentages : function(){
                var allPerc = data.allItems.exp.map(function(cur){
                    return cur.getPercentages();
                });
                return allPerc;
           },

           getBudget: function(){
                return{
                 budget : data.budget,
                 totalInc : data.totals.inc,
                 totalExp : data.totals.exp,
                 percentage : data.percentage
                };
           },

           testing: function(){
               console.log(data);
           }

       };

})();

        var UIController = (function(){

        var DOMstrings = {
            inputType:'.add__type',
            inputDescription:'.add__description',
            inputValue:'.add__value',
            inputBtn:'.add__btn',
            incomeContainer:'.income__list',
            expensesContainer:'.expenses__list',
            budgetLabel:'.budget__value',
            incomeLabel:'.budget__income--value',
            expensesLabel:'.budget__expenses--value',
            percentageLabel:'.budget__expenses--percentage',
            container:'.container',
            expensesPercLabel:'.item__percentage',
            dateLabel:'.budget__title--month' 
        };


        var  formatNumber = function(num,type){
            num = Math.abs(num);
            num = num.toFixed(2);
            numSplit = num.split('.');
            int = numSplit[0];

                if(int.length > 3){

                    int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3,3);
                
                }

            dec = numSplit[1];
                     
            return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec;                            
        };

        var nodeListForEach = function(list, callback){
            for(var i = 0; i < list.length; i++){
                 callback(list[i], i);   
            }
        };

        return {
            getinput: function(){
                return{ 
                    type: document.querySelector(DOMstrings.inputType).value,
                    description: document.querySelector(DOMstrings.inputDescription).value,
                    value: parseFloat(document.querySelector(DOMstrings.inputValue).value)   
                };    
            },

            addListItem: function(obj, type){
                        var html;

                        if(type === 'inc'){
                            element = DOMstrings.incomeContainer;
                           html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'; 

                        }else if(type === 'exp'){
                            element = DOMstrings.expensesContainer;
                           html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>' 
                          
                        }

                        newHtml = html.replace('%id%',obj.id);
                        newHtml = newHtml.replace('%description%',obj.description);
                        newHtml = newHtml.replace('%value%', formatNumber (obj.value,type));
                        document.querySelector(element).insertAdjacentHTML('beforeend',newHtml);

                },

                    deleteListItem: function(selectorID){
                            
                        var el = document.getElementById(selectorID);
                            el.parentNode.removeChild(el);   

                    },    

                    clearFields: function(){
                    
                      var fields, fieldsArr;

                      fields =  document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);
                      fieldsArr = Array.prototype.slice.call(fields);  
                      fieldsArr.forEach(function(current, index, array){
                            current.value = "";
                      });

                        fieldsArr[0].focus();

                    },

                     displayBudget : function(obj){

                        var type;
                        obj.budget > 0 ? type = 'inc' : type = 'exp';

                    document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget,type);
                    document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc,'inc'); 
                    document.querySelector(DOMstrings.expensesLabel).textContent = formatNumber(obj.totalExp,'exp');
                    

                    if(obj.percentage > 0){
                        document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%'; 
                    }else {
                        document.querySelector(DOMstrings.percentageLabel).textContent = '---'; 
                    }
                },  
                
                displayPercentages: function(percentage){

                        var fields = document.querySelectorAll(DOMstrings.expensesPercLabel);

                    
                        nodeListForEach(fields, function(current, index){

                               if(percentage[index] > 0){
                                current.textContent = percentage[index] + '%';
                               } else{
                                  current.textContent = '---'; 
                               }
                           

                        });
                },

                displayMouth : function(){

                       var now, year;

                        now = new Date(); 

                        months = ["January","February","March","April","May","June","July",
                        "August","September","October","November","December"]; 
                        
                        month = now.getMonth();

                        year = now.getFullYear();
                        document.querySelector(DOMstrings.dateLabel).textContent = months[month] + '  ' + year;
                         

                },

                    changedType : function(){

                        var fields = document.querySelectorAll(
                            DOMstrings.inputType + ',' +
                            DOMstrings.inputDescription + ',' +
                            DOMstrings.inputValue
                        );

                        nodeListForEach(fields, function(cur){
                            cur.classList.toggle('red-focus');
                        });
                        
                        document.querySelector(DOMstrings.inputBtn).classList.toggle('red');
                },
                    
                     getDOMstrings:function(){
                           return DOMstrings;
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


        document.querySelector(DOM.container).addEventListener('click',ctrlDeleteItem);

        document.querySelector(DOM.container).addEventListener('change',UICtrl.changedType);


    };  
    

    var updateBudget = function(){

        //Calculate the Budget
        budgetCtrl.calculateBudget();
        //Reture the  budget
        var budget =  budgetCtrl.getBudget();
        //Display the budget on the  UI 
      
        UICtrl.displayBudget(budget);

    };


    var updatePercentages = function(){

        //calculate 
            budgetCtrl.calculatePercentages();


        //Read pe
         var percentage = budgetCtrl.getPercentages();

        UICtrl.displayPercentages(percentage);

    };



    var ctrlAddItem = function(){

        var input, newItem;

           //Get the field input data
        var input = UICtrl.getinput();


                if(input.description !== "" && !isNaN(input.value) && input.value > 0){
                            // Add the item to the budget
                             newItem = budgetCtrl.addItem(input.type , input.description, input.value); 

                            //Add the item to the UI
                            UICtrl.addListItem(newItem, input.type);

                            //Clear the fields
                            UICtrl.clearFields();

                            //Calculate
                            updateBudget();   


                            //Calculate 
                            updatePercentages();
                } 

            };

            var ctrlDeleteItem = function(event){

                    var  itemID;

                itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
                if(itemID){
                            
                    splitID = itemID.split('-');
                    type = splitID[0];
                    ID = parseInt(splitID[1]);

                        //delete the item from the data structure

                        budgetCtrl.deleteItem(type, ID); 
                        UICtrl.deleteListItem(itemID);

                        updateBudget();
                }

            };


    return{
            init:function(){
                console.log('Application has started');
                UICtrl.displayMouth();
                UICtrl.displayBudget({
                    budget:0,
                    totalInc:0,
                    totalExp:0,
                    percentage:-1
                });
                setupEventListeners();
            }
    };
})(budgetController, UIController);


controller.init();
