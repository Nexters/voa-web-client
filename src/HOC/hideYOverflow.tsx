import React, { Component } from 'react';

function hideYOverflow(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = { x: 0, y: 0 };
    }

    componentDidMount() {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    }

    componentWillUnmount() {
      document.body.style.overflow = 'unset';
    }

    render() {
      return (
        <WrappedComponent {...this.props} />
      );
    }
  };
}

export default hideYOverflow;
