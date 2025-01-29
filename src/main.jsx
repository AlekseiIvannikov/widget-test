import ReactDOM from 'react-dom';

import MyWidgetComponent from './App.tsx';

(function() {
  window.renderMyWidget = (containerId, props) => {
    ReactDOM.render(<MyWidgetComponent {...props} />, document.getElementById(containerId));
  };

  window.unmountMyWidget = (containerId) => {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
  };
})();
