import HomeHeader from "../components/HomeHeader";
import Balance from "../components/Balance";
import RecentTransfers from "../components/RecentTransfers";
import LatestTransactions from "../components/LatestTransactions";

const Home = () => {
    return (
        <div>
            <div className="bg-[#270685] text-white p-4 pb-10 pt-5 space-y-10">
                <HomeHeader />
                <Balance />
            </div>
            <RecentTransfers />
            <LatestTransactions />
        </div>
    );
};

export default Home;
