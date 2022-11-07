(function () {
    "use strict";
 
    if (String.prototype.format == undefined) {
        let string_format_V2_0_2 = function () {
            let args = arguments;
            let cnt = 0;
            return this.match(/{(\d+)}/g) == null && this.match(/{}/g) != null ?
                this.replace(/{}/g, (match) => {
                    return typeof args[cnt] != 'undefined' ? args[cnt++] : match;
                }) :
                this.replace(/{(\d+)}/g, (match, number) => {
                    return typeof args[number] != 'undefined' ? args[number] : match;
                });
        };
        String.prototype.format = string_format_V2_0_2;
    } else {
        if (String.prototype.format.name != 'string_format_V2_0_2') {
            throw 'String.prototype.format defined.';
        }
    }
})();
