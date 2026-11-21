

export default function Hero(){
    return(
        <main>
            <div className="relative">
                <section className="-mt-44 lg:-mt-33 relative">
                    <video
                    autoPlay
                    muted
                    playsInline
                    loop
                      poster="/heroimage.PNG"
                       className="w-full h-screen object-cover object-center lg:object-[0%_70%] "
                    > <source src="/herovideo.mp4" type="video/mp4"/></video>
                    <div className="bg-black/50 absolute inset-0"></div>
                    
                </section>
                 <div className="absolute top-1/2   flex w-full justify-center">
                        <p className="text-2xl rounded-tl-4xl milonga-regular rounded-br-4xl w-fit lg:text-5xl bg-white p-3 lg:p-5 text-[#001DA0] ">Where Elegance Meets Fabric.</p>
                    </div>
            </div>
        </main>
    )
}