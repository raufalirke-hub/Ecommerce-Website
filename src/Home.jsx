import { useNavigate } from "react-router-dom";

export default function Home(){
 const navigate = useNavigate();
 return(
 <div style={{background:"#fff"}}>
  {/* HERO */}
  <div style={{display:"grid", gridTemplateColumns:"1.1fr 0.9fr", background:"#0a0a0a", color:"white", minHeight:"520px", position:"relative", overflow:"hidden"}}>
    <div style={{padding:"60px"}}>
      <h1 style={{fontSize:"44px", lineHeight:"1.1", fontWeight:"800"}}>Cool Fashion<br/>Styles for Every<br/>Occasion</h1>
      <button onClick={()=>navigate("/shop")} style={{marginTop:"20px", background:"#e11d48", color:"#fff", border:0, padding:"10px 22px", borderRadius:"20px", cursor:"pointer"}}>Shop Now</button>
      <h1 style={{fontSize:"90px", marginTop:"80px", fontFamily:"serif", fontStyle:"italic"}}>nov<span style={{color:"#e11d48"}}>e</span>ra</h1>
    </div>
    <div style={{position:"relative"}}>
      <img src="https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg?auto=compress&cs=tinysrgb&w=600" style={{width:"100%", height:"100%", objectFit:"cover"}} alt="model" />
      <div style={{position:"absolute", bottom:"30px", left:"20px", background:"white", borderRadius:"30px", padding:"10px 20px", display:"flex", gap:"15px", color:"black"}}>
        <span onClick={()=>navigate("/shop?category=men")} style={{cursor:"pointer"}}>Men</span>
        <span onClick={()=>navigate("/shop?category=women")} style={{cursor:"pointer"}}>Women</span>
        <span onClick={()=>navigate("/shop?category=kids")} style={{cursor:"pointer"}}>Kids</span>
        <span onClick={()=>navigate("/shop?category=accessories")} style={{cursor:"pointer"}}>Accessories</span>
      </div>
    </div>
  </div>

  {/* BROWSE BY CATEGORIES - CLICKABLE */}
  <h2 style={{textAlign:"center", margin:"40px 0 20px"}}>Browse By Categories</h2>
  <div style={{display:"grid", gridTemplateColumns:"repeat(6, 1fr)", gap:"12px", padding:"0 40px"}}>
    {[
      {name:"Accessories", img:"https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg"},
      {name:"Kids", img:"https://images.pexels.com/photos/1620812/pexels-photo-1620812.jpeg"},
      {name:"Men", img:"https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg"},
      {name:"Women", img:"https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg"},
      {name:"Shoes", img:"https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg"},
      {name:"Jewellery", img:"https://images.pexels.com/photos/1458867/pexels-photo-1458867.jpeg"},
    ].map(c=>(
      <div 
        key={c.name} 
        onClick={()=> navigate(`/shop?category=${c.name.toLowerCase()}`)}
        style={{borderRadius:"12px", overflow:"hidden", position:"relative", height:"140px", cursor:"pointer"}}
      >
        <img src={c.img} style={{width:"100%", height:"100%", objectFit:"cover"}} />
        <span style={{position:"absolute", bottom:"8px", left:"8px", background:"rgba(0,0,0,0.7)", color:"white", padding:"4px 8px", borderRadius:"6px", fontSize:"12px"}}>{c.name}</span>
      </div>
    ))}
  </div>

  {/* NEW ARRIVAL */}
  <h2 style={{margin:"40px 0 20px 40px"}}>New Arrival</h2>
  <p style={{marginLeft:"40px"}}>Tera product grid yaha rahega, ab premium lagega</p>
 </div>
 )
}   