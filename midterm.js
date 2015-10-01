angular.module("myApp", [])

var musicApp = function($scope){
	$scope.notesArray = []
	$scope.compareArray = []


	$scope.aButtonClick = function(){
		var x
		if($scope.notesArray.indexOf("A") === -1){
			$scope.notesArray.push("A")
		}
		else if($scope.notesArray.indexOf("A") >=0){
			x = $scope.notesArray.indexOf("A")
			$scope.notesArray.splice(x,1)
		}
		console.log($scope.notesArray)
	}
	$scope.bbButtonClick = function(){
		var x
		if($scope.notesArray.indexOf("A#/Bb") === -1){
			$scope.notesArray.push("A#/Bb")
		}
		else if($scope.notesArray.indexOf("A#/Bb") >=0){
			x = $scope.notesArray.indexOf("A#/Bb")
			$scope.notesArray.splice(x,1)
		}
		console.log($scope.notesArray)
	}
	$scope.bButtonClick = function(){
		var x
		if($scope.notesArray.indexOf("B") === -1){
		$scope.notesArray.push("B")
		}
		else if($scope.notesArray.indexOf("B") >=0){
			x = $scope.notesArray.indexOf("B")
			$scope.notesArray.splice(x,1)
		}
		console.log($scope.notesArray)
	}
	$scope.cButtonClick = function(){
		var x
		if($scope.notesArray.indexOf("C") === -1){
		$scope.notesArray.push("C")
		}
		else if($scope.notesArray.indexOf("C") >=0){
			x = $scope.notesArray.indexOf("C")
			$scope.notesArray.splice(x,1)
		}
		console.log($scope.notesArray)
	}
	$scope.dbButtonClick = function(){
		var x
		if($scope.notesArray.indexOf("C#/Db") === -1){
		$scope.notesArray.push("C#/Db")
		}
		else if($scope.notesArray.indexOf("C#/Db") >=0){
			x = $scope.notesArray.indexOf("C#/Db")
			$scope.notesArray.splice(x,1)
		}
		console.log($scope.notesArray)
	}
	$scope.dButtonClick = function(){
		var x
		if($scope.notesArray.indexOf("D") === -1){
		$scope.notesArray.push("D")
		}
		else if($scope.notesArray.indexOf("D") >=0){
			x = $scope.notesArray.indexOf("D")
			$scope.notesArray.splice(x,1)
		}
		console.log($scope.notesArray)
	}
	$scope.ebButtonClick = function(){
		var x
		if($scope.notesArray.indexOf("D#/Eb") === -1){
		$scope.notesArray.push("D#/Eb")
		}
		else if($scope.notesArray.indexOf("D#/Eb") >=0){
			x = $scope.notesArray.indexOf("D#/Eb")
			$scope.notesArray.splice(x,1)
		}
		console.log($scope.notesArray)
	}
	$scope.eButtonClick = function(){
		var x
		if($scope.notesArray.indexOf("E") === -1){
		$scope.notesArray.push("E")
		}
		else if($scope.notesArray.indexOf("E") >=0){
			x = $scope.notesArray.indexOf("E")
			$scope.notesArray.splice(x,1)
		}
		console.log($scope.notesArray)
	}
	$scope.fButtonClick = function(){
		var x
		if($scope.notesArray.indexOf("F") === -1){
		$scope.notesArray.push("F")
		}
		else if($scope.notesArray.indexOf("F") >=0){
			x = $scope.notesArray.indexOf("F")
			$scope.notesArray.splice(x,1)
		}
		console.log($scope.notesArray)
	}
	$scope.gbButtonClick = function(){
		var x
		if($scope.notesArray.indexOf("F#/Gb") === -1){
		$scope.notesArray.push("F#/Gb")
		}
		else if($scope.notesArray.indexOf("F#/Gb") >=0){
			x = $scope.notesArray.indexOf("F#/Gb")
			$scope.notesArray.splice(x,1)
		}
		console.log($scope.notesArray)
	}
	$scope.gButtonClick = function(){
		var x
		if($scope.notesArray.indexOf("G") === -1){
		$scope.notesArray.push("G")
		}
		else if($scope.notesArray.indexOf("G") >=0){
			x = $scope.notesArray.indexOf("G")
			$scope.notesArray.splice(x,1)
		}
		console.log($scope.notesArray)
	}
	$scope.abButtonClick = function(){
		var x
		if($scope.notesArray.indexOf("G#/Ab") === -1){
		$scope.notesArray.push("G#/Ab")
		}
		else if($scope.notesArray.indexOf("G#/Ab") >=0){
			x = $scope.notesArray.indexOf("G#/Ab")
			$scope.notesArray.splice(x,1)
		}		console.log($scope.notesArray)
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
			$scope.compareArray.length = 0
			notes.length = 0

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
	$scope.points=0
	var notes = []
	$scope.submitButtonClick = function(){
		if(notes.length === 0){
			$scope.winOrLose = "Set Key and Scale"
		}
		else if($scope.notesArray.sort().join() === notes.sort().join()){
			$scope.points++
			$scope.winOrLose = "Correct!"
		}
		else{
			$scope.winOrLose = "Try Again!"
		}
	}
}


angular.module("myApp").controller("myController", ["$scope", musicApp])