import figlet from "figlet";
import Larry from "figlet/importable-fonts/Larry 3D";
import { useEffect, useState } from "react";

figlet.parseFont("Larry", Larry);

const TextSett = ({ text, font}) => {
    const[ascii, setAscii] = useState("");

    useEffect(() => {
        figlet.text(text, { font, whitespaceBreak: true, horizontalLayout: "fitted" }, ( err, data )=> {
            if(err){
                console.log(err);
            } else {
                setAscii(data);
            }
        });
    }, [text, font]);

    return(
        <pre className="text-center whitespace-pre">{ascii}</pre>
    )
};

const LoadScr = (hanldeLoaded) => {
    const[loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
            hanldeLoaded();
        }, 3000)
    }, [hanldeLoaded]);
    
    return(
        <div className={`transition-opacity duration-1000 fixed top-0 left-0 w-full h-full bg-[#fdf6e3] flex items-center justify-center ${loading ? "opacity-100" : "opacity-0"} `}>
            <TextSett text="Inside Cars"  font="Larry"/>
        </div>
    )
}

export default LoadScr;