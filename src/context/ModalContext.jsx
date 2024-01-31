import { createContext ,useState} from "react";

export const ModalContextApi=createContext()

const ModalProvider=({children})=>{
    let [toggle,setToggle]=useState(false)
    let handleToggle=()=>{
        setToggle(!toggle)
    }
    console.log(toggle);
    return (
        <ModalContextApi.Provider value={{toggle,handleToggle}}>
            {children}
        </ModalContextApi.Provider>
    )
}
export default ModalProvider