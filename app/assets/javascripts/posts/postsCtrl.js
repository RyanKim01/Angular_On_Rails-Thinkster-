angular.module('flapperNews')
.controller('PostsCtrl', ['$scope', '$stateParams', 'posts', 'post', function($scope, posts, post) {
	$scope.post = post;

	resolve: {
		post: ['$stateParams', 'posts', function($stateParams, posts){
			return posts.get($stateParams.id);
		}]
	};

	$scope.addComment = function(){
	  if($scope.body === '') { return; }
	  posts.addComment(post.id, {
	    body: $scope.body,
	    author: 'user',
	  }).success(function(comment) {
	    $scope.post.comments.push(comment);
	  });
	  $scope.body = '';
	};

	$scope.incrementUpvotes = function(comment) {
		posts.upvoteComment(post, comment);
	};

}]);
