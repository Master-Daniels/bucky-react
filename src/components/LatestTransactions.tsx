import Transaction from "./Transaction";

const LatestTransactions = () => {
    return (
        <div>
            <div className="mb-2 flex justify-between">
                <p className="font-semibold">Latest Transactions</p>
                <p className="text-xs">View All</p>
            </div>
            <div className="space-y-3">
                <Transaction />
                <Transaction />
                <Transaction />
            </div>
            <div className="text-center text-sm mt-4">
                <a href="#" className="underline">
                    View More
                </a>
            </div>
        </div>
    );
};

export default LatestTransactions;
