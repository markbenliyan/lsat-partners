const people = [
  {
    name: 'Hakop Pilavjian',
    role: 'Glendale, CA',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: "I had the privilege of working with an exceptional LSAT tutor who completely transformed my test-taking abilities and propelled my score to new heights within a remarkably short period of time.  From the very first session, this my exhibited a deep understanding of the LSAT exam. Their expertise in the test's nuances and strategies was evident, instantly instilling confidence in me. They tailored their teaching approach to suit my individual learning style, making each session engaging and highly productive. What truly sets this tutor apart is their ability to demystify even the most complex LSAT concepts. They have an uncanny talent for breaking down difficult topics into digestible pieces, making them easily understandable. With their patient guidance, I gained a newfound clarity that I never thought possible. In addition to their exceptional teaching skills, this tutor also provided an extensive collection of study materials, practice tests, and personalized exercises. These resources were invaluable in honing my skills and replicating the exam experience. They constantly challenged me to push my boundaries and excel in all areas of the LSAT.  Now, here comes the most remarkable part. I experienced an astonishing score increase in a remarkably short amount of time. Under the tutelage of this incredible LSAT tutor, my score skyrocketed beyond my wildest expectations within a month. Their unique strategies and tailored approach to my weaknesses transformed my weaknesses into strengths, giving me a competitive edge on test day.  The dedication and passion this tutor brings to their work are truly inspiring. They invested their time and effort into understanding my goals and aspirations, providing unwavering support and motivation throughout my LSAT journey. Their unwavering commitment to my success was evident in every session we had together.  I cannot stress enough how grateful I am for the expertise and guidance of those at LSAT Partners. Thanks to them, I gained admission to my dream law school, and it wouldn't have been possible without their invaluable assistance. If you're seeking a tutor who can deliver remarkable score increases within a short timeframe, look no further. This tutor is a game-changer!",
    reviewURL: "https://www.yelp.com/biz/lsat-partners-glendale-2?hrid=bmOVjnXKLVwQU936kPqxLw&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)"
  },
  {
    name: 'Leonard Krasner',
    role: 'Senior Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.',
  },
  {
    name: 'Tony G',
    role: 'Tujunga, CA',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: "#1 LSAT tutoring out there! Very professional and dedicated tutor, and focused on getting his client's their goals. Reached out to him 6 months before my exam and we made a plan to meet twice a week and focus on my areas of improvement. There was a drastic increase in my practice exam scores during the progression of my training sessions. I learned new techniques and reading strategies that helped me save time which is crucial during the LSAT. Reach out to him and you'll see a huge difference in your score.",
    reviewURL: "https://www.yelp.com/biz/lsat-partners-glendale-2"
  },
  {
    name: 'Hakop Sinapyan',
    role: 'Panorama City, CA',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: "Studied with Mike for about 5 months and broke 170! He makes sure you take it serious and personalizes the course to fit your study type. Super flexible and super convenient since it's on zoom.",
    reviewURL: "https://www.yelp.com/biz/lsat-partners-glendale-2?hrid=BRfNBz7n87FJB2-eb9pgig&utm_campaign=www_review_share_popup&utm_medium=copy_link&utm_source=(direct)"
  }
]

export default function Example() {
  const redirectToYelp = (url) => {
    window.open(url, '_blank');
  };
  return (
    <div className="bg-white py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl sm:text-center">
      <h2 className="text-3xl font-bold tracking-tight text-blue-600 sm:text-6xl">You Can Be Our Next Success Story </h2>
      {/* <p className="mt-6 text-lg leading-8 text-gray-600">
        Here if we want it
      </p> */}
    </div>
    <ul
      role="list"
      className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
    >
      {people.map((person) => (
        <div>
          <li key={person.name} className="flex flex-col gap-6 xl:flex-row">
            <div className="flex-auto">
              <div className="flex">
                <div className="w-4/5">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-base leading-7 text-gray-600">{person.role}</p>
                </div>
                
                <div className="w-1/5">
                  <img src="/Yelp-Logo.png" alt="" className="max-w-full max-h-full"/>
                </div>
              </div>
              <div className="w-1/4 mt-1">
                  <img src="/yelp5star.png" alt="" className="max-w-full max-h-full"/>
                </div>
              <p className="mt-6 text-base leading-7 text-gray-600 line-clamp-6">
                {person.bio}
              </p>
            </div>
          </li>
          <button
          type="button"
          className="rounded bg-red-700 px-4 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-90 mt-4
          hover:bg-red-600"
          onClick={() => redirectToYelp(person.reviewURL)}
        >View on Yelp</button>
        </div>
      ))}
    </ul>
  </div>
</div>
  )
}