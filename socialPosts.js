// parent
"use strict"
{
    let socialPosts = {
        template: `<post ng-repeat="p in $ctrl.posts.title" title="p.title" body="p.body"></post>,
                    <post ng-repeat="k in $ctrl.add.newSocialPosts" task="k.task" completed="k.completed"></post>,
                <h1> {{$ctrl.hello}} </h1>,
                    <button type="button" ng-click="$ctrl.add();">Push me to add another post</button>
                    `,
        
            controller: function () {
                let vm = this;
                vm.posts = [{
                    title: "Breaking News", body: "Chimp wins lotto"
                },
                {
                    title: "Fire Sale", body: "ouerwerwe"
                },
                {
                    title: "sasdasd", body: "here"
                }
                ];
                    // push new social posts
                vm.add = function (value) {
                    let newSocialPosts = {
                        task: value,
                        completed: false
                    }
                    vm.socialPosts.push(newSocialPosts);
                }
                    // show title
                vm.hello = function (hello) {
                    const vm = this;
                    vm.message = "Hello, welcome to the component";
                    vm.alertUser = () => {
                        ("Welcome to the component!");
                    }
                    
                    // this belongs up top 
                    // <button class="button" ng-model="addPosts" ng-click="ctrl.add(ctrl.addNew)">Button to add posts</button>
                    // {{ctrl.add}}
                    
            }
        }
        };



    angular
        .module("app")
        .component("socialPosts", socialPosts)
    }