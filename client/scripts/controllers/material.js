function MaterialController($scope){
	$scope.date = new Date();
	$scope.materialList = [];
	$scope.material = {};


	
	$.getJSON('/api/all', function(data){
	     $.each(data, function(){
	        $scope.materialList.push(this);
            $scope.$apply();
	     });
	});
	
	
	$scope.delete = function (idx) {
        var i = $scope.materialList[idx]; 
        $.getJSON('/material/deletematerial/'+i._id, function(data){
        	populateMaterialList();
        	$scope.$apply();
        });
    };
    
     $scope.search = function (searchstring) {
        $.getJSON('/api/search/',"searchstring="+searchstring, function(data){
            $scope.materialList = data;
        });
        
    };
    
    	
    
    $scope.addmaterial = function (material) {
        $.post('/api/addmaterial/',material, function(data){
        	populateMaterialList();
        	$scope.$apply();
        });
        
        
      /*  $.ajax({
            type: 'POST',
            dataType: 'json',
            data: material,
			url: '/material/addmaterial/'
        }).done(function( response ) {
            if (response.msg === '') {}
            else {
                alert('Error: ' + response.msg);
            }
        });*/
    };
    
    
    function populateMaterialList(){
		$.getJSON('/material/all', function(data){
		 $scope.materialList = [];
	     $.each(data, function(){
	        $scope.materialList.push(this);
            $scope.$apply();
	     });
	});
	}
    
};