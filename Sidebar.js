import React from 'react'
import './sidebar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
const Sidebar1 = () => {
  return (
   
          <div>
        <nav className='sidebar'>
            <div className='text'>Side Menu</div>
            <al>
                <li> <a href='#'>Dashboard</a></li>
                <li><a href='#'>features</a>
                <al>
                    <li><a href='#'>box1</a></li>
                <li> <a href='#'>box2</a>  </li>
                    </al>
                </li>

            </al>
        </nav>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    </div>
    
  )
}

export default Sidebar1
