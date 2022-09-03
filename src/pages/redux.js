import React from 'react'
import { useSelector , useDispatch } from 'react-redux';
import { incNumber, decNumber } from '../action/index';

export default function Redux() {

    const myState = useSelector((state) => state.changeTheNumber);
    const dispatch = useDispatch();

  return (
    <>
        <div className="container">
            <h1> INCREMENT / DECREMENT COUNTER </h1>
            <h4> USING REACT & REDUX </h4>

            <div className="qunantity">
                <a href="#" className="qunantity-minus" title='Decrement' onClick={() => dispatch(decNumber())}><span> - </span></a>
                <input name='qunatity' type='text' className='quantity-input' value={myState}/>
                <a href="#" className="qunantity-plus" title='Increment' onClick={() => dispatch(incNumber())}><span> + </span></a>

            </div>
        </div>
      
    </>
  )
}
