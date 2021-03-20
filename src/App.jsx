import React, { useState } from 'react';

// class component
class TestPropsandState extends React.Component {
  constructor(props)
  {
     super(props);
     this.state={age:16,year:2000};
  }
   render() {
      return ( 
         
         <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
          <h1>hello,my name is {this.props.name}</h1>
          <p>my age is {this.state.age}</p>
             <div style={{width:'100px'}}><button onClick={()=>{this.setState({age:17})}}>click here to change age!</button> </div>
          </div>
          
         );
    }
}

//function component
function TestPropsandState_()
{

}


function App()
{
   return(
      <>
    <TestPropsandState name='Xiaoming'/>
    <TestPropsandState name='Xiaogang'/>
    </>
   );
}
export default App;