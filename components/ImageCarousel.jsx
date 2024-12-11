import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomDot from "./CustomDot";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export default function ImageCarousel() {
  const CustomDotWrapper = (props) => {
    const { onClick, active, index, carouselState } = props;
    return (
      <CustomDot
        onClick={onClick}
        active={active}
        index={index}
        carouselState={carouselState}
      />
    );
  };

  return (
    <div className="h-full w-full object-cover">
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        customDot={<CustomDot />}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <img
          src="https://ar.rdcpix.com/a7f7688ac37b584ba50f3bb725b92443c-f2738826364rd-w1280_h960.webp"
          alt=""
          className="h-[434px] w-[645.69] object-cover"
        />
        <img
          src="https://ar.rdcpix.com/a7f7688ac37b584ba50f3bb725b92443c-f1134627828rd-w2048_h1536.webp"
          alt=""
          className="h-[434px] w-[645.69] object-cover"
        />
        <img
          src="https://ar.rdcpix.com/a7f7688ac37b584ba50f3bb725b92443c-f2020301146rd-w2048_h1536.webp"
          alt=""
          className="h-[434px] w-[645.69] object-cover"
        />
        <img
          src="https://ar.rdcpix.com/a7f7688ac37b584ba50f3bb725b92443c-f3139238151rd-w2048_h1536.webp"
          alt=""
          className="h-[434px] w-[645.69] object-cover"
        />
      </Carousel>
    </div>
  );
}
