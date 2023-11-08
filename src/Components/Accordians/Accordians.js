import React from 'react'
import './../style.css'

function Accordians() {
  return (
<><h1 className='accordians-heading'>Frequently asked questions</h1>
    <div><div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      What do I need to book a car on Turo?
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">To book a car on Turo, you must create a Turo account, be 18 years old or older in the US, 21 years old or older in the UK, 23 years old or older in Canada, have a valid driver’s license, and get approved to drive on Turo. When you’re booking your first trip, you’ll go through a quick approval process by entering your driver’s license and some other information. In most cases, you’ll get approved immediately, and you’ll be set for all future road trips, day trips, and business trips! class.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      What happens if I have an accident?
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">If there’s an emergency or an issue with the car, call our emergency roadside assistance provider, available 24/7. We’ll make sure you’re safe, then help you get back on your way.</div>
    </div>
  </div>

  </div>
</div>
<div><div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      Do I need my own insurance?
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">In the US, any personal insurance you may have that covers damage to the host’s vehicle would kick in before your Turo protection plan, except in limited situations for trips booked in Maryland. When booking a car in the US, you’ll choose between three protection plans — Premier, Standard, or Minimum — to get the level of coverage that’s right for you. With each plan, you’re covered with third-party automobile liability insurance provided under a policy issued to Turo by Travelers Excess and Surplus Lines Company — $750,000 for the Premier plan.*

In New York state, you’ll also choose between Premier, Standard, or Minimum. With each plan, you’re covered with liability insurance of $1,250,000.* Protection plans for New York trips also include access to roadside assistance, priority phone support, and 24/7 customer assistance.

When booking a car in Canada, you’ll choose between three protection plans — Premier, Standard, or Minimum — and with each plan, you’re covered with liability insurance purchased from Intact Financial Corporation in Alberta, Nova Scotia, Ontario, and Quebec, and Insurance Corporation of British Columbia (ICBC) in British Columbia — up to $2,000,000 for all plans.**

When booking a car in the United Kingdom, you’ll also choose between the Premier, Standard, and Minimum protection plans. Each plan includes different limits of financial responsibility for physical damage, but all three plans include up to £20,000,000 coverage under a third-party automobile liability insurance policy provided by Aioi Nissay Dowa Insurance UK Ltd. via Turo broker Aon UK Ltd.*.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      Can I get my car delivered to me?
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Yes, many hosts offer delivery to travel hubs like airports, train stations, and hotels, or to custom delivery locations. There are cars available on Turo at convenient locations near hundreds of airports. Skip the rental counter and have your car delivered for pickup and return at your hotel or vacation rental, or nearby location, to save time and hassle on your weekend getaway or family vacation. Some hosts offer free delivery, while others set their own delivery fee.</div>
    </div>
  </div>

  </div>
</div>
<div><div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      Can other people drive a car that I booked?
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Yes, multiple guests can drive the car you book on Turo, as long as they are all approved to drive. The primary driver (whoever booked the car) can add additional drivers with no fees or additional charges. Only the primary driver can request to add drivers; Turo hosts cannot do it for you. We encourage you to request to add additional drivers before your trip starts, though guests in the US and Canada can request to add a driver while a trip is in progress.

To speed up the process, have your additional driver create a Turo account and get approved to drive before you request to add them. All drivers must have a valid driver’s license and meet the age requirements for the car you’ve booked. You can request to add drivers via the “Trips” tab in the Turo app without additional driver charges or extra costs.

</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      What are the cleaning and safety policies on Turo?
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Under the enhanced cleaning policy, hosts are required to clean and disinfect their vehicles thoroughly before every trip, so you can feel safe and comfortable behind the wheel. Turo hosts have access to training materials on enhanced safety measures and cleaning practices to help prevent the spread of COVID-19 or other viruses..</div>
    </div>
  </div>

  </div>
</div></>


  )
}

export default Accordians