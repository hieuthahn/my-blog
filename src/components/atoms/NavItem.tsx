import Link from 'next/link';
import React from 'react';
import Icon from './Icon';
import { useRouter } from 'next/router';

interface NavItemProps {
    isMobile?: boolean;
    data?: any;
}

const NavItem = ({ isMobile, data }: NavItemProps) => {
    const { locale, pathname } = useRouter();
    const [isShowChildMenu, setShowChildMenu] = React.useState(false);
    const children = data.children;

    return isMobile ? (
        <>
            <div
                className={`flex justify-between w-full px-3 py-1 m-1 transition-colors dark:text-white ${
                    data?.url === pathname ? 'text-primary dark:text-primary' : ''
                }`}>
                <Link
                    href={data.url ?? '#'}
                    locale={locale}
                    className="rounded-md hover:bg-gray-50">
                    <span className="ml-3 text-base font-semibold">{data.title}</span>
                </Link>
                {children && children.length > 0 && (
                    <button onClick={() => setShowChildMenu(!isShowChildMenu)}>
                        <Icon
                            icon="HiChevronDown"
                            className={`ml-2 transition-all duration-300 ${
                                isShowChildMenu ? 'rotate-180' : ''
                            }`}
                        />
                    </button>
                )}
            </div>
            <div
                className={`dark:text-white list-disc my-1 transition-all duration-500 ${
                    isShowChildMenu ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}>
                <div className={isShowChildMenu ? 'block' : 'hidden'}>
                    {children &&
                        children.length > 0 &&
                        children.map((item: any, index: number) => (
                            <div className="flex items-center p-3 ml-4 " key={index}>
                                <Icon icon="HiChevronRight" className="mr-2" />
                                <Link
                                    href={item.url ?? '#'}
                                    className="font-semibold"
                                    locale={locale}>
                                    {item.title}
                                </Link>
                            </div>
                        ))}
                </div>
            </div>
        </>
    ) : (
        <div
            className={`relative mr-3 transition-colors nav-item dark:text-white hover:dark:text-primary hover:text-primary ${
                data?.url === pathname ? 'text-primary dark:text-primary' : ''
            }`}>
            <Link
                href={data.url ?? '#'}
                locale={locale}
                className="relative z-10 block px-2 py-1 overflow-hidden font-semibold ">
                {data.title}
                {children && children.length > 0 && (
                    <Icon
                        icon="HiChevronDown"
                        className="inline-block ml-2 transition-all duration-300 dropdown-icon"
                    />
                )}
            </Link>
            {children && children.length > 0 && (
                <ul className="absolute inset-x-0 w-56 py-2 mt-2 list-none transition-all duration-300 bg-white rounded-lg nav-item-child-overlay top-5 focus:outline-none text-dark dark:bg-dark dark:text-white">
                    {children &&
                        children.length > 0 &&
                        children.map((item: any, index: number) => {
                            return (
                                <li key={index} className="py-1 pl-2">
                                    <Link href={item.url ?? '#'} locale={locale}>
                                        {item.title}
                                    </Link>
                                </li>
                            );
                        })}
                </ul>
            )}
        </div>
    );
};

export default NavItem;
