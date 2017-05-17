import React ,{Component} from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Main from './Main'; // Our custom react component
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {deepOrange500} from 'material-ui/styles/colors';


const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class Index extends Component {
render(){
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div style={styles.container}>
        <Main/>
        </div>
    </MuiThemeProvider>
  );
}
}
// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
render(<Index />, document.getElementById('app'));
