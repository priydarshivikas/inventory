import './header.css'
function Header() {
  return (
    <div className="header">
      <div className='header-container'>
      <div className='header-left'>
        <h2>Hello,ShahRukh</h2>  
      </div>
      <div className='header-right'>
      <input className="input-grey-rounded" type="text" placeholder="Search"></input>
      </div>
      </div>

      </div>
  )
}

export default Header