const SkillBadge = ({ skill, missing = false }) => {
    const baseClasses = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border";
    const colors = missing
        ? "bg-red-50 text-red-700 border-red-200"
        : "bg-blue-50 text-blue-700 border-blue-200";

    return (
        <span className={`${baseClasses} ${colors}`}>
            {skill}
        </span>
    );
};

export default SkillBadge;
