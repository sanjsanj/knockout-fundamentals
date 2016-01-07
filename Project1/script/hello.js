// JavaScript source code

$(function () {
    var data = [{ name: 'Bob' }, { name: 'Tim' }, { name: 'Tom' }];
    var viewModel = {
        name: ko.observable('Bob'),
        changeName: function () {
            this.name('Steve');
        },
        nameVisible: ko.observable(true),
        list: ko.observableArray(data),
        addItem: function () {
            this.list.push({ name: 'Steve' });
        },
        removeItem: function () {
            this.list.pop();
        }
    };
    viewModel.displayName = ko.computed(function () {
        return this.name() + ' is ' + (!this.nameVisible() ? 'not ' : '') + 'visible';
    }, viewModel);

    ko.applyBindings(viewModel);
});