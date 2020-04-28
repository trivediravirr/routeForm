import { Template } from 'meteor/templating';

import { RouteForm } from '../api/routeForm';
import './routeForm';
import './main.html';

// Template.route_form.helpers({
//     // tasks: [
//     //     {text: 'This is task 1'},
//     //     {text: 'This is task 2'},
//     //     {text: 'This is task 3'},
//     // ],
//     tasks () {
//         return Tasks.find({}, { sort: { createdAt: -1 }});
//     },
// });

Template.route_form.events({
    'submit .new-task'(event) {
        event.preventDefault();

        const target = event.target;
        const displayName = target.displayName.value;
        const emailAddr = target.emailAddr.value;
        RouteForm.insert({
            displayName,
            emailAddr,
            createdAt: new Date(),
        });

        target.displayName.value = '';
        target.emailAddr.value = '';
    }
});