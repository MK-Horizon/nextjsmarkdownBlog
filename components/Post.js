import Link from 'next/link'

export default function Post({post}){
  return (
    <div className='card'>
        
        <img src={post.frontmatter.cover_image} alt=""/>
        <h3 className='post-title'>{post.frontmatter.title}</h3>
        <div className='post-date'> Posted on {post.frontmatter.date}</div>
        <p className='post-body'>{post.frontmatter.excerpt}</p>
         
        <Link href={`/content/${post.slug}`}>
         <button className='btn btn-secondary'>view article</button>
        </Link>
    </div>
  )
}

