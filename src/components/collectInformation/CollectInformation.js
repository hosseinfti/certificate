import React, { useContext } from "react";
import Input from "../input/Input";
import "./collectInformation.scss";
import { Link } from "react-router-dom";
import { certifContext } from "../context/Context";

const CollectInformation = () => {
  const context = useContext(certifContext);

  return (
    <div className="container">
      <div className="form">
        <h1>CWS Certificate</h1>
        <div className="inputContainer">
          <div className="">شماره یا ایمیل پر شود</div>
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
              placeholder="نام"
              state={context.name}
              setState={context.setState}
              id="name"
            />
            <Input
              type="text"
              placeholder="نام‌خانوادگی"
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
          <Link to={context.myroute}>
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
