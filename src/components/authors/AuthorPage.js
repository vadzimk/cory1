import React from "react";
import AuthorApi from "../api/AuthorApi";

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

    componentWillMount(){
    this.fetchAuthors();
    }

    render(){

        return (
            <div>
                <h2>Authors</h2>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Website</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.authors.map((authorObj)=>{
                        return (
                            <tr key={authorObj.id}>
                                <td>{authorObj.name}</td>
                                <td><a href={authorObj.website}>{authorObj.website}</a></td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Authors;