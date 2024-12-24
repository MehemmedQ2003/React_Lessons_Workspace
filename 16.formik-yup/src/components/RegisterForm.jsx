import { useFormik } from "formik"
import { registerFormSchema } from "../schema/RegisterFormSchemas";

const RegisterForm = () => {

    const submit = (values, action) => {
        setTimeout(() => {
            action.resetForm();
        }, 2000);
    }
    
    const {values, errors, handleChange, handleSubmit} = useFormik({
        initialValues: {
            email: '',
            age: '',
            password: '',
            confirmPassword: '',
            term: '',
        },
        validationSchema: registerFormSchema,
        onSubmit: submit
    });


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="inputDiv">
                    <label>Email: </label>
                    <input type="email" id="email" placeholder="Enter your email" value={values.email} onChange={handleChange} />{errors.email && <span style={{color: 'red'}}>{errors.email}</span>}
                </div>
                <div className="inputDiv">
                    <label>Age: </label>
                    <input type="number" id="age" placeholder="Enter your age" value={values.age} onChange={handleChange} />{errors.age && <span style={{color: 'red'}}>{errors.age}</span>}
                </div>
                <div className="inputDiv">
                    <label>Password: </label>
                    <input type="password" id="password" placeholder="**********" value={values.password} onChange={handleChange} />{errors.password && <span style={{color: 'red'}}>{errors.password}</span>}
                </div>
                <div className="inputDiv">
                    <label>Confirm Password: </label>
                    <input type="password" id="confirmPassword" placeholder="**********" value={values.confirmPassword} onChange={handleChange} />{errors.confirmPassword && <span style={{color: 'red'}}>{errors.confirmPassword}</span>}
                </div>
                <div className="inputDiv">
                    <div style={{display: 'flex', alignItems: 'center',}}>
                        <input type="checkbox" id="term" value={values.term} onChange={handleChange} style={{marginRight: '10px', width: '20px', height: '15px'}} />
                        <label>I accept terms: </label>
                    </div>
                        {errors.term && <span style={{color: 'red', marginLeft: '10px', display: "block"}}>{errors.term}</span>}
                </div>
                <button type="submit" className="saveButton">Save</button>
            </form>
        </div>
    )
}

export default RegisterForm
