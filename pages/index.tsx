import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'


const Home: NextPage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <div className="bg-yellow-400 flex justify-between items-center border-y border-black absolute-right-10">
        <div className="px-10  space-y-5">
          <h1 className="text-6xl max-w-xl font-serif">
            <span className="underline decoration-black decoration-4">Medium</span>{""} is a place to write,read and connect</h1>
          <h2>It's easy and free to post your thinking on any topic and connect with millions of readers.</h2>
        </div>
        <div className="hidden md:inline-flex h-32 lg:h-full">
          <img src="myqr.png" alt="" />
        </div> 
      </div>

    </div>
  )
}

export default Home
