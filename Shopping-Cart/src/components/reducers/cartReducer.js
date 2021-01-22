//Eye Strt
import Item1 from '../../images/1_eye_3d fiber mesh mascara.jpg'
import Item2 from '../../images/2_eye_Electric Eye Patch.jpg'
import Item3 from '../../images/3_eye_Eyebrow Stamp.jpg'
import Item4 from '../../images/4_eye_Eyelid trainer.jpg'
import Item5 from '../../images/5_eye_Lens Applicator.jpeg'
import Item6 from '../../images/6_eye_Shadow Shield.jpg'
//Face Strt
import Item7 from '../../images/7_face_Age Defier.jpg'
import Item8 from '../../images/8_face_Collagen Facemask.jpg'
import Item9 from '../../images/9_face_Face Cream.jpg'
import Item10 from '../../images/10_face_Face Iron.jpg'
import Item11 from '../../images/11_face_Facewear Pro.jpg'
import Item12 from '../../images/12_face_Facial Threading.jpg'
import Item13 from '../../images/13_face_Night Cream.jpg'
import Item14 from '../../images/14_face_Nivea Pack.jpg'
//hair Strt
import Item15 from '../../images/15_hair_Black Curly Wig.jpg'
import Item16 from '../../images/16_hair_Blonde Steps wig.webp'
import Item17 from '../../images/17_hair_Cocunuta Oil.jpg'
import Item18 from '../../images/18_hair_hair-loss-1.jpg'
import Item19 from '../../images/19_hair_Keratine.jpg'
import Item20 from '../../images/20_hair_Red Long Hair.jpg'
//lip Strt
import Item21 from '../../images/21_Lip_Lip Balm.jpg'
import Item22 from '../../images/22_Lip_Lip Shine.jpg'
import Item23 from '../../images/23_Lip_Lip Tin.jpg'
import Item24 from '../../images/24_Lip_LipGloss Dark.jpg'
import Item25 from '../../images/25_Lip_LipGloss Light.jpg'
import Item26 from '../../images/26_Lip_Red Lipstick.jpg'
//nail Strt
import Item27 from '../../images/27_nail_Fake Nails.jpg'
import Item28 from '../../images/28_nail_Halal Nail Polish.jpg'
import Item29 from '../../images/29_nail_Nail Foiler.jpg'
import Item30 from '../../images/30_nail_Nail Gel.webp'
import Item31 from '../../images/31_nail_Pack of 12.webp'
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../actions/action-types/cart-actions'


