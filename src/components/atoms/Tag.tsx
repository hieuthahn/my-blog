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
                className="flex items-center justify-center px-[0.5rem] py-[0.375rem] hover:bg-primary rounded-full bg-[#697177] leading-[1] text-[0.75rem] font-semibold place-content-center text-white">
                {name}
            </Link>
        </object>
    );
};

export default Tag;
