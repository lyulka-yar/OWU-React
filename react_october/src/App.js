import React, {
   Component
} from 'react';
import './App.css'
class App extends Component {

   arr=[1,-1,100,-100];
   state={result:0};

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

   render() {
      const {result}=this.state;



      return (

         <div className={'calc'}>
             <div className={'out'}>{result}</div>
            {
              <div className={'buttons'}> {this.arr.map((btn)=><button onClick={()=>this.multipli(btn)} className={'btn'}>{btn}</button>)}
              <button onClick={()=>this.clear()} className={'btn clear'}>clear</button></div>
              
            }
         </div>
      );
   }
}
export default App;