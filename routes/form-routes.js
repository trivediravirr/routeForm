import { FlowRouterTitle } from 'meteor/ostrio:flow-router-title';
import { Meteor } from 'meteor/meteor';


FlowRouter.route('/form-route', {
    name: 'Form Route',
    // title: 'Form Route',
   action: function() {
      BlazeLayout.render('route_form');
   }
 });
//  FlowRouter.route('/', {
//     name: 'Form Route2',
//     // title: 'Form Route',
//    action: function() {
//       BlazeLayout.render('hello');
//    }
//  });

//  FlowRouter.route('/form-route', {
//     name: 'Form Rout',
//     action(params, queryParams) {
//       console.log("Looking at a list?");
//     }
//   });