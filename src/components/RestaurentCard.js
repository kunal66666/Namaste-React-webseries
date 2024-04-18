import { CDN_URL } from "../utils/constants";

// props is just property it is a object


const styleCard={
    backgroundColor:'#f0f0f0'
  }
export const RestaurentCard=(props)=>{
    console.log(props)
    const {resObj}=props;
  console.log(resObj);
  return (
    <div  data-testid="rescard" className="m-4 p-4 w-[250px] rounded-lg hover:bg-yellow-200">
  <img className='rounded-lg' alt='res-logo' src={CDN_URL +
  resObj?.info?.cloudinaryImageId}/>
  
  <h3 className="font-bold py-4 text-lg">{resObj?.info?.name}</h3>
  <h4 >{resObj?.info?.avgRating}</h4>
  <h4>{resObj?.info?.cuisines.join(", ")}</h4>
  <h4>{resObj?.info?.costForTwo}</h4>
  <h4>38 minutes</h4>
    </div>
  )
  }

  // higher order component
  // input- restorent card compoenn -> retur high order component 
  // which is restorentpermotedcard

  export const withPromotedLabel = (RestaurentCard) => {
    return (props) => (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurentCard {...props} />
      </div>
    );
  };
  
  export default RestaurentCard;