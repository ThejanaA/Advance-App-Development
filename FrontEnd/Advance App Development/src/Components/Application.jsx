import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function Application() {
  // State for form values
  const [formValues, setFormValues] = useState({
    username: '',
    about: '',
    tenthMark: '',
    twelfthMark: '',
    ugCgpa: '',
    dob: '',
    gender: '',
    nationality: '',
    address: '',
    mobileNumber: ''
  });

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <form className="max-w-3xl mx-auto">
      <div className="space-y-12">
        {/* Profile section */}
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you share.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            {/* Username Field */}
            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="janesmith"
                    value={formValues.username}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>

            {/* About Field */}
            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                About
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={formValues.about}
                  onChange={handleInputChange}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
            </div>

            {/* 10th Mark Field */}
            <div className="sm:col-span-2">
              <label htmlFor="tenth-mark" className="block text-sm font-medium leading-6 text-gray-900">
                10th Mark
              </label>
              <input
                type="text"
                name="tenthMark"
                id="tenth-mark"
                autoComplete="tenth-mark"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 sm:text-sm"
                placeholder="Enter 10th Mark"
                value={formValues.tenthMark}
                onChange={handleInputChange}
              />
            </div>

            {/* 12th Mark Field */}
            <div className="sm:col-span-2">
              <label htmlFor="twelfth-mark" className="block text-sm font-medium leading-6 text-gray-900">
                12th Mark
              </label>
              <input
                type="text"
                name="twelfthMark"
                id="twelfth-mark"
                autoComplete="twelfth-mark"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 sm:text-sm"
                placeholder="Enter 12th Mark"
                value={formValues.twelfthMark}
                onChange={handleInputChange}
              />
            </div>

            {/* UG CGPA Field */}
            <div className="sm:col-span-2">
              <label htmlFor="ug-cgpa" className="block text-sm font-medium leading-6 text-gray-900">
                UG CGPA (optional)
              </label>
              <input
                type="text"
                name="ugCgpa"
                id="ug-cgpa"
                autoComplete="ug-cgpa"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 sm:text-sm"
                placeholder="Enter UG CGPA (optional)"
                value={formValues.ugCgpa}
                onChange={handleInputChange}
              />
            </div>

            {/* Date of Birth Field */}
            <div className="sm:col-span-2">
              <label htmlFor="dob" className="block text-sm font-medium leading-6 text-gray-900">
                Date of Birth
              </label>
              <input
                type="date"
                name="dob"
                id="dob"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 sm:text-sm"
                value={formValues.dob}
                onChange={handleInputChange}
              />
            </div>

            {/* Gender Field */}
            <div className="sm:col-span-2">
              <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 sm:text-sm"
                value={formValues.gender}
                onChange={handleInputChange}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Nationality Field */}
            <div className="sm:col-span-2">
              <label htmlFor="nationality" className="block text-sm font-medium leading-6 text-gray-900">
                Nationality
              </label>
              <input
                type="text"
                name="nationality"
                id="nationality"
                autoComplete="nationality"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 sm:text-sm"
                placeholder="Enter Nationality"
                value={formValues.nationality}
                onChange={handleInputChange}
              />
            </div>

            {/* Address Field */}
            <div className="sm:col-span-4">
              <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                autoComplete="address"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 sm:text-sm"
                placeholder="Enter Address"
                value={formValues.address}
                onChange={handleInputChange}
              />
            </div>

            {/* Mobile Number Field */}
            <div className="sm:col-span-2">
              <label htmlFor="mobile-number" className="block text-sm font-medium leading-6 text-gray-900">
                Mobile Number
              </label>
              <input
                type="tel"
                name="mobileNumber"
                id="mobile-number"
                autoComplete="mobile-number"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-600 focus:ring-opacity-50 sm:text-sm"
                placeholder="Enter Mobile Number"
                value={formValues.mobileNumber}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        {/* Additional Sections */}
        {/* ... */}

        {/* Buttons */}
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
