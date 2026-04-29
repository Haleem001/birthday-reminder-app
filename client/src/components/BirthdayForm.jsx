import { useState } from 'react';

function BirthdayForm({ onAdd }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dateOfBirth: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.dateOfBirth) {
      setMessage('Please fill in all required fields');
      return;
    }

    try {
      setLoading(true);
      await onAdd(formData);
      setFormData({
        name: '',
        email: '',
        dateOfBirth: '',
      });
      setMessage('User added successfully 🎉');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      setMessage('Failed to add user');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-surface-container-lowest rounded-xl p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300 relative overflow-hidden group">
      {/* Decorative ambient blur */}
      <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary-fixed opacity-30 blur-3xl rounded-full pointer-events-none group-hover:opacity-50 transition-opacity duration-500"></div>
      
      <div className="relative z-10 flex flex-col gap-8">
        <div>
          <h1 className="font-h1 text-h1 text-on-surface mb-2">New Entry</h1>
          <p className="font-body-md text-body-md text-outline">Add a loved one to your celebrations list.</p>
        </div>

        {message && (
          <div className={`rounded-lg p-4 shadow-[0_4px_20px_rgba(0,0,0,0.04)] flex items-center gap-3 w-full border ${message.includes('successfully') ? 'bg-primary-container text-on-primary-container border-primary/20' : 'bg-error-container text-on-error-container border-error/20'}`}>
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
              {message.includes('successfully') ? 'check_circle' : 'error'}
            </span>
            <span className="font-label-sm text-label-sm">{message}</span>
          </div>
        )}

        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          {/* Username Field */}
          <div className="flex flex-col gap-stack-sm">
            <label className="font-label-sm text-label-sm text-on-surface" htmlFor="name">Full Name</label>
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-4 text-outline z-10">person</span>
              <input 
                className="w-full bg-surface-container focus:bg-surface-container-lowest border-2 border-transparent focus:border-primary rounded-lg pl-12 pr-4 py-3 font-body-md text-body-md text-on-surface placeholder:text-outline transition-colors outline-none shadow-sm" 
                id="name" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Alex Smith" 
                type="text"
                required
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="flex flex-col gap-stack-sm">
            <label className="font-label-sm text-label-sm text-on-surface" htmlFor="email">Email</label>
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-4 text-outline z-10">mail</span>
              <input 
                className="w-full bg-surface-container focus:bg-surface-container-lowest border-2 border-transparent focus:border-primary rounded-lg pl-12 pr-4 py-3 font-body-md text-body-md text-on-surface placeholder:text-outline transition-colors outline-none shadow-sm" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="alex@example.com" 
                type="email"
                required
              />
            </div>
          </div>

          {/* Date of Birth Field */}
          <div className="flex flex-col gap-stack-sm">
            <label className="font-label-sm text-label-sm text-on-surface" htmlFor="dateOfBirth">Date of Birth</label>
            <div className="relative flex items-center">
              <span className="material-symbols-outlined absolute left-4 text-outline z-10">calendar_month</span>
              <input 
                className="w-full bg-surface-container focus:bg-surface-container-lowest border-2 border-transparent focus:border-primary rounded-lg pl-12 pr-4 py-3 font-body-md text-body-md text-on-surface transition-colors outline-none shadow-sm appearance-none cursor-pointer text-outline" 
                id="dateOfBirth" 
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                type="date"
                required
              />
            </div>
          </div>
          


          {/* Submit Button */}
          <button 
            className="mt-4 bg-primary text-on-primary rounded-lg py-4 px-6 font-button text-button shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:brightness-110 active:scale-[0.98] transition-all duration-200 flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed" 
            type="submit"
            disabled={loading}
          >
            <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'wght' 600" }}>add</span>
            {loading ? 'Adding User...' : 'Add User'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default BirthdayForm;
