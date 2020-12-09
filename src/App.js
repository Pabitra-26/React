import logo from './logo.svg';
import './App.css';
// import Greet from './component/Greet'
// import Welcome from './component/Welcome'
// import Hello from './component/Hello'
// import Message from './component/Message'
// import Counter from './component/Counter'
// import FunctionClick from './component/FunctionClick'
// import ClassClick from './component/ClassClick'
// import EventBind from './component/EventBind'
// import ParentComponent from './component/ParentComponent'
// import UserGreeting from './component/UserGreeting'
// import ListRendering from './component/ListRendering';
// import Stylesheet from './component/Stylesheet'
// import Inline from './component/Inline'
// import './appStyles.css'
// import styles from './appStyles.module.css'
// import Form from './component/Form'
// import LifecycleA from './component/LifecycleA'
// import FragmentDemo from './component/FragmentDemo'
// import Table from './component/Table'
// import ParentComp from './component/ParentComp'
// import RefsDemo from './component/RefsDemo'
// import FocusInput from './component/FocusInput'
// import FRParentInput from './component/FRParentInput'
// import PortalDemo from './component/PortalDemo'
// import Hero from './component/Hero'
// import ErrorBoundary from './component/ErrorBoundary'
// import ClickCounter from './component/ClickCounter'
// import HoverCounter from './component/HoverCounter'
// import User from './component/User'
// import RenderProps from './component/RenderProps'
import ComponentC from './component/ComponentC'
import {UserProvider} from './component/UserContext'



function App() {
  return (
    <div className="App">
      
          {/* Hello World! */}
          {/* <Greet/> */}
          {/* <Greet name='Pabbi' heroName= 'Cutie'/>
          <Greet name='Arpu' heroName= 'SuperCute'/>
          <Greet name='Diary' heroName= 'Olaf'/> */}
          
          
          {/* <Welcome name ="Pabbi" heroName = "Cutie"/>
          <Welcome name ="Arpu" heroName = "SuperCute"/>
          <Welcome name ="Diary" heroName = "Olaf"/> */}

          {/* <Message/> */}
          {/* <Counter/> */}


          {/* <Hello/> */}
          {/* <FunctionClick/>
          <ClassClick/> */}

          {/* <EventBind/> */}
          {/* <ParentComponent/> */}
          {/* <UserGreeting/> */}
          {/* <ListRendering/> */}
          {/* <Stylesheet primary={true}/> */}
          {/* <Inline/> */}
          {/* <h1 className= 'error'>Error</h1> */}
          {/* <h1 className = {styles.success}>Success</h1> */}
          {/* <Form/> */}
          {/* <LifecycleA/> */}
          {/* <FragmentDemo/> */}
          {/* <Table/> */}
          {/* <ParentComp/> */}
          {/* <RefsDemo/> */}
          {/* <FocusInput/> */}
          {/* <FRParentInput/> */}
          {/* <PortalDemo/> */}

{/* 
          <ErrorBoundary>
          <Hero heroName='Batman'/>
          </ErrorBoundary>
          <ErrorBoundary>
          <Hero heroName='Superman'/>
          </ErrorBoundary>
          <ErrorBoundary>
          <Hero heroName='Joker'/>
          </ErrorBoundary> */}
        

        {/* <ClickCounter name='Pabbi'/> */}
        {/* <HoverCounter/> */}
        {/* <User name={(isLoggedIn)=> isLoggedIn? 'Pabbi':'Guest'}/> */}


        {/* <RenderProps>
         {(count,incrementCount)=> (
        <ClickCounter count={count}
      incrementCount={incrementCount}/>)}</RenderProps>

<RenderProps>{(count,incrementCount)=> (
        <HoverCounter count={count}
      incrementCount={incrementCount}/>)}</RenderProps> */}
      {/* <UserProvider value='Arpita'> */}
      <ComponentC/>
      {/* </UserProvider> */}

      



    </div>
  );
}

export default App;
