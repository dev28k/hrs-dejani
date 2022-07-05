import React from 'react'
import { FaHandHoldingWater, FaWifi, FaWater } from 'react-icons/fa';
import { GiAbstract006, GiCampfire } from "react-icons/gi";

export default function Services() {
  return (
    <div className="roberto-service-area" style={{backgroundColor: 'rgb(231, 230, 251)'}}>
        <div className="container">
            <div className="row">
                    {/* <!-- Section Heading --> */}
                <div className="col-12">
                    <div className="section-heading text-center wow fadeInUp" data-wow-delay="100ms">
                        <h6 style={{fontWeight: 'bold'}}>Our Services</h6>
                    </div>
                </div>

                <div className="col-12">
                    <div className="service-content d-flex align-items-center justify-content-between">
                        {/* <!-- Single Service Area --> */}
                        <div className="single-service--area mb-100 wow fadeInUp" data-wow-delay="100ms">
                            <FaHandHoldingWater size={45} color={'rgb(253, 155, 125)'} style={{marginBottom: '1.5%'}}/>
                            <h5>Warm Water</h5>
                        </div>

                        {/* <!-- Single Service Area --> */}
                        <div className="single-service--area mb-100 wow fadeInUp" data-wow-delay="300ms">
                            <FaWifi size={45} color={'rgb(71, 200, 24)'} style={{marginBottom: '1.5%'}}/>                            
                            <h5>Wifi Network</h5>
                        </div>

                        {/* <!-- Single Service Area --> */}
                        <div className="single-service--area mb-100 wow fadeInUp" data-wow-delay="500ms">
                            <GiAbstract006 size={45} color={'rgb(204, 22, 99)'} style={{marginBottom: '1.5%'}}/>
                            <h5>Carpeted Rooms</h5>
                        </div>

                        {/* <!-- Single Service Area --> */}
                        <div className="single-service--area mb-100 wow fadeInUp" data-wow-delay="700ms">
                            <FaWater size={45} color={'rgba(99, 181, 172, 0.75)'} style={{marginBottom: '1.5%'}}/>                            
                            <h5>River View</h5>
                        </div>

                        {/* <!-- Single Service Area --> */}
                        <div className="single-service--area mb-100 wow fadeInUp" data-wow-delay="900ms">
                            <GiCampfire size={45} color={'rgb(236, 64, 47)'} style={{marginBottom: '1.5%'}}/>                            
                            <h5>Hiking &amp; Camping</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
