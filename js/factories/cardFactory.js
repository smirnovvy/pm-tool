angular.module('app').factory('cardFactory', function () {
   let service = {};

   let cards = [
       {
            id: 1,
            description: 'Learn React',
            list_id: 1
       },
       {
            id: 2,
            description: 'Learn time managment',
            list_id: 1
       },
       {
            id: 3,
            description: 'Watch cute cats video',
            list_id: 1
       }
   ];
    service.getCards = function (list) {
       return _.filter(cards, { list_id: list.id });
    };

    service.createCard = function (list, cardDescription) {
        cards.push({
            id: _.uniqueId('card_'),
            description: cardDescription,
            list_id: list.id
        });
    };

    return service;
});