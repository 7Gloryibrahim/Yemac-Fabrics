

export default function Collections(){
    return(
        <section className="mt-28">
          <div className="w-full flex flex-col justify-center text-center items-center">
            <p className="lg:text-5xl  milonga-regular text-[#001DA0]  mb-5 ">Discover Our Collections</p>
            <p className="lg:text-2xl text-[#001DA0]">Explore beautiful fabrics carefully selected to bring your creative ideas to life.</p>

            </div>  

            <div className="flex items-center mt-33  gap-x-10 gap-y-10 flex-col lg:flex-row justify-center w-full">
                <div className="border border-[#BDE3EE] shadow-2xl shadow-[#BDE3EE]  flex flex-col w-fit h-fit p-3 rounded-2xl ">
                    <div>
                        <img src="/Colorful Layered Fabric Stack.png" alt="Yemac-fabrics" className="w-72 object-contain object-center"/>
                        </div>
                        <div className="p-2 mt-5">
                             <p className="text-2xl lg:text-4xl mb-5  milonga-regular text-[#001DA0]">Beautiful Fabrics</p> 
                             <p className=" text-[#001DA0]/50   text-xl w-72">Discover beautiful Ankara, Adire, Lace and other carefully selected fabrics for every occasion and creative style.</p>

                             <button className="milonga-regular bg-[#001DA0] p-3 text-white rounded-xl mt-6 mb-5">Explore Fabrics →</button>
                        </div>
                </div>

                 <div className="border border-[#BDE3EE] shadow-2xl p-3 shadow-[#BDE3EE] flex flex-col w-fit h-fit   rounded-2xl ">
                    <div>
                        <img src="/Ready to Wear.png" alt="Ready To Wear Collections in Yemac-Fabric Store" className="w-72 h-52  object-contain object-center rounded-2xl"/>
                        </div>
                        <div>
                             <p className="text-2xl lg:text-3xl mb-5 w-72 mt-5   milonga-regular text-[#001DA0]">Ready-To-Wear Collections</p> 
                             <p  className="text-[#001DA0]/50   text-xl w-80">Find beautifully made outfits designed to complement your style. Explore our selection of ready-to-wear pieces for different occasions.</p>

                               <button className="milonga-regular bg-[#001DA0] p-3 text-white rounded-xl mt-6 mb-3">Shop Outfits →</button>
                        </div>
                </div>

                <div className="border border-[#BDE3EE] shadow-2xl shadow-[#BDE3EE] flex flex-col w-fit h-fit p-3 rounded-2xl ">
                    <div>
                        <img src="/Yemac-Fabric Accessories.png" alt="Ready To Wear Collections in Yemac-Fabric Store" className="w-72 h-62  object-contain object-center rounded-2xl"/>
                        </div>
                        <div>
                             <p className="text-2xl lg:text-4xl mb-5  milonga-regular text-[#001DA0]">Accessories</p> 

                             <p className="text-[#001DA0]/50    text-xl w-72">Complete your look with carefully selected accessories that add the perfect finishing touch to your outfit.</p>

                             <button className="milonga-regular bg-[#001DA0] p-3 text-white rounded-xl mt-6 mb-5">Explore Accessories →</button>
                        </div>
                </div>
            </div>
        </section>
    )
}