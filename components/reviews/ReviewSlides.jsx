import ReviewCard from "./ReviewCard";

const ReviewSlides = ({ direction }) => {
  return (
    <div className={`flex relative w-full h-full mb-5 gap-5 ${direction}`}>
      <div className="absolute bg-purple-400 h-full w-[200px] top-0"></div>

      {/* Original ReviewCards */}
      <ReviewCard
        feedback="Probably one of the best looking real estate websites out there. The service is great, too! Truly the greatest website ever been known to man. No cap. On god."
        user="Joe Mom"
        profession="Professional trash talker"
      />
      {/* <ReviewCard
        feedback="Cool af bruh."
        user="Joe Mom"
        profession="Professional trash talker"
      /> */}
      {/* <ReviewCard
        feedback="Whoa."
        user="Joe Mom"
        profession="Professional trash talker"
      /> */}
      {/* <ReviewCard
        feedback="I second what Joe said."
        user="Joe Mom"
        profession="Professional trash talker"
      /> */}
      <ReviewCard
        feedback="Dam son. Where'd you find that?"
        user="Joe Mom"
        profession="Professional trash talker"
      />
      {/* <ReviewCard
        feedback="Never gonna give you up."
        user="Joe Mom"
        profession="Professional trash talker"
      /> */}
      <ReviewCard
        feedback="I CAME IN LIKE A WRECKING BALL!!!!!!!!!"
        user="Joe Mom"
        profession="Professional trash talker"
      />
      <ReviewCard
        feedback="You know nothing Jon Snow."
        user="Joe Mom"
        profession="Professional trash talker"
      />
      <ReviewCard
        feedback="ITS OVER ANAKIN - I HAVE THE HIGHGROUND."
        user="Joe Mom"
        profession="Professional trash talker"
      />
      {/* Duplicated ReviewCards for seamless scrolling */}
      <ReviewCard
        feedback="Probably one of the best looking real estate websites out there. The service is great, too! Truly the greatest website ever been known to man. No cap. On god."
        user="Joe Mom"
        profession="Professional trash talker"
      />
      {/* <ReviewCard
        feedback="Cool af bruh."
        user="Joe Mom"
        profession="Professional trash talker"
      />
      <ReviewCard
        feedback="Whoa."
        user="Joe Mom"
        profession="Professional trash talker"
      />
      <ReviewCard
        feedback="I second what Joe said."
        user="Joe Mom"
        profession="Professional trash talker"
      /> */}
      <ReviewCard
        feedback="Dam son. Where'd you find that?"
        user="Joe Mom"
        profession="Professional trash talker"
      />

      <ReviewCard
        feedback="I CAME IN LIKE A WRECKING BALL!!!!!!!!!"
        user="Joe Mom"
        profession="Professional trash talker"
      />
      <ReviewCard
        feedback="You know nothing Jon Snow."
        user="Joe Mom"
        profession="Professional trash talker"
      />
      <ReviewCard
        feedback="ITS OVER ANAKIN - I HAVE THE HIGHGROUND."
        user="Joe Mom"
        profession="Professional trash talker"
      />
    </div>
  );
};

export default ReviewSlides;
