type TKourseFeatureParams = {
  Icon: JSX.Element;
  title: string;
  subtitle: string;
};

export default function KourseFeature({
  Icon,
  title,
  subtitle,
}: TKourseFeatureParams) {
  return (
    <div className="flex flex-row gap-5">
      <div className="p-3 bg-white/10 w-min h-min rounded-lg">{Icon}</div>
      <div className="flex flex-col">
        <span className="text-white font-poppins text-xl">{title}</span>
        <p className="text-white/60 font-poppins">{subtitle}</p>
      </div>
    </div>
  );
}
