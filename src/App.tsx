import React from "react";
import { Header } from "./components/Header";

export const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-black">
            <div className="flex flex-col justify-center">
                <Header />
            </div>
        </div>
    );
};
