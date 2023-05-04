import { useContext } from "react";
import { GlobalContext } from "../../../provider/Provider";
import { TitleContent } from "../../titleContent/TitleContent"

export const Exilirs = () => {
    const { titleContent } = useContext(GlobalContext)
    const { exilirs } = titleContent
    const { h2 , p } = exilirs

    return(
        <TitleContent textH2={ h2 } textP={ p }/>    
    )
} 