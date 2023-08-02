import Wallmart from "../assets/img/Wallmart.png";

const Transaction = () => {
    return (
        <div className="flex justify-between items-center border-b border-neitral-900/20 pb-3">
            <div className="flex items-center gap-x-2 leading-tight">
                <img src={Wallmart} alt="" className="w-10 h-10" />
                <span>
                    <p className="font-medium">Wallmart</p>
                    <p className="text-xs">Today 12:32</p>
                </span>
            </div>
            <span>
                <p className="text-sm">-$353.23</p>
            </span>
        </div>
    );
};

export default Transaction;
