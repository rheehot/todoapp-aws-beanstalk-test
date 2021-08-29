import React, { useReducer } from "react";
import useInputs from "./useInputs";

// function reducer(state, action) {
//   return { ...state, [action.name]: action.value };
// }

function Info() {
  // const [state, dispatch] = useReducer(reducer, {
  //   name: "",
  //   nickname: "",
  // });

  // const onChange = (e) => {
  //   dispatch(e.target);
  // };

  const [state, onChange] = useInputs({
    name: "",
    nickname: "",
  });

  const { name, nickname } = state;

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
}

// function Info() {
//   const [name, setName] = useState("");
//   const [nickname, setNickname] = useState("");

//   useEffect(() => {
//     console.log("effect");
//     console.log(name);

//     return () => {
//       console.log("cleanup");
//       console.log(name);
//     };
//   }, [name]);

//   const onChangeName = (e) => {
//     setName(e.target.value);
//   };
//   const onChangeNickname = (e) => {
//     setNickname(e.target.value);
//   };

//   return (
//     <div>
//       <div>
//         <input type="text" value={name} onChange={onChangeName} />
//         <input type="text" value={nickname} onChange={onChangeNickname} />
//       </div>
//       <div>
//         <div>
//           <b>이름:</b> {name}
//         </div>
//         <div>
//           <b>닉네임:</b> {nickname}
//         </div>
//       </div>
//     </div>
//   );
// }

export default Info;
