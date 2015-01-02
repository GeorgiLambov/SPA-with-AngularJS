onlineExchange.directive('browse', [function () {
    return {
        restrict: 'A',
        templateUrl: 'views/directives/browse.html',
        link: function (scope, element) {
            scope.fileSelected = function (fileInputField) {
                delete scope.adData.imageDataUrl;
                var file = fileInputField.files[0];
                if (file.type.match(/image\/.*/)) {
                    var reader = new FileReader();
                    reader.onload = function () {
                        scope.adData.imageDataUrl = reader.result;
                        $(".image-box").html("<img src='" + reader.result + "'>");
                    };
                    reader.readAsDataURL(file);
                } else {
                    $(".image-box").html("<p>File type not supported!</p>");
                }
            }
        }
    }
}]);
