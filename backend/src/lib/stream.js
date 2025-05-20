import {StreamChat} from "stream-chat";
import dotenv from "dotenv";
dotenv.config({
    path: './.env'
})

const apiKey=process.env.STREAM_API_KEY;
const apiSecret=process.env.STREAM_API_SECRET;
 
if(!apiKey || !apiSecret){
    console.error("apiKey or ApiSecret is missing");
}

const streamClint= StreamChat.getInstance(apiKey,apiSecret);

export const upsertStreamUser= async(userData)=>{
    try{
        await streamClint.upsertUser(userData)
    return userData;
    }
    catch(error){
        console.error("error updating stream user",error);
    }
}

export const generateStreamToken = (userId) => {
  try {
    // ensure userId is a string
    const userIdStr = userId.toString();
    return streamClient.createToken(userIdStr);
  } catch (error) {
    console.error("Error generating Stream token:", error);
  }
};