import Avatar from "./Avatar";
import Bounded from "./Bounded";
import Button from "./Button";
import Heading from "./Heading";

interface BiographyProps {
  heading: string;
  body: string;
  buttonLink: string;
  buttonText: string;
  avatarSrc: string;
}

const Biography = ({
  heading,
  body,
  buttonLink,
  buttonText,
  avatarSrc,
}: BiographyProps): JSX.Element => {
  return (
    <Bounded>
      <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
        <Heading size="xl" className="col-start-1">
          {heading}
        </Heading>

        <div className="prose prose-xl prose-slate prose-invert col-start-1 text-white md:w-2xl flex flex-wrap md:text-2xl gap-y-4">
          <div dangerouslySetInnerHTML={{ __html: body }} />
        </div>

        <Button link={buttonLink} label={buttonText} />

        {/* <Avatar
          className="row-start-1 max-w-sm md:col-start-2 md:row-end-3"
          imageSrc={avatarSrc}
        /> */}
      </div>
    </Bounded>
  );
};

export default Biography;
