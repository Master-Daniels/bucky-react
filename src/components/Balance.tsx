import React from "react";

const Balance = () => {
    return (
        <div className="space-y-4">
            <div className="text-center">
                <span className="block text-sm">Main Balance</span>
                <span className="block text-2xl font-semibold">
                    $14,235<sub>.34</sub>
                </span>
            </div>
            <div className="flex gap-x-4 text-xs justify-center">
                <span>Top Up</span>
                <span>Withdraw</span>
                <span>Transfer</span>
            </div>
        </div>
    );
};

export default Balance;
