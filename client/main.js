import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import App from '../imports/ui/App.js';

// calls when page is loaded and ready
Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});
