// JavaScript source code

$(function () {
    var viewModel = {
        name: ko.observable('Bob'),
        changeName: function () {
            this.name('Steve');
        }
    };

    ko.applyBindings(viewModel);
});