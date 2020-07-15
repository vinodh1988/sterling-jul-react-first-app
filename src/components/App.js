import React from 'react';
import './styles/App.css';
import Sub from './Sub'

class App extends React.Component{

    constructor(){
      super()
    
      this.state = {
        titles: ["Animals", "Birds","Vegetables"],
        items : [["Elephant","Lion","Tiger","Dog"],
                  ["Sparrow","Crow","Hen"],
                  ["Onion","Beans","Potato"]]
      }
      this.item = React.createRef()
      this.type = React.createRef()
      this.handleClick = this.handleClick.bind(this);
      console.log("PARENT COMPONENT")
    }
    
   

    componentDidMount(){
           console.log("Component did mount...")
    }

    handleClick()
    {
        let item = this.item.current.value;
        let type = this.type.current.value;
        this.state.items[type].push(item);
        console.log(this.state)
        this.setState(this.state);
    }

    render(){
      document.title = "Home page"
      /*
        <Sub  subtitle={this.state.titles[0]} things={this.state.items[0]}></Sub>
        <Sub  subtitle={this.state.titles[1]} things={this.state.items[1]}></Sub>
      <Sub  subtitle={this.state.titles[2]} things={this.state.items[2]}></Sub> */
      return(
    
        <div id="content"> 
          <h1>REACT APP is Running....!!!!</h1>
          Type an Item  <input type="text" ref={this.item}/>
          <select ref={this.type}>
      {this.state.titles.map((x,index)=><option key={index} value={index}>{x}</option>)}
          </select>
          <button type="button" onClick={this.handleClick}>Add Item</button>
          <div id="sub-content">
              { this.state.titles.map((x,index)=>
              <Sub  key={index} subtitle={x}
               things={this.state.items[index]}></Sub>)}
          </div>
        </div>
      );
    }


}


export default  App
/*
   A file can have any number of exports
   A file can have exactly one default export
*/