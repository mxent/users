import { useEffect } from 'react';
import { create } from 'zustand';

type SidebarState = {
    sidebarOpen: boolean;
    isMobile: boolean;
    toggleSidebar: () => void;
    closeSidebar: () => void;
    openSidebar: () => void;
    setIsMobile: (isMobile: boolean) => void;
};

const mobileMaxSize = 768;

export const useSidebarStore = create<SidebarState>(
    (
        set: (
            partial: Partial<SidebarState> | ((state: SidebarState) => Partial<SidebarState>)
        ) => void
    ) => ({
        sidebarOpen:
            window.innerWidth >= mobileMaxSize
                ? localStorage.getItem('sidebar-state') === 'true'
                : false,
        isMobile: false,
        toggleSidebar: () =>
            set(state => {
                const newSidebarOpen = !state.sidebarOpen;
                localStorage.setItem('sidebar-state', newSidebarOpen.toString());
                return { sidebarOpen: newSidebarOpen };
            }),
        closeSidebar: () =>
            set(() => {
                localStorage.setItem('sidebar-state', 'false');
                return { sidebarOpen: false };
            }),
        openSidebar: () =>
            set(() => {
                localStorage.setItem('sidebar-state', 'true');
                return { sidebarOpen: true };
            }),
        setIsMobile: (isMobile: boolean) => set({ isMobile }),
    })
);

export const useWindowResize = () => {
    const setIsMobile = useSidebarStore((state: SidebarState) => state.setIsMobile);
    const closeSidebar = useSidebarStore((state: SidebarState) => state.closeSidebar);

    useEffect(() => {
        const checkIsMobile = () => {
            const isMobileView = window.innerWidth < mobileMaxSize;
            setIsMobile(isMobileView);
            if (isMobileView) {
                closeSidebar();
            }
        };
        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);
        return () => window.removeEventListener('resize', checkIsMobile);
    }, [setIsMobile, closeSidebar]);
};
