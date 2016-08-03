import React, { PropTypes } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Link } from 'react-router';


class App extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
  render () {
    return(
      <div>
          app
          {this.props.children}
      </div>
    )
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default App;
