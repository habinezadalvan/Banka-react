import Joi from 'joi-browser';


export default validate = (body, schema) => {
    const {error} = Joi.validate(body, schema, { abortEarly: false })
    let errors = {}
    if(error){
     for(let obj of error.details){
      errors[obj.path[0]] = obj.message;
     }
}
}
