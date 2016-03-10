/**
 * Created by danle on 2/29/16.
 */
(function () {
    angular
        .module('portfolioApp')
        .controller('workController', workController);

    function workController () {

        $('.dimmable')
            .dimmer({
                on: 'hover'
            })
        ;

    };

})();