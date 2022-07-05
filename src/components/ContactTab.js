import React from "react";

export default function ContactTab() {
  return (
    <div style={{ marginBottom: "2%" }}>
      <section class="roberto-cta-area">
        <div class="container">
          <div
            class="cta-content bg-img bg-overlay jarallax"
            style={{ backgroundImage: 'url("img/bg-img/1.jpg")' }}
          >
            <div class="row align-items-center">
              <div class="col-12 col-md-6">
                <div class="cta-text mb-50">
                  <h2>Contact us now!</h2>
                  <h6>
                    Contact +92 355 4226006 to book directly or for advice
                  </h6>
                </div>
              </div>
              <div class="col-12 col-md-5 text-right">
                <a href="#" class="roberto-btn mb-50">
                  Contact Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
