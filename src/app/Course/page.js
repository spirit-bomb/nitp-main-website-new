"use client"

import { useRouter } from "next/navigation";


export default function Page() {  
    const router = useRouter();
    return(
        <div>
            <div className="my-10 mx-2 flex space-x-1 overflow-x-auto ">
                <div className="min-w-[800px] flex space-x-1 text-sm lg:text-base">
                    <button onClick={() => {
                        router.push("/Course")
                    }} className={`border border-black rounded text-white bg-red-900 px-2`}>ALL Courses</button>
                    
                    <button onClick={() => {
                        router.push("/Course/Ug")
                    }} className={`border border-black rounded  text-red-900 px-2`}>UG Courses</button>
                    
                    <button onClick={() => {
                        router.push("/Course/Pg")
                    }} className={`border border-black rounded text-red-900 px-2`}>PG (M.tech/MURP) Course</button>
                    
                    <button onClick={() => {
                        router.push("/Course/MTech")
                    }} className={`border border-black rounded text-red-900 px-2`}>M.tech/MURP-PHD (DD)</button>
                    
                    <button onClick={() => {
                        router.push("/Course/MSc")
                    }} className={`border border-black rounded text-red-900 px-2`}>Integrated M.sc</button>
                    
                    <button onClick={() => {
                        router.push("/Course/MCA")
                    }} className={`border border-black rounded text-red-900 px-2`}>MCA program</button>
                </div>
            </div>
            <div className="max-sm:mx-6 max-md:mx-8 mx-20 border p-4 rounded-md shadow-lg shadow-slate-400 backdrop-blur-md">
                {/* LINKS */}
                <div className="mb-10 text-black overflow-x-auto">
                    <div className="w-[1250px]">

                        <div className=" grid grid-cols-12  border border-black">
                            <div className="px-2 h-10 flex flex-col justify-center col-span-1 border-r border-black font-bold">S.no.</div>
                            <div className="px-2 h-10 flex flex-col justify-center col-span-4 border-r border-black font-bold">Degree/Program</div>
                            <div className="px-2 h-10 flex flex-col justify-center col-span-6 border-r border-black font-bold">Branch of specialization</div>
                            <div className="px-2 h-10 flex flex-col justify-center col-span-1  font-bold">Duration</div>
                        </div>
                        {/* Under Graduate Programmes  */}
                        <div className=" grid grid-cols-12  border-b border-l border-r border-black">
                            <div className="px-2 h-10 flex flex-col justify-center col-span-12">Under Graduate Programmes</div>
                        </div>
                        <div className=" grid grid-cols-12  border-b border-l border-r border-black">
                            <div className="px-2 h-10 flex flex-col justify-center col-span-1 border-r border-black">1</div>
                            <div className="px-2  flex flex-col justify-center col-span-4 border-r border-black">Bachelor of Architecture</div>
                            <div className="px-2 h-10 flex flex-col justify-center col-span-6 border-r border-black">Architecture</div>
                            <div className="px-2 h-10 flex flex-col justify-center col-span-1 ">5 years</div>
                        </div>
                        <div className=" grid grid-cols-12  border-b border-l border-r border-black">
                            <div className="flex flex-col justify-center col-span-1 border-r border-black">
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1 border-b border-black">2</div>
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1 border-b border-black">3</div>
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1 border-b border-black">4</div>
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1 border-b border-black">5</div>
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1 border-b border-black">6</div>
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1">7</div>
                            </div>
                            <div className="px-2  flex flex-col justify-center col-span-4 border-r border-black">Bachelor of Technology</div>
                            <div className=" flex flex-col justify-center col-span-6 border-r border-black">
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1 border-b border-black"></div>
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1 border-b border-black"></div>
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1 border-b border-black"></div>
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1 border-b border-black"></div>
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1 border-b border-black"></div>
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1 border-black"></div>
                            </div>
                            <div className="px-2 flex flex-col justify-center col-span-1 ">4 years</div>
                        </div>

                        {/* Post Graduate Programmes  */}
                        <div className=" grid grid-cols-12  border-b border-l border-r border-black">
                            <div className="px-2 h-10 flex flex-col justify-center col-span-12">Post Graduate Programmes</div>
                        </div>
                        {/* Master of Technology (Civil Engineering) */}
                        <div className=" grid grid-cols-12  border-b border-l border-r border-black">
                            <div className="flex flex-col justify-center col-span-1 border-r border-black">
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1 border-b border-black">1</div>
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1 border-b border-black">2</div>
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1 border-b border-black">3</div>
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1 border-b border-black">4</div>
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1">5</div>
                            </div>
                            <div className="px-2  flex flex-col justify-center col-span-4 border-r border-black">Master of Technology (Civil Engineering)</div>
                            <div className=" flex flex-col justify-center col-span-6 border-r border-black">
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1 border-b border-black"></div>
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1 border-b border-black"></div>
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1 border-b border-black"></div>
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1 border-b border-black"></div>
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1 border-black"></div>
                            </div>
                            <div className="px-2 flex flex-col justify-center col-span-1 ">2 years</div>
                        </div>
                        {/* Master of Technology (Electrical Engineering) */}
                        <div className=" grid grid-cols-12  border-b border-l border-r border-black">
                            <div className="flex flex-col justify-center col-span-1 border-r border-black">
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1 border-b border-black">6</div>
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1">7</div>
                            </div>
                            <div className="px-2  flex flex-col justify-center col-span-4 border-r border-black">Master of Technology (Electrical Engineering)</div>
                            <div className=" flex flex-col justify-center col-span-6 border-r border-black">
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1 border-b border-black"></div>
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1 border-black"></div>
                            </div>
                            <div className="px-2 flex flex-col justify-center col-span-1 ">2 years</div>
                        </div>
                        {/* Master of Technology (Electrical Engineering) */}
                        <div className=" grid grid-cols-12  border-b border-l border-r border-black">
                            <div className="flex flex-col justify-center col-span-1 border-r border-black">
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1 border-b border-black">8</div>
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1 border-b border-black">9</div>
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1 border-b border-black">10</div>
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1 border-b border-black">11</div>
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1">12</div>
                            </div>
                            <div className="px-2  flex flex-col justify-center col-span-4 border-r border-black">Master of Technology (Electrical Engineering)</div>
                            <div className=" flex flex-col justify-center col-span-6 border-r border-black">
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1 border-b border-black"></div>
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1 border-b border-black"></div>
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1 border-b border-black"></div>
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1 border-b border-black"></div>
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1 border-black"></div>
                            </div>
                            <div className="px-2 flex flex-col justify-center col-span-1 ">2 years</div>
                        </div>
                        {/* Master of Technology (Electrical Engineering) */}
                        <div className=" grid grid-cols-12  border-b border-l border-r border-black">
                            <div className="flex flex-col justify-center col-span-1 border-r border-black">
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1 border-b border-black">13</div>
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1">14</div>
                            </div>
                            <div className="px-2  flex flex-col justify-center col-span-4 border-r border-black">Master of Technology (Electrical Engineering)</div>
                            <div className=" flex flex-col justify-center col-span-6 border-r border-black">
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1 border-b border-black"></div>
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1 border-black"></div>
                            </div>
                            <div className="px-2 flex flex-col justify-center col-span-1 ">2 years</div>
                        </div>
                        {/* Master of Technology (Electrical Engineering) */}
                        <div className=" grid grid-cols-12  border-b border-l border-r border-black">
                            <div className="flex flex-col justify-center col-span-1 border-r border-black">
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1 border-b border-black">15</div>
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1">16</div>
                            </div>
                            <div className="px-2  flex flex-col justify-center col-span-4 border-r border-black">Master of Technology (Electrical Engineering)</div>
                            <div className=" flex flex-col justify-center col-span-6 border-r border-black">
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1 border-b border-black"></div>
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1 border-black"></div>
                            </div>
                            <div className="px-2 flex flex-col justify-center col-span-1 ">2 years</div>
                        </div>
                        {/* Master of Technology (Electrical Engineering) */}
                        <div className=" grid grid-cols-12  border-b border-l border-r border-black">
                            <div className="flex flex-col justify-center col-span-1 border-r border-black">
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1">17</div>
                            </div>
                            <div className="px-2  flex flex-col justify-center col-span-4 border-r border-black">Master of Technology (Electrical Engineering)</div>
                            <div className=" flex flex-col justify-center col-span-6 border-r border-black">
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1 border-black"></div>
                            </div>
                            <div className="px-2 flex flex-col justify-center col-span-1 ">2 years</div>
                        </div>
                        {/* Master of Technology (Electrical Engineering) */}
                        <div className=" grid grid-cols-12  border-b border-l border-r border-black">
                            <div className="flex flex-col justify-center col-span-1 border-r border-black">
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1">18</div>
                            </div>
                            <div className="px-2  flex flex-col justify-center col-span-4 border-r border-black">Master of Technology (Electrical Engineering)</div>
                            <div className=" flex flex-col justify-center col-span-6 border-r border-black">
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1 border-black"></div>
                            </div>
                            <div className="px-2 flex flex-col justify-center col-span-1 ">2 years</div>
                        </div>
                        {/* Master of Technology (Electrical Engineering) */}
                        <div className=" grid grid-cols-12  border-b border-l border-r border-black">
                            <div className="flex flex-col justify-center col-span-1 border-r border-black">
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1">19</div>
                            </div>
                            <div className="px-2  flex flex-col justify-center col-span-4 border-r border-black">Master of Technology (Electrical Engineering)</div>
                            <div className=" flex flex-col justify-center col-span-6 border-r border-black">
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1 border-black"></div>
                            </div>
                            <div className="px-2 flex flex-col justify-center col-span-1 ">2 years</div>
                        </div>

                        
                        {/* Five Years Integrated Programs */}
                        <div className=" grid grid-cols-12  border-b border-l border-r border-black">
                            <div className="px-2 h-10 flex flex-col justify-center col-span-12">Five Years Integrated Programs</div>
                        </div>
                        {/* M. Sc.(Chemistry) */}
                        <div className=" grid grid-cols-12  border-b border-l border-r border-black">
                            <div className="flex flex-col justify-center col-span-1 border-r  border-black">
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1">1</div>
                            </div>
                            <div className="px-2  flex flex-col justify-center col-span-4 border-r  border-black">M. Sc.(Mathematics)</div>
                            <div className=" flex flex-col justify-center col-span-6 border-r  border-black">
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1 border-black">specialization in AI & IoT</div>
                            </div>
                            <div className="px-2 flex flex-col justify-center col-span-1  border-black">2 years</div>
                        </div>
                        {/* M. Sc.(Mathematics) */}
                        <div className=" grid grid-cols-12 border-b  border-l border-r border-black">
                            <div className="flex flex-col justify-center col-span-1 border-r  border-black">
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1">2</div>
                            </div>
                            <div className="px-2  flex flex-col justify-center col-span-4 border-r  border-black">M. Sc.(Mathematics)</div>
                            <div className=" flex flex-col justify-center col-span-6 border-r  border-black">
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1 border-black">specialization in AI & IoT</div>
                            </div>
                            <div className="px-2 flex flex-col justify-center col-span-1  border-black">2 years</div>
                        </div>
                        {/* M. Sc.(Physics) */}
                        <div className=" grid grid-cols-12  border-b border-l border-r border-black">
                            <div className="flex flex-col justify-center col-span-1 border-r  border-black">
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1">3</div>
                            </div>
                            <div className="px-2  flex flex-col justify-center col-span-4 border-r  border-black">M. Sc.(Mathematics)</div>
                            <div className=" flex flex-col justify-center col-span-6 border-r  border-black">
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1 border-black">specialization in AI & IoT</div>
                            </div>
                            <div className="px-2 flex flex-col justify-center col-span-1  border-black">2 years</div>
                        </div>

                        {/* MCA program */}
                        <div className=" grid grid-cols-12  border-b border-l border-r border-black">
                            <div className="px-2 h-10 flex flex-col justify-center col-span-12">MCA program</div>
                        </div>
                        {/* Master of Computer Applications */}
                        <div className=" grid grid-cols-12  border-b border-l border-r border-black">
                            <div className="flex flex-col justify-center col-span-1 border-r border-black">
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1">1</div>
                            </div>
                            <div className="px-2  flex flex-col justify-center col-span-4 border-r border-black">Master of Computer Applications</div>
                            <div className=" flex flex-col justify-center col-span-6 border-r border-black">
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1 border-black">specialization in AI & IoT</div>
                            </div>
                            <div className="px-2 flex flex-col justify-center col-span-1 border-black">3 years</div>
                        </div>
                        {/* Master of Computer Applications */}
                        <div className=" grid grid-cols-12 border-b border-l border-r border-black">
                            <div className="flex flex-col justify-center col-span-1 border-r border-black">
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1">2</div>
                            </div>
                            <div className="px-2  flex flex-col justify-center col-span-4 border-r border-black">Master of Computer Applications</div>
                            <div className=" flex flex-col justify-center col-span-6 border-r border-black">
                                <div className="px-2 h-10 flex flex-col justify-center col-span-1 border-black">specialization in AI & IoT</div>
                            </div>
                            <div className="px-2 flex flex-col justify-center col-span-1 border-black">3 years</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}