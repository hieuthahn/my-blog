import { Route } from '@/lib';
import Link from 'next/link';
import { useRouter } from 'next/router';
interface TagProps {
    name: string;
}

const Tag = ({ name }: TagProps) => {
    return (
        <object type="owo/uwu">
            <Link
                href={Route.tag.get(name)}
                className="inline-block bg-opacity-80 dark:!bg-opacity-80 rounded-md px-1.5 py-0.5 font-medium transition-colors bg-gray-100 text-gray-700 hover:text-black disabled:text-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:text-white dark:disabled:bg-gray-600 focus:outline-none mr-2"
            >
                {name}
            </Link>
        </object>
    );
};

export default Tag;
