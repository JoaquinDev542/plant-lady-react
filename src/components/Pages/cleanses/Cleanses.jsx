import { useContext } from "react";
import { GlobalContext } from "../../../provider/Provider";
import { TitleContent } from "../../titleContent/TitleContent"

export const Cleanses = () => {
    const { titleContent } = useContext(GlobalContext)
    const { cleanses } = titleContent
    const { h2 , p } = cleanses

    return(
        <TitleContent textH2={ h2 } textP={ p }/>    
    )
} 