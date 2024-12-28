

const feeds = [
  {
    id: "1",
    title: "Clean Water Campaign: Progress Update",
    description:
      "The Clean Water Campaign has successfully built 3 wells, providing clean water to over 500 families in rural areas. Thank you for your support!",
    date: "December 28, 2024",
    image: "https://i.pinimg.com/originals/b6/fe/b7/b6feb7c980259b4d28b3d09c95898e19.jpg",
  },
  {
    id: "2",
    title: "Volunteer Spotlight: Meet John Doe",
    description:
      "John has been an active volunteer in the Education for Every Child project, helping to distribute over 1,000 books to schools in need.",
    date: "December 26, 2024",
    image: "https://th.bing.com/th/id/OIP.HCVNnFiHKKKFPWFB_jD0HwHaC5?w=291&h=136&c=7&r=0&o=5&dpr=1.5&pid=1.7",
  },
  {
    id: "3",
    title: "Green Planet Initiative: Tree-Planting Event",
    description:
      "Join us for our upcoming tree-planting event this Saturday! Together, we aim to plant 1,000 trees to promote sustainability.",
    date: "December 20, 2024",
    image: "https://cdn4.vectorstock.com/i/1000x1000/31/03/green-planet-agitative-promo-poster-with-earth-vector-21113103.jpg",
  },
];

const Feeds = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-primary-dark">Project Feeds</h1>
          <p className="text-gray-700 mt-4">
            Stay updated on the latest activities, announcements, and progress from our projects.
          </p>
        </div>

        {/* Feeds List */}
        <div className="space-y-6">
          {feeds.map((feed) => (
            <div
              key={feed.id}
              className="bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden"
            >
              {/* Feed Image */}
              <img
                src={feed.image}
                alt={feed.title}
                className="w-full h-48 object-cover"
              />
              {/* Feed Details */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-primary-dark">{feed.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{feed.description}</p>
                <p className="text-xs text-gray-500 mt-4">{feed.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feeds;
