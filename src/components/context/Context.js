import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import Routing from "../routing/Routing";

export const certifContext = createContext();

const bodyFormData = new FormData();
const Context = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [family, setFamily] = useState("");
  const [response, setResponse] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (email !== "" && phone !== "") {
      alert("تنها یکی از دو فیلد شماره تلفن و ایمیل پر شود");
      setEmail("");
      setPhone("");
    }
  }, [phone, email]);

  const cleanState = () => {
    setName("");
    setFamily("");
    setEmail("");
    setPhone("");
    setResponse("");
    setStatus("");
  };

  const handleClick = () => {
    if (phone !== "") {
      bodyFormData.append("type", "phone");
      bodyFormData.append("phone", phone);
      bodyFormData.append(
        "name",
        `${String(name).trim()} ${String(family).trim()}`
      );
    } else if (email !== "") {
      bodyFormData.append("type", "email");
      bodyFormData.append("email", email);
      bodyFormData.append(
        "name",
        `${String(name).trim()} ${String(family).trim()}`
      );
    }

    axios({
      method: "post",
      url: "http://188.121.111.158:8888/hook",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => {
        //handle success
        switch (String(res.status)) {
          case "200":
            setResponse(res.data);
            setStatus(res.status);
            break;
          case "201":
            setResponse(res.data);
            setStatus(res.status);
            break;
          case "202":
            setResponse(res.data);
            setStatus(res.status);
            break;
          default:
            break;
        }
      })
      .catch((res) => {
        //handle error
        setStatus(res.status);
      });
  };

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const setState = (e) => {
    switch (e.target.id) {
      case "email":
        setEmail(e.target.value);
        break;
      case "phone":
        setPhone(e.target.value);
        break;
      case "name":
        setName(e.target.value);
        break;
      case "family":
        setFamily(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <certifContext.Provider
      value={{
        email,
        name,
        family,
        phone,
        status,
        response,
        setState: (e) => {
          setState(e);
        },
        handleClick: (e) => {
          handleClick(e);
        },
        openInNewTab: (e) => {
          openInNewTab(e);
        },
        cleanState: (e) => {
            cleanState(e);
        }
      }}
    >
      <Routing />
    </certifContext.Provider>
  );
};

export default Context;
