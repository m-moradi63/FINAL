import { useParams } from "react-router-dom";
import { useLanguage } from "../hooks/uselanguage";



export function Persentage() {
    const paramsee = useParams();
const { languages, setLanguages } = useLanguage(
    paramsee.username!,
    paramsee.Repotab! )
    const entries = Object.entries(languages)
    console.log("langggg" , entries)
   /*  interface languages{
        entries : "entries",
        map : "map"
    } */
 let sum = 0  
const Sum =  entries.map((itm)=>{
 

 sum +=itm[1]
 console.log("summmm" , sum)
 return sum

 
})  
    


return (
    <div className="flex w-[100%]   border-2 solid h-[2rem] ">
        { entries.map((itm)=>{
          
          return (
            <div >
                {entries[0][1]===itm[1]?<div className=" w-[40%] border-2 solid h-[2rem] bg-yellow-300"/* {`w-[${(((itm[1]/sum)*100).toFixed(2))}%] border-2solid h-[1rem] bg-yellow-300` */ >
                
                </div>
                :"" }
               
                {entries[1][1]===itm[1]?<div className="w-[25%] border-2 solid h-[2rem] bg-red-300"/* {`w-[${(((itm[1]/sum)*100).toFixed(2))}%] border-none solid h-[1rem] bg-black`} */>
               
               </div>
                :""}
                {entries[2][1]===itm[1]?<div className="w-[25%] border-2 solid h-[2rem] bg-pink-300"/* {`w-[${(((itm[1]/sum)*100).toFixed(2))}%] border-none solid h-[1rem] bg-red-700`} */>
              
                </div>
                :""}
               {/*    {entries[3][1]===itm[1]?<div className={`w-[${(((itm[1]/sum)*100).toFixed(2))}] border-2 solid h-[1rem] bg-red-300`}>
                {(((itm[1]/sum)*100).toFixed(2))}
                </div>
                :""}
                  {entries[4][1]===itm[1]?<div className={`w-[${(((itm[1]/sum)*100).toFixed(2))}] border-2 solid h-[1rem] bg-red-300`}>
                {(((itm[1]/sum)*100).toFixed(2))}
                </div>
                :""}
                  {entries[5][1]===itm[1]?<div className={`w-[${(((itm[1]/sum)*100).toFixed(2))}] border-2 solid h-[1rem] bg-red-300`}>
                {(((itm[1]/sum)*100).toFixed(2))}
                </div>
                :""}
                  {entries[6][1]===itm[1]?<div className={`w-[${(((itm[1]/sum)*100).toFixed(2))}] border-2 solid h-[1rem] bg-red-300`}>
                {(((itm[1]/sum)*100).toFixed(2))}
                </div>
                :""} */}
               
                
            </div>
           )  
        })}
    </div>
)

}