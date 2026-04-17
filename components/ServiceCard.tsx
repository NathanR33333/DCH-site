type ServiceCardProps = {
  title: string;
  description: string;
};

export default function ServiceCard({
  title,
  description,
}: ServiceCardProps) {
  return (
    <div className="card-shell p-7 transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-[var(--gold)]/40">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--navy)] text-sm font-bold text-[var(--gold)]">
        {title.charAt(0)}
      </div>

      <h3 className="mt-5 text-xl font-semibold text-[var(--navy)]">
        {title}
      </h3>
      <p className="mt-3 leading-7 text-[var(--gray)]">{description}</p>
    </div>
  );
}