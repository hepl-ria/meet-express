/* hepl-ria/meet-express
 *
 * /js/script.js - Discover express for node.js
 * Based on script from hepl-mmi/meet-ajax
 *
 * coded by leny@flatLand!
 * started at 18/06/2016
 */

( function() {

    "use strict";

    var fFormIsSubmitted,
        $formErrorMessage,
        $buddiesContainer,
        $buddyElement;

    fFormIsSubmitted = function( oEvent ) {
        var $self = $( this ), // our <form>
            bHasErrors = false,
            sName,
            $inputName = $self.find( "input[name=\"name\"]" ),
            sDescription,
            $textareaDescription = $self.find( "textarea[name=\"description\"]" ),
            oData = {};

        oEvent.preventDefault();

        // 1. remove has-error classes
        $self
            .find( ".form-group" )
                .removeClass( "has-error" )
                .end()
            .find( ".alert.alert-danger" )
                .remove();

        // 2. check name input
        sName = $inputName.val().trim();
        if ( sName === "" ) {
            bHasErrors = true;
            $inputName.parents( ".form-group" ).addClass( "has-error" );
        }

        // 3. check description textarea
        sDescription = $textareaDescription.val().trim();
        if ( sDescription === "" ) {
            bHasErrors = true;
            $textareaDescription.parents( ".form-group" ).addClass( "has-error" );
        }

        // 4. display error message
        if ( bHasErrors ) {
            $self.find( "fieldset" ).prepend( $formErrorMessage );
            return;
        }

        // 5. prepare data for AJAX request
        oData.name = sName;
        oData.description = sDescription;

        // 6. perform AJAX request
        $.ajax( {
            "url": $self.attr( "action" ),
            "method": $self.attr( "method" ),
            "data": oData,
            "dataType": "json",
            "error": function( oXHR, sErrorStatus ) {
                // NOTE: should be a message on html page
                console.error( sErrorStatus );
            },
            "success": function( oResponse ) {
                var $newBuddy = $buddyElement.clone();

                $newBuddy
                    .find( ".thumbnail" )
                        .attr( "title", oResponse.description )
                        .find( "img" )
                            .attr( "src", oResponse.avatar )
                            .attr( "alt", oResponse.alt )
                            .end()
                        .find( ".caption strong" )
                            .text( oResponse.name );

                $buddiesContainer
                    .find( ".col-md-12" )
                        .remove()
                        .end()
                    .append( $newBuddy );
            }
        } );
    };

    $( function() {
        $( "form" ).on( "submit", fFormIsSubmitted );

        $formErrorMessage = $( $( "#form-error-message" ).html() );
        $buddyElement = $( $( "#buddy-element" ).html() );
        $buddiesContainer = $( "#buddies-container" );
    } );

} )();