const initState = {
    items: [
        //eye

        {id:1,title:'3D Fiber Mesh Mascara', desc: "Mascara which will give Your eye a Fascinating 3D Look", price:990,img:Item1},
        {id:2,title:'Electric Eye Patches', desc: "A Machine which will Massage Your Eyes to give the most Delighting Experience in the World", price:2600,img: Item2},
        {id:3,title:'Eyebrow Stamps', desc: "Stamps which will Color Your Eyebrows to the Color you Want",price:300,img: Item3},
        {id:4,title:'Eyelid Trainer', desc: "This Tool will Train Your Eyelid to Blink without a problem", price:700,img:Item4},
        {id:5,title:'Lens Applicator', desc: "Tool Which can help you Whenever you want to wear lens", price:1100,img: Item5},
        {id:6,title:'Shadow Shields', desc: "Tool which will protect your eyelids while applying Eye Shadow",price:550,img: Item6},
        //face

        {id:7,title:'Face Age Defier', desc: "Cream which will make you look 20 years young", price:2100,img:Item7},
        {id:8,title:'Collagen Face Mask', desc: "Best Quality Face Mask to clear the dirt off of your face", price:700,img: Item8},
        {id:9,title:'Neutrogena® Hydro Boost Water Gel', desc: "Award-winning and best selling water gel formula absorbs quickly and instantly delivers intense hydration. And it contains Hyaluronic Acid, a hydrator found naturally in the skin, which attracts moisture and locks it in. This formula leaves skin more supple and smooth.",price:3200,img: Item9},
        {id:10,title:'Face Iron', desc: "The Face Iron gives you a 42°C (108°F) warm steam bath sensation that will rejuvenate your skin. Simple to operate, just place it over on face and press the button once for the low setting, or twice for the high one. As the name suggests, it is shaped like a mini iron, making it very easy to hold.", price:7000,img:Item10},
        {id:11,title:'Facewear Pro', desc: "Buy our Reuseable Metal Facemask!! Just rinse to use again.", price:1800,img: Item11},                 
        {id:12,title:'Facial Threading Machine', desc: "Machine which can help you thread your face without even touching a thread.",price:2400,img: Item12},
        {id:13,title:'Night Face Cream', desc: "Do you think that sleep is a waste of time?? Buy our products to heal your grugeous skins even when you are sleeping.", price:1100,img: Item13},
        {id:14,title:'Nivea Face Cream Pack', desc: "All of the Face Creams that you desire in a single pack on a very low price.",price:2100,img: Item14},
        //hair

        {id:15,title:'Curly Wig (Black)', desc: "Deep Curly Wave Lace Front Wigs With Baby Hair,Glueless Cuticle Aligned Peruvian Human Hair Wigs Sample", price:3800,img:Item15},
        {id:16,title:'Steps Wig (Blonde)', desc: "Dont have long enough hair to get a Steps Haircut?? Don't worry, buy this wig to get Steps haircut in Blonde Color.", price:4100,img: Item16},
        {id:17,title:'Coconut Oil', desc: "Best Product to heal scalp and hair.",price:350,img: Item17},
        {id:18,title:'Hair Grower', desc: "Use this product to become Hairy Potter.", price:1650,img:Item18},
        {id:19,title:'Keratin Cream', desc: "Best product for thinning Women Hair.", price:5000,img: Item19},
        {id:20,title:'Long Hair (Red)', desc: "Get The best Quality Synthetic Hair Wig in Red Color.",price:4900,img: Item20},
        //lip

        {id:21,title:'Lip Balm (Raspberry)', desc: "Want to make you perfectly applied lipstick Shiny? Use this product to do so.", price:300,img:Item21},
        {id:22,title:'Lip Shiner', desc: "Apply shine on your beautiful Lips.", price:350,img: Item22},
        {id:23,title:'Lip Tint', desc: "Apply the most Glossy tint on your lips!!",price:400,img: Item23},
        {id:24,title:'Lip Gloss (Dark)', desc: "Apply a Dark and Elequent Gloss on your lips!!.", price:400,img:Item24},
        {id:25,title:'Lip Gloss (Light)', desc: "Apply Elequent Light Gloss on your Beautiful lips!!.", price:400,img: Item25},
        {id:26,title:'Lipstick (Dark Red)', desc: "Buy a Dark Colored Lipstick for Fashion parties between Friends!!!",price:200,img: Item26},
        //nail

        {id:27,title:'Tricia Articial Nails Set', desc: "Tricia Gorgeous 100pcs Reuseable Transparent Artificial Nails, Best False Nails", price:800,img:Item27},
        {id:28,title:'786 Halal Nail Polish', desc: "786 Cosmetics produces not only breathable halal nail polish, but all of their products are also vegan, which means it neither contains any toxins nor condones any animal testing. It boasts a wide range of lovely colours and is considered extremely affordable. The non-peelable halal polishes can last from seven to ten days with just one coat!", price:1000,img: Item28},
        {id:29,title:'Foiler', desc: "Foiler is a tool than can keep your nails in a beautiful and smooth shape!!",price:70,img: Item29},
        {id:30,title:'Cat Eye Nail Gel', desc: "A Gel which helps the nail polish to dry faster and also add a shine to the nail polish.", price:650,img:Item30},
        {id:31,title:'Nail Polishes (Pack of 12)', desc: "A Pack of 12 nail polish which contains almost every color which can be used at any type of party!!", price:1999,img: Item31},
    
    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type=== ADD_SHIPPING){
          return{
              ...state,
              total: state.total + 100
          }
    }

    if(action.type=== 'SUB_SHIPPING'){
        return{
            ...state,
            total: state.total - 100
        }
  }
    
  else{
    return state
    }
    
}

export default cartReducer
