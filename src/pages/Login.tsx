import AuthImage from "../components/AuthImage";
import AuthSection from "../components/AuthSection";

import Secure from "../assets/img/Secure.png";

const Login = () => {
    return (
        <div>
            <AuthImage img={Secure} />
            <AuthSection
                header="Enter Your Password"
                placeholder="Enter Your Password"
                label="Password"
                btnText="Login"
                showSocialIcons={false}
                showforgot
            />
        </div>
    );
};

export default Login;
