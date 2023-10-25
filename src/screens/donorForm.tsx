import { useNavigate } from "react-router-dom";
import BAInput from "../components/BAInput";
import { useState } from "react";
import BAButton from "../components/BAButton";
import { fbAdd } from "../config/firebasemethods";
import { Box, Typography } from "@mui/material";

export default function DonorForm() {

    const [donorForm, setDonorForm] = useState<any>({})
    const bloodGroup = ["Group O", "Group A", "Group B", "Group AB"];


    let fillModel = (key: string, value: any) => {
        donorForm[key] = value
        setDonorForm({ ...donorForm })
    }

    let RegisterUser = ()=>{
        if(!donorForm.userName || !donorForm.Address || !donorForm.PhoneNumber || !donorForm.Gender){
            alert("Please Fill out all the Fields!")
        }
        else{
            console.log(donorForm);
            fbAdd("Donor Form", donorForm)
                .then((res) => {
                    console.log(res)
                    alert("Data Sent Successfully")
                }).catch((err) => {
                    console.log(err)
                })
    }
    }


    return (
        <>
             <div className="bg-cyan-950 h-screen flex justify-center items-center">
                <div className="w-[500px] bg-[rgba(255,255,255)] p-10 rounded-md">
                    <div className="py-3">
                        <p className="text-4xl font-bold text-center">Donor Form</p>
                    </div>

                    <div className="py-3">
                        <BAInput
                            value={donorForm.userName}
                            onchange={(e: any) => (
                                fillModel("userName", e.target.value)
                            )
                            }
                            label="User Name"
                            type="text" />
                    </div>

                    <div className="py-3">
                        <BAInput
                            value={donorForm.Address}
                            onchange={(e: any) => (
                                fillModel("Address", e.target.value)
                            )
                            }
                            label="Address"
                            type="text" />
                    </div>

                    <div className="py-3">
                        <BAInput
                            value={donorForm.PhoneNumber}
                            onchange={(e: any) => (
                                fillModel("PhoneNumber", e.target.value)
                            )
                            }
                            label="Phone Number"
                            type="number" />
                    </div>

                    <div className="py-3">
                        <BAInput
                            value={donorForm.Gender}
                            onchange={(e: any) => (
                                fillModel("Gender", e.target.value)
                            )
                            }
                            label="Gender"
                            type="text" />
                    </div>

                    <div className="py-3">
                        <Typography><p className="text-xl">Blood Group</p></Typography>
                        <Box>
                        <select name="Blood group" id="" onChange={(e:any)=>fillModel("Bloodgroup",e.target.value)}>
                            {
                                bloodGroup.map((x:any,i:any)=>{
                                    return(
                                        <option value={x}>{x}</option>
                                    )
                                })
                            }
                            </select>
                        </Box>
                    </div>

                    

                    <div className="py-3 text-center">
                        <BAButton onClick={RegisterUser} label="Submit" />
                    </div>

                </div>
            </div>
        </>
    )
}