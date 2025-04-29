// pages/Home.js
import React from 'react';
import InformationFillIcon$1 from 'remixicon-react/InformationFillIcon';
import UserFillIcon$1 from 'remixicon-react/UserFillIcon';
import CustomerServiceFillIcon from 'remixicon-react/CustomerServiceFillIcon';
import ShoppingCart2FillIcon$1 from 'remixicon-react/ShoppingCart2FillIcon';
import { Link } from 'react-router-dom';
import cartIcon from '../assets/cartIcon.png'



const Home = () => {
  return (
  
    <div id='main' className=' h-full w-full '>
      <nav className=" flex justify-between items-center p-6 shadow-lg"> 
      <div className="text-2xl font-bold ml-5 text-blue-400">
          SplitCart
        </div>
        <div className="flex gap-14 text-2xl mr-12">
          <InformationFillIcon$1 color="white" className='transform transition-transform hover:scale-125' />
          <UserFillIcon$1 color="white" className='transform transition-transform hover:scale-125'/>
          <CustomerServiceFillIcon  color="white" className='transform transition-transform hover:scale-125'/>
          <ShoppingCart2FillIcon$1 color='white' className='transform transition-transform hover:scale-125' />
        </div>
      </nav>
      < div id='alertBox' className='w-[full] h-[40px]'>
      <p className='text-center py-2 text-lg font-semibold '>⚡ Split the cost, not the experience — save more with SplitCart.</p> </div>
      <div id='box1' className=' w-[full] h-[630px]'>
        <div className=' w-[800px] h-[400px] py-20  px-16 ml-12 absolute flex flex-col  text-white animate-fade-in '>
          <h3 className='text-gray-300 mt-16 text-sm '>SPLIT. SHOP. SAVE.</h3>
        <h1 className="text-5xl font-bold text-white leading-tight animate-fade-in mt-8">Collaborative Shopping That Unlocks Bigger Discounts.</h1>
        <p className="text-xl sm:text-lg mb-14 max-w-xl text-gray-200 mt-14">Experience Shopping Like Never Before – Live, Interactive, and Revenue-Driven!</p>
          <div className="flex gap-10 transition-up">
            <Link
              to="/create"
              className="bg-white text-black border-[0.5px] font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:bg-black hover:text-white hover:border-white "
               >
          Create Cart  
            </Link>
            <Link
              to="/join"
              className="bg-white text-black border-[0.5px] font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:bg-black hover:text-white hover:border-white"
            >
              Join Cart
            </Link>
        </div>
        </div>
        <div className= 'w-[600px] h-[700px] absolute right-10 mt-10'>
          <img src='https://cdn.prod.website-files.com/661e75fc70756be16764754b/66976d42f40195b323c021c5_Sol_LiveShopping_Hero.webp'></img>

        </div>

        </div>
        <div>
        
<div id='box2' className='w-[full] h-[700px] bg-black' >
<h2 className="text-5xl font-semibold text-white py-14 text-center">Why Choose SplitCart?</h2>
<div className='bg-white w-[450px] h-[500px] absolute left-16 ml-16 overflow-hidden rounded-3xl '>
 <img src="https://plus.unsplash.com/premium_photo-1684785617522-e2be3c1f3b22?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
</div>
 <div className= " py-10  max-w-2xl mx-auto mr-4">
  
   <h1 className="text-3xl font-semibold text-white mb-3 " >Easy Group Shopping</h1>
  
        <p className="text-medium text-gray-300 mb-12 ">🛒 Share Your Cart
        Invite friends to shop together and split the cost with ease.<br/> No more individual checkouts—everyone gets what they want!</p>
        <h1 className="text-3xl font-semibold text-white mb-3  " >Save More Together</h1>
        <p className="text-medium text-gray-300 mb-12">💰 Group Discounts
        Collaborative shopping means better deals.<br/> SplitCart helps you unlock exclusive group discounts and savings on your purchases.</p>
        <h1 className="text-3xl font-semibold text-white mb-3  " >Seamless Checkout Experience</h1>
        <p className="text-medium text-gray-300  ">✅ Fast & Smooth Checkout
        With SplitCart, checking out is a breeze. Each person pays their share, making the process quick, secure, and efficient.</p>
      </div> 
     
      </div>
<div className=' w-[full] h-[400px] bg-black'>
      <div className="py-20 px-6 max-w-6xl mx-auto animate-fade-up delay-200 ">
      <h2 className="text-3xl font-bold text-center text-white mb-12">Why You'll Love SplitCart 💖</h2>
      <div className="grid md:grid-cols-3 gap-10">
        <div className="bg-white rounded-2xl shadow-md p-6 text-center transition-transform hover:scale-105 hover:bg-indigo-100 hover:shadow-xl">
          <img src={cartIcon}  alt="Create Cart" className="w-14 h-14 mx-auto mb-4 " />
          <h3 className="text-xl font-semibold mb-2 text-purple-800">Instant Cart Creation</h3>
          <p className="text-gray-600">Start your cart in seconds and invite others to join with a code.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 text-center transition-transform hover:scale-105 hover:bg-indigo-100 hover:shadow-xl">
          <img src={cartIcon} alt="Join Cart" className="w-14 h-14 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-green-800">Join & Collaborate</h3>
          <p className="text-gray-600">Jump into any cart and start contributing your picks in real time.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 text-center transition-transform hover:scale-105 hover:bg-indigo-100  hover:shadow-xl">
          <img src={cartIcon} alt="Split Payment" className="w-14 h-14 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2 text-pink-800">Split & Checkout</h3>
          <p className="text-gray-600">Easily divide the bill among participants and simplify the purchase.</p>
        </div>
      </div>
    </div>
    </div>
    </div>

    <div  className=" bg-black text-white py-16 text-center px-6  animate-fade-in">
      <div id='box3' className='h-[280px] w-[1300px] text-center ml-20 py-14 px-10 rounded-xl'>
        <h2 className="text-3xl font-bold mb-4">Ready to Shop Smarter?</h2>
        <p className="text-gray-300 mb-6 text-lg">Create or Join a SplitCart and experience shopping like never before.</p>
        <Link
          to="/create"
          className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-indigo-600  hover:text-white transition-transform hover:scale-105"
        >
          Get Started
        </Link>
      </div>
    </div>
    </div>

);
}

export default Home;
