

export default function Hero(){
    return(
        <main>
            <div className="relative">
                <section className="-mt-44 lg:-mt-33 relative">
                    <img  src="/Floating Ankara Fabric in Motion.png" alt="Yemac-Fabric Hero background image"
                       className="w-full h-screen object-cover object-center lg:object-[0%_70%] "
                    />
                    <div className="bg-black/50 absolute inset-0"></div>
                    
                </section>
                 <div className="absolute top-6/12 items-center gap-y-3   flex flex-col w-full justify-center">
                        <p className="text-2xl rounded-tl-4xl milonga-regular rounded-br-4xl w-fit lg:text-5xl  p-3 lg:p-5 text-white ">Yemac-Fabrics</p>
                        <p className="text-2xl rounded-tl-4xl milonga-regular rounded-br-4xl w-fit lg:text-6xl   p-3 lg:p-5 text-white ">Where Elegance Meets Fabric...</p>
                        <button className="bg-[#D28F31] shadow shadow-[#001DA0] text-white milonga-regular p-3 rounded-2xl text-xl" >Explore Premium Fabrics</button>
                    </div>
            </div>
        </main>
    )
}