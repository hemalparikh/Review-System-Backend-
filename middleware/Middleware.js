import User from '../models/User.js';
export const isAdmin=async(req,res,next)=>{  
    try{  
    const {email}=req.body;  
    const user=await User.findOne({email});  
  
    if(user && user.role==='Admin')  
    {   
        next();  
    }  
    else{  
        res.status(403).json({message:"Access Denied, only Admin can add comapanies"})  
    }  
}  
    catch(error)  
    {  
        res.status(500).json({ message: "Error verifying user role", error });  
    }  
}; 

export const isAlumni=async(req,res,next)=>{  
    try{  
       const {email}= req.body;  
       const user=await User.findOne({email});  
        if(user && user.role==='Alumni')  
        {  
            next();  
        }  
        else  
        {  
            res.status(403).json({message:"Access Denied, only Alumnis can add reviews"})  
        }  
  
    }  
    catch(error)  
    {  
        res.status(500).json({message:"Error verifying user role",error})  
    }  
} 

export const isStudent=async(req,res,next)=>{  
    try{  
       const {email}= req.body;  
       const user=await User.findOne({email});  
        if(user && user.role==='Student')  
        {  
            next();  
        }  
        else  
        {  
            res.status(403).json({message:"Access Denied, only Students can like reviews"})  
        }  
  
    }  
    catch(error)  
    {  
        res.status(500).json({message:"Error verifying user role",error})  
    }  
}