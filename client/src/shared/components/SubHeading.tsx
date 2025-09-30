export default function SubHeading(props: {
  text: string;
  icon?: string;
  isRight?: boolean;
  isLeft?: boolean;
  isMirror?: boolean;
}) {
  const { text, icon, isRight, isLeft, isMirror } = props;
  return (
    <div className="w-fit h-fit relative flex justify-start mb-3 items-center">
      {isLeft && (
        <div className="absolute top-0 -left-10 lg:-left-10">
          <img
            src={icon}
            alt="subheading-icon"
            className={`h-10 lg:h-15 ${isMirror && "-scale-x-100"} -z-10`}
            loading="lazy"
          />
        </div>
      )}
      <h4 className="font-oswald text-2xl md:text-3xl mt-4 lg:mt-6 font-bold text-primary z-0">
        {text}
      </h4>
      {isRight && (
        <img
          src={icon}
          alt="subheading-icon"
          className="h-full"
          loading="lazy"
        />
      )}
    </div>
  );
}
