import React from 'react'
import "./styles/people.css"
import Request from "axios"

class Api extends React.Component{
    constructor(props){
        super(props)
        this.state= {sno:"",name:"",city:"",people: []}
        this.storePerson = this.storePerson.bind(this)

    }

    storePerson(data)
    {
        Request.post("http://ec2-52-14-233-222.us-east-2.compute.amazonaws.com:8090/api/people",data).then(
            (response)=> { this.readData()},
            ()=>alert("Something wrong!!!")
        )
        
    }

    componentDidMount(){
       this.readData()
    }

    readData(){
        Request.get("http://ec2-52-14-233-222.us-east-2.compute.amazonaws.com:8090/api/people").then(
            (response) =>{
                this.setState({people:response.data,sno:"",name:"",city:""})

            },
            (error)=>console.log("error")
        )
    }
    render(){
        let code =this.state.people.map(x=><tr key={x.sno}>
            <td>{x.sno}</td>
            <td>{x.name}</td>
            <td>{x.city}</td>
        </tr>)
        return(
            <div> 
            <form>
                <table id="tabform">
                    <tbody>
                    <tr>
                        <td>sno</td>
                        <td><input type="text" value={this.state.sno} 
                        onChange={(e)=>{this.setState({sno:e.target.value})}}></input></td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td><input type="text" value={this.state.name} 
                         onChange={(e)=>{this.setState({name:e.target.value})}}></input></td>
                    </tr>
                    <tr>
                        <td>city</td>
                        <td><input type="text" value={this.state.city} 
                         onChange={(e)=>{this.setState({city:e.target.value})}}></input></td>
                    </tr>
                    <tr>
                        <td colSpan="2" align="center">
                    <input type="button" value="store" 
                    onClick={()=>{this.storePerson({sno: this.state.sno,name:this.state.name,city:this.state.city})}} />
                                
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
    
            <table id="report">
                      <thead>
                        <tr>
                         <th>Sno</th>
                         <th>name</th>
                         <th>city</th>
                         </tr>
                      </thead>
                      <tbody>
                          {code}
                      </tbody>
            </table>
            </div>
            
        )
    }
}

export default Api