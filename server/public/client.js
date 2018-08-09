console.log('js');
//'myApp' must match the name of the App in html
let myApp = angular.module( 'myApp', [] );

// argument in controller function must match controller from html (WelcomeController)
myApp.controller('WelcomeController', [function() {
    // assigning 'this' (the whole controller which is an object) to a variable called 'self'
    let self = this;
    self.message = 'Hello World!';
}]);


