const posts = [
  {
    id: 1,
    title: '99th Percentile Tutors',
    href: '#',
    description:
      'We only hire the best tutors. All of our tutors have scored in the top 1% on the LSAT.',
    imageUrl:
      '/goldmedal.jpg',
  },
  {
    id: 2,
    title: 'Customized Study Plans',
    href: '#',
    description:
      'We develop a customized study plan for each student based on their needs and goals.',
    imageUrl:
      '/customplan.jpg',
  },{
    id:3,
    title: 'Affordable Pricing',
    href: '#',
    description:
      'Our group format allows us to keep costs down and maximize the time students spend with tutors.',
    imageUrl:
      '/piggybank.jpg',
  },
]

export default function Example() {
  return (
    <div className="bg-white py-12 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-blue-600 sm:text-6xl">Our Method</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
          Our LSAT prep sessions are expertly-designed from years of tutoring experience 
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="article-hover relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80 "
            >
              <div className="horizontal"></div>
              <img src={post.imageUrl} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <time dateTime={post.datetime} className="mr-8">
                  {post.date}
                </time>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <a href={post.href}>
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h3>
              <p className="mt-4 text-base text-gray-300">{post.description}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
