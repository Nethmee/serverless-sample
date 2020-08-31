
const responses = require("../common/API_Responses");

exports.handler =  async event => {

    console.log('event', event)
    if(!event.pathParameters || !event.pathParameters.ID){
       
        return responses._400({message: 'missing ID from the path'})
    }

    let ID =event.pathParameters.ID;
    if(data[ID]){
        return responses._200(data[ID]); 
    }

    return responses._400({message: "No user found for the given ID"})

}


const data = {
    1:{
        name:'Ana Caroline',
        age:25,
        job:'teacher'
    },
    2:{
        name:'Peter Collins',
        age:22,
        job:'teacher'
    } ,
    3:{
        name:'Emma Watson',
        age:28,
        job:'actress'
    } ,

}