(function () {
    'use strict';
    var controllerId = 'ahsan';
    angular.module('app').controller(controllerId, ['common', ahsan]);

    function ahsan(common) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'Ahsan';

        activate();

        function activate() {
            common.activateController([], controllerId)
                .then(function () { log('Activated Ahsan View'); });
        }
    }
})();