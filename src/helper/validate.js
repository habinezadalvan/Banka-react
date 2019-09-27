import Joi from 'joi-browser';
import {toast} from 'react-toastify';


const validate = (body, schema, submit ) => {
    const {error} = Joi.validate(body, schema, { abortEarly: true })
    let errors = {}
    if(error){
     for(let obj of error.details){
      errors[obj.path[0]] = obj.message.replace(/"/g, '');
     }
     Object.keys(errors).forEach(key => {
        toast.error(errors[key])
     })
}else {
    submit()
}
}
export default validate;
