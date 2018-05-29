"use strict"

{
// when 
    let postForm = {
        bindings: {
            posts: "<"
        },

        templateUrl: "socialPosts.html",

        controller: function() {
            let vm = this;
            vm.PushNewPost = function(newTitle, newBody) {
                let newPost = {
                    title: newTitle,
                    body: newBody
                }
                vm.posts.push(ctrl.newPost);
                // push one thing at a time from posts in array of posts
            }

    }
}

    angular
    .module("app")
    .component("postForm", postForm);
    
}