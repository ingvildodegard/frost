function CustomerController($scope){
	$scope.date = new Date();
	$scope.customers = [];
	$scope.customer = {};


	
	$.getJSON('/customer/all', function(data){
	     $.each(data, function(){
	        $scope.customers.push(this);
            $scope.$apply();
	     });
	});
	
	/*$scope.$watch( 'customer',function(){
		populateCustomers();
	});*/

	$scope.delete = function (idx) {
        var i = $scope.customers[idx]; 
        $.getJSON('/customer/deletecustomer/'+i._id, function(data){
        	$scope.customers.removeById(i._id);
        	$scope.$apply();
        });
    };
    
    	
    
    $scope.addcustomer = function (customer) {
        $.post('/customer/addcustomer/',customer, function(data){
        //	alert("Response: " + data);
        	$scope.$apply();
        });
        alert("Addcustomer");
        
        
      /*  $.ajax({
            type: 'POST',
            dataType: 'json',
            data: customer,
			url: '/customer/addcustomer/'
        }).done(function( response ) {
            if (response.msg === '') {}
            else {
                alert('Error: ' + response.msg);
            }
        });*/
    };
    
    
};