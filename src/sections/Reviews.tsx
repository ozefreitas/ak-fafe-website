import { ReviewsOptions } from "../constants";

const Reviews = () => {
  return (
    <section className="flex flex-wrap gap-8 max-sm:gap-10 max-sm:px-5 padding-t">
      {ReviewsOptions.map((review, index) => (
        <div
          key={index}
          className="py-10 px-15 bg-bg-grey-card rounded-2xl flex-1 basis-[30%] max-lg:basis-[45%] max-md:basis-full h-fit shadow-2xl overflow-auto inset-shadow-sm inset-shadow-akfafe-blue"
        >
          <p className="mb-10">{review.message}</p>
          <h3 className="flex gap-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            {review.name}
          </h3>
        </div>
      ))}
    </section>
  );
};

export default Reviews;
