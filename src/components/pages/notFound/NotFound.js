import { useContext } from "react";
import { Link } from "react-router-dom";
import { certifContext } from "../../context/Context";

import "./notFound.scss";

const NotFound = () => {
  const context = useContext(certifContext);

  return (
    <div className="notFound">
      <div>
        <Link to="/">
          <button onClick={() => context.cleanState()} className="return">
            صفحه اصلی
          </button>
        </Link>
      </div>
      <div>not found</div>
    </div>
  );
};

export default NotFound;
