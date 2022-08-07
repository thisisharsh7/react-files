///Excercise fourth soln//
// import React from "react";
// import List from "./List";

// function App(){
//   return (
//     <>
//     <h1>My Five Favourite WebSerise 2022.</h1>
//     <p>I do not watch many serise but I found some interesting one..</p>
//     <List />
//   </>

//   );
// }

// export default App;

// import React from "react";
// import Greet from "./Greet";

// let heading = {
//   color: "blue",
//   margin: "auto",
//   textAlign: "center",
//   marginTop: "14rem",
//   fontSize: "3rem",
//   backgroundColor: "white",
//   boxSizing: "border-box",

// };
// function App(){
//   return (
//     <h3 style={heading}>
//     Hello Sir,
//     <Greet />
//     </h3>
//   );
// }

// export default App;

///Fourth lecture///

// import React from "react";
// import {Sum,Sub,Into,Divide} from "./Calc";

// function App(){
//   return (<>
//     <ul>
//       <li>Sum of two number is {Sum(1,345)}.</li>
//       <li>Subtract of two number is {Sub(8,3)}.</li>
//       <li>Multiply of two number is {Into(4,12)}.</li>
//       <li>Dive of two number is {Divide(13,3)}.</li>
//     </ul>
//   </>);
// }

// export default App;

//Fifth Excercise///

// import React from "react";
// import Cards from "./Cards";

// const App = () =>{
//   return (<>
//     <h1>List of 5 Awesome Netflix Serise</h1>
//     <div className="cards">
//     <Cards isrc="https://th.bing.com/th/id/OIP.aMVu0kYDXVbm06qJlNvYwAHaEK?pid=ImgDet&rs=1" title="Umbrella Academy" info="SuperHero"/>
//     <Cards isrc="https://s1.ibtimes.com/sites/www.ibtimes.com/files/styles/full/public/2019/10/10/flash.jpg" title="Flash" info="Action-SuperHero"/>
//     <Cards isrc="https://filmdaily.co/wp-content/uploads/2020/02/loki-lede.jpg" title="Loki" info="Marvel"/>
//     <Cards isrc="https://th.bing.com/th/id/OIP.sVO3XYFp4HrT40SZEAQSUQHaKi?pid=ImgDet&rs=1" title="Lucifer" info="DC"/>
//     <Cards isrc="https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo/1087199/1087199-1562272059206-d020977f7e66b.jpg" title="Stranger Things" info="Horror"/>
//     </div>

//   </>);
// }

// export default App;
//Sixth Excercise//

// import React from "react";
// import Heading from "./Heading";
// import SlotM from "./SlotM";

// const App = () => {
//   return (
//     <>
//       <Heading />
//       <br />
//       <SlotM x="😊" y="👻" z="😊" />
//       <SlotM x="🙋‍♂️" y="🙋‍♂️" z="🙋‍♂️" />
//       <SlotM x="❤️" y="✌️" z="❤️" />
//     </>
//   );
// };

// export default App;

//React Hook Excercise//
// import React from "react";
// import { useState } from "react";

// const App = () => {
//   // const state = useState();
//   // console.log(state);
//   const [cnt, cntChange] = useState(0);

//   const Dec = () => {
//     cntChange(cnt - 1);
//   };
//   const Inc = () => {
//     cntChange(cnt + 1);
//     // console.log("clicked ");
//   };

//   return (
//     <>
//       <h1>{cnt}</h1>
//       <button onClick={Inc}>Increase</button>{" "}
//       <button onClick={Dec}>Decrease</button>
//     </>
//   );
// };

// export default App;

// import React from "react";
// import { useState } from "react";

// const App = () => {
//   let nTime = new Date().toLocaleTimeString();
//   const [currTime, changeTime] = useState(nTime);

//   // const getTime = () => {
//   //   nTime = new Date().toLocaleTimeString();
//   //   changeTime(nTime);
//   // };

