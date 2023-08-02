import Add from "./Add";
import Avatar from "./Avatar";
import Back from "./Back";

const Transfer = () => {
    return (
        <div className="space-y-3">
            <Back />
            <div>
                <h1 className="text-xl font-base">Transfer to:</h1>
            </div>
            <Add showText />
            <div className="mt-5 text-center flex items-center">
                <span className="h-[0.1rem] flex-1 bg-slate-600/30 w-full"></span>
                <span className=" px-4 font-semibold text-slate-900/30 text-lg">or</span>
                <span className="h-[.1rem] flex-1 bg-slate-600/30 w-full"></span>
            </div>
            <input
                type="text"
                id="phone"
                className="h-12 w-full mt-1 border-2 border-neutral-700/20 rounded-md focus:border-red outline-none px-4"
                placeholder="Search contact"
            />
            <div className="space-y-2">
                <p>Frequent Contacts</p>
                <div className="space-y-4">
                    <Avatar flex />
                    <Avatar flex />
                    <Avatar flex />
                </div>
            </div>
            <div className="space-y-2">
                <p>All Contacts</p>
                <div className="space-y-4">
                    <Avatar flex />
                    <Avatar flex />
                    <Avatar flex />
                </div>
            </div>
        </div>
    );
};

export default Transfer;
