import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import increment from './redux/employee'

function Login() {

  const [uName, setUname] = useState("")
  const [password, setPassword] = useState("")
  const history = useHistory();
  const dispatch = useDispatch();

  const employeeCount = useSelector(state => state.employeeRedu.employeCount);
  const counter = useSelector(state => state.employeeRedu.counter);


  const handleChange = e => {
    setUname(e.target.value)

  }


  const login = () => {

    if (uName === "hruday@gmail.com" && password === "hruday123") {
      //  alert("Valid user")
      history.push('/employeeList');
    } else {
      alert("Invalid User")
    }
  }

  return (
    <>

      {/* <h1>Employee count From redux :: {employeeCount}</h1> */}
      <h1>Employee Dashboard page</h1>

      <form>
        User Name: <input type="text" value={uName} onChange={handleChange} /> <br />
        Password: <input type="password" value={password} onChange={(e) => setPassword(e.currentTarget.value)} /> <br />
        <input type="button" value="Login" onClick={login} />

      </form>
    </>
  )
}
export default Login