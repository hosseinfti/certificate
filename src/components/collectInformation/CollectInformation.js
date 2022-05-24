import React, { useContext } from "react";
// import axios from "axios";
import Input from "../input/Input";
import "./collectInformation.scss";
// import Response from "../pages/response/Response";
import { Link } from "react-router-dom";
import { certifContext } from "../context/Context";
// import Response from "../pages/response/Response";

const CollectInformation = () => {
  const context = useContext(certifContext);
//   console.log(context);

  return (
      <div className="container">
        <div className="form">
          <h1>CWS Certificate</h1>
          <div className="inputContainer">
            <div className="note">شماره یا ایمیل پر شود</div>
            <div className="pairInputs">
              <Input
                type="number"
                placeholder="09123456789"
                state={context.phone}
                setState={context.setState}
                id="phone"
              />
              <Input
                type="email"
                placeholder="example@gmail.com"
                state={context.email}
                setState={context.setState}
                id="email"
              />
            </div>
            <div className="note">
              اگر شماره یا ایمیل شما اعتبار سنجی شود، با اسمی که در زیر وارد
              می‌کنید مدرک شما صادر می‌شود
            </div>
            <div className="pairInputs">
              <Input
                type="text"
                placeholder="اسم"
                state={context.name}
                setState={context.setState}
                id="name"
              />
              <Input
                type="text"
                placeholder="فامیلی"
                state={context.family}
                setState={context.setState}
                id="family"
              />
            </div>
          </div>
          <div className="btnContainer">
            <div className="note">
              <div>دریافت مدرک تنها یکبار قابل انجام است</div>
              <div>در وارد کردن اطلاعات دقت کنید</div>
            </div>
            <Link to="/response">
              <button className="submitBTN" onClick={() => context.handleClick()}>
                ارسال مدرک
              </button>
            </Link>
          </div>
        </div>
      </div>
  );
};

export default CollectInformation;