import { useContext } from "react";
import { Link } from "react-router-dom";
import { certifContext } from "../../context/Context";
import "./notFound.scss";
import { Helmet } from "react-helmet";

const NotFound = () => {
  const context = useContext(certifContext);

  return (
    <div className="notFoundDIV">
      <img
        className="notFoundIMG"
        src={
          require("../../../assets/image/notFound/undraw_page_not_found_re_e9o6.svg")
            .default
        }
        alt="notFound"
      />
      <Link
        className="returnHomeLink"
        onClick={() => context.cleanState()}
        to="/"
      >
        <div className="returnHome">بازگشت به صفحه‌ی اصلی</div>
      </Link>
      <div className="notFoundFA"> صفحه مورد نظر یافت نشد! </div>
      <div className="notFoundEN">Error 404 - Page Not Found</div>
      <Helmet>
        {" "}
        <title> صفحه مورد نظر یافت نشد | certificate </title>
      </Helmet>
    </div>
  );
};

export default NotFound;
