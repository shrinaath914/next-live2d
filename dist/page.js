import { jsx as _jsx } from "react/jsx-runtime";
// app/page.tsx
import MyLive2DWidget from 'next-live2d';
export default function Page() {
    return (_jsx("main", { children: _jsx(MyLive2DWidget, { modelName: "koharu" }) }));
}
