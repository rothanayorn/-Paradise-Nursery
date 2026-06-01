import React from 'react'
import './AboutUs.css'

function AboutUs() {
  return (
    <section className="about-section">
      <div className="about-inner">
        <span className="about-tag">🌿 Our Story</span>
        <h2 className="about-heading">Rooted in a love for plants</h2>
        <p className="about-body">
          Paradise Nursery was founded in 2019 by a small team of plant enthusiasts
          who wanted to make it easy for everyone to bring nature indoors. We source
          our plants from sustainable growers, ensure each one is healthy and
          thriving before it reaches you, and back every purchase with expert care
          advice. Whether you're a seasoned plant parent or just starting out, we're
          here to help your home flourish.
        </p>
        <div className="about-pillars">
          <div className="pillar">
            <span className="pillar-icon">🌱</span>
            <strong>Sustainably Sourced</strong>
            <p>Every plant comes from eco-conscious growers who share our values.</p>
          </div>
          <div className="pillar">
            <span className="pillar-icon">📦</span>
            <strong>Delivered with Care</strong>
            <p>Specialist packaging keeps your plants safe from nursery to doorstep.</p>
          </div>
          <div className="pillar">
            <span className="pillar-icon">💬</span>
            <strong>Expert Support</strong>
            <p>Our botanists are always on hand to answer your care questions.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
