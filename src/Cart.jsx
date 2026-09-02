import { useState } from "react";

export default function Cart(){
  const [cart, setCart] = useState([
    { id: 1, name: "HOODIE SWEATSHIRT", price: 90.30, oldPrice: 120, qty: 1, img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=500", size: "M" },
    { id: 2, name: "OVERSIZED T-SHIRT", price: 45.00, oldPrice: 60, qty: 2, img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=500", size: "L" },
  ]);

  const updateQty = (id, delta) => {
    setCart(cart.map(item => {
      if(item.id === id){
        const newQty = item.qty + delta;
        return newQty < 1 ? item : {...item, qty: newQty};
      }
      return item;
    }));
  };

  const subtotal = cart.reduce((a,b)=> a + b.price * b.qty, 0);
  const shipping = 5.00;
  const total = subtotal + shipping;

  return(
    <div style={{background:"#fff", minHeight:"100vh", fontFamily:"Inter, sans-serif", display:"flex", borderLeft:"14px solid #2f5d5b", borderRight:"14px solid #2f5d5b"}}>

      <div style={{width:"100%", maxWidth:"1250px", margin:"0 auto"}}>
        
        {/* HEADER */}
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", padding:"18px 30px"}}>
          <div style={{display:"flex", alignItems:"center", gap:"8px"}}>
            <div style={{background:"black", color:"white", width:"26px", height:"26px", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", fontWeight:"800"}}>S</div>
            <p style={{margin:0, fontSize:"12px", lineHeight:"1.1", fontWeight:"600"}}>ShopEase Digital<br/><span style={{fontSize:"9px", fontWeight:"400", opacity:0.6}}>Clothing Store</span></p>
          </div>
          <div style={{display:"flex", gap:"12px", alignItems:"center"}}>
            <span>♡</span><span>🛒</span>
            <button style={{background:"black", color:"white", borderRadius:"20px", padding:"6px 14px", fontSize:"11px", border:"none"}}>Get in touch</button>
          </div>
        </div>

        {/* MAIN */}
        <div style={{display:"flex", flexWrap:"wrap", padding:"10px 30px", gap:"30px"}}>
          
          {/* LEFT - CART ITEMS */}
          <div style={{flex:"1.5", minWidth:"320px"}}>
            <h1 style={{fontSize:"42px", fontWeight:"800", letterSpacing:"-1px", margin:"10px 0 20px"}}>SHOPPING CART</h1>

            {cart.map(item=>(
              <div key={item.id} style={{display:"flex", gap:"16px", borderTop:"1px solid #eee", padding:"18px 0"}}>
                <img src={item.img} style={{width:"90px", height:"110px", objectFit:"cover", background:"#f5f5f5"}} alt="" />
                <div style={{flex:1}}>
                  <h4 style={{margin:"0 0 4px", fontSize:"14px", fontWeight:"700"}}>{item.name}</h4>
                  <p style={{margin:"0 0 10px", fontSize:"11px", color:"#888"}}>Size: {item.size} | Qty: {item.qty}</p>
                  <div style={{display:"flex", gap:"10px", alignItems:"center"}}>
                    <button onClick={()=>updateQty(item.id, -1)} style={{width:"28px", height:"28px", border:"1px solid #ddd", background:"white", cursor:"pointer"}}>-</button>
                    <span style={{fontSize:"13px", fontWeight:"600"}}>{item.qty}</span>
                    <button onClick={()=>updateQty(item.id, 1)} style={{width:"28px", height:"28px", border:"1px solid #ddd", background:"white", cursor:"pointer"}}>+</button>
                    <span style={{marginLeft:"10px", fontSize:"12px", textDecoration:"underline", cursor:"pointer", color:"#888"}} onClick={()=>setCart(cart.filter(c=>c.id!==item.id))}>Remove</span>
                  </div>
                </div>
                <div style={{textAlign:"right"}}>
                  <p style={{margin:0, fontSize:"13px", color:"#999", textDecoration:"line-through"}}>${item.oldPrice}</p>
                  <p style={{margin:"2px 0 0", fontSize:"14px", fontWeight:"700"}}>${(item.price * item.qty).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT - SUMMARY BOX - Tere video jaisa */}<div style={{flex:"0.8", minWidth:"300px"}}>

            <div style={{border:"1px solid #e5e5e5", padding:"20px"}}> <h4 style={{fontSize:"12px", fontWeight:"700", letterSpacing:"1px", margin:"0 0 16px"}}>DELIVERY INFORMATION</h4>
              
              <div style={{display:"flex", justifyContent:"space-between", fontSize:"12px", marginBottom:"10px"}}>
                <span style={{color:"#666"}}>SUBTOTAL</span><span style={{fontWeight:"600"}}>${subtotal.toFixed(2)}</span>
              </div>
              <div style={{display:"flex", justifyContent:"space-between", fontSize:"12px", marginBottom:"10px"}}>
                <span style={{color:"#666"}}>SHIPPING</span><span style={{fontWeight:"600"}}>${shipping.toFixed(2)}</span>
              </div>
              <div style={{display:"flex", justifyContent:"space-between", fontSize:"14px", fontWeight:"800", borderTop:"1px solid #eee", paddingTop:"12px", marginTop:"8px"}}>
                <span>TOTAL TO PAY</span><span>${total.toFixed(2)}</span>
              </div>

              <button style={{width:"100%", background:"black", color:"white", border:"none", padding:"12px", fontSize:"12px", fontWeight:"700", marginTop:"16px", cursor:"pointer"}}>Buy Now</button>
              <p style={{fontSize:"9px", color:"#888", textAlign:"center", marginTop:"8px"}}>Secure checkout with UPI / Card / COD</p>
            </div>
          </div>
        </div>

        {/* FOOTER - LUVARTE Jaisa par ShopEase ka */}
        <div style={{background:"black", color:"white", padding:"30px", marginTop:"30px"}}>
          <h1 style={{fontSize:"48px", fontWeight:"900", textAlign:"center", letterSpacing:"-2px", margin:"0 0 20px"}}>SHOPEASE</h1>
          <div style={{display:"flex", flexWrap:"wrap", gap:"30px", fontSize:"10px", opacity:0.7}}>
            <div><p style={{fontWeight:"700", opacity:1}}>Company</p><p>About Us<br/>Our Stores<br/>Shipping & Returns</p></div>
            <div><p style={{fontWeight:"700", opacity:1}}>Catalog</p><p>Hoodies<br/>T-Shirts<br/>Caps</p></div>
            <div><p style={{fontWeight:"700", opacity:1}}>Terms & Policy</p><p>Terms & Condition<br/>Privacy Policy<br/>Careers</p></div>
            <div style={{marginLeft:"auto"}}><p style={{fontWeight:"700", opacity:1}}>Contact</p><p>support@shopease.com<br/>+91 98765-43210</p></div>
          </div>
        </div>

      </div>
    </div>
  )
} 