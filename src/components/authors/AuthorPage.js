import React from "react";
import AuthorApi from "../api/AuthorApi";
import AuthorList from "./AuthorList";

class Authors extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            authors: []
        }
    }
    //get data from api
 fetchAuthors = async()=>{
    const response = await AuthorApi.get("/users");
    console.log(response.data);
    this.setState({
        authors: response.data
    });

};

    componentDidMount(){
    this.fetchAuthors();
    }

    render(){

        return (
            <div>
               <AuthorList authors={this.state.authors}/>
            </div>
        );
    }
}

export default Authors;