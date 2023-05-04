import { useContext } from "react";
import { GlobalContext } from "../../../provider/Provider";
import { TitleContent } from "../../titleContent/TitleContent"

export const Kits = () => {
    const { titleContent } = useContext(GlobalContext)
    const { kits } = titleContent
    const { h2 , p } = kits

    return(
        <TitleContent textH2={ h2 } textP={ p }/>    
    )
} 