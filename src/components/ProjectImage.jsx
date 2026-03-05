export const ProjectImage = ({ src, alt }) => {
  return (
    <div className="w-full rounded-lg overflow-hidden bg-card/30">
      <div className="w-full aspect-[4/3]">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
};