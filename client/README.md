# Client Web UI

The Web UI is a React SPA (create-react-app) utilizing **react-router-dom** and **axios** for routing and consuming the api, respectively. The design was implemented using **styled-components**.

## Implementation

- The components were built using the functional programming paradigm
- React Context API handles shared state management, where necessary
- A `<Protected />` component is utilized to enforce Authentication
- Authorization is persisted with localStorage
