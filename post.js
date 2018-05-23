"use strict"

{
    let post = {
        bindings: {
            title: "<",
            body: "<"
        },
        template:`<h2> {{$ctrl.title}} </h2>
            <p> {{ctrl.body}} </p>`,
             controller: function() {
                 let vm = this;
                //  vm.title = "slim shady drops a new album";
                //  vm.body = "my post body";
            

    }

    };

// want title/ body in social posts array to grab 
// keep it general 
// & in binding if calling function

    angular
    .module("app")
    .component("post", post);
}