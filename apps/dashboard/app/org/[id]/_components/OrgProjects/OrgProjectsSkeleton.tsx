import ProjectCardSkeleton from './ProjectCardSkeleton';

export default function OrgProjectsSkeleton() {
  return (
    <div className="col-span-2 flex flex-col gap-2">
      <h5 className="text-sm font-medium">Projects</h5>
      <div className="grid grid-cols-2 gap-5">
        {[...Array(2)].map((_, idx) => (
          <ProjectCardSkeleton key={idx} />
        ))}
      </div>
    </div>
  );
}
