import dotenv from 'dotenv';

dotenv.config();

export default {
  MONGODB_URL: "mongodb+srv://ezra:tutu@cluster0.x9icmhn.mongodb.net/?retryWrites=true&w=majority",
  JWT_SECRET: process.env.JWT_SECRET || "tutu@12345",
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || "x1234x",
};
