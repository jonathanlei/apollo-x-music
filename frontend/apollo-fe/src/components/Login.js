import react from "react";
import axios from "axios";

function LoginBtn() {
  function handleClick (){
    async function authenticate(public_address){
      let response = await axios.get(${process.env.REACT_APP_BACKEND_URL})

    }

  }

  return (
    <div>
    </div>
  )
}