//   setInterval(() => {
//     nTime = new Date().toLocaleTimeString();
//     changeTime(nTime);
//   }, 1000);
//   return (
//     <>
//       <h1>Time is {currTime}.</h1>
//     </>
//   );
// };

// export default App;

// import React, { useState } from "react";

// const App = ()  => {
//   return (
//     <>

//     </>
//   );
// };

// function App() {
//   let clr = "black";
//   const [bg,bgChng] = useState(clr);
//   const [text,textChng] = useState("Click Me");
//   function bgOChange(){
//     bgChng("white");
//     textChng("U made mistake 😆!");
//   }
//   function bgTChange(){
//     bgChng("orange");
//     textChng("Click Me");
//   }

//   return (
//     <>
//     <div style={{backgroundColor : bg}}>
//     <button className="btn" onMouseEnter={bgOChange}  onMouseLeave={bgTChange}>{text}</button>
//     </div>
//     </>
//   );
// };

// export default App;
// import React, { useState } from "react";

// function App() {
//   const [show , inShow] = useState("");
//   const [naam , setNaam] = useState("");
//   function chngName (event){
//     inShow(event.target.value);
//   }
//   function submit(){
//     setNaam(show);
//   }
//   return (
//     <>
//       <h1 className="heading">Hello  {naam}</h1>
//       <input type="text" className="inField" onChange={chngName}  value={show}
//       />
//       <br />
//       <br />
//       <button className="btn" onClick={submit}>Submit</button>
//     </>

//   );
// }

// export default App;

// import React, { useState } from "react";

// function App () {
//   const [name,chngName] = useState("Harsh");

//  setInterval(() => {
//     chngName("Jaadu");
//     console.log("Jadu");
//  },3000);
// //  setInterval(() => {
// //   chngName("Harsh");
// //   console.log("Harsh");
// // },1000);

//   return(
//     <>
//       <h1>
//         {name}
//       </h1>
//     </>
//   );
// };

// export default App;

// import React, { useState } from "react";

// function App() {
//   const [name, getName] = useState();
//   const [pass, getPass] = useState();
//   const [showN, inShowN] = useState();
//   const [showP, inShowP] = useState();

//   function nameIn(event) {
//     getName(event.target.value);
//   }
//   function passIn(event) {
//     getPass(event.target.value);
//   }
//   function submit(event) {
//     event.preventDefault();
//     inShowN(name);
//     inShowP(pass);
//   }

//   return (
//     <>
//       <h1>
//         Hello {showN} {showP}
//       </h1>
//       <form onSubmit={submit}>
//         <input
//           type="text"
//           placeholder="Enter Your Name"
//           onChange={nameIn}
//           value={name}
//         />
//         <br />
//         <br />
//         <input
//           type="text"
//           placeholder="Enter Password"
//           onChange={passIn}
//           value={pass}
//         />
//         <br />
//         <br />
//         <button className="btn" onClick={submit}>
//           Submit
//         </button>
//       </form>
//     </>
//   );
// }

// export default App;
// import React, { useState } from "react";

// function App() {
//   const [name, getName] = useState({
//     fname: "",
//     lname: "",
//     email: "",
//     mobile: "",
//   });
//   function inputWork(event) {
//     // const nim = event.target.name;
//     // const val = event.target.value;
//     const { name, value } = event.target;
//     getName((preValue) => {
//       return {
//         ...preValue,
//         [name]: value,
//       };
// if (name === "fname") {
//   return {
//     fname: value,
//     lname: preValue.lname,
//     email: preValue.email,
//     mobile: preValue.mobile,
//   };
// } else if (name === "lname") {
//   return {
//     fname: preValue.fname,
//     lname: value,
//     email: preValue.email,
//     mobile: preValue.mobile,
//   };
// }
// else if (name === "email") {
//   return {
//     fname: preValue.fname,
//     lname: preValue.lname,
//     email: value,
//     mobile: preValue.mobile,
//   };
// }
// else if (name === "mobile") {
//   return {
//     fname: preValue.fname,
//     lname: preValue.lname,
//     email: preValue.email,
//     mobile: value,
//   };
// }
//     });
//   }

//   function submit(event) {
//     event.preventDefault();
//     alert("Form Submitted");
//   }
//   return (
//     <>
//       <h1>New Form is Here.</h1>
//       <br />
//       <h2>
//         Name is : {name.fname} {name.lname}
//       </h2>
//       <p>{name.email}</p>
//       <p>{name.mobile}</p>
//       <br />
//       <form onSubmit={submit}>
//         <input
//           type="text"
//           name="fname"
//           className="inField"
//           onChange={inputWork}
//           placeholder="Enter your first name"
//           value={name.fname}
//           required
//         />
//         <br />
//         <br />
//         <input
//           type="text"
//           name="lname"
//           className="inField"
//           onChange={inputWork}
//           placeholder="Enter your last name"
//           value={name.lname}
//           required
//         />
//         <br />
//         <br />
//         <input
//           type="email"
//           name="email"
//           className="inField"
//           onChange={inputWork}
//           placeholder="Enter your Email"
//           value={name.email}
//           required
//         />
//         <br />
//         <br />
//         <input
//           type="number"
//           name="mobile"
//           className="inField"
//           onChange={inputWork}
//           placeholder="Enter your Mobile"
//           value={name.mobile}
//           required
//         />
//         <br />
//         <br />
//         <button className="btn">Submit</button>
//       </form>
//     </>
//   );
// }

// export default App;

// import React, { useState } from "react";

// function App() {
//   const [show , getName] = useState({
//     lname : "",
//     fname : "",
//     email : "",
//     phone : "",
//   });
//   function inShow(event){
//     // const nim = event.target.name;
//     // const val = event.target.value;
//     const {name , value } = event.target;
//     getName((preValue) => {
//       return {
//         ...preValue,
//         [name] : value,
//       };
//       // if(name==="fname"){
//       //   return {
//       //     lname : preValue.lname,
//       //     fname : value,
//       //   };
//       // }else if(name === "lname"){
//       //   return {
//       //     lname : value,
//       //     fname : preValue.fname,
//       //   };
//       // }
//     })
//   };

//   const submit = (event) => {
//     event.preventDefault();
//     alert('form submitted');
//   };

//   return (
//     <>
//       <h1 >FORM</h1>
//       <p>Hello, {show.fname} {show.lname}</p>
//       <p>{show.email}</p>
//       <p>{show.phone}</p>
//       <br />
//       <br />
//       <form onSubmit={submit}>
//         <input type="text" name = "fname" className="inField" placeholder="Enter your first name" onChange={inShow} value={show.fname} />
//         <br/>
//         <br />
//         <input type="text" name= "lname" className="inField" placeholder="Enter your last name" onChange={inShow} value={show.lname} />
//         <br />
//         <br />
//         <input type="email" name= "email" className="inField" placeholder="Enter your email" onChange={inShow} value={show.email} />
//         <br />
//         <br />
//         <input type="number" name= "phone" className="inField" placeholder="Enter your phone" onChange={inShow} value={show.phone} />
//         <br />
//         <br />
//         <button className="btn">Submit</button>
//       </form>
//     </>
//   );
// }

// export default App;

import React, { useState }  from "react";

function App() {
  const [cnt , chngCnt] = useState(0);
  function Inc(){
    chngCnt(cnt+1);
  }
  function Dec(){
    chngCnt(cnt-1);

  }

  return(
    <>
    <h1 className="heading">{cnt}</h1>
    <button className="btn" onClick={Inc}>Increment</button>
    <button className="btn" onClick={Dec}>Decrement</button>
    </>
  );
  
};


export default App;
