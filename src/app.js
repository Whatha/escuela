// script.js

var scotchApp = angular.module('scotchApp', ['ngRoute', 'ngAnimate']);

    // configure our routes
    scotchApp.config(function($routeProvider) {
    	$routeProvider

            // route for the home page
            .when('/', {
            	templateUrl : 'pages/home.html',
            	controller  : 'mainController'
            })
 			.when('/people', {
            	templateUrl : 'pages/people.html',
            	controller  : 'mainController'
            })
            // route for the about page
            .when('/about', {
            	templateUrl : 'pages/about.html',
            	controller  : 'aboutController'
            })
            .when('/home', {
            	templateUrl : 'pages/home.html',
            	controller  : 'mainController'
            })

            // route for the contact page
            .when('/contact', {
            	templateUrl : 'pages/contact.html',
            	controller  : 'contactController'
            })

            .when('/members', {
            	templateUrl : 'pages/members.html',
            	controller  : 'contactController'
            });
        });

    // create the controller and inject Angular's $scope
    scotchApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    scotchApp.controller('aboutController', function($scope) {
    	$scope.message = 'Look! I am an about page.';

    /*	$scope.hoverOut = function(event){
    			    var el = getElement(event);
    		el.removeClass('active');
    		$('.ızgara').children('.kolon').not('.active').removeClass('inactive');
    	};

    	$scope.hoverIn = function(event){
    			  
	    var el = getElement(event);

    		el.addClass('active'); $('.ızgara').children('.kolon').not('.active').addClass('inactive');
    	};*/
    });
function getElement(event) {
		return angular.element(event.srcElement || event.target);
	}
    scotchApp.controller('contactController', function($scope) {
    	$scope.message = 'Contact us! JK. This is just a demo.';
    });

  $('.kolon').each(function() {
        $(this).mouseover(function() {
            $(this).addClass('active'); $('.ızgara').children('.kolon').not('.active').addClass('inactive');
        });
        $(this).mouseleave(function() {
            $(this).removeClass('active');
            $('.ızgara').children('.kolon').not('.active').removeClass('inactive');
        });
    });

