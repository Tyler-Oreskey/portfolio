import React, { Component } from "react";

import Auxiliary from "../Auxiliary/Auxiliary";
import Toast from "../../UI/Toast/Toast";
import checkIcon from "../../assets/images/icons/check.png";
import errorIcon from "../../assets/images/icons/error.png";

const RequestHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      message: null,
      type: null,
      icon: null,
      backgroundColor: null,
    };

    componentDidMount() {
      this.reqInterceptor = axios.interceptors.request.use(
        (req) => {
          return req;
        },
        (error) => {
          return Promise.reject(error);
        }
      );

      this.resInterceptor = axios.interceptors.response.use(
        (res) => {
          this.setState({
            message: res.data.message,
            type: "Success!",
            icon: checkIcon,
            backgroundColor: "#5cb85c",
          });
          return res;
        },
        (error) => {
          this.setState({
            message: error.response.data.message,
            type: "Error!",
            icon: errorIcon,
            backgroundColor: "#d9534f",
          });
          return Promise.reject(error);
        }
      );
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    render() {
      const toastList = [
        {
          message: this.state.message,
          type: this.state.type,
          icon: this.state.icon,
          backgroundColor: this.state.backgroundColor,
        },
      ];

      const messageToDisplay = this.state.message ? (
        <Toast toastList={toastList} position="bottom-right" />
      ) : null;

      return (
        <Auxiliary>
          {messageToDisplay}
          <WrappedComponent {...this.props} />
        </Auxiliary>
      );
    }
  };
};

export default RequestHandler;
