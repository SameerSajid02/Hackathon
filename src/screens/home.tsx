import { useNavigate, useParams } from "react-router-dom";
import BAButton from "../components/BAButton";

export default function Home(){

    const navigate = useNavigate();
    const param = useParams();


    console.log(param.id)
    const LoginUserAsAcceptor = (e:any)=>{
        navigate("/acceptor")
    }

    return(
        <>
         <div className="bg-cyan-950 h-screen flex justify-center items-center">
                <div className="w-[500px] bg-[rgba(255,255,255)] p-10 rounded-md">
                    <div className="py-3">
                        <p className="text-4xl font-bold text-center">Are You ?</p>
                    </div>

                    <div className="py-3 text-center">
                        <BAButton label="Donor" onClick={()=> navigate(`/donor/${param.id}`)}/>
                    </div>

                    <div className="py-3 text-center">
                        <BAButton label="Acceptor" onClick={()=> navigate(`/acceptor/${param.id}`)}/>
                    </div>


                </div>
            </div>
        </>
    )
}