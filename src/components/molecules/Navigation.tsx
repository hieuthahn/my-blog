import { NavItem, Logo, ThemeSwitcher, Button, Icon, LangugeSwither } from '@/components/atoms';
import { useTrans } from '@/lib';
import { useState } from 'react';

interface NavigationProps {
    navigation: Array<any>;
}

const Navigation = ({ navigation }: NavigationProps) => {
    const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);
    const trans = useTrans();

    let nav = navigation || [];
    return (
        <>
            <nav className="hidden md:flex">
                {nav.map((item, index) => {
                    return <NavItem key={index} data={item} />;
                })}
            </nav>

            <div className="md:hidden">
                <Button
                    type="button"
                    onClick={() => setIsShowMobileMenu(true)}
                    title={trans.header.open_navigation}>
                    <Icon icon="HiBars3" />
                </Button>
            </div>

            <div
                className={`absolute inset-x-0 top-0 origin-top-right dark:backdrop-blur-xl transform p-2 transition md:hidden ${
                    isShowMobileMenu ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}>
                <div
                    className={`divide-y-2 divide-gray-50 rounded-lg dark:bg-[#16181A]/95 bg-white dark:backdrop-blur-xl shadow-lg ring-1 ring-black dark:ring-white/10 ring-opacity-10 ${
                        isShowMobileMenu ? 'block' : 'hidden'
                    }`}>
                    <div className="px-5 pt-5 pb-6">
                        <div className="flex items-center justify-between">
                            <Logo title={''} />
                            <div className="flex mr-2 gap-x-2">
                                <LangugeSwither />
                                <ThemeSwitcher />
                                <Button
                                    type="button"
                                    onClick={() => setIsShowMobileMenu(false)}
                                    title={trans.header.close_navigation}>
                                    <Icon icon="HiXMark" />
                                </Button>
                            </div>
                        </div>
                        <div className="flex mt-6">
                            <nav className="grid w-full gap-y-0">
                                {nav.map((item, index) => {
                                    return <NavItem key={index} data={item} isMobile={true} />;
                                })}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navigation;
