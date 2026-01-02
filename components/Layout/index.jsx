import Navbar from "../Navbar";

export default function Layout ({children}){
    return(
        <>
            <Navbar/>
            
            {/* Decorative Background Initials */}
            <div className="fixed bottom-0 left-0 -z-50 select-none pointer-events-none overflow-hidden">
                <h1 className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-black text-white/[0.02] whitespace-nowrap leading-none">
                    S.A
                </h1>
            </div>
            
            {children}
        </>
    )
}