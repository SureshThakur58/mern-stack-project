import  * as Yup from "yup";


const productSchema = Yup.object({
    
        name: Yup.string().required("Name is required").trim().max(55),
        brand:Yup.string().required().trim().max(55),
        price:Yup.number().required().min(0),
        quantity:Yup.number().required().min(1),
        Category: Yup.string().required().trim().oneOf([
            "grocery",
            "electronics",
            "bakery",
            "clothing",
            "shoes",
            "electrical",
            "stationary",
            "kitchen"
        ]),
        Description:Yup.string().required().trim().max(1000).min(20),
        hasFreeShipping:Yup.boolean().default(false),
    
});


export default productSchema;