import React from 'react';


const HookForm = (props) => {
    const { form, setForm } = props;
    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]:event.target.value
        })
    }
    
    return(
        <div>
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6 mx-auto center">
                        <label for="firstName">FirstName</label>
                        <input type="text" onChange={onChangeHandler} className="form-control" name="firstName"/>
                    </div>
                        <div className="form-group col-md-6 mx-auto center ">
                            <label for="lastName">LastName</label>
                            <input type="text"onChange={onChangeHandler}   className="form-control" name="lastName"/>
                        </div>
                    </div>
                    <div className="form-group col-md-6 mx-auto center ">
                        <label for="email">Email</label>
                        <input type="text"onChange={onChangeHandler} className="form-control" name="email"/>
                    </div>
                    <div className="form-group col-md-6 mx-auto center ">
                        <label for="password">Password</label>
                        <input type="password"onChange={onChangeHandler} className="form-control" name="password"/>
                    </div>
                    <div className="form-group col-md-6 mx-auto center ">
                        <label for="confirm password">Confirm Password</label>
                        <input type="password"onChange={onChangeHandler} className="form-control" name="confirmPassword"/>``
                    </div>
                    
                <button type="submit" className="btn btn-primary mt-4">Reserve</button>
            </form>
        </div>
    )
}
export default HookForm