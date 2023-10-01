
// client/main.js
Template.register.events({
    'submit form': function (event) {
      event.preventDefault();
      const email = event.target.email.value;
      const password = event.target.password.value;
  
      Accounts.createUser({ email, password }, (error) => {
        if (error) {
          // Handle registration errors
        } else {
          // Redirect or perform other actions upon successful registration
        }
      });
    },
  });
 
  