import React from "react"

// function App() {
//     return (
//         <div>
//             <h1>Code goes here</h1>
//         </div>
//     )
// }
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "Red",
            age: "320"
        }
    }

    render() {
        return (
        <div>
            <h1>{this.state.name}</h1>
            <h3>{this.state.age} years old</h3>
        </div>
      )
    }
}
// class App extends React.Component {
//       constructor() {
//         super()
//         this.state = {
//           answer: "yes"
//         }
//       }
//
//       render() {
//           return (
//               <div>
//                   <h1>Is state important to know?{this.state.answer} </h1>
//                   <ChildComponent answer={this.state.answer}/>
//               </div>
//           )
//       }
//   }

export default App
