angular.module('app').factory('ConfigService', [function() {

    var service = {};

    service.apiBase = 'http://quizapixyz-env-1.eba-ejkdbem2.eu-west-2.elasticbeanstalk.com/';

    return service;
}]);