
const Responses = require("../common/API_Responses");
const tableName = process.env.tableName
const Dynamo = require('../common/Dynamo')

exports.handler =  async event => {

    console.log('event', event)
    if(!event.pathParameters || !event.pathParameters.ID){
       
        return Responses._400({message: 'missing ID from the path'})
    }

    let ID =event.pathParameters.ID;
   const user = await Dynamo.get(ID,tableName).catch((err)=>{

    console.log("error i n Dynamo get", err);
    return null;
   })
   if(!user){
       return Responses._400({message:"Failed to get any user"})
   }
   else{
       return Responses._200({user})
   }

}


