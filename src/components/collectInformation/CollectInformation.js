import React, { useEffect, useState } from "react";
import axios from "axios";
import Input from "../input/Input";
import "./collectInformation.scss";

const bodyFormData = new FormData();
const CollectInformation = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [family, setFamily] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (email !== "" && phone !== "") {
      alert("هوی");
      setEmail("");
      setPhone("");
    }
  }, [phone, email]);

  useEffect(() => {}, [error]);

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
        console.log(res.data);
        openInNewTab(`http://${res.data}`);
      })
      .catch((res) => {
        //handle error
        setError(res);
        console.log(res);
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
    <div className="container">
      <div className="form">
        <h1>CWS Certificate</h1>
        <div className="inputContainer">
          <div>شماره یا ایمیل پر شود</div>
          <div className="pairInputs">
            <Input
              type="email"
              placeholder="example@gmail.com"
              state={email}
              setState={setState}
              id="email"
            />
            <Input
              type="tel"
              placeholder="09123456789"
              state={phone}
              setState={setState}
              id="phone"
            />
          </div>
          <div className="pairInputs">
            اگر شماره یا ایمیل شما اعتبار سنجی شود، با اسمی که در زیر وارد
            می‌کنید مدرک شما صادر می‌شود
          </div>
          <div>
            <Input
              type="text"
              placeholder="فامیلی"
              state={family}
              setState={setState}
              id="family"
            />
            <Input
              type="text"
              placeholder="اسم"
              state={name}
              setState={setState}
              id="name"
            />
          </div>
        </div>
        <div>
          <div>
            <div>دریافت مدرک تنها یکبار قابل انجام است</div>
            <div>در وارد کردن اطلاعات دقت کنید</div>
          </div>
          <button className="submitBTN" onClick={() => handleClick()}>
            ارسال مدرک
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollectInformation;
