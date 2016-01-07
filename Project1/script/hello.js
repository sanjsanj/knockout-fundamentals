// JavaScript source code

$(function () {
    var viewModel = {
        name: 'Bob',
        changeName: function () {
            this.name = 'Steve';
        }
    };

    ko.applyBindings(viewModel);
});