import ReactDOM from 'react-dom';

import MyWidgetComponent from './App.tsx';
import './styles.css';

(function() {
  window.renderMyWidget = (containerId, props) => {
    ReactDOM.render(<MyWidgetComponent {...props} />, document.getElementById(containerId));
  };

  window.unmountMyWidget = (containerId) => {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
  };
})();
