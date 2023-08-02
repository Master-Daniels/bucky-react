import BackImg from "../assets/img/Back.png";
const Back = () => {
    return (
        <div className="text-blue-400 flex gap-x-1 items-center cursor-pointer w-fit">
            <img src={BackImg} alt="" />
            <span>
                <p className="text-sm">Back</p>
            </span>
        </div>
    );
};

export default Back;
