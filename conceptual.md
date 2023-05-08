### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
Its purpose is to help developers define a routing system for their applications which allows users to navigate between different pages without loading a new hmtml page
- What is a single page application?
SPA is a web application that operates within a single web page without the need for full page relaods for every user interaction.
- What are some differences between client side and server side routing?
On server-side the server handles all requests for a particular URL and sends back a complete HTML page as response. Client side routing moves most of the routing logic to the client side using javascript tomanage navigation and rendering of different components or views
- What are two ways of handling redirects with React Router? When would you use each?
One way is to use programmatic navigation with the history object provided by React Router and the ohter is to use the Redirect component provided by React Router
- What are two different ways to handle page-not-found user experiences using React Router? 
One way is to use Switch component provided by React Router to define a default route at the end of all other routes. The other way is to use the withRouter higher-order component provided by React Router to wrap a component and access the route information
- How do you grab URL parameters from within a component using React Router?
by using the 'useParams()' hook provided by the "react-router-dom"
- What is context in React? When would you use it?
Context is a way to pass data down the component tree without having to pass props manually at every level
- Describe some differences between class-based components and function
  components in React.
Class-based components are defined as ES6 classes and function components are defined as plain javascript functions
- What are some of the problems that hooks were designed to solve?
Reusing stateful logic, complex component hierarchies, lifecycle methods, and separation of concerns