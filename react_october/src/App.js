import React, {
   Component
} from 'react';
import './App.css'
class App extends Component {

   arr=[1,-1,100,-100];
   state={result:0,inputChange:''};

   multipli = (number) => {
      let {result} = this.state;
      const value = result + number
      value > 0
          ? this.setState({result: value})
          : this.setState({result: 0})
   }
   clear = () => {
      this.setState({result:0})
   }


   changeInp = () => {
      const {result, inputChange} = this.state
      const num = +inputChange;
      if (!isNaN(num)) {
         const value = result + num
         value > 0
             ? this.setState({result: value})
             : this.setState({result: 0})
      }
      this.setState({inputChange:''})
   }

   addNum = (value) => {
     this.setState({inputChange:value})
   }

   render() {
      const {result}=this.state;

      return (

         <div className={'calc'}>
             <div className={'out'}>{result}</div>
            {
              <div className={'buttons'}> {this.arr.map((btn)=><button onClick={()=>this.multipli(btn)} className={'btn'}>{btn}</button>)}
               <input onChange={event => this.addNum(event.target.value)} type="text" name="text" id="inp"/>
               <button onClick={this.changeInp} className={'insertion'}>input</button>
              <button onClick={()=>this.clear()} className={'btn clear'}>clear</button></div>

            }
         </div>
      );
   }
}
export default App;