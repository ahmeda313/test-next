import axios from "axios";
import { getUserDetailsServerAction } from "..//actions/user";
async function getUserDetails() {
  const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details") //1. calling other backend
  return response.data
}

async function getUserDetails2() {
  const response = await axios.get("http://localhost:3000/api/user") //2. calling self server
  return response.data
}

export default async function() {
  const useDetails = await getUserDetails2()
  getUserDetailsServerAction() //3. server actions --- ideal method
  return (
    <div>
      Hi there
      <h1>{useDetails.name}</h1>
      <h1>{useDetails.email}</h1>
    </div>
  );
}
