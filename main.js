(function () {
    "use strict";

    if (String.prototype.format == undefined) {
        String.prototype.format = function () {
            var args = arguments;
            var cnt = 0;
            return this.match(/{(\d+)}/g) == null && this.match(/{}/g) != null ?
                this.replace(/{}/g, (match) => {
                    return typeof args[cnt] != 'undefined' ? args[cnt++] : match;
                }) :
                this.replace(/{(\d+)}/g, (match, number) => {
                    return typeof args[number] != 'undefined' ? args[number] : match;
                });
        };
    } else {
        throw 'String.prototype.format defined.';
    }
})();
