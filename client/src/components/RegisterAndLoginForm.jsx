import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "./UserContext";

const RegisterAndLoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginOrRegister, setIsLoginOrRegister] = useState("register");

  const { setUsername: setUserLoggedIn, setId } = useContext(UserContext);

  async function submitHandler(e) {
    e.preventDefault();
    const url = isLoginOrRegister === "register" ? "register" : "login";
    const { data } = await axios.post(url, { username, password });
    setUserLoggedIn(username);
    setId(data.id);
  }

  return (
    <div className="bg-blue-50 h-screen flex items-center">
      <form className="w-64 mx-auto mb-12" onSubmit={submitHandler}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="username"
          className="block w-full border rounded-sm p-2 mb-2"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
          className="block w-full border rounded-sm p-2 mb-2"
        />
        <button className="bg-blue-500 w-full rounded-sm border p-2 text-white">
          {isLoginOrRegister === "register" ? "Register" : "Login"}
        </button>
        <div className="text-center mt-2">
          {isLoginOrRegister === "register" && (
            <div>
              Already a User?
              <button onClick={() => setIsLoginOrRegister("login")}>
                Login
              </button>
            </div>
          )}
          {isLoginOrRegister === "login" && (
            <div>
              Do not have an account?
              <button onClick={() => setIsLoginOrRegister("register")}>
                Register
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default RegisterAndLoginForm;
