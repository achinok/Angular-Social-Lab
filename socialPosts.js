// parent   constructor needs: object with template and controller
// whats in template is 
// wrapper for smallest 
"use strict"

{
    let socialPosts = {
        template: "socialposts2.html",

            controller: function () {
                let vm = this;
                vm.posts = [{
                    title: "Breaking News", body: "Chimp wins lotto"
                },
                {
                    title: "Fire Sale", body: "very hot"
                },
                {
                    title: "Awesome Title", body: "great body"
                }
                ];
              
                vm.toggleSelect = (NewPost) => {
                    NewPost.completed = !NewPost.completed;
                },
                vm.toggle = function() {
                    vm.newPostBlueBox = !newPostBlueBox.newPostBlueBox;
                };
                
            }
        }

    angular
        .module("app")
        .component("socialPosts", socialPosts);
        // controller not needed cause lives here
    }