import { Icon, Link } from '../atoms';
import Image from 'next/image';
import { useTrans } from '@/lib';

interface IntroCard {
    className?: string;
}

const IntroCard = ({}: IntroCard) => {
    const trans = useTrans();

    return (
        <div
            data-fade="0"
            className="relative min-h-screen text-center text-black md:py-24 lg:text-left dark:text-white">
            <div className="grid items-center pt-10 lg:grid-cols-2">
                <div className="mb-0">
                    <div className="relative z-10 block px-6 py-12 rounded-lg shadow-lg md:px-10 lg:-mr-12">
                        <h2 className="mb-4 text-xl font-bold md:text-3xl display-5">
                            {trans.home.intro.header}
                        </h2>
                        <p className="mb-5">{trans.home.intro.description}</p>
                        <div className="flex flex-wrap gap-4 mt-4 gap-y-2 md:mt-8">
                            {trans.home.intro.links.map((item: any, i: number) => (
                                <Link
                                    href={item.link}
                                    target="_blank"
                                    className="flex items-center"
                                    key={i}>
                                    <Icon icon={item.icon} className="mr-1" />
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="block relative p-[150px] lg:w-[500px] lg:h-[500px]">
                    <Image
                        draggable={false}
                        src={trans.home.intro.image}
                        fill
                        className="object-cover w-full shadow-lg bg-mask-border rotate-lg-6"
                        alt=""
                    />
                </div>
            </div>
            <a
                href="#featured-post"
                className="absolute transition-colors -translate-x-1/2 rounded-md cursor-pointer bottom-20 left-1/2 hover:text-primary-300 focus-visible:text-primary-300">
                <Icon
                    icon="AiOutlineArrowDown"
                    className="w-8 h-8 animate-bounce md:h-10 md:w-10"
                />
            </a>
        </div>
    );
};

export default IntroCard;
