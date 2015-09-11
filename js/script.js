angular.module('myApp', [])
  .controller('myCtrl', function($scope){
    "use strict";
    $scope.words = [
    {word: 'Name', placeholder:'name'},
    {word: 'jobTitle', placeholder:'job title'},
    {word: 'tediousTask', placeholder:'tedious task'},
    {word: 'dirtyTask', placeholder:'dirty task'},
    {word: 'celebrity', placeholder:'celebrity'},
    {word: 'uselessSkill', placeholder:'useless skill'},
    {word: 'obnoxiousCelebrity', placeholder:'obnoxious Celebrity'},
    {word: 'hugeNumber', placeholder:'huge number'},
    {word: 'adjective', placeholder:'adjective'}
    ];

    $scope.mainText = true;

    $scope.submit = function(){
      var validForm = $scope.myForm.$valid;
      console.log(validForm);
      var validName = $scope.myForm.myName.$valid;
      var validJobTitle = $scope.myForm.myJobTitle.$valid;
      var validTediousTask= $scope.myForm.myTediousTask.$valid;
      var validDirtyTask = $scope.myForm.myDirtyTask.$valid;
      var validCelebrity = $scope.myForm.myCelebrity.$valid;
      var validUselessSkill = $scope.myForm.myUselessSkill.$valid;
      var validObnoxiousCelebirty = $scope.myForm.myObnoxiousCelebirty.$valid;
      var validHugeNumber = $scope.myForm.myHugeNumber.$valid;
      var validAdjective = $scope.myForm.myAdjective.$valid;

      if(validForm || validName || validJobTitle || validTediousTask || validDirtyTask || validCelebrity || validUselessSkill || validObnoxiousCelebirty || validHugeNumber || validAdjective){
        // Hide Inputs if all the fields are filled.
        $scope.blankWords = true;
        $scope.mainText = false;
      }
    };
    // Reset Button
    $scope.startOver = function(){
      $scope.blankWords = false;
      $scope.mainText = true;
    };
  })
