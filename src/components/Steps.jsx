import { CheckIcon, HandThumbUpIcon, UserIcon, CheckCircleIcon } from '@heroicons/react/20/solid'

const timeline = [
  {
    id: 1,
    content: '',
    target: 'Schedule a 1:1 with our Lead Instructor',
    href: "https://calendar.app.google/LzLeCSfPr8oS6Msr9",
    date: 'Sep 30',
    datetime: '2020-09-30',
    icon: CheckCircleIcon,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 2,
    content: '',
    target: 'Complete the New Student Form',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSd6FPAi8wshsoZ__qHm55K9vdILXY2zAipgpgjB0-cCDvWvJg/viewform?usp=sf_link',
    date: 'Sep 22',
    datetime: '2020-09-22',
    icon: CheckCircleIcon,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 3,
    content: '',
    target: 'Meeting With Founder',
    href: '#',
    date: 'Sep 28',
    datetime: '2020-09-28',
    icon: CheckCircleIcon,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 4,
    content: '',
    target: 'Receive Personal Study Plan',
    href: "https://calendar.app.google/LzLeCSfPr8oS6Msr9",
    date: 'Sep 30',
    datetime: '2020-09-30',
    icon: CheckCircleIcon,
    iconBackground: 'bg-blue-500',
  },
  {
    id: 5,
    content: '',
    target: 'Start Sessions',
    href: '#',
    date: 'Oct 4',
    datetime: '2020-10-04',
    icon: CheckCircleIcon,
    iconBackground: 'bg-blue-500',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="flex flex-col sm:flex-row bg-white pr-10 pl-10 py-24 sm:py-32">
      <div className="flex-grow flex items-center justify-center whitespace-normal">
        <div>
          <h3 className="text-7xl leading-8 font-bold text-left text-blue-500 mb-5 tracking-tight sm:text-6xl">Interested?</h3>
          <h3 className="text-5xl leading-10 font-bold text-left text-gray-900 pb-10">Follow These Steps...</h3>
        </div>
      </div>
      <div className="flex-grow whitespace-normal">
        <div className="flow-root">
          <ul role="list" className="-mb-8">
            {timeline.map((event, eventIdx) => (
              <li key={event.id}>
                <div className="relative pb-12">
                  {eventIdx !== timeline.length - 1 ? (
                    <span className="absolute left-4 top-4 -ml-px h-full w-4 bg-blue-200" aria-hidden="true" />
                  ) : null}
                  <div className="relative flex space-x-3">
                    <div className='text-white'>
                      <span
                        className={classNames(
                          event.iconBackground,
                          'h-12 w-12 rounded-full flex items-center justify-center '
                        )}
                      >
                        <p className='text-xl'>{event.id}</p>
                      </span>
                    </div>
                    <div className="flex min-w-0 flex-1 justify-between space-x-4 ">
                      <div className="flex items-center justify-center">
                          <a href={event.href} className="font-medium text-xl text-gray-900">
                            {event.target}
                          </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}


