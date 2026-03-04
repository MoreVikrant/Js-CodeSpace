 const user = {
        name : "Vikrant",
        price : 999,

        welcomeMessage : function(){
          console.log(`${this.name} , welcome to the website`)
    //       console.log(this);   // gives current context after each printing statement    
        }
  
        
        
        // this refers to the current object.
        // we can say this refers to the current context 

 }

// console.log(user); this will print the object but not the message 

user.welcomeMessage();    // Vikrant , welcome to the website

// supposee someone changed the name in the object then what will happen

user.name = "Viky"
user.welcomeMessage() // Viky , welcome to the website because we have not hardcoded the value of name


 // if i run the below commmand 

 console.log(this)         // {} because we are in the node environment
 // because there is no context in the global

 // if we print this statement in the browser inspect element then 
 // it will give the window answer 
 