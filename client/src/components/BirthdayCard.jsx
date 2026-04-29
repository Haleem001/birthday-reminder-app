function BirthdayCard({ birthday, onDelete, showUpcoming }) {
  const dateOfBirth = new Date(birthday.dateOfBirth);
  const monthDay = dateOfBirth.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });
  const year = dateOfBirth.getFullYear();

  const handleDelete = () => {
    if (window.confirm(`Delete ${birthday.name}'s birthday?`)) {
      onDelete(birthday._id);
    }
  };

  return (
    <div className="bg-surface-container-lowest rounded-xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-200 flex items-center gap-4 border border-surface-variant group relative">
      <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 ring-2 ring-transparent group-hover:ring-primary-fixed transition-all bg-surface-container flex items-center justify-center">
        <span className="material-symbols-outlined text-primary">person</span>
      </div>
      
      <div className="flex-1 min-w-0">
        <p className="font-label-sm text-label-sm text-on-surface truncate">{birthday.name}</p>
        <p className="font-body-md text-[13px] text-outline truncate">{birthday.email}</p>
        {showUpcoming && (
           <p className="font-body-md text-[12px] text-primary-container font-semibold mt-1">In {birthday.daysUntilBirthday} days</p>
        )}
      </div>
      
      <div className="flex flex-col items-end shrink-0 bg-surface-container-low px-3 py-1.5 rounded-lg">
        <span className="font-label-sm text-[12px] text-primary">{monthDay}</span>
        <span className="font-body-md text-[11px] text-outline">{year} • {birthday.age} yrs</span>
      </div>

      <button 
        className="absolute -top-2 -right-2 bg-error-container text-on-error-container w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-sm hover:brightness-95" 
        onClick={handleDelete}
        title="Delete"
      >
        <span className="material-symbols-outlined text-[16px]">delete</span>
      </button>
    </div>
  );
}

export default BirthdayCard;
