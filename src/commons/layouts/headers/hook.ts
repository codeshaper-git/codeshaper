"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const useHeader = () => {
    const router = useRouter();
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleDrawer = () => { 
        router.push('/menubar');
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    return {
        isScrolled,
        toggleDrawer
    }
}