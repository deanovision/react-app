import React, { useEffect } from "react";
import Loader from "react-loader-spinner";
import axios from "axios";
import "../css/loader.css";

const Auth = ({ history }) => {
  useEffect(() => {
    console.log("Auth useEffect");
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/get_token?${window.location.search}`
      )
      .then(res => {
        console.log(res.data);
        localStorage.setItem("bc_access_token", res.data.access_token);
        localStorage.setItem("company_id", res.data.company_id);
      })

      .then(() => {
        history.push("/dashboard");
      })
      .catch(err => console.log(err));
  }, [history]);

  return (
    <div className="center-container">
      <Loader
        className="vertical-center"
        type="Puff"
        color="#3f51b5"
        height={150}
        width={150}
        //timeout={6000} //6 secs
      />
    </div>
  );
};
export default Auth;
