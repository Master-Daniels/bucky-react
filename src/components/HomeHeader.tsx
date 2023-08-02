import Profile from "../assets/img/Profile photo.png";
import Settings from "../assets/img/settings.png";

const HomeHeader = () => {
    return (
        <div className="flex justify-between">
            <div className="flex gap-x-2 items-center">
                <img src={Profile} alt="" />
                <div className="text-sm">
                    <span className="block">Hello</span>
                    <span className="block">Abdullahi</span>
                </div>
            </div>
            <span>
                <img src={Settings} alt="" className="p-3" />
            </span>
        </div>
    );
};

export default HomeHeader;
