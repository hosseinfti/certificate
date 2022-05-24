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
            onClick={() => context.openInNewTab(`http://${context.response}`)}
            className="click"
          >
            کلیک
          </span>
          کنید
        </div>
      </div>
    ) : String(context.status) === "200" ? (
      <div>
        برای دانلود <a href={context.response}>کلیک</a> کنید
      </div>
    ) : (
      <NotFound />
    );
  return (
    <div className="response">
      <div>
        <Link to="/">
          <button onClick={() => context.cleanState() } className="return"> بازگشت</button>
        </Link>
      </div>
      {response}
    </div>
  );
};

export default Response;
