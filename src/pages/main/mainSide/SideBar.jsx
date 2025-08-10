import React, { useState, useEffect } from "react";
import './SideBar.css';
import requestApi from "../../../api/RequestApi";
import Quote from "./Quote";
import Top3 from "../../../component/side/Top3";

const SideBar = () => {
    const [top3, setTop3] = useState([]);

    useEffect(() => {
        const axiosTop3 = async () => {
            try {
                const res = await requestApi('/wake-up-log/rank', 'GET');
                 const data = res.data.writeTop3;
                console.log(data);
                
                setTop3(data);
            } catch (error) {
                console.error(error.message);
            }
        };

        axiosTop3();
    }, []);
    

    return(
        <aside className="side-banner">
            <Quote />

            <Top3 top3={top3} />
        </aside>
    )
}

export default SideBar;