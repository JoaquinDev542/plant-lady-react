import { useContext } from "react";
import { GlobalContext } from "../../../provider/Provider";
import { TitleContent } from "../../titleContent/TitleContent"

export const Services = () => {
    const { titleContent } = useContext(GlobalContext)
    const { services } = titleContent
    const { h2 , p } = services


    return(
        <TitleContent textH2={ h2 } textP={ p }/>    
    )
} 