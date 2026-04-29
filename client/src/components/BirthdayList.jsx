import BirthdayCard from './BirthdayCard';

function BirthdayList({ birthdays, onDelete, showUpcoming }) {
  if (!birthdays || birthdays.length === 0) {
    return (
      <div className="bg-surface-container-low rounded-xl p-8 flex flex-col items-center justify-center text-center gap-4">
        <span className="material-symbols-outlined text-4xl text-outline">cake</span>
        <p className="font-body-md text-on-surface-variant">
          {showUpcoming
            ? 'No upcoming birthdays in the next 30 days!'
            : 'No birthdays added yet. Start adding some!'}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
      {birthdays.map((birthday) => (
        <BirthdayCard
          key={birthday._id}
          birthday={birthday}
          onDelete={onDelete}
          showUpcoming={showUpcoming}
        />
      ))}
    </div>
  );
}

export default BirthdayList;
