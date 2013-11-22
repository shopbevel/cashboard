// ************************************************************************* //
// ========================================================================= //
//
// Instagram MODEL
//
// ========================================================================= //
// ************************************************************************* //

define(function(require) {

    var Backbone = require('backbone');

    var InstagramModel = Backbone.Model.extend({
        url : '/data/instagram',
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

    return InstagramModel;
});