import BANavbar from "../components/BANavbar";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fbGet } from "../config/firebasemethods";
import AcceptorTable from "./acceptorTable";

export default function Acceptor() {
    const navigate  = useNavigate();
    // const param = useParams();
    // const [donorList, setDonorList] = useState();

    const Donate = ()=>{
        navigate("/donor")
    }

    // useEffect(() => {
    //     fbGet("/form/Donor Form")
    //     .then((res:any)=>{
    //         setDonorList(res);
    //     }).catch((err)=>{
    //         console.log(err)
    //     })
    // }, [])

    // console.log(donorList);
    // const bloodGroup = donorList.filter((x:any, i:any)=>{
    //     return (param.id == x.Bloodgroup)
    // })
    
    return (
        <>
            <div className="bg-cyan-950 h-screen">
                <div>
                    <BANavbar label="Blood Bank App" buttonLabel="Donate" onclick={Donate}/>
                </div>
                <div className="container mt-5">
                    <AcceptorTable/>
                </div>
            </div>
        </>
    )
}