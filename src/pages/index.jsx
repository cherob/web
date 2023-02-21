// Dom components go here
export default function Page(props) {
  // on the index page should be a list of pages.
  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
      Welcome!
      <a href='/home' className='text-2xl text-center text-white'>
        go to home
      </a>
    </div>
  )
}

export async function getStaticProps() {
  return { props: { title: 'Index' } }
}
