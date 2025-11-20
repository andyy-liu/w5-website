import { TeamMember } from "../data/team";

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div
      className="group bg-cream rounded-xl p-4 border-2 border-[#D9D9D9] transition-all duration-300 hover:-translate-y-1"
      style={{ boxShadow: "0 0 8px rgba(0, 4, 0, 0.1)" }}
    >
      {/* Image Container - Square aspect ratio */}
      <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100 mb-2">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover scale-125"
          loading="lazy"
        />
      </div>

      {/* Info Container */}
      <div>
        <div className="flex items-center justify-between gap-2 -my-1">
          <h3 className="text-2xl font-helvetica font-medium text-[#00000A] tracking-tight flex-1 min-w-0">
            {member.name}
          </h3>

          {/* LinkedIn Icon */}
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 flex items-center justify-center rounded"
              aria-label={`${member.name}'s LinkedIn profile`}
            >
              <img
                src="/linkedin.svg"
                alt="LinkedIn"
                className="w-7 h-7"
                loading="lazy"
              />
            </a>
          )}
        </div>
        <p className="text-md font-helvetica tracking-tight text-[#00000A]/60 -mb-1.5">
          {member.position}
        </p>
      </div>
    </div>
  );
}
