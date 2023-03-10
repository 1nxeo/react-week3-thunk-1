import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNumber, minusNumber } from "./redux/modules/counterSlice";
import { __addNumber, __minusNumber } from "./redux/modules/counterSlice";

function App() {
  const globalNumber = useSelector((state) => state.counter.number);
  const [number, setNumber] = useState(0);
  // 여기에서 store에 접근하여, counter의 값을 읽어오고 싶다!!
  // useSelector 사용
  const dispatch = useDispatch();

  const onClickAddNumberHandler = () => {
    // dispatch(addNumber(+number))
    dispatch(__addNumber(+number));
  };

  const onClickMinusNumberHandler = () => {
    dispatch(__minusNumber(+number));
  };

  return (
    <>
      <div>{globalNumber}</div>
      <div>
        <input
          type="number"
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
      </div>
      <button onClick={onClickAddNumberHandler}>더하기</button>
      <button onClick={onClickMinusNumberHandler}>빼기</button>
    </>
  );
}

export default App;
