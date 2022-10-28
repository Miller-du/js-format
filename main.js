(function () {
    "use strict";

    if (!String.prototype.format) {
        String.prototype.format = function () {
            var args = arguments;
            return this.replace(/{(\d+)}/g, (match, number) => {
                return typeof args[number] != 'undefined' ? args[number] : match;
            });
        };
    } else {
        throw 'String.prototype.format defined.';
    }
})();
