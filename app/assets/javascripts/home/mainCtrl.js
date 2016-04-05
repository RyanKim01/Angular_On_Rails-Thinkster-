.controller('MainCtrl', ['$scope', 'posts', function($scope, posts) {
    $scope.posts = posts.posts;

    $scope.addPost = function() {
      if (!$scope.title || $scope.title === "") {
        return;
      }
      $scope.posts.push({
        title: $scope.title,
        upvotes: 0,
        link: $scope.link,
        comments: [{
          author: 'Joe',
          body: 'Cool post!',
          upvotes: 0
        }, {
          author: 'Bob',
          body: 'Great!',
          upvotes: 0
        }]
      });
      $scope.title = "";
      $scope.link = "";
    };

    $scope.incrementUpvotes = function(post) {
      post.upvotes += 1;
    };
  }]);
