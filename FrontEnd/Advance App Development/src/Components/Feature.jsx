import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Why us?",
    description:
      "Emphasize your commitment to quality and reliability. Assure visitors that they can trust your organization to deliver consistent, high-quality results.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Our Goal!",
    description:
      "Our goal is to empower individuals with access to quality education and resources, fostering personal growth and academic achievement.",
    icon: LockClosedIcon,
  },
  {
    name: "Our Service",
    description:
      "Our service encompasses a comprehensive admission portal designed to streamline the application process for prospective students.",
    icon: ServerIcon,
  },
];

export default function Example() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Book Your Seats In
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
               The Best Colleges
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore our comprehensive admission portal to begin your journey towards academic excellence. Discover courses, admission requirements, application deadlines, and more. Take the first step towards your future today
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={1432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}
