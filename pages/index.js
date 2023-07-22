import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import Post from '../components/Post'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Jumbotron from '../components/Jombo'


export default function Home({posts}) {
  console.log(posts)
  return (  
    <div className='containter'>
      <p/>
      
      <Jumbotron/>
      <div></div>
      <div className="posts" id="blog"> 
        {posts.map((post, index) =>(
          <Post post={post}/>
        ))}
      </div> 
    <p/>
    </div>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('public/images/post'))
  
  const posts = files.map((filename) => {
    const slug = filename.replace( '.md','')
    const markdownPostMetaData = fs.readFileSync(
      path.join('public/images/post', filename),
      'utf-8'
    )
    const {data:frontmatter} = matter(markdownPostMetaData)
    
    return {
      slug,
      frontmatter,
    }
  })
  
  return {
    props: {
      posts,
    },

  }
}