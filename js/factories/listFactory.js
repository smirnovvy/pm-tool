angular.module('app').factory('listFactory', function () {
    let service = {};

    let lists = [
        {
            id: 1,
            listName: 'Planning'
        },
        {
            id: 2,
            listName: 'In Progress'
        },
        {
            id: 3,
            listName: 'Testing'
        },
        {
            id:4,
            listName: 'Done'
        }
    ];

    service.getLists = function() {
        return lists;
    };

    service.addList = function(listName) {
        lists.push({
            id: _.uniqueId('list_'),
            listName: listName
        });
    };

    service.removeList = function (list) {
        _.pull(lists, list);
    };

    return service;
});