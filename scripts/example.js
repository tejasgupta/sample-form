var exampleApp = angular.module('exampleApp', ['ngMessages']);

exampleApp.directive('validState', function () {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, element, attr, ctrl) {
            function customValidator(ngModelValue) {

                var usStates = [
                {name: 'ALABAMA', abbreviation: 'AL'},
                {name: 'ALASKA', abbreviation: 'AK'},
                {name: 'AMERICAN SAMOA', abbreviation: 'AS'},
                {name: 'ARIZONA', abbreviation: 'AZ'},
                {name: 'ARKANSAS', abbreviation: 'AR'},
                {name: 'CALIFORNIA', abbreviation: 'CA'},
                {name: 'COLORADO', abbreviation: 'CO'},
                {name: 'CONNECTICUT', abbreviation: 'CT'},
                {name: 'DELAWARE', abbreviation: 'DE'},
                {name: 'DISTRICT OF COLUMBIA', abbreviation: 'DC'},
                {name: 'FEDERATED STATES OF MICRONESIA', abbreviation: 'FM'},
                {name: 'FLORIDA', abbreviation: 'FL'},
                {name: 'GEORGIA', abbreviation: 'GA'},
                {name: 'GUAM', abbreviation: 'GU'},
                {name: 'HAWAII', abbreviation: 'HI'},
                {name: 'IDAHO', abbreviation: 'ID'},
                {name: 'ILLINOIS', abbreviation: 'IL'},
                {name: 'INDIANA', abbreviation: 'IN'},
                {name: 'IOWA', abbreviation: 'IA'},
                {name: 'KANSAS', abbreviation: 'KS'},
                {name: 'KENTUCKY', abbreviation: 'KY'},
                {name: 'LOUISIANA', abbreviation: 'LA'},
                {name: 'MAINE', abbreviation: 'ME'},
                {name: 'MARSHALL ISLANDS', abbreviation: 'MH'},
                {name: 'MARYLAND', abbreviation: 'MD'},
                {name: 'MASSACHUSETTS', abbreviation: 'MA'},
                {name: 'MICHIGAN', abbreviation: 'MI'},
                {name: 'MINNESOTA', abbreviation: 'MN'},
                {name: 'MISSISSIPPI', abbreviation: 'MS'},
                {name: 'MISSOURI', abbreviation: 'MO'},
                {name: 'MONTANA', abbreviation: 'MT'},
                {name: 'NEBRASKA', abbreviation: 'NE'},
                {name: 'NEVADA', abbreviation: 'NV'},
                {name: 'NEW HAMPSHIRE', abbreviation: 'NH'},
                {name: 'NEW JERSEY', abbreviation: 'NJ'},
                {name: 'NEW MEXICO', abbreviation: 'NM'},
                {name: 'NEW YORK', abbreviation: 'NY'},
                {name: 'NORTH CAROLINA', abbreviation: 'NC'},
                {name: 'NORTH DAKOTA', abbreviation: 'ND'},
                {name: 'NORTHERN MARIANA ISLANDS', abbreviation: 'MP'},
                {name: 'OHIO', abbreviation: 'OH'},
                {name: 'OKLAHOMA', abbreviation: 'OK'},
                {name: 'OREGON', abbreviation: 'OR'},
                {name: 'PALAU', abbreviation: 'PW'},
                {name: 'PENNSYLVANIA', abbreviation: 'PA'},
                {name: 'PUERTO RICO', abbreviation: 'PR'},
                {name: 'RHODE ISLAND', abbreviation: 'RI'},
                {name: 'SOUTH CAROLINA', abbreviation: 'SC'},
                {name: 'SOUTH DAKOTA', abbreviation: 'SD'},
                {name: 'TENNESSEE', abbreviation: 'TN'},
                {name: 'TEXAS', abbreviation: 'TX'},
                {name: 'UTAH', abbreviation: 'UT'},
                {name: 'VERMONT', abbreviation: 'VT'},
                {name: 'VIRGIN ISLANDS', abbreviation: 'VI'},
                {name: 'VIRGINIA', abbreviation: 'VA'},
                {name: 'WASHINGTON', abbreviation: 'WA'},
                {name: 'WEST VIRGINIA', abbreviation: 'WV'},
                {name: 'WISCONSIN', abbreviation: 'WI'},
                {name: 'WYOMING', abbreviation: 'WY'}
                ];

                var isValid = false;
                for (var i = 0; i < usStates.length; i++) {
                    if (usStates[i].name == ngModelValue || usStates[i].abbreviation == ngModelValue) {
                        isValid = true;
                        break;
                    }
                }
                ctrl.$setValidity('usStateValidator', isValid);
                return ngModelValue;
            }

            ctrl.$parsers.push(customValidator);
        }
    };
});

exampleApp.controller('ExampleController', ['$scope', function ($scope) {
    $scope.errorMessage = '';


    $scope.charityOrgs = [
    {id: 1, name: 'Bill and Melinda Gates'},
    {id: 2, name: 'SOS Childerens village international'},
    {id: 3, name: 'Marie Cuire'},
    {id: 4, name: 'The Ramblers'},
    {id: 5, name: 'One Laptop per child'}
    ];

    $scope.submitForm=function(){
        $scope.errorMessage = '';
        if ($scope.exampleForm.firstName.$invalid){
            $scope.errorMessage += "Please enter valid First Name. ";
        }

        if($scope.exampleForm.lastName.$invalid) {
            $scope.errorMessage += "Please enter valid Last Name. ";
        }

        if($scope.exampleForm.email.$invalid) {
            $scope.errorMessage += "Please enter valid Email. ";
        }

        if($scope.exampleForm.zip.$invalid) {
            $scope.errorMessage += "Please enter valid zip code. ";
        }


        // if no errors
        if ($scope.errorMessage == '') {
            $scope.errorMessage = "Form Submitted. Thank you."
        }
    }
}]);
