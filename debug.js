function userInp(callback) {
    const name = "vishnu parihar"; 
    callback(name);
  }
  
  userInp(function (name) {
    console.log("Hi, " + name);
  });
  