app.controller('itemsController', ['$scope', '$resource', function ($scope, $resource) {
    var Item = $resource('/api/items');
    
    Item.query(function (results){
        $scope.items = results;
    });
    
    $scope.items = [];

    $scope.createItem = function () {
        var item = new Item();
        item.name = $scope.itemName;
        item.$save(function (result) {
            $scope.items.push(result);
            $scope.itemName = '';
        });
    };
    
    $scope.delete = function (name) {
        var item = new Item();
        item.name = name;
        item.$remove({name: item.name}, function (result) {
            var oldItems = $scope.items;
            $scope.items = [];
            oldItems.forEach(function(thisItem) {
                if (thisItem.name !== name) $scope.items.push(thisItem);
            });
        });
    };
}]);