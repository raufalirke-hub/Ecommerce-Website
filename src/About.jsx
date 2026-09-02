export default function About(){
 return(
  <div style={{background:"#fffcf7", minHeight:"100vh"}}>
    <div style={{background:"#2f5d5b", color:"white", textAlign:"center", padding:"60px 0"}}>
      <h1>About Us</h1>
    </div>

    <div style={{maxWidth:"1000px", margin:"auto", padding:"30px 20px", textAlign:"center"}}>
      <h2 style={{fontSize:"28px", fontWeight:"800", color:"#111", opacity:"1"}}>Discover ShopEase - <br/> Where Fashion Meets Comfort</h2> 
      
      <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200" style={{width:"100%", height:"380px", objectFit:"cover", borderRadius:"16px", margin:"30px 0"}} alt="" />

      <h2 style={{marginTop:"20px"}}>The ShopEase Journey Story</h2>
      <p style={{fontSize:"13px", color:"#666", maxWidth:"600px", margin:"10px auto 40px"}}>From a small boutique to a brand loved across India. We craft clothes that make you feel confident and stylish.</p>

      <div style={{display:"flex", flexDirection:"column", gap:"40px", textAlign:"left"}}>
        <div style={{display:"flex", gap:"20px", alignItems:"center"}}>
          <img src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=400" style={{width:"200px", height:"150px", borderRadius:"100px", objectFit:"cover"}} alt="" />
          <div><h4>From Humble Beginnings</h4><p style={{fontSize:"13px", color:"#666"}}>2018 me sirf 20 designs se start kiya tha, aaj hazaron customers hain.</p></div>
        </div>
        <div style={{display:"flex", gap:"20px", alignItems:"center"}}>
          <div><h4>Milestones and Achievements</h4><p style={{fontSize:"13px", color:"#666"}}>2020 me 1000 orders complete, 2022 me sustainable collection launch kiya.</p></div>
          <img src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=400" style={{width:"200px", height:"150px", borderRadius:"100px", objectFit:"cover"}} alt="" />
        </div>
      </div>

      <div style={{marginTop:"50px", borderTop:"4px solid #2f5d5b", paddingTop:"30px"}}>
        <h2>Our Awesome Team</h2>
      </div>
    </div>
  </div>
 )
} 