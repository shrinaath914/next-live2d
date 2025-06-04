import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './globals.css';
import dynamic from 'next/dynamic';
const Live2DWidget = dynamic(() => import('next-live2d'), { ssr: false });
export const metadata = {
    title: 'Tran Huu Dang',
    description: 'Personal portfolio of Tran Huu Dang',
};
export default function RootLayout({ children }) {
    return (_jsxs("html", { lang: "en", children: [_jsx("head", {}), _jsxs("body", { children: [_jsx("main", { children: children }), _jsx(Live2DWidget, {})] })] }));
}
