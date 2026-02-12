export const ProjectImage = ({ src, alt }) => {
  return (
    <div className="rounded-lg overflow-hidden bg-card/30 w-full">
      <img 
        src={src} 
        alt={alt}
        className="w-full h-full object-cover aspect-[4/3]"
      />
    </div>
  );
};