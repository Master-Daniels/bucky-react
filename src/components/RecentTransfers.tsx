import Avatar from "./Avatar";

import AddImage from "../assets/img/Add.png";

const RecentTransfers = () => {
    return (
        <div className="my-5">
            <div className="mb-2">
                <p className="font-semibold">Recent Transfers</p>
            </div>
            <div className="flex overflow-x-scroll gap-x-6 container-snap items-center">
                <img src={AddImage} alt="" />
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
            </div>
        </div>
    );
};

export default RecentTransfers;
