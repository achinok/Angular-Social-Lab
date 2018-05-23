// "use strict"
// {


    <div id="bottomContainer" ng-hide="bottomContainer" ng-click="bottomContainer= true"></div>
    <h2>Title</h2>
    <input type="text" ng-model="ctrlnewSocialPosts" id="inputBottomContainer" ng-submit="ctrl.add()">
    <h2>Thought</h2>
    <input type="text" id="newThought" ng-model="ctrlNewThought" ng-submit="ctrl.add()">
    <div id="addPost" type= "button"></div>
</div>






//     angular
//     .module("app")
//     .component("postForm", postForm);
// }