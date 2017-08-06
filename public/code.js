"use strict";

var myApp = angular.module('library', []);
myApp.controller('myLibr', function ($scope, $http) {
	var addAS = document.getElementById('add-author-section'),
   	    viewAS = document.getElementById('view-author-section'),
   	    addBS = document.getElementById('add-book-section'),
   	    viewBS = document.getElementById('view-book-section'),
   	    aS = document.getElementById('author-section'),
   	    bS = document.getElementById('book-section'),
   	    autbS = document.getElementById('book-author-section');

	$scope.decide = function() {
	addAS.style.display = "none";
   	viewAS.style.display = "block";
	}

	$scope.decide2 = function() {
	addAS.style.display = "block";
   	viewAS.style.display = "none";
	}

	$http({method: 'GET', url: '/api/authors/'}).
            then(function success(res) {
                $scope.authors=res.data;
                
        });

    $scope.decidebook = function() {
	addBS.style.display = "none";
   	viewBS.style.display = "block";
	}

	$scope.decidebook2 = function() {
	addBS.style.display = "block";
   	viewBS.style.display = "none";
	}



	$http({method: 'GET', url: '/api/books/'}).
            then(function success(res) {
                $scope.books=res.data;
                
        });



    

    $scope.authorSS = function() {
	aS.style.display = "block";
   	bS.style.display = "none";
   	autbS.style.display = "none";
	}

	$scope.bookSS = function() {
	aS.style.display = "none";
   	bS.style.display = "block";
   	autbS.style.display = "none";
	}
	$scope.authorbookSS = function() {
	aS.style.display = "none";
   	bS.style.display = "none";
   	autbS.style.display = "block";
	}
	

});