import logo from "../assets/icons/user.png"
import facebook from "../assets/icons/facebook.png"
import mail from "../assets/icons/mail.png"
import twit from "../assets/icons/twitter.png"

const Navbar = () => {
    return (
        <div className="flex justify-between item-center">
            <img src = {logo} alt = "logo" width={50} className="cursor-pointer"/>
            <ul className="hidden md:flex">
                <li className="px-2.5">
                    <a href="https://www.facebook.com/" target="blank">
                    <img src = {facebook} alt ="facebook" width={45}/>
                    </a>
                </li>
                <li className="px-2.5">
                    <a href="https://twitter.com/" target="blank">
                    <img src = {twit} alt ="twitter" width={45}/>
                    </a>
                </li>
                <li className="px-2.5">
                    <a href="https://mail.google.com/" target="blank">
                    <img src = {mail} alt ="mail" width={50}/>
                    </a>
                </li>
            </ul>
        </div>
    )
}
export default Navbar;