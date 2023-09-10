import yodchai from "../assets/icons/yodchai.jpg"
import { useNavigate } from "react-router-dom";
    
function LandingPage () {
    const Navigate = useNavigate()
        const goToDetail = () => {
            Navigate("/details")
        }
    return(
        <div className="text-center font-mono ">
            <p className="text-2xl font-bold uppercase">About Me</p>
            <div className="flex justify-center">
                <img src = {yodchai} alt ="yodchai" className="w-[15%] my-3 rounded-full p-6"/>
            </div>
            <p className="text-md mt-2 font-bold text-black mx-36">Lionel Andrés Messi, also known as Leo Messi,{"\n"}
            is an Argentine professional footballer who plays as a forward for and captains both Major League{"\n"} 
            Soccer club Inter Miami and the Argentina national team.{"\n"}
            </p>
            <br />
            <button className="text-[#00000] font-bold underline" onClick={() => goToDetail()}>NEXT</button>
        </div>
    );   
}

export default LandingPage;