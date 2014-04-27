(function () {
    'use strict';
    var controllerId = 'ireen';
    angular.module('app').controller(controllerId, ['common', 'datacontext', ireen]);

    function ireen(common, datacontext) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'Ireen';
        vm.books = [];
        activate();
    
        function activate() {
            var promises = [ getBooks()];
            common.activateController(promises, controllerId)
                .then(function () { log('Activated Ireen View'); });
        }

        function getBooks() {
            return datacontext.getBooks().then(function (data) {
                return vm.books = data;
            });
        }

    }
})();