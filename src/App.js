import Modal from './components/Modal';
import Todo from './components/Todo';
import Backdrop from './components/Backdrop';

function App() {
  return <div>
    <h1>my Todos</h1>
    <Todo text='Learn React'/>
    <Modal/>
    <Backdrop/>
    </div>;
}

export default App;
