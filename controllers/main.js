/**
 * mainCtrl
 * Created by pkcms.cn on 2016/6/24.
 */
(function () {
    "use strict"
    app.controller("mainCtrl", mainCtrlFn);
    function mainCtrlFn($stateParams) {
        console.log(this);
        var tmpParas = $stateParams;
        this.value = "Hello World" + tmpParas.mid;
    }
}())