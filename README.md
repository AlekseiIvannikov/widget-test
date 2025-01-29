## My Widget Library
This project is a widget library that allows you to easily embed a React-based widget into any web application. 
The widget is designed to be lightweight, customizable, and easy to integrate.

### Features
Easy Integration: The widget can be added to any HTML page with just a few lines of code.

Customizable: Pass props to the widget to customize its behavior and appearance.

Dynamic Rendering: The widget can be dynamically rendered and unmounted using provided global functions.

State Management: Uses React Context and Providers for efficient state management without relying on external libraries like MobX or Redux.

### Tech Stack 

#### React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Storage
In this project, React Context and Providers used to easily share data between components without passing props everywhere.

Why this method was chosen:
 - Keeps the code clean and simple.
 - Helps avoid prop drilling.
 - Makes the app easier to grow and maintain in the future.
 - Avoid extra package like Mobx etc(just for now).
 - Encapsulating logic.

```js
// Without provider. Duplicate state logic in multiple components
const [selectedElements, setSelectedElements] = useState([]);

// With provider:
const SelectedElementsProvider = ({ children }) => {
  const [selectedElements, setSelectedElements] = useState([]);
  return (
    <SelectedElementsContext.Provider value={{ selectedElements, setSelectedElements }}>
      {children}
    </SelectedElementsContext.Provider>
  );
};
```

Separation of concerns:
Mixing state management logic with UI logic in components can make the code harder to read and maintain.
```js
// without provider
const MyComponent = () => {
  const [selectedElements, setSelectedElements] = useState([]);
  // UI logic mixed with state management
  return <div>{selectedElements.map((element) => <div key={element}>{element}</div>)}</div>;
};

// with provider
const MyComponent = () => {
  const { selectedElements } = useSelectedElements();
  // Pure UI logic
  return <div>{selectedElements.map((element) => <div key={element}>{element}</div>)}</div>;
};
```

### How to Use
Add the Widget Container:
Add a div with a unique id to your HTML where you want the widget to appear.
```html
<body>
  <div id="my-widget-container"></div>
</body>
```
Include the Widget Script:
Add the widget script to your HTML file.
```html
<script src="dist/my-widget.umd.js"></script>
```

Render the Widget:
Use the renderMyWidget function to render the widget inside the container. You can pass custom props to the widget.
```js
<script>
  window.onload = function () {
    if (window.renderMyWidget) {
      window.renderMyWidget('my-widget-container', { someProp: 'someValue' });
    } else {
      console.error('renderMyWidget is not available');
    }
  };
</script>
```

Unmount the Widget:
If needed, unmount the widget using the unmountMyWidget function.
```js
window.unmountMyWidget('my-widget-container');
```

### Development
To build the widget locally:

Clone the repository.

Install dependencies:

```bash
npm install
```
Build the widget:

```bash
npm run build
```
npm run build
Open the index.html file in your browser to see the widget in action.