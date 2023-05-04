import { useContext } from "react";
import { GlobalContext } from "../../../provider/Provider";
import { TitleContent } from "../../titleContent/TitleContent"

export const Teas = () => {
    const { titleContent } = useContext(GlobalContext)
    const { teas } = titleContent
    const { h2 , p } = teas

    return(
        <TitleContent textH2={ h2 } textP={ p }/>    
    )
} 