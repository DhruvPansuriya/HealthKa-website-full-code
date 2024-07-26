"use client"

import React from "react"
import { animatePageIn } from "./utils/animation"
import { useEffect } from "react"

export default function Template({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        animatePageIn()
    }, [])
    return (
        <div>
            <div
                id="banner-1"
                className="min-h-screen bg-blue_new z-50 fixed top-0 left-0 w-1/2 flex items-center justify-end"
            >
                {/* <video autoPlay muted className="video-background h-full w-full">
                    <source src={`/background.mp4`} type="video/mp4" />
                    Your browser does not support the video tag.
                </video> */}
                <span className="h-auto w-auto text-6xl font-bold font-custom text-white">Nex</span>
            </div>

            <div
                id="banner-2"
                className="min-h-screen bg-blue_new z-50 fixed top-0 left-1/2 w-1/2 flex items-center justify-start"
            >{/* <video autoPlay muted className="video-background h-full w-full">
                    <source src={`/background.mp4`} type="video/mp4" />
                    Your browser does not support the video tag.
                </video> */}
                <span className="h-auto w-auto text-6xl font-bold font-custom text-white">us</span>
            </div>
            {children}
        </div>
    )
}



// nexus
// customer app coming saoon
// ai prescription