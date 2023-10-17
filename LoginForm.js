import React, { useState } from "react";

export const LoginForm = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const addUser = (e) => {
    e.preventDefault();
    setUsers([...users, { name, email }]);
    setName("");
    setEmail("");
  };

  return (
    <div className="modal">
      <div className="container">
        <div className="container_img">
          <div className="img">
            <img className="image" src="./img/1.png" alt="Logo" />
          </div>
          <div className="container_contact">
            <p>Email:</p>
            <a href="mailto:huynhtrihieu@gmail.com">huynhtrihieu@gmail.com</a>
          </div>
        </div>
        <div className="container_login">
          <p className="title">Please Login!</p>
          <div className="container_input">
            <input
              type="text"
              className="email button"
              placeholder="Nhập email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="pass button"
              placeholder="Nhập mật khẩu"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="button_login">
            <button type="button" className="btn btn-warning" onClick={addUser}>
              Login
            </button>
            <p>
              <a href="https://example.com" className="no-underline">
                Forgot password?
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
