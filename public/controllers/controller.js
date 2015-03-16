var myapp = angular.module('myapp',[]);
myapp.controller('appctrl',['$scope','$http',function($scope,$http){
console.log("hello");

$scope.ph_numbr = /^\+?\d{2}[- ]?\d{3}[- ]?\d{5}$/;

var refresh = function() {
$http.get('/contactlist').success(function(response){
console.log("i got the data");
$scope.contactlist = response;
$scope.contact = "";
});

};
refresh();

$scope.addcontact = function() {
console.log($scope.contact);
$http.post('/contactlist',$scope.contact).success(function(response) {
console.log(response);
refresh();
});

};

$scope.remove = function(id) {
console.log(id);
$http.delete('/contactlist/' + id).success(function(response) {
refresh();

//  $scope.students.splice(index, 1);


});
};
$scope.edit = function(id) {
console.log(id);
$http.get('/contactlist/' + id).success(function(response) {
$scope.contact = response;
});
};

$scope.update = function(id) {
console.log($scope.contact._id);
$http.put('/contactlist/' + $scope.contact._id,$scope.contact).success(function(response) {
refresh();
});
};
$scope.deselect = function() {
$scope.contact = "";
}
$scope.mySortFunction = function(id) {
 if(isNaN(id[$scope.sortExpression]))
  return id[$scope.sortExpression];
 return parseInt(id[$scope.sortExpression]);
}

}]);

