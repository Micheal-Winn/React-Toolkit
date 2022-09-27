
import {useSelector,useDispatch} from 'react-redux'
import { counterAction } from '../store';
import classes from './Counter.module.css';

const Counter = () => {
  const show = useSelector(state => state.showCounter)
  const counter = useSelector((state)=>state.counter);
  const dispatch = useDispatch()



  const toggleCounterHandler = () => {
    dispatch(counterAction.toggle())
  };
  function incrementHandler(){
    dispatch(counterAction.increment())
  }
  function decrementHandler(){
    dispatch(counterAction.decrement())
  }
  function increaseHandler(){
    dispatch(counterAction.increase(10))
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler} >increment</button>
        <button onClick={increaseHandler} >increaseby 5</button>
        <button onClick={decrementHandler} >increment</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Comment
// {
//   incrementHandler(){
//     this.props.increment()
//   }
//   decrementHandler(){
//     this.props.decrement()
//   }

//   render(){
//       return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{this.props.counter}</div>
//       <div>
//         <button onClick={this.incrementHandler.bind(this)} >increment</button>
//         <button onClick={this.decrementHandler.bind(this)} >increment</button>
//       </div>
//       <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
//   }
// }

// const mapStateToProps = state =>{
//   return {
//     counter : state.counter
//   }
// }

// const mapDispatchToProps = dispatch =>{
//   return {
//     increment: ()=> dispatch({type: 'increment'}),
//     decrement: ()=> dispatch({type: 'decrement'})
//   }
// }

// export default connect(mapStateToProps,mapDispatchToProps) (Counter);
