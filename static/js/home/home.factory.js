'use strict';

HomeModule.factory("HomeFactory", function($q, $http, $location, $rootScope){

	var factory = {};

	factory.getProjects = function(){
		var deferred = $q.defer();
		$http({
            method: 'GET',
            url: $rootScope.baseUrl + 'projects',
            headers: {
                'Content-Type': 'application/json',
            },
            data: null
        }).then(function(result) {
            var data = result.data;
            if (data.error_code == 0) {
            	var projects= data.data;
                deferred.resolve(projects);
            } else {
                deferred.reject(data);
            }
        }, function(error) {
            deferred.reject(error);
        });
        return deferred.promise;
	};

	return factory;

})
