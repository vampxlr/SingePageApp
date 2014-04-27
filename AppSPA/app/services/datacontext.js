(function () {
    'use strict';

    var serviceId = 'datacontext';
    angular.module('app').factory(serviceId, ['common', datacontext]);

    function datacontext(common) {
        var $q = common.$q;

        var service = {
            getPeople: getPeople,
            getMessageCount: getMessageCount,
            getBooks: getBooks
        };

        return service;

        function getMessageCount() { return $q.when(72); }

        function getPeople() {
            var people = [
                { firstName: 'Ahsan', lastName: 'Rocky', age: 25, location: 'Dhaka' },
                { firstName: 'Dinar', lastName: 'Khan', age: 25, location: 'Dhaka' },
                { firstName: 'Sakib', lastName: 'Hossain', age: 21, location: 'Texas' },
                { firstName: 'Madelyn', lastName: 'Green', age: 18, location: 'North Dakota' },
                { firstName: 'Ella', lastName: 'Jobs', age: 18, location: 'South Dakota' },
                { firstName: 'Landon', lastName: 'Gates', age: 11, location: 'South Carolina' },
                { firstName: 'Haley', lastName: 'Guthrie', age: 35, location: 'Wyoming' }
            ];
            return $q.when(people);
        }

        function getBooks() {
            var Books = [
                { BookName: 'Ice and Fire', AuthorName: 'Milano', Pages: 2565, Publisher: 'Springer' },
                { BookName: 'Harry Potter', AuthorName: 'J.K Rowling', Pages: 323, Publisher: 'JK Publication' },
                { BookName: 'Breif History Of Time', AuthorName: 'Stephen', Pages: 234, Publisher: 'BestSeller' },
                { BookName: 'Black Hole', AuthorName: 'Ahsan Dylan', Pages: 324, Publisher: 'North Dakota' }
            ];
            return $q.when(Books);
        }


    }
})();