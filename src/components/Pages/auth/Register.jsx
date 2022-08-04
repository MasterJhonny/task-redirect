import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { isAuthent } from "../../hooks/useFech";
import { functions } from "../../functions";
import { config } from "../../../config";

import "./auth.css";

function Register({ setData }) {
  // use navegation for nav to pages
  const nav = useNavigate();

  // state load 
  const [state, setState] = useState("");

  //state new user signup
  const [userRegister, setUserRegister] = useState({
    name: "",
    email: "",
    password: "",
  });

  // create new user
  const signupUser = async (data) => {
    const { name, email, password, avatar } = data;
    
    if (name && email && password && avatar) {
      const API_URL = `${config.API_BASE_URL}users/register/`
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("avatar", avatar);

      setState('load');
      try {
        const response = await fetch(
          API_URL,
          {
            method: "POST",
            // headers: {
            //     "Content-Type": "application/json;charset=utf-8"
            // },
            // body: JSON.stringify({
            //     name,
            //     email,
            //     password,
            // }),
            body: formData,
          }
        );
        const rta = await response.json();
        if (rta.auth) {
          toast.success("Register success!", {
            autoClose: 1500,
            pauseOnHover: false
        });
          functions.saveCookies("auth", rta.token);

          isAuthent(setData);
          setTimeout(() => {
            nav("/");
          }, 2000);
        } else {
          toast.error("Data invalid!", {
            autoClose: 1500,
            pauseOnHover: false,
            hideProgressBar: true
          });
          setState('err');
        }
      } catch (error) {
        console.error(error);
      }
    } else {
        toast.warning("Data incomplete!");
    }
  };

  // update data users on change
  const onChangeData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "avatar") {
      setUserRegister({
        ...userRegister,
        [name]: e.target.files[0],
      });
    } else {
      setUserRegister({
        ...userRegister,
        [name]: value,
      });
    }
  };

  // on onSubmit post form
  const onsubmitAction = (e) => {
    e.preventDefault();
    signupUser(userRegister);
  };

  return (
    <div className="main">
      <div className="container__form main-login">
        <picture className="main-logo">
          <img src="https://www.svgrepo.com/show/241679/link.svg" alt="logo" />
        </picture>
        <h2 className="main-title">Register</h2>
        <form className="form-signup" onSubmit={onsubmitAction} method="post">
          <label>
            <input
              className="input input-auth"
              type="text"
              name="name"
              placeholder="Usename"
              autoFocus
              onChange={onChangeData}
              autoComplete="name"
              required
            />
          </label>
          <br />
          <label>
            <input
              className="input input-auth"
              type="email"
              name="email"
              placeholder="Email"
              onChange={onChangeData}
              autoComplete="email"
              required
            />
          </label>
          <br />
          <label>
            <input
              className="input input-auth"
              type="password"
              name="password"
              placeholder="Password"
              onChange={onChangeData}
              required
            />
          </label>
          <br />
          <label>
            <input
              className="input input-auth"
              type="file"
              name="avatar"
              accept=".png,.jpg"
              placeholder="Avatar"
              onChange={onChangeData}
              required
            />
          </label>
          <br />
          {
            state === 'load' ? 
            <button className="btn btn-desactive" disabled >Cargando...</button> : 
            <button className="btn btn-send" >Enviar</button>  
          }
        </form>
      </div>
    </div>
  );
}

export { Register };
