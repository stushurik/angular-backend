describe('IndexController', function() {
  beforeEach(module('ngTest'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

    it('Expect correct First Name in controller', function() {
      var $scope = {};
      $controller('IndexController', { $scope: $scope });
      expect($scope.firstName).toEqual('Olexandr');
    });

    it('Expect correct Last Name in controller', function() {
      var $scope = {};
      $controller('IndexController', { $scope: $scope });
      expect($scope.lastName).toEqual('Poplavskyi');
    });

    it('Expect correct date of birth in controller', function() {
      var $scope = {};
      $controller('IndexController', { $scope: $scope });

      var bd = new Date;
      bd.setFullYear(1992);
      bd.setMonth(5);
      bd.setDate(19);

      expect(+$scope.dob). toEqual(+bd);
    });

    it('Expect correct Bio in controller', function() {
      var $scope = {};
      $controller('IndexController', { $scope: $scope });
      expect($scope.bio).toEqual('student, 22 years, web-dev');
    });

    it('Expect correct Contacts in controller', function() {
      var $scope = {};
      $controller('IndexController', { $scope: $scope });
      expect($scope.contacts[0]).toEqual('+380972507835');
    });


});

describe('ContactsController', function() {

    var $controller, $httpBackend, $rootScope, $scope;
    var contactsStub = {"meta": {"limit": 5, "next": "/api/v1/contact?limit=5&offset=5", "offset": 0, "previous": null, "total_count": 13},
        "objects": [
            {"birth_date": "1933-03-02", "cellphone_number": "", "date_created": "2014-05-24T09:27:44.306000", "email": "robertabbot@gmail.com", "first_name": "Robert", "id": 1, "jabber_id": "", "last_name": "Abbott", "phone_number": "", "resource_uri": "/api/v1/contact/1"},
            {"birth_date": "1963-09-23", "cellphone_number": "", "date_created": "2014-05-24T09:28:20.149000", "email": "", "first_name": "Bruce", "id": 2, "jabber_id": "", "last_name": "Ableson", "phone_number": "", "resource_uri": "/api/v1/contact/2"},
            {"birth_date": "1945-12-31", "cellphone_number": "", "date_created": "2014-05-24T09:28:54.875000", "email": "", "first_name": "Leonard", "id": 3, "jabber_id": "", "last_name": "Adleman", "phone_number": "", "resource_uri": "/api/v1/contact/3"},
            {"birth_date": "1976-07-21", "cellphone_number": "", "date_created": "2014-05-24T09:30:13.729000", "email": "", "first_name": "Paul ", "id": 4, "jabber_id": "", "last_name": "Allen", "phone_number": "", "resource_uri": "/api/v1/contact/4"},
            {"birth_date": "1953-04-01", "cellphone_number": "", "date_created": "2014-05-24T09:30:56.328000", "email": "dankottke@gmail.com", "first_name": "Daniel ", "id": 5, "jabber_id": "", "last_name": "Kottke", "phone_number": "", "resource_uri": "/api/v1/contact/5"},
        ]};

    beforeEach(module('ngTest'));

    beforeEach(inject(function($injector, _$rootScope_,_$controller_){
        // The injector unwraps the underscores (_) from around the parameter names when matching
            $controller = _$controller_;
            $rootScope = _$rootScope_;

    }));

    describe('if server 200 and contacts exist', function() {

        beforeEach(inject(function($injector){

            $scope = $rootScope.$new();
            $httpBackend = $injector.get('$httpBackend');

            $httpBackend.when('GET', 'api/v1/contact?limit=5&offset=0').respond(200, contactsStub);
            $controller('ContactsController', { $scope: $scope });

        }));

        it('should contain 13 items', function () {

            $httpBackend.flush();

            expect($scope.error).toBe(false);
            expect($scope.contacts.length).toBe(5);

        });

        it('should be equal', function () {

            $httpBackend.flush();

            expect($scope.error).toBe(false);
            expect(JSON.stringify($scope.contacts)).toEqual(JSON.stringify(contactsStub.objects));

        });

    });

    describe('if server 200 and no contacts', function() {

        beforeEach(inject(function($injector){

            $scope = $rootScope.$new();
            $httpBackend = $injector.get('$httpBackend');

            var empty_meta = angular.copy(contactsStub["meta"]);
            empty_meta["total_count"] = 0;

            $httpBackend.when('GET', 'api/v1/contact?limit=5&offset=0').respond(200, {"meta":empty_meta, "objects": []});
            $controller('ContactsController', { $scope: $scope });

        }));

        it('should contain 0 items', function () {

            $httpBackend.flush();

            expect($scope.error).toBe(false);
            expect($scope.contacts.length).toBe(0);

        });

    });

    describe('if server 500', function() {

        beforeEach(inject(function($injector){

            $scope = $rootScope.$new();
            $httpBackend = $injector.get('$httpBackend');

            $httpBackend.when('GET', 'api/v1/contact?limit=5&offset=0').respond(500, null);
            $controller('ContactsController', { $scope: $scope });

        }));

        it('should register error', function () {

            $httpBackend.flush();

            expect($scope.error).toBe(true);
            expect($scope.contacts.length).toBe(0);

        });

    });

});