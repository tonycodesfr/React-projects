import "./App.css"

export default function DumebisForm() {

  function greet() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const btn = document.getElementById("btn");
    
    if (name.value == "Anthony") {
      console.log("Welcome Anthony")
      name.style.border = "1px solid green";
    } else {
      console.log("You are not authorised")
    }
    

    
  }

  return (
    <>
    <h1>Sign in</h1>
    <form className="form">
        <input type="text" placeholder="Enter user name" required id="name" className="input"/>
        <input type="email" placeholder="Enter your email" required id="email"/>
        <input type="password" placeholder="Enter your password" required id="password"/>
        <input type="button" value="Submit" onClick={greet} id="btn"/>

    </form>
    </>
  );
}