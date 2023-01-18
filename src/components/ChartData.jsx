import axios from "axios";
const url = "https://dweet.io:443/get/dweets/for/iot_demo";
export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(url);
    const modifiedData = data.with.map((newData) => newData);
    // console.log("passs data", modifiedData);
    return modifiedData;
  } catch (err) {
    console.log(err);
  }
};
