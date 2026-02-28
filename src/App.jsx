import { useState } from 'react'
import './App.css'

function App() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('eeerrreeerrr937@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="card-container">
      <div className="card">
        {/* Avatar */}
        <div className="avatar">
          <div className="avatar-img">
            <img src="/avatar.jpg" alt="洪菘崴" />
          </div>
        </div>
        
        {/* Name & Title */}
        <h1 className="name">洪菘崴</h1>
        <p className="title">國立勤益科技大學 | 人工智慧系</p>
        <p className="company">盛筑自動化有限公司 | 機器人工程師</p>
        
        <div className="divider"></div>
        
        {/* About Section */}
        <div className="section">
          <h3 className="section-title">關於我</h3>
          <p className="about-text">
            專注於機器人技術與人工智慧應用，熱衷於將 AI 技術實際應用於工業自動化領域。
            目前正在學習 ROS 2 機器人系統整合與機器學習相關技術。
          </p>
        </div>
        
        {/* Skills Section */}
        <div className="section">
          <h3 className="section-title">專業技能</h3>
          <div className="skills-grid">
            <div className="skill-category">
              <span className="skill-label">程式語言</span>
              <div className="skill-tags">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">JavaScript</span>
              </div>
            </div>
            <div className="skill-category">
              <span className="skill-label">機器人</span>
              <div className="skill-tags">
                <span className="tech-tag">ROS2</span>
                <span className="tech-tag">MoveIt</span>
                <span className="tech-tag">Yaskawa GP8</span>
              </div>
            </div>
            <div className="skill-category">
              <span className="skill-label">AI/ML</span>
              <div className="skill-tags">
                <span className="tech-tag">Machine Learning</span>
                <span className="tech-tag">Deep Learning</span>
                <span className="tech-tag">Computer Vision</span>
              </div>
            </div>
            <div className="skill-category">
              <span className="skill-label">工具</span>
              <div className="skill-tags">
                <span className="tech-tag">Git</span>
                <span className="tech-tag">Docker</span>
                <span className="tech-tag">Linux</span>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="section">
          <h3 className="section-title">經歷</h3>
          <div className="experience-item">
            <div className="exp-header">
              <span className="exp-title">機器人工程師</span>
              <span className="exp-period">現職</span>
            </div>
            <p className="exp-company">盛筑自動化有限公司</p>
            <p className="exp-desc">負責工業機器人系統整合與程式開發</p>
          </div>
          <div className="experience-item">
            <div className="exp-header">
              <span className="exp-title">學生</span>
              <span className="exp-period">2023 - 現在</span>
            </div>
            <p className="exp-company">國立勤益科技大學 - 人工智慧系</p>
            <p className="exp-desc">三年級下學期</p>
          </div>
        </div>
        
        {/* Contact Section */}
        <div className="section contact-section">
          <h3 className="section-title">聯絡方式</h3>
          <button className="email-btn" onClick={copyEmail}>
            {copied ? '[ 已複製 ]' : '[ Email: eeerrreeerrr937@gmail.com ]'}
          </button>
          <p className="phone">[ 手機: 0953-301633 ]</p>
          
          <div className="qr-section">
            <p className="qr-title">掃描QR Code 建立聯絡人</p>
            <div className="qr-code">
              <img src="/qrcode.png" alt="QR Code" />
            </div>
          </div>
        </div>

        <div className="footer">
          <p>© 2026 洪菘崴 | All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default App
