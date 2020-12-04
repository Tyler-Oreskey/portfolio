import React, { Component } from 'react';

import Auxiliary from '../Auxiliary/Auxiliary';
import Toast from '../../UI/Toast/Toast';

const RequestHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    }

    componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });

      this.resInterceptor = axios.interceptors.response.use((res) => res, error => {
        this.setState({ error });
      });
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    render() {

      const toast = this.state.error ? <Toast message={this.state.error.message} type="error" /> : null;

      return (
        <Auxiliary>
          {toast}
          <WrappedComponent {...this.props} />
        </Auxiliary>
      );
    }
  }
}

export default RequestHandler;