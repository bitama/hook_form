import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import HookForm from './Components/HookForm'
import Result from './Components/Result'
import react,{ useState} from 'react';


function App() {
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
})
  return (
    <div className="App">
      <HookForm form={state} setForm={setState}/>
      <Result data={state}/>
      
    </div>
  );
}

export default App;
