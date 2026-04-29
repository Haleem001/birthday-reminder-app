import { useState, useEffect } from 'react';
import birthdayAPI from './api/birthdayAPI';
import BirthdayForm from './components/BirthdayForm';
import BirthdayList from './components/BirthdayList';

function App() {
  const [birthdays, setBirthdays] = useState([]);
  const [upcomingBirthdays, setUpcomingBirthdays] = useState([]);
  const [activeTab, setActiveTab] = useState('upcoming');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch birthdays
  const fetchBirthdays = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const allBirthdaysResponse = await birthdayAPI.getAllBirthdays();
      setBirthdays(allBirthdaysResponse.data || []);
      
      const upcomingResponse = await birthdayAPI.getUpcomingBirthdays();
      setUpcomingBirthdays(upcomingResponse.data || []);
    } catch (err) {
      setError('Failed to fetch birthdays');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchBirthdays();
  }, []);

  // Handle add birthday
  const handleAddBirthday = async (data) => {
    try {
      await birthdayAPI.createBirthday(data);
      await fetchBirthdays();
    } catch (err) {
      setError('Failed to add birthday');
      console.error(err);
    }
  };

  // Handle delete birthday
  const handleDeleteBirthday = async (id) => {
    try {
      await birthdayAPI.deleteBirthday(id);
      await fetchBirthdays();
    } catch (err) {
      setError('Failed to delete birthday');
      console.error(err);
    }
  };

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md">
      {/* TopAppBar (Web Only) */}
      <header className="hidden md:block sticky top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm transition-colors">
        <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>cake</span>
            <span className="text-xl font-extrabold tracking-tight text-primary">Celebrations</span>
          </div>
          <nav className="flex gap-6 items-center">
            <button 
              className={`font-inter text-sm font-semibold tracking-tight transition-colors px-3 py-2 rounded-lg ${activeTab === 'upcoming' ? 'text-primary bg-primary-container/20' : 'text-outline hover:bg-surface-container-high'}`}
              onClick={() => setActiveTab('upcoming')}
            >
              Upcoming ({upcomingBirthdays.length})
            </button>
            <button 
              className={`font-inter text-sm font-semibold tracking-tight transition-colors px-3 py-2 rounded-lg ${activeTab === 'all' ? 'text-primary bg-primary-container/20' : 'text-outline hover:bg-surface-container-high'}`}
              onClick={() => setActiveTab('all')}
            >
              All ({birthdays.length})
            </button>
            <button className="font-inter text-sm font-semibold tracking-tight text-on-primary font-bold bg-primary px-3 py-2 rounded-lg hover:brightness-110 transition-all">
              Add
            </button>
          </nav>
          <div className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-gray-50 transition-colors overflow-hidden ring-2 ring-transparent hover:ring-primary-container">
            <span className="material-symbols-outlined">person</span>
          </div>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="flex-1 w-full max-w-container-max mx-auto px-margin-mobile md:px-gutter pt-stack-lg pb-[120px] md:pb-stack-lg">
        <div className="grid grid-cols-12 gap-gutter">
          
          {/* Center Column for Focus Task (Form) */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-stack-lg">
            <BirthdayForm onAdd={handleAddBirthday} />
          </div>
          
          {/* Recently Added Section (List) */}
          <div className="col-span-12 lg:col-span-8 flex flex-col gap-stack-md">
            <div className="flex items-center gap-2 px-2">
              <span className="material-symbols-outlined text-primary">{activeTab === 'upcoming' ? 'event_upcoming' : 'group'}</span>
              <h2 className="font-h2 text-h2 text-on-surface">
                {activeTab === 'upcoming' ? 'Upcoming Birthdays' : 'All Birthdays'}
              </h2>
            </div>
            
            {error && (
               <div className="bg-error-container text-on-error-container rounded-lg p-4 shadow-sm flex items-center gap-3">
                 <span className="material-symbols-outlined">error</span>
                 <span>{error}</span>
               </div>
            )}
            
            {loading ? (
              <div className="flex justify-center items-center py-12">
                <span className="material-symbols-outlined animate-spin text-primary text-4xl">autorenew</span>
              </div>
            ) : (
              <div className="w-full">
                {activeTab === 'upcoming' ? (
                  <BirthdayList
                    birthdays={upcomingBirthdays}
                    onDelete={handleDeleteBirthday}
                    showUpcoming={true}
                  />
                ) : (
                  <BirthdayList
                    birthdays={birthdays}
                    onDelete={handleDeleteBirthday}
                    showUpcoming={false}
                  />
                )}
              </div>
            )}
          </div>
          
        </div>
      </main>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 w-full z-50 rounded-t-2xl bg-surface-container-lowest border-t border-surface-variant shadow-[0_-4px_20px_rgba(0,0,0,0.04)]">
        <div className="flex justify-around items-center w-full px-2 py-3 pb-safe">
          <button 
            className={`flex flex-col items-center justify-center px-4 py-1 transition-all duration-200 active:scale-90 ${activeTab === 'upcoming' ? 'text-primary bg-primary-container/20 rounded-xl' : 'text-outline hover:text-primary'}`}
            onClick={() => setActiveTab('upcoming')}
          >
            <span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: activeTab === 'upcoming' ? "'FILL' 1" : "'FILL' 0" }}>event_upcoming</span>
            <span className="font-inter text-[11px] font-medium">Upcoming</span>
          </button>
          
          <button 
            className={`flex flex-col items-center justify-center px-4 py-1 transition-all duration-200 active:scale-90 ${activeTab === 'all' ? 'text-primary bg-primary-container/20 rounded-xl' : 'text-outline hover:text-primary'}`}
            onClick={() => setActiveTab('all')}
          >
            <span className="material-symbols-outlined mb-1" style={{ fontVariationSettings: activeTab === 'all' ? "'FILL' 1" : "'FILL' 0" }}>group</span>
            <span className="font-inter text-[11px] font-medium">All</span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default App;
