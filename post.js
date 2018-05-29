"use strict"
// child needs to be bound
// < is for strings
// bindings coming from 
//$ctrl here is coming from this file.  just ask from title and body from elsewhere
{
    let post = {
        bindings: {
            title: "<",
            body: "<"
        },

        template:`<h2> {{$ctrl.title}} </h2>
            <p> {{$ctrl.body}} </p>`,
             controller: function() {
                 let vm = this;
                //  vm.title = "slim shady drops a new album";
                //  vm.body = "my post body";
            

    }

    };

// want x button in here because it would cancel any item
// want title/ body in social posts array to grab 
// keep it general 
// & in binding if calling function

    angular
    .module("app")
    .component("post", post);
}