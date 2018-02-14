/**
 * adminUserCtrlFn
 * Created by pkcms.cn on 2016/6/24.
 */
(function () {
    app.controller('adminUserCtrl',adminUserCtrlFn);
    function adminUserCtrlFn($state) {
        this.value = "welcome to admin user";
        this.jump = function () {
            $state.go('main',{'mid':789});
        }
    }
}());