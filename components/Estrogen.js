import styles from "../styles/estrogen.module.css"
import Image from "next/image";
import React, { useState } from "react";
//test
export default function Estrogen() {

    const [visible, setVisibility] = React.useState(true);
    const hideEstrogen = () => { setVisibility(!visible) };

    return(
        <div className={styles.estrogenContainer}>
            <button onClick={hideEstrogen} className={styles.uglyButton}>
                { visible ? 
                <Image 
                    src="https://inconspicuousbucket.s3.us-west-2.amazonaws.com/e2v2.gif" 
                    fill
                    alt="Estrogen"
                /> : <div className={styles.hidden}></div>}
            </button>
        </div>
    )
}