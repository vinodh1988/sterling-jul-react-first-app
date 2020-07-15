import React from 'react'
import './styles/sub.css'

class Sub extends React.Component{
     constructor(props){
         super(props);
         this.state ={}
          console.log(this.props)
          console.log("Sub Component")
     }

    /* static getDerivedStateFromProps(props, state) {
        console.log(props,state)
        console.log("Received prop")
        return state
     }

     shouldComponentUpdate(nextProps,nextState){
         console.log("Should component update?")
         return true;
     }*/
     
    render(){
    
        return(
            <div className="sub">
                <h3>{this.props.subtitle}</h3>
                <hr></hr>
                <ul>
        {this.props.things.map(x=><li key={x}>{x}</li>)}
                </ul>
            </div>
        )
    }
    
    getSnapshotBeforeUpdate(nextProps,newProps){
       console.log(nextProps);
       console.log(this.props);
       return this.props;
    }

    componentDidUpdate(nextProps,newState,snapshot){
         console.log(nextProps)
         console.log(snapshot, "snapshot")
    }

    componentWillUnmount(){

    }
}

Sub.defaultProps = {subtitle: "Default title"}
export default Sub;