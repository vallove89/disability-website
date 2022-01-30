import Image from 'next/image'
import Link from 'next/link'

const CardPost = ({ post }) => {

  return (
    <Link href={post.frontMatter.threadUrl}>
        <div className="min-w-full lg:max-w-full lg:flex my-5">
            <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Mountain">
                <Image 
                    src={post.frontMatter.thumbnailUrl}
                    alt='thumbnail'
                    layout='intrinsic'
                    width={400}
                    height={400}
                />
            </div>
            <div className="border-r border-b border-l border-blue-900 lg:border-l-0 lg:border-t lg:border-blue-900 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal w-full">
                <div className="mb-8">
                    <div className="text-blue-900 font-bold text-xl mb-2">{post.frontMatter.title}</div>
                    <p className="text-blue-700 text-base">{post.frontMatter.description}</p>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default CardPost;