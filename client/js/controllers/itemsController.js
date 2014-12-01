function itemsController($scope) {
    $scope.itemsCount = 1;
    
    $scope.items = [
        { name : "First item" },
        { name : "Second item" }
    ];
    
    $scope.createItem = function () {
        $scope.items.push({ name: $scope.itemName });
    };
}