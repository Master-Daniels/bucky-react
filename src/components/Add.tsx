import AddImage from "../assets/img/Add.png";

const Add = ({ showText }: { showText: boolean }) => {
    return (
        <div className="flex items-center gap-x-2 cursor">
            <img src={AddImage} alt="" />
            {showText && <p>New Contact</p>}
        </div>
    );
};

export default Add;
