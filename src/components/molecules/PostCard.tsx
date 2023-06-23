import Link from 'next/link';
import Image from 'next/image';
import { Route, Image as ImageHelper, useTrans } from '@/lib';
import { DateTime, Icon, Tag } from '../atoms';

interface PostCardProps {
    post: any;
}

const PostCard = ({ post }: PostCardProps) => {
    const trans = useTrans();

    if (!post) {
        return <></>
    }

    return (
        <div className="w-full rounded-lg bg-glass-card hover:border-[#a8b3cf66]">
            <Link
                href={Route.post(post?.slug)}
                locale={post?.language}
                className="block h-full rounded-md focus:outline-none focus-visible:ring focus-visible:ring-primary-300">
                <div className="flex flex-col h-full p-2.5">
                    <div className="relative mb-3">
                        <figure className="w-full overflow-hidden h-44 rounded-tl-md rounded-tr-md">
                            <Image
                                src={post?.cover || `data:image/svg+xml;base64,${ImageHelper.generaterImagePlaceholder()}`}
                                alt={post?.title}
                                fill
                                sizes="(max-width: 768px) 100vw,
                     (max-width: 1200px) 50vw,
                      33vw"
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL={`data:image/svg+xml;base64,${ImageHelper.generaterImagePlaceholder()}`}
                                className="absolute inset-0 object-cover w-full h-full rounded-lg rounded-tl-lg rounded-tr-lg"
                            />
                        </figure>
                        <div className="absolute bottom-0 flex flex-wrap-reverse justify-end w-full p-2 mt-2 text-sm text-black z-100 gap-y-1 gap-x-1 dark:text-gray-100">
                            {post?.tags?.map((tag: any, index: number) => (
                                <Tag key={index} name={tag} />
                            ))}
                        </div>
                    </div>
                    <span className="text-base font-bold text-gray-800 dark:text-gray-100 line-clamp-3">
                        {post?.title}
                    </span>
                    <div className="flex flex-col pt-3 space-y-2">
                        <div className="flex flex-wrap items-center justify-start gap-1 text-sm font-medium text-gray-600 dark:text-gray-300">
                            {/* <div className="flex items-center gap-1">
                                <Icon icon="HiEye" />
                                <span>{trans.post?.views(post?.views)}</span>
                                <span>
                                    <DateTime value={post?.published?.start} />
                                </span>
                            </div>
                            <span className="inline-block md:hidden lg:inline-block">•</span> */}
                            <div className="flex items-center gap-1">
                                {/* <Icon icon="HiOutlineClock" /> */}
                                <span>{trans.post?.reading_time(post?.readingTime)}</span>
                            </div>
                        </div>
                        {/* <p className="text-sm text-gray-600 dark:text-gray-300">
                            <span className="">
                                <DateTime value={post?.published?.start} />
                            </span>
                        </p> */}
                        <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
                            {post?.description}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default PostCard;
