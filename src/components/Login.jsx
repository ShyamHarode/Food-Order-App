import "../styles.css";
import { useContext, useState } from "react";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { userList, setLogin, setCurrUser } = useContext(UserContext);
  const [user, setUser] = useState({});
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const userAuth = (e) => {
    e.preventDefault();

    let cUser = {};
    let flag = userList.some((u) => {
      if (u.email === user.email && u.password === user.pass) {
        cUser = u;
        return true;
      } else return false;
    });
    if (flag) {
      setLogin(true);
      setCurrUser(cUser);
      navigate("/goto");
    } else {
      setError(true);
    }
  };
  return (
    <div>
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
        <div>
          <h3 className="text-4xl font-bold ">Login</h3>
        </div>
        {error && <div style={{ color: "red" }}>Invalid details</div>}
        <div className=" px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
          <form onSubmit={(e) => userAuth(e)}>
            <div className="flex items-center justify-between">
              <label
                htmlFor="email"
                className="block text-sm m-3 font-medium text-gray-700 undefined"
              >
                Email:
              </label>

              <input
                // type="email"
                name="email"
                className="block w-50 mt-1 border-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm m-3 font-medium text-gray-700 undefined"
              >
                Password:
              </label>

              <input
                // type="password"
                name="password"
                // minLength="6"
                className="block w-50 mt-1 border-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                onChange={(e) => setUser({ ...user, pass: e.target.value })}
              />
            </div>
            <div className="flex justify-center items-center mt-4">
              <button
                type="submit"
                className="w-50 px-3 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
              >
                Login
              </button>
            </div>
          </form>
          <div
            onClick={() => {
              navigate("/");
            }}
            style={{ color: "blue" }}
            className="flex justify-center items-center mt-4 cursor-pointer "
          >
            Create New Account
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
