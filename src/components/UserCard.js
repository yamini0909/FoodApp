import React from 'react';
import "./User.css"
import {FaBuilding} from "react-icons/fa"

class UserCard extends React.Component{
  constructor(props){
      super(props);

      this.state={
        UserInfo:{
            name:"Yamini",
            avatar_url: "Profile Pic",
            login: ""
        }
         
      }
  }
   
  async componentDidMount(){
    const data = await fetch(" https://api.github.com/users/yamini0909")
    const json = await data.json()

    this.setState({
        UserInfo: json,
    })
    
  }
  render(){
    const {name, avatar_url,login,location} = this.state.UserInfo
      return <div className='max-w-7xl min-w-fit mx-auto my-10 flex'>
         <div className='flex flex-col gap-2 justify-center items-center'>
         <img className='roundedProfile max-w-none' src={avatar_url}/>
          <div className='flex items-left flex-col gap-2 items-center'>
          <h1 className='text-4xl'>{name}</h1>
          <h1>{login}</h1>
          <div></div>
          <h1 className='flex'><FaBuilding size={18} />{location}</h1>
         </div>
          
          </div>
          <div>
            <h1 className='text-4xl mx-5 my-5 font-bold '>Some important information about project</h1>
            <h3>
                <ul className='grid grid-rows-3 grid-cols-2 gap-2'>
                    <li className='border-neutral-300 rounded-md border-solid border-2 p-3 hover:bg-[#ffa700] hover:text-white'>Shimmer UI for Better UserExperience</li>
                    <li className='border-neutral-300 rounded-md border-solid border-2 p-3 hover:bg-[#ffa700] hover:text-white'>Search Feature</li>
                    <li className='border-neutral-300 rounded-md border-solid border-2 p-3 hover:bg-[#ffa700] hover:text-white'>Cart Feature</li>
                    <li className='border-neutral-300 rounded-md border-solid border-2 p-3 hover:bg-[#ffa700] hover:text-white'>forms to contact</li>
                    <li className='border-neutral-300 rounded-md border-solid border-2 p-3 hover:bg-[#ffa700] hover:text-white'> Single page application</li>

                </ul>
            </h3>
            <h1 className='text-3xl m-5 font-bold '>Tech Stack used</h1>
            <ul className='grid grid-rows-3 grid-cols-2 gap-2'>
                <li className='border-neutral-300 rounded-md border-solid border-2 p-3 hover:bg-[#ffa700] hover:text-white'>React JS for UI</li>
                <li className='border-neutral-300 rounded-md border-solid border-2 p-3 hover:bg-[#ffa700] hover:text-white'>Parcel for Bundling</li>
                <li className='border-neutral-300 rounded-md border-solid border-2 p-3 hover:bg-[#ffa700] hover:text-white'> Redux for state management</li>
                <li className='border-neutral-300 rounded-md border-solid border-2 p-3 hover:bg-[#ffa700] hover:text-white'>Tailwind CSS for Styling</li>
            </ul>
          </div>
          
  
      </div>
  }
}

export default UserCard