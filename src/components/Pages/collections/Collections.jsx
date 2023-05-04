import { useContext } from "react";
import { GlobalContext } from "../../../provider/Provider";
import { TitleContent } from "../../titleContent/TitleContent"

export const Collections = () => {
    const { titleContent } = useContext(GlobalContext)
    const { collections } = titleContent
    const { h2 , p } = collections

    return(
        <div className="Collections">
            <TitleContent textH2={ h2 } textP={ p }/>    
        </div>
    )
} 