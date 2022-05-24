import { useContext } from "react";
import { Link } from "react-router-dom";
import { certifContext } from "../../context/Context";
import NotFound from "../notFound/NotFound";
import "./response.scss";

const Response = () => {
  const context = useContext(certifContext);
  console.log(context);

  const response =
    String(context.status) === "202" ? (
      <div> موردی با این مشخصات یافت نشد </div>
    ) : String(context.status) === "201" ? (
      <div>
        <div>قبلا مدرک دریافت شده است</div>
        <br />
        <div>
          جهت بارگذاری مجدد
          <span
            onClick={
              context
                .downloadBlob
                // `http://${context.response}`,
                // `${(context.name || context.family)}`,
                // "jpeg"
                ()
            }
            className="click"
          >
            {" "} کلیک{" "}
          </span>
          کنید
        </div>
      </div>
    ) : String(context.status) === "200" ? (
      <div>
        برای دانلود <a href={`http://${context.response}`}>کلیک</a> کنید
      </div>
    ) : (
      <NotFound />
    );
  return (
    <div className="response">
      {response}
      <div>
      <Link
        className="returnHomeLink"
        onClick={() => context.cleanState()}
        to="/"
      >
        <div className="returnHome">بازگشت به صفحه‌ی اصلی</div>
      </Link>
      </div>
    </div>
  );
};

export default Response;
