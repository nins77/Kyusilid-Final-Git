import React, { useContext, useEffect, useState } from 'react'
import {FaBell ,FaSearch} from 'react-icons/fa'
import {BsFillGearFill} from 'react-icons/bs'
import Profilepic from '../../assets/images/avatar.jpg'
import RGB from '../../assets/images/rgb.png'
import { themeContext } from '../../Globalcontext'
import { useLocation } from 'react-router-dom'
import {GrMail} from 'react-icons/gr'




function Profilenotif() {
    const {theme, settheme} = useContext(themeContext);

    const [themecontainer, setthemecontainer] = useState(false);

    const togglecontainer = ()=>{
        setthemecontainer(!themecontainer)
        console.log('hello');
    }

    const [theme1 , settheme1] = useState('themeactive');
    const [theme2, settheme2] = useState();

    const [searchbar, setsearchbar] = useState(false);
    const [searchfilled,setfilled] = useState(false);
    const [search, setsearch]= useState('');

    useEffect(()=>{
        search.length>0 ? setfilled(true) : setfilled(false)
    },[search])
  
  
  

    const switchtheme =(e)=>{
       if(e==='default'){
        settheme1('themeactive');
        settheme2('')
        settheme('default')
       }else{
        settheme1('')
        settheme2('themeactive');
        settheme('dark');
       }
    }


    const [currentpage, setcurrentpage] = useState();
    const location = useLocation()

    useEffect(()=>{   
        setcurrentpage(
            temp(location.pathname)
        );
    },[location])



    function temp(r){
        switch(r){
            case '/' : return "Dashboard";
            case '/classes' : return 'Classes';
            case '/archived' : return 'Archived' ;
            default: return 'Classname' ; 
        }
    }

  return (
    <div className='profilenotif'>
        <div><h3>{currentpage}</h3>
            <div className="pnsearchbar" onMouseEnter={()=>{setsearchbar(true)}} onMouseLeave={()=>{setsearchbar(false)}}>
                <div className={`pnsearchbaropen ${searchbar ||searchfilled ? ' pnsearchbaropen-active' :""}`}>
                    <input type="text" placeholder='search here' defaultValue={search}  onChange={(e)=>{setsearch(e.target.value) }} />
                </div>
                <div className="pnsearchbarclosed primary ">
                    <FaSearch />
                </div> 
              


               
            </div>
        </div>
        
        <div className='notificationicon'><FaBell /></div>
        <div className='notificationicon' >  <BsFillGearFill onClick={togglecontainer}/>
            {themecontainer && 
                    <div>
                    <div className="themegroup"></div>
                    <div className="themegroupbackground" onClick={togglecontainer}></div>
                    <div className='themegroupbody background'>
                        <div className={`themeitem ${theme1}`} onClick={()=>{switchtheme('default')}} > <img src={RGB} alt="" /> </div>
                        <div className={`themeitem ${theme2}`} onClick={()=>{switchtheme('dark')}}> <div className='darkicon'></div></div>
                    </div>
                    </div>
            }
        
        </div>
        <div className="notificationicon"> <GrMail /></div>
        <div className='profilenotifcontent'>
             <h5>##username # </h5>
             <h6>##user id or position if prof#</h6>
        </div>
        
        <div className='profileicon'>
             
            <img src={Profilepic} alt="" />

        </div>

    </div>
  )
}

export default Profilenotif