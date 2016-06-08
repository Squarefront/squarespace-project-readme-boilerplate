// This is a module using an object literal pattern.
// It's an easy way to organize your custom JavaScript into modules with methods.
// Since this system uses Webpack, you can reuse other modules and dependencies
// by importing them into the module.


// Here we're importing jQuery into this module so we can use various jQuery utilities.
import $ from "js/lib/jquery/dist/jquery";


let $_jsElements = null;


/**
 *
 * @public
 * @module example
 * @description A nice description of this module.
 *
 */
const example = {
    /**
     *
     * @public
     * @method init
     * @memberof example
     * @description Method runs once when window loads.
     *
     */
    init () {
        if ( this.isActive() ) {
            // Use this method to separate your
            initElement();
        }
        // console.log( "example module initialized" );
    },


    /**
     *
     * @public
     * @method isActive
     * @memberof example
     * @description Method informs of active status.
     * @returns {boolean}
     *
     */
    isActive () {
        return (this.getElements() > 0);
    },


    /**
     *
     * @public
     * @method unload
     * @memberof example
     * @description Method performs unloading actions for this module.
     *
     */
    unload () {
        // Typically unloading and tearing down isn't required unless you're
        // using a completely AJAX Squarespace website that functions like
        // a single page application.
        this.teardown();
    },


    /**
     *
     * @public
     * @method teardown
     * @memberof example
     * @description Method performs cleanup after this module. Removes events, null vars etc...
     *
     */
    teardown () {
        $_jsElements = null;
    },


    /**
     *
     * @public
     * @method getElements
     * @memberof example
     * @description Method queries DOM for this modules node.
     * @returns {number}
     *
     */
    getElements () {
        $_jsElements = $( ".js-element" );

        return ( $_jsElements.length );
    }
};


/**
 *
 * @private
 * @method execVideo
 * @memberof example
 * @description Handles execution of something.
 * @param {Object} $el The element.
 *
 */
const execElement = function ( $el ) {
    // Grab some data from $el.
    const elementData = $el.data();

    // Just another placeholder.
    console.log( elementData );
};


/**
 *
 * @private
 * @method initElements
 * @memberof example
 * @description This module would do something with your elements.
 *
 */
const initElement = function ( ) {
    const $notLoaded = $_jsElements.not( ".is-initialized" );
    let $el = null;
    let i = $notLoaded.length;

    for ( i; i--; ) {
        $el = $_jsElements.eq( i );

        $el.addClass( "is-initialized" );

        execElement( $el );
    }
};



/******************************************************************************
 * Export
*******************************************************************************/
export default example;