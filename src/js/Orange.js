/**this is a main module O, Orange Module */

O = Orange = function(el) {

    function Orange(el) {
        this.el = el;
    }

    //model function 
    Orange.prototype.model = function(el) {
        //body
        var element = this.checkParamType();
        this.model = window.model(this.el);
        return this.model;
    };

    Orange.prototype.message = function(msg) {
        //body
        this.message = window.message(msg);
        return this.message;
    };

    Orange.prototype.checkParamType = function() {

        if (typeof this.el === 'undefined') {

            console.log('error : cannot use Orange with no element ');

            //throw error invalid param.
        } else if (typeof this.el === 'string') {
            if (this.el.startsWith('#')) {
                /**return element id  */
                return document.getElementById(this.el);
            } else {
                // throw new exception not valid 
            }
        } else if (typeof this.el === 'object') {
            return this.el;
        }

    };

    return new Orange(el);
};