import User from "../models/User.js"; 

export const createadmin = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = new User({
            name,
            email,
            password,
            role: "Admin"
        });
        const savedUser = await user.save();
        res.status(201).json({
            message: "Admin created successfully",
            user: savedUser
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating admin",
            error: error.message
        });
    }
};
export const createalumni = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = new User({
            name,
            email,
            password,
            role: "Alumni"
        });
        const savedUser = await user.save();
        res.status(201).json({
            message: "alumni created successfully",
            user: savedUser
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating alumni",
            error: error.message
        });
    }
};
export const createstudent = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = new User({
            name,
            email,
            password,
            role: "Student"
        });
        const savedUser = await user.save();
        res.status(201).json({
            message: "Student created successfully",
            user: savedUser
        });
    } catch (error) {
        res.status(500).json({
            message: "Student creating alumni",
            error: error.message
        });
    }
};
export const getAllUsers = async (req, res) => {  
    try {  
      const users = await User.find();   
      res.json({  
        users,  
      });  
    } catch (error) {  
      return res.status(400).json({  
        error: "cannot fetch data",  
      });  
    }  
  }; 