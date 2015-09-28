angular.module("myApp", [])

var musicApp = function($scope){
	$scope.notesArray = []
	$scope.compareArray = []


	$scope.aButtonClick = function(){
		$scope.notesArray.push("A")
		console.log($scope.notesArray)
	}
	$scope.bbButtonClick = function(){
		$scope.notesArray.push("A#/Bb")
		console.log($scope.notesArray)
	}
	$scope.bButtonClick = function(){
		$scope.notesArray.push("B")
		console.log($scope.notesArray)
	}
	$scope.cButtonClick = function(){
		$scope.notesArray.push("C")
		console.log($scope.notesArray)
	}
	$scope.dbButtonClick = function(){
		$scope.notesArray.push("C#/Db")
		console.log($scope.notesArray)
	}
	$scope.dButtonClick = function(){
		$scope.notesArray.push("D")
		console.log($scope.notesArray)
	}
	$scope.ebButtonClick = function(){
		$scope.notesArray.push("D#/Eb")
		console.log($scope.notesArray)
	}
	$scope.eButtonClick = function(){
		$scope.notesArray.push("E")
		console.log($scope.notesArray)
	}
	$scope.fButtonClick = function(){
		$scope.notesArray.push("F")
		console.log($scope.notesArray)
	}
	$scope.gbButtonClick = function(){
		$scope.notesArray.push("F#/Gb")
		console.log($scope.notesArray)
	}
	$scope.gButtonClick = function(){
		$scope.notesArray.push("G")
		console.log($scope.notesArray)
	}
	$scope.abButtonClick = function(){
		$scope.notesArray.push("G#/Ab")
		console.log($scope.notesArray)
	}
	$scope.submitButtonClick = function(){
		if($scope.notesArray.join() === $scope.compareArray.join()){
			alert("You win!")
		}
		else{
			alert("Try Again!")
		}
	}




}



















angular.module("myApp").controller("myController", ["$scope", musicApp])