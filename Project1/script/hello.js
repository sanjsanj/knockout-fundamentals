// JavaScript source code

$(function () {
    var viewModel = {
        name: ko.observable('Bob'),
        changeName: function () {
            this.name('Steve');
        },
        nameVisible: ko.observable(true)
    };

    viewModel.displayName = ko.computed(function () {
        return this.name() + ' is ' + (!this.nameVisible() ? 'not ' : '') + 'visible';
    }, viewModel);

    ko.applyBindings(viewModel);
});