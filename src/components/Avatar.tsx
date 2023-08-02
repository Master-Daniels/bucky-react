import Profile from "../assets/img/Profile photo.png";

const Avatar = ({ flex }: { flex?: boolean }) => {
    return (
        <div className={`${flex && "flex"} items-center gap-x-4 cursor-pointer w-fit`}>
            <img src={Profile} alt="" />
            <div className="text-xs mt-1">
                <span>Abdullahi</span>
            </div>
        </div>
    );
};

export default Avatar;
