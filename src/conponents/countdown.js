// import React from "react";

// class CountDown extends React.Component {
//   state = {
//     count: 10,
//   };
//   componentDidMount() {
//     this.timer = setInterval(() => {
//       this.setState({
//         count: this.state.count - 1,
//       });
//     }, 1000);
//   }
//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.count !== this.state.count && this.state.count === 0) {
//       if (this.timer) {
//         clearInterval(this.timer);
//       }
//     }
//   }
//   render() {
//     return <>{this.state.count} </>;
//   }
// }
// export default CountDown;
import React,{useEffect, useState} from "react";

class CountDown extends React.Component {
  state = {
    count: 5,
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count - 1,
      }));
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count && this.state.count === 0) {
      clearInterval(this.timer);
    //   this.props.onTimeUp();
    }
  }

  componentWillUnmount() {
    
    clearInterval(this.timer);
  }

  render() {
    return <>{this.state.count} </>;
  }
}

const NewCountDown = (props) => {
  const [count, setCount] = useState(5);
  useEffect(() => {
    if (count == 0) {
      props.onTimeUp();
      return;
    }
    let timer = setInterval(() => {
      setCount(count - 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [count]);
  return <>{count}</>;
};
export { CountDown, NewCountDown };
