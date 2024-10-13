import React from 'react'
import { useSelector } from 'react-redux'
const Fakereviews = ({users}) => {

  const cityname=users.address?users.address.city:"..."
  const firstName = users.name ? users.name.firstname : "Loading...";
  const lastName = users.name ? users.name.lastname : "";
 
return(
   <>
   <div class="list-group">
  <a href="#" class="list-group-item list-group-item-action" aria-current="true">
    <div class="d-flex w-100 justify-content-between">
   <h5 class="mb-1">👤{firstName} {lastName}</h5>
      <small>3 days ago</small>
    </div>
    <p class="mb-1">Love from {cityname}❤️</p>
    <small><strong>{users.email}</strong></small>
    <p><small>reply</small>
    </p>
  </a>

</div>
   </>
  )
}

export default Fakereviews