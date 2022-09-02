import React from 'react'

function ThemeSwitch() {
  return (
    <div className="switch-container">
    <input type='checkbox' class="checkbox" id='checkbox'/>
    <label className='theme-toggle-label' for="checkbox">
        <i className="fa-solid fa-moon toggle-icon dark-icon"></i>
        <i className="fa-solid fa-sun toggle-icon light-icon"></i>
        <span className="light-text toggle-text default-text">Light Mode</span>
        <span className=" toggle-text dark-text">Dark Mode</span>
    </label>
    </div>
  )
}

export default ThemeSwitch