import Container from "@/components/shared/Container";
import macbook from "@/assets/images/macbook.jpg";

const AboutUsSection = () => {
  return (
    <Container className="h-screen grid grid-cols-1 gap-2 lg:grid-cols-2 place-content-center my-40">
      <div>
        <img src={macbook} alt="" />
      </div>
      <div className="place-content-center">
        <h1 className="mb-10"> Who we are </h1>
        <p className="text-dark-gray mb-4">
          At{" "}
          <span className="text-primary-foreground font-semibold">iRepair</span>
          , we love MacBooks as much as you do. That’s why we offer fast,
          reliable, and affordable repair services for all kinds of MacBooks.
          Whether you need a screen replacement, a battery upgrade, or a
          software fix, we have the skills and experience to get your MacBook
          back to its best. We serve both individuals and businesses in{" "}
          <span className="text-primary-foreground font-semibold">
            Bangladesh
          </span>{" "}
          , and we guarantee your satisfaction. Don’t let a broken MacBook ruin
          your day. Contact iRepair today and let us take care of it.
        </p>

        <div className="flex justify-between text-center">
          <div>
            <h1 className="text-primary text-9xl font-normal">98%</h1>
            <p className="font-semibold text-dark-gray">Successful Repairs</p>
          </div>
          <div>
            <h1 className="text-primary text-9xl font-normal">2K+</h1>
            <p className="font-semibold text-dark-gray">Successful Repairs</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutUsSection;
