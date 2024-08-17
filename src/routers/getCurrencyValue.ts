import dotenv from "dotenv";
dotenv.config();
export const getCurrencyValue = async (currency: string) => {
  const API: string = String(process.env.API2);
  const response = await fetch(API, {
    method: "GET",
  });
  const data_value = await response.json();

  return data_value;
};
