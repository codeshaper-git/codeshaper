"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export const useHeader = () => {
    const router = useRouter();
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleDrawer = () => { 
        router.push('/menubar');
    };

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    return {
        isScrolled,
        toggleDrawer,
        handleScroll
    }
}