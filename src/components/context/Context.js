import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import Routing from "../routing/Routing";
import Loading from "../loading/Loading";

export const certifContext = createContext();

const bodyFormData = new FormData();
const Context = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [family, setFamily] = useState("");
  const [response, setResponse] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLodaing] = useState(true);
  const [myroute, setMyRoute] = useState("/");

  useEffect(() => {
    if (email !== "" && phone !== "") {
      alert("تنها یکی از دو فیلد شماره تلفن و ایمیل پر شود");
      setEmail("");
      setPhone("");
    }
  }, [phone, email]);

  useEffect(() => {
    setLodaing(false);
  }, [status]);

  const cleanState = () => {
    setName("");
    setFamily("");
    setEmail("");
    setPhone("");
    setResponse("");
    setStatus("");
  };

  const handleClick = () => {
    if ((name || family) && (phone || email)) {
      setLodaing(true);
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
        headers: {
          "Content-Type": "multipart/form-data",
        },
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
      if (status) {
        setLodaing(false);
        setMyRoute("/response");
      }
    } else alert("لطفا از هر ردیف یک فیلد را پر کنید");

    setTimeout(() => {
      if (!response) {
        setLodaing(false);
        setMyRoute("/notFound");
      }
    }, 3000);
  };

  // const handleDownloadLink = (url) => {
  // downloadBlob(response, "certificate", "jpeg");
  //if you want to open photo for user in new tab, just uncomment the following code and comment above code

  // const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  // if (newWindow) newWindow.opener = null;
  // };

  const downloadBlob = (res, filename, ext) => {
    // Create an object URL for the blob object
    // console.info(GetMineType("jpeg"));
    // const url = URL.createObjectURL(
    //   new Blob([response], { type: `${GetMineType("jpeg")}` })
    // );

    // Create a new anchor element
    const a = document.createElement("a");

    // Set the href and download attributes for the anchor element
    // You can optionally set other attributes like `title`, etc
    // Especially, if the anchor element will be attached to the DOM
    a.href = response;
    a.download = name || family || "download";

    // Click handler that releases the object URL after the element has been clicked
    // This is required for one-off downloads of the blob content
    a.click();
  };

  // const GetMineType = (extension) => {
  //   switch (String(extension).toLowerCase()) {
  //     case "csv":
  //       return "text/csv";
  //     case "cur":
  //       return "application/octet-stream";
  //     case "cxx":
  //       return "text/plain";
  //     case "dat":
  //       return "application/octet-stream";
  //     case "datasource":
  //       return "application/xml";
  //     case "dbproj":
  //       return "text/plain";
  //     case "dcr":
  //       return "application/x-director";
  //     case "docx":
  //       return "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
  //     case "dot":
  //       return "application/msword";
  //     case "jpb":
  //       return "application/octet-stream";
  //     case "jpe":
  //       return "image/jpeg";
  //     case "jpeg":
  //       return "image/jpeg";
  //     case "jpg":
  //       return "image/jpeg";
  //     case "png":
  //       return "image/png";
  //     default:
  //       return "image/jpeg";
  //   }
  // };

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
        myroute,
        setState: (e) => {
          setState(e);
        },
        handleClick: (e) => {
          handleClick(e);
        },
        downloadBlob: (e) => {
          downloadBlob(e);
        },
        cleanState: (e) => {
          cleanState(e);
        },
        setLodaing: () => {
          setLodaing();
        },
      }}
    >
      {loading ? <Loading /> : <Routing />}
    </certifContext.Provider>
  );
};

export default Context;
