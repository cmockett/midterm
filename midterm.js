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


	$scope.keysArray = [
	{
		key: "A",
	},
	{
		key: "A#/Bb",
	},
	{
		key: "B",
	},
	{
		key: "C",
	},
	{
		key: "C#/Db",
	},
	{
		key: "D",
	},
	{
		key: "D#/Eb",
	},
	{
		key: "E",
	},
	{
		key: "F",
	},
	{
		key: "F#/Gb",
	},
	{
		key: "G",
	},
	{
		key: "G#/Ab",
	},
	{
		key: "A",
	},
	{
		key: "A#/Bb",
	},
	{
		key: "B",
	},
	{
		key: "C",
	},
	{
		key: "C#/Db",
	},
	{
		key: "D",
	},
	{
		key: "D#/Eb",
	},
	{
		key: "E",
	},
	{
		key: "F",
	},
	{
		key: "F#/Gb",
	},
	{
		key: "G",
	},
	{
		key: "G#/Ab",
	},
]

	$scope.scalesArray = [
	{
		scale: "Ionian (Major)",
		scalePattern: [2,2,1,2,2,2,1]
	},
	{
		scale: "Dorian",
		scalePattern: [2,1,2,2,2,1,2]
	},
	{
		scale: "Phrygian",
		scalePattern: [1,2,2,2,1,2,2]
	},
	{
		scale: "Lydian",
		scalePattern: [2,2,2,1,2,2,1]
	},
	{
		scale: "Mixolydian",
		scalePattern: [2,2,1,2,2,1,2]
	},
	{
		scale: "Aeolian (Minor)",
		scalePattern: [2,1,2,2,1,2,2]
	},
	{
		scale: "Locrian",
		scalePattern: [1,2,2,1,2,2,2]
	},
	{
		scale: "Half-Whole Diminished",
		scalePattern: [1,2,1,2,1,2,1,2]
	},
	{
		scale: "Whole-Half Diminished",
		scalePattern: [2,1,2,1,2,1,2,1]
	},
	{
		scale: "Harmonic Minor",
		scalePattern: [2,1,2,2,1,3,1]
	},
	{
		scale: "Melodic Minor",
		scalePattern: [2,1,2,2,2,2,1]
	}
	]

	
	$scope.setKeyScale = function(){
		$scope.compareArray.push($scope.selectKeys)
				// for(var i =0; i < $scope.selectScale.length; i++){
		// 	for(var j=$scope.selectKeys; j < $scope.keysArray.length; j+[i]){
		// 		$scope.compareArray.push(j)
		// 	}
		// }
			for(var i = 0; i<$scope.selectScale.length; i+=$scope.selectScale[i]){
				$scope.compareArray.push()
			}





		console.log($scope.selectKeys)
		console.log($scope.selectScale)
		console.log($scope.compareArray)
	}

	$scope.submitButtonClick = function(){
		if($scope.notesArray.join() === $scope.compareArray.join()){
			alert("Correct!")
		}
		else{
			alert("Try Again!")
		}
	}
}



















angular.module("myApp").controller("myController", ["$scope", musicApp])