// ************************************************************************* //
// ========================================================================= //
//
// Twitter MODEL
//
// ========================================================================= //
// ************************************************************************* //

define(function(require) {

    var Backbone = require('backbone');

    var TwitterModel = Backbone.Model.extend({
        url : '/data/twitter',
        initialize : function() {
            // autofetch?
            this.fetch();
        },
        /*
        // if you want to do custom JSON parsing
        parse : function( response, options) {
            return response;
        }
        */
    });

    return TwitterModel;
});
