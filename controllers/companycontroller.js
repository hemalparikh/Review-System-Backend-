import Company from '../models/Company.js';

export const createCompany = async (req, res) => {
    try {
        const { name, location, industry, email } = req.body;

        // Create a new company instance
        const company = new Company({
            name,
            location,
            industry,
            email
        });

        // Save the company to the database
        const savedCompany = await company.save();
        res.status(201).json({
            company: savedCompany,
            message: "Company created successfully"
        });
    } catch (error) {
        console.error("Error while creating company:", error);
        res.status(500).json({
            message: "Error while creating company",
            error: error.message // Provide the specific error message
        });
    }
};

export const getAllCompanies = async (req, res) => {
    try {
        const companies = await Company.find().populate("reviews").exec();
        res.json({ companies });
    } catch (error) {
        console.error("Error while fetching companies:", error);
        res.status(400).json({
            message: "Error while fetching companies",
            error: error.message // Provide the specific error message
        });
    }
};
