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
		scaleName: "Ionian (Major)",
		scalePattern: [2,2,1,2,2,2,1]
	},
	{
		scaleName: "Dorian",
		scalePattern: [2,1,2,2,2,1,2]
	},
	{
		scaleName: "Phrygian",
		scalePattern: [1,2,2,2,1,2,2]
	},
	{
		scaleName: "Lydian",
		scalePattern: [2,2,2,1,2,2,1]
	},
	{
		scaleName: "Mixolydian",
		scalePattern: [2,2,1,2,2,1,2]
	},
	{
		scaleName: "Aeolian (Minor)",
		scalePattern: [2,1,2,2,1,2,2]
	},
	{
		scaleName: "Locrian",
		scalePattern: [1,2,2,1,2,2,2]
	},
	{
		scaleName: "Half-Whole Diminished",
		scalePattern: [1,2,1,2,1,2,1,2]
	},
	{
		scaleName: "Whole-Half Diminished",
		scalePattern: [2,1,2,1,2,1,2,1]
	},
	{
		scaleName: "Harmonic Minor",
		scalePattern: [2,1,2,2,1,3,1]
	},
	{
		scaleName: "Melodic Minor",
		scalePattern: [2,1,2,2,2,2,1]
	}
	]

	
	$scope.setKeyScale = function(){
			$scope.keyIndex
			for(var i=0; i<($scope.keysArray.length/2); i++){
				if($scope.keysArray[i].key === $scope.selectKeys){
					$scope.keyIndex = i
				}
			}
			var position = $scope.keyIndex
			for ( var i = 0; i < $scope.scalesArray[$scope.selectScale].scalePattern.length; i++ ) {
				$scope.compareArray.push($scope.keysArray[position])
				position += $scope.scalesArray[$scope.selectScale].scalePattern[i]
			}
			$scope.compareArray.filter(function(el){
				notes.push(el.key);
			})
			console.log(notes)
	}
	var notes = []
	$scope.submitButtonClick = function(){
		if($scope.notesArray.join() === notes.join()){
			alert("Correct!")
		}
		else{
			alert("Try Again!")
		}
	}
}



















angular.module("myApp").controller("myController", ["$scope", musicApp])