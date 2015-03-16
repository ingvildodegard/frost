{"filter":false,"title":"users.js","tooltip":"/client/app/scripts/controllers/users.js","undoManager":{"mark":34,"position":34,"stack":[[{"group":"doc","deltas":[{"start":{"row":0,"column":0},"end":{"row":22,"column":0},"action":"insert","lines":["'use strict';","","/**"," * @ngdoc function"," * @name clientApp.controller:MainCtrl"," * @description"," * # MainCtrl"," * Controller of the clientApp"," */","angular.module('eztravelApp').","\tcontroller('TripsCtrl', function ($scope, $http) {","    \t$http.get(\"/api/trips\").success(function(response) {","    \t\t$scope.trips = response;","    \t\t$scope.trips.forEach(function(trip) {","    \t\t\ttrip.start = Date.parse(trip.start);","    \t\t\ttrip.end = Date.parse(trip.end);","    \t\t\ttrip.created_at = Date.parse(trip.created_at);","    \t\t}","    \t\t);","    \t});","    });","",""]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":16},"end":{"row":9,"column":24},"action":"remove","lines":["eztravel"]},{"start":{"row":9,"column":16},"end":{"row":9,"column":17},"action":"insert","lines":["f"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":17},"end":{"row":9,"column":18},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":18},"end":{"row":9,"column":19},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":19},"end":{"row":9,"column":20},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":9,"column":20},"end":{"row":9,"column":21},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":13},"end":{"row":10,"column":17},"action":"remove","lines":["Trip"]},{"start":{"row":10,"column":13},"end":{"row":10,"column":14},"action":"insert","lines":["U"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":14},"end":{"row":10,"column":15},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":15},"end":{"row":10,"column":16},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":10,"column":16},"end":{"row":10,"column":17},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":21},"end":{"row":11,"column":26},"action":"remove","lines":["trips"]},{"start":{"row":11,"column":21},"end":{"row":11,"column":22},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":22},"end":{"row":11,"column":23},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":23},"end":{"row":11,"column":24},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":24},"end":{"row":11,"column":25},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":11,"column":25},"end":{"row":11,"column":26},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":13},"end":{"row":12,"column":18},"action":"remove","lines":["trips"]},{"start":{"row":12,"column":13},"end":{"row":12,"column":14},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":14},"end":{"row":12,"column":15},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":15},"end":{"row":12,"column":16},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":16},"end":{"row":12,"column":17},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":12,"column":17},"end":{"row":12,"column":18},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":13},"end":{"row":13,"column":18},"action":"remove","lines":["trips"]},{"start":{"row":13,"column":13},"end":{"row":13,"column":14},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":14},"end":{"row":13,"column":15},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":15},"end":{"row":13,"column":16},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":16},"end":{"row":13,"column":17},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":17},"end":{"row":13,"column":18},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":36},"end":{"row":13,"column":40},"action":"remove","lines":["trip"]},{"start":{"row":13,"column":36},"end":{"row":13,"column":37},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":37},"end":{"row":13,"column":38},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":38},"end":{"row":13,"column":39},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":13,"column":39},"end":{"row":13,"column":40},"action":"insert","lines":["r"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":7},"end":{"row":14,"column":11},"action":"remove","lines":["trip"]},{"start":{"row":14,"column":7},"end":{"row":14,"column":11},"action":"insert","lines":["user"]}]}],[{"group":"doc","deltas":[{"start":{"row":14,"column":31},"end":{"row":14,"column":35},"action":"remove","lines":["trip"]},{"start":{"row":14,"column":31},"end":{"row":14,"column":35},"action":"insert","lines":["user"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":7},"end":{"row":15,"column":11},"action":"remove","lines":["trip"]},{"start":{"row":15,"column":7},"end":{"row":15,"column":11},"action":"insert","lines":["user"]}]}],[{"group":"doc","deltas":[{"start":{"row":15,"column":29},"end":{"row":15,"column":33},"action":"remove","lines":["trip"]},{"start":{"row":15,"column":29},"end":{"row":15,"column":33},"action":"insert","lines":["user"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":7},"end":{"row":16,"column":11},"action":"remove","lines":["trip"]},{"start":{"row":16,"column":7},"end":{"row":16,"column":11},"action":"insert","lines":["user"]}]}],[{"group":"doc","deltas":[{"start":{"row":16,"column":36},"end":{"row":16,"column":40},"action":"remove","lines":["trip"]},{"start":{"row":16,"column":36},"end":{"row":16,"column":40},"action":"insert","lines":["user"]}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":6,"column":13},"end":{"row":6,"column":13},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1426537554759,"hash":"ea41b31db5a539209ac9875313dfcfd6e266a365"}