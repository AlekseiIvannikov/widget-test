import './App.css';

import WidgetContainer from './components/WidgetContainer/WidgetContainer.tsx';
import SelectedElementsProvider from './providers/SelectedElementsProvider';

function App() {
  return (
    <SelectedElementsProvider>
      <WidgetContainer />
    </SelectedElementsProvider>
  );
}

export default App;
