import logo from './logo.svg';
import './App.css';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
import EventsFunctional from './components/EventsFunctional';
import EventsClass from './components/EventsClass';
import ConditionalRenderingFunctional from './components/ConditionalRenderingFunctional';
import ConditionalRenderingClass from './components/ConditionalRenderingClass';
import NestingComponents from './components/NestingComponents';
import MethodsAsPropsParent from "./components/MethodsAsPropsParent";
import RenderingLists from './components/RenderingLists';
import LifeCyclesCDM from "./components/LifeCyclesCDM";
import LifeCyclesCDU from "./components/LifeCyclesCDU";
import LifeCyclesCWU from "./components/LifeCyclesCWU";
import ControlledForm from './components/ControlledForm';
import UncontrolledForm from './components/UncontrolledForm'

function App() {
  return <div className="App">
        <UncontrolledForm />
  </div>;
}

export default App;
