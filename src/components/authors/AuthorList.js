import React from "react";

const AuthorList = ({authors})=>{

    const createAuthorRow = (authorObj)=>{
        return (
            <tr key={authorObj.id}>
                <td>{authorObj.name}</td>
                <td><a href={authorObj.website}>{authorObj.website}</a></td>
            </tr>
        );
    };



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
                {authors.map(createAuthorRow)}
                </tbody>
            </table>
        </div>
    );
};

//prop validation doesn't work for some reason
// AuthorList.propTypes = {
//     authors: React.PropTypes.array.isRequired
// };

export default AuthorList;