// JavaScript source code

$(function () {
    var viewModel = {
        name: ko.observable('Bob'),
        changeName: function () {
            this.name('Steve');
        },
        nameVisible: ko.observable(true)
    };

    ko.applyBindings(viewModel);
});