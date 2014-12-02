app.controller('itemsController', ['$scope', '$resource', function ($scope, $resource) {
    var Item = $resource('/api/items');
    
    $scope.items = [
        { name : "First item" },
        { name : "Second item" }
    ];

    $scope.createItem = function () {
        var item = new Item();
        item.name = $scope.itemName;
        item.$save(function (result) {
            $scope.items.push(result);
            $scope.itemName = '';
        });
    };
}]);