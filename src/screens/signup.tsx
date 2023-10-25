import { useState } from "react";
import BAInput from "../components/BAInput";
import BAButton from "../components/BAButton";
import { fbSignUp } from "../config/firebasemethods";
import { Link, useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";

export default function Signup() {

    const [model, setModel] = useState<any>({})
    const navigate = useNavigate();
    const bloodGroup = ["Group O", "Group A", "Group B", "Group AB"];

    let fillModel = (key: string, value: any) => {
        model[key] = value
        setModel({ ...model })
    }

    let SignUpUser = () => {
        console.log(model);
        fbSignUp(model)
            .then(res => {
                navigate("/");
            }).catch(err => {
                console.log(err)
            })
    }



    return (
        <>
            <div className="bg-cyan-950 h-screen flex justify-center items-center">
                <div className="w-[500px] bg-[rgba(255,255,255)] p-10 rounded-md">
                    <div className="py-3">
                        <p className="text-4xl font-bold">Sign Up</p>
                    </div>
                    <div className="py-3">
                        <BAInput
                            value={model.userName}
                            onchange={(e: any) => (
                                fillModel("userName", e.target.value)
                            )
                            }
                            label="User Name"
                            type="text" />
                    </div>

                    <div className="py-3">
                        <BAInput
                            value={model.email}
                            onchange={(e: any) => (
                                fillModel("email", e.target.value)
                            )
                            }
                            label="Email"
                            type="email" />
                    </div>

                    <div className="py-3">
                        <BAInput
                            value={model.password}
                            onchange={(e: any) => (
                                fillModel("password", e.target.value)
                            )
                            }
                            label="Password"
                            type="password" />
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
                        <BAButton onClick={SignUpUser} label="Sign Up" />
                    </div>

                    <div className="py-3 text-center">
                        <Link to="/"  className="text-xl">Back to Login</Link>
                    </div>
                </div>
            </div>
        </>
    );
}