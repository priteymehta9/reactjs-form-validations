import './App.css';
import Header from  './layout/Header';
import RegistrationForm  from './components/RegistrationForm'; //using formik

function App() {
  return (
    <div className="App">
     <Header></Header>
     <RegistrationForm></RegistrationForm>
    </div>
  );
}

export default App;
