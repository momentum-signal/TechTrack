import JobCard from "@/components/internships/job-card";

const RecentInternships = async () => {
  const jobs = [1, 2, 3];
  return (
    <section className="px-10 md:px-20 lg:px-32">
      <div>
        <div className="section-title my-8">
          <h2 className="mb-2 text-center text-2xl">Recent Internship Posts</h2>
          <p className="text-center">
            A list of all recent internships that have been posted.
          </p>
        </div>

        <div className="my-8 grid justify-center gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((post, index) => (
            <JobCard key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentInternships;
