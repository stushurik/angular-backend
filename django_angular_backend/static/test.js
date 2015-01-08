describe('IndexController', function() {
  beforeEach(module('ngTest'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('$scope.firstName', function() {

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
});