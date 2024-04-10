import React from 'react';
import './abouthome.css'; // You can create this CSS file for styling

export default function AboutCardHome() {
  return (
    <div className="about-section">
      {/* Section 1 */}
      
      <div className="about-item">
        <div className="ourmission">
          <h3>Our Mission</h3>
          <p>
          Enable Students from any background , the ability to upskill in latest technologies and land in amazing careers.
MSME registered startup, we give every student from any diverse starting point to learn latest technology at their own pace and with practical implementation. Thus, creating a powerful online learning ecosystem for everyone and enable the youth to upskill themselves.

          </p>
        </div>
      </div>
      <div className="about-recent-content">
        <h2>Recent Stats:</h2>
        <div className='recentdata'>
          <p>100% Students First</p>
          <p>1500+ Enrollments</p>
          <p>100+ Working on Live Projects</p>
          <p>15+ Mentors</p>
        </div>
      </div>
      {/* Section 2 */}
      <div className="about-item about-item-alt">
        <div className="about-item-left">
          <img src={process.env.PUBLIC_URL + '/images/bg.jpeg'} alt="Image 2" />
        </div>
        <div className="about-item-right">
          <h3>Our story</h3>
          <p>
          We realized that there are so many students who are disconnected with practical skills in computer science and hence are not able to get internships and work on live projects and lacked good resume and linkedin profiles.
Hence as a whole suffers in placements.
From here, SHARPCODE was born.

          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div className="about-item">
        <div className="about-item-left">
          <img src={process.env.PUBLIC_URL + '/images/bg.jpeg'} alt="Image 3" />
        </div>
        <div className="about-item-right">
          <h3>Students First</h3>
          <p>
          We know that not every student have proper guide for learning. And some students have crazy schedules, extra-curricular and even caring for their loved ones while studying. So, we built the self paced learning internship and after that also eligible to work on live projects.
          </p>
        </div>
      </div>
    </div>
  );
}
