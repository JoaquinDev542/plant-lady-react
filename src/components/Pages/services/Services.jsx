import { useContext } from "react";
import { GlobalContext } from "../../../provider/Provider";
import { TitleContent } from "../../titleContent/TitleContent"
import { Wholistic } from "../../wholistic/Wholistic";
import { Orders } from "../../orders/Orders";


export const Services = () => {
    const { titleContent } = useContext(GlobalContext)
    const { services } = titleContent
    const { h2 , p } = services

    return(
        <div className="Services">
            <TitleContent textH2={ h2 } textP={ p }/>    
            <Wholistic/>
            <Orders/>
        </div>
    )
} 