import React from 'react';
import { IndexRoute, Router, Route, hashHistory} from 'react-router';
import Home from './components/Home/Home';
import App from './components/App/App';
import Projects from './components/Projects/Projects';
import AboutMe from './components/AboutMe/AboutMe';

Router.prototype.componentWillReceiveProps = function(nextProps) {
  let components = [];
  function grabComponents(element) {
    // This only works for JSX routes, adjust accordingly for plain JS config
    if (element.props && element.props.component) {
      components.push(element.props.component);
    }
    if (element.props && element.props.children) {
      React.Children.forEach(element.props.children, grabComponents);
    }
  }
  grabComponents(nextProps.routes || nextProps.children);
  components.forEach(React.createElement); // force patching
};

export default (
  <Router history = {hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/Projects" component={Projects} />
      <Route path="/AboutMe" component={AboutMe} />
    </Route>
  </Router>
);
