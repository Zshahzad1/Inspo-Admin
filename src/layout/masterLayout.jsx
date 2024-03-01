import React from "react";

import SideBar from "../Components/SideBar";
import { Layout} from "antd";

export default function MasterLayout({ children }) {


    // const { Content } = Layout;


    return (
        <>
            <Layout>
                <SideBar />
                        <div
                            style={{
                                paddingTop:"20px",
                                background: "white",
                                width:"100%",
                            }}
                        >
                            {children}
                        </div>

            </Layout>
        </>
    );
}
