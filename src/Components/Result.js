import React from 'react';

const Result = (props) => {
    const { firstName, lastName, email, password, confirmPassword }=props.data
    return (
        <div>
            <h1>Result</h1>
            <p>FirstName:{firstName}</p>
            <p>LastName:{lastName}</p>
            <p>Email:{email}</p>
            <p>Password:{password}</p>
            <p>Confirm Password:{confirmPassword}</p>
        </div>
    )
}
export default Result;