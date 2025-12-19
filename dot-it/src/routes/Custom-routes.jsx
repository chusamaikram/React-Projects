import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home";
import ProductPage from "../pages/product";
import WhyDotPage from "../pages/whydot";
import RequestDemo from "../pages/request-a-demo/indec";

export default function CustomRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product" element={<ProductPage />} />
                <Route path="/why-dot-it" element={<WhyDotPage />} />
                <Route path="/request-a-demo" element={<RequestDemo />} />
            </Routes>
        </>
    )
} 