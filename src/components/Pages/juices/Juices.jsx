import { useContext } from "react";
import { GlobalContext } from "../../../provider/Provider";
import { TitleContent } from "../../titleContent/TitleContent"

export const Juices = () => {
    const { titleContent } = useContext(GlobalContext)
    const { juices } = titleContent
    const { h2 , p } = juices

    return(
        <TitleContent textH2={ h2 } textP={ p }/>    
    )
} 