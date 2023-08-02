import Facebook from "../assets/img/Facebook.png";

interface IProps {
    header: string;
    label: string;
    placeholder: string;
    showSocialIcons: boolean;
    showforgot: boolean;
    btnText: string;
}

const AuthSection = ({ header, label, placeholder, showSocialIcons, showforgot, btnText }: IProps) => {
    return (
        <div className="p-4 space-y-8">
            <h1 className="font-semibold text-3xl max-w-xs">{header}</h1>

            <div className="">
                <label htmlFor="phone">
                    <span className="font-medium">{label}</span>
                    <input
                        type="text"
                        id="phone"
                        className="h-12 w-full mt-1 border-2 border-neutral-700/20 rounded-md focus:border-red outline-none px-4"
                        placeholder={placeholder}
                    />
                </label>
                {showforgot && <div className="text-[#5732BF] font-semibold text-end">Forgot Password?</div>}

                <button className="w-full h-14 mt-16 rounded-md bg-[#5732BF] text-white text-xl font-medium">
                    {btnText}
                </button>
            </div>
            {showSocialIcons && (
                <>
                    <div className="mt-5 text-center flex items-center">
                        <span className="h-[0.1rem] flex-1 bg-slate-600/30 w-full"></span>
                        <span className="flex-1 font-semibold text-slate-900/30 text-lg">or continue using</span>
                        <span className="h-[.1rem] flex-1 bg-slate-600/30 w-full"></span>
                    </div>
                    <div className="grid grid-cols-3 w-11/12 gap-x-5 mx-auto">
                        <span className="border border-neutral-700/20 rounded-md flex justify-center py-2">
                            <img src={Facebook} alt="social" className="w-12 h-12" />
                        </span>
                        <span className="border border-neutral-700/20 rounded-md flex justify-center py-2">
                            <img src={Facebook} alt="social" className="w-12 h-12" />
                        </span>
                        <span className="border border-neutral-700/20 rounded-md flex justify-center py-2">
                            <img src={Facebook} alt="social" className="w-12 h-12" />
                        </span>
                    </div>
                </>
            )}
        </div>
    );
};

export default AuthSection;
