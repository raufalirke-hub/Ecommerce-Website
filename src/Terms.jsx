import { useState } from "react";

export default function Terms(){
  const [open, setOpen] = useState(2);

  const data = [
    { title: "1. Orders & Payments", desc: "All orders are confirmed after payment. We accept UPI, Cards, COD. Price may change without notice, but you will be charged the price shown at checkout." },
    { title: "2. Shipping & Delivery", desc: "Delivery in 3-5 business days. Free shipping above ₹999. Delays due to courier or weather are not our responsibility." },
    { title: "3. Returns & Exchanges", desc: "Easy 7-day return for unworn clothes with tags. No return on innerwear & sale items. Refund in 3-4 days to original method." },
    { title: "4. Product Authenticity", desc: "All ShopEase products are 100% original. Colors may slightly vary due to lighting and screen." },
    { title: "5. Privacy Policy", desc: "We never share your data. Your email and address are used only for order updates and offers if you subscribed." },
  ];

  return(
    <div style={{background:"#f9fafb", minHeight:"100vh"}}>
      <div style={{background:"#2f5d5b", padding:"70px 20px 90px", textAlign:"center", color:"white"}}>
        <h1 style={{fontSize:"38px", fontWeight:"800", margin:0}}>Terms of Use</h1>
        <p style={{fontSize:"13px", color:"#e0f0ef", maxWidth:"500px", margin:"12px auto 0"}}>Please read these terms carefully before shopping on ShopEase.</p>
      </div>

      <div style={{maxWidth:"1100px", margin:"-40px auto 0", background:"white", borderRadius:"20px", boxShadow:"0 10px 30px rgba(0,0,0,0.08)", padding:"28px", display:"flex", flexWrap:"wrap", gap:"30px"}}>

        {/* LEFT - IMAGE + STATS */}
        <div style={{flex:"0.9", minWidth:"280px"}}>
          <div style={{display:"flex", gap:"20px", marginBottom:"20px"}}>
            <div>
              <h2 style={{fontSize:"20px", fontWeight:"800", margin:0, color:"#111"}}>25K+</h2>
              <p style={{fontSize:"11px", color:"#666", margin:0}}>Orders Delivered</p>
            </div>
            <div>
              <h2 style={{fontSize:"20px", fontWeight:"800", margin:0, color:"#111"}}>8K+</h2>
              <p style={{fontSize:"11px", color:"#666", margin:0}}>Happy Clients</p>
            </div>
          </div>

          <div style={{background:"#2f5d5b", color:"white", padding:"16px", borderRadius:"14px", display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"16px"}}>
            <div>
              <p style={{margin:0, fontSize:"11px", opacity:0.9}}>Loyal Customers</p>
              <h3 style={{margin:"2px 0 0", fontSize:"18px"}}>77k+</h3>
            </div>
            <div style={{background:"white", color:"#2f5d5b", width:"26px", height:"26px", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center"}}>↗</div>
          </div>

          {/* IMAGE WAPAS AA GAYI */}
          <img 
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800" 
            style={{width:"100%", height:"260px", objectFit:"cover", borderRadius:"14px"}} 
            alt="store"
          />
        </div>

        {/* RIGHT - ACCORDION */}
        <div style={{flex:"1.2", minWidth:"320px"}}>
          {data.map((item,i)=>(
            <div key={i} style={{border:"1px solid #eee", borderRadius:"12px", marginBottom:"12px", background: open===i ? "#f2f8f7" : "white"}}>
              <div onClick={()=>setOpen(open===i ? -1 : i)} style={{padding:"16px 18px", display:"flex", justifyContent:"space-between", alignItems:"center", cursor:"pointer"}}>
                <h4 style={{margin:0, fontSize:"14px", fontWeight:"700", color:"#111"}}>{item.title}</h4>
                <span style={{background:"#2f5d5b", color:"white", width:"26px", height:"26px", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center"}}>{open===i ? "↑" : "↓"}</span>
              </div>
              {open===i && (
                <div style={{padding:"0 18px 16px"}}>
                  <p style={{margin:0, fontSize:"13px", color:"#333", lineHeight:"1.6"}}>{item.desc}</p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
      <div style={{height:"50px"}}></div>
    </div>
  )
} 