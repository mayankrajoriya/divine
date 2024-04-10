import "./App.css";
function App() {
  return (
    <div className="main">
      <h1 className="fw-bolder">Welcome Back!!</h1>
      <p>Please Login On Divine Connection</p>
      <form action="/">
        <input
          className="border rounded m-2"
          type="email"
          placeholder="Email"
        ></input>
        <br></br>
        <input
          className="border rounded m-2"
          type="password"
          placeholder="Password"
        ></input>
        <br>
        </br>
      

      <a href="https://www.facebook.com/login/identify">Forget Password?</a>
      <br></br>
      <button type="submit" className="btn btn-primary btn-lg m-3">Login</button>
      </form>
      <p>
        Don't Have Account?<a href="https://www.facebook.com/signup">Register</a>
      </p>
      <h5>login with</h5>
      <div className="in">
        <a href="https://www.google.com/" >
        <img
          src="https://freelogopng.com/images/all_img/1657952641google-logo-png-image.png"
          height={25}
        />
        </a>
      </div>
      <div className="in m-2">
        <a href="https://www.facebook.com/facebook/">
        <img
          src="https://scontent.fjai1-1.fna.fbcdn.net/v/t39.30808-6/380700650_10162533193146729_2379134611963304810_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=a3ns3X3XlqkAb4b8pA1&_nc_oc=Adj4EREzzJ7zx5z9YH4lr-3iJJiC7ZBvEtsFKPwCEld4fnnPL115-P9HvKrg2CojlhRDnEZ2-Y6etrFqhyTzVRVN&_nc_ht=scontent.fjai1-1.fna&oh=00_AfCosVZQuiNUoM7M07bDCGHgjsAMnnihL7SpT7GrhDdYkA&oe=661C17BE"
          href="https://www.google.com/"
          height={25}
        />
        </a>
      </div>
    </div>
  );
}

export default App;
