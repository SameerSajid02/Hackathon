import { useState } from "react";
import { fbLogin } from "../config/firebasemethods";
import BAInput from "../components/BAInput";
import BAButton from "../components/BAButton";
import { Link, useNavigate } from 'react-router-dom'


export default function Login() {

    const [model, setModel] = useState<any>({})
    const navigate = useNavigate()

    let fillModel = (key: string, value: any) => {
        model[key] = value
        setModel({ ...model })
    }

    let LoginUser = () => {
        console.log(model);
        fbLogin(model)
            .then((res:any) => {
                console.log(res)
                navigate(`/home/${res.Bloodgroup}`)

            }).catch(err => {
                console.log(err)
            })
    }


    return (
        <>
            <div className="bg-cyan-950 h-screen flex justify-center items-center">
                <div className="w-[500px] bg-[rgba(255,255,255)] p-10 rounded-md">
                    <div className="py-3">
                        <p className="text-4xl font-bold">Login</p>
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


                    <div className="py-3 text-center">
                        <BAButton onClick={LoginUser} label="Login" />
                    </div>

                    <div className="py-3 text-center">
                        <p className="text-xl">Are You new to the App?</p>
                        <Link to="/signup" className="text-xl">Register Now</Link>
                    </div>


                </div>
            </div>
        </>
    );
}