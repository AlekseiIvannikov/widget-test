# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react';

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
});
```

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


