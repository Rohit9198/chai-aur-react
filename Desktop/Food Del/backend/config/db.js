import mongoose from "mongoose";

 export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://rohitsi2252_db_user:ZDJx64QdZTyAiq0j@cluster0.acvkayy.mongodb.net/food-del')
    .then(() => console.log("DB Connected"));
}