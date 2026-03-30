import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Briefcase, 
  Microscope, Code, Database, Server, 
  GraduationCap, ExternalLink, Layout, Terminal,
  Download, ChevronRight, Calendar, Monitor, Globe
} from 'lucide-react';

// Custom Icon Github
const Github = (props) => (
  <svg 
    {...props} 
    xmlns="http://www.w3.org/2000/svg" 
    width={props.size || 24} height={props.size || 24} 
    viewBox="0 0 24 24" fill="none" 
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.54 6-6.38 0-1.4-.5-2.5-1.3-3.4.1-.3.6-1.6-.1-3.4 0 0-1-.3-3.3 1.2a11.3 11.3 0 0 0-6 0c-2.3-1.5-3.3-1.2-3.3-1.2-.7 1.8-.2 3.1-.1 3.4-.8.9-1.3 2-1.3 3.4 0 4.8 3 6 6 6.38a4.8 4.8 0 0 0-1 3.24v4"/>
    <path d="M9 18c-4.5 1.5-5-2.5-7-3"/>
  </svg>
);

// TỪ ĐIỂN SONG NGỮ (EN - VI)
const translations = {
  en: {
    available: "Available for work",
    role: "Backend Developer & AI Researcher",
    summary: "Passionate and results-driven Backend Developer with hands-on experience in building large-scale, production-ready systems using ",
    summary2: ". Beyond backend development, I am actively engaged in ",
    summary3: ", focusing on advanced Diffusion Models for Video Anomaly Detection. I also bring practical expertise in integrating ",
    summary4: " (Android, CameraX, TF Lite).",
    download: "Download Resume",
    viewProjects: "View Projects",
    expTitle: "Experience",
    expSub: "My professional journey",
    fptRole: "Backend Developer Intern (Healthcare)",
    fptDate: "Oct 2025 – Dec 2025",
    fptDesc: "Participated in the development, maintenance, and deployment of ",
    fptDesc2: " (versions 1.0 Monolithic & 2.0 Microservices) for major hospitals including Vinh Duc & Hoc Mon.",
    fptBullet1: "Successfully resolved ",
    fptBullet1_2: " (including 2 critical Production bugs) related to UI/Logic, performance tuning, and new business requirements.",
    fptBullet2: "Optimized complex T-SQL Stored Procedures, improving query performance and preventing system crashes during peak hospital hours.",
    fptBullet3: "Implemented strict constraints for the Pharmacy module (e.g., payment status checks, mandatory usage instructions), reducing manual data entry errors by ",
    fptBullet4: "Designed, customized, and mapped data for medical reports using Crystal Reports and SQL Server Reporting Services (SSRS).",
    rsTitle: "Scientific Research",
    rsSub: "Academic contributions",
    rsProject: "Advanced Diffusion Models for Video Anomaly Detection (DCMD)",
    rsRole: "AI/Computer Vision Researcher",
    rsDate: "2024 – Present",
    rsRepo: "Repository",
    rsObjTitle: "Objective:",
    rsObjDesc: "Developing a Dual-Conditioned Motion Diffusion (DCMD) model to detect anomalies in surveillance videos.",
    rsFocus: "Technical Focus",
    rsFocusDesc: "Improved AUC-ROC metrics beyond baseline models using advanced conditioning strategies (pose/motion cues, temporal windows).",
    rsOpt: "Optimization & Data",
    rsOptDesc: "Optimized model training through learning rate scheduling and gradient clipping. Handled rigorous data processing for reproducibility.",
    pjTitle: "Featured Projects",
    pjSub: "Showcase of my technical skills",
    pjViewSrc: "View Source Code",
    pjPbDesc: "An Android application that detects facial expressions in real-time using the device camera and displays the predicted emotion on screen. Integrates Computer Vision with Mobile Dev.",
    pjCapRole: "Capstone Project",
    pjCapDesc: "System with intelligent task assignment algorithms and real-time performance analytics. Designed a scalable multi-layer architecture aimed at improving completion time by 30-40%.",
    pjPosRole: "Desktop App",
    pjPosDesc: "A desktop POS application featuring real-time inventory tracking, sales transaction management, and automated CSV reporting using N-tier architecture.",
    skTitle: "Technical Skills",
    skSub: "Tools & Technologies",
    skLang: "Languages",
    skFrame: "Frameworks",
    skDb: "Databases",
    skDbOpt: "Database Optimization",
    skDbNorm: "Normalized Design",
    skTools: "Tools & Others",
    skMicro: "Microservices Architecture",
    edTitle: "Education",
    edSub: "Academic background",
    edUni: "Ho Chi Minh City Open University",
    edDegree: "Bachelor of Computer Science",
    edClass: "Class of 2026",
    edOrient: "Orientation",
    edDbSys: "Database Systems",
    edCourse: "Relevant Coursework:",
    edCourseDesc: "Data Structures & Algorithms, Database Management, Software Engineering, Object-Oriented Programming.",
    edCert: "Certifications:",
    edCertDesc: "Career Development and Professional Consultation Program Certificate (GDG DevFest 2024).",
    ftLet: "Let's build something great together.",
    ftRight: "All rights reserved."
  },
  vi: {
    available: "Sẵn sàng làm việc",
    role: "Lập trình viên Backend & Nghiên cứu AI",
    summary: "Lập trình viên Backend nhiệt huyết và hướng tới kết quả, có kinh nghiệm thực tế trong việc xây dựng các hệ thống quy mô lớn, chuẩn production sử dụng ",
    summary2: ". Ngoài phát triển backend, tôi còn tích cực tham gia ",
    summary3: ", tập trung vào các mô hình Diffusion nâng cao cho việc Phát hiện Bất thường trong Video. Tôi cũng có chuyên môn thực tế trong việc tích hợp ",
    summary4: " (Android, CameraX, TF Lite).",
    download: "Tải CV",
    viewProjects: "Xem Dự án",
    expTitle: "Kinh nghiệm",
    expSub: "Hành trình nghề nghiệp",
    fptRole: "Thực tập sinh Lập trình Backend (Y tế)",
    fptDate: "Tháng 10/2025 – 12/2025",
    fptDesc: "Tham gia phát triển, bảo trì và triển khai hệ thống ",
    fptDesc2: " (phiên bản 1.0 Monolithic & 2.0 Microservices) cho các bệnh viện lớn gồm Vĩnh Đức & Hóc Môn.",
    fptBullet1: "Xử lý thành công ",
    fptBullet1_2: " (bao gồm 2 lỗi Production nghiêm trọng) liên quan đến giao diện/logic, tối ưu hiệu năng và các yêu cầu nghiệp vụ mới.",
    fptBullet2: "Tối ưu hóa các Stored Procedure T-SQL phức tạp, cải thiện hiệu năng truy vấn và ngăn chặn sập hệ thống trong giờ cao điểm tại bệnh viện.",
    fptBullet3: "Thiết lập các ràng buộc chặt chẽ cho phân hệ Dược (kiểm tra trạng thái thanh toán, bắt buộc nhập hướng dẫn sử dụng), giảm lỗi nhập liệu thủ công tới ",
    fptBullet4: "Thiết kế, tùy biến và ánh xạ dữ liệu cho các báo cáo y tế sử dụng Crystal Reports và SQL Server Reporting Services (SSRS).",
    rsTitle: "Nghiên cứu Khoa học",
    rsSub: "Đóng góp học thuật",
    rsProject: "Mô hình Diffusion nâng cao cho Phát hiện Bất thường trong Video (DCMD)",
    rsRole: "Nghiên cứu viên AI/Computer Vision",
    rsDate: "2024 – Hiện tại",
    rsRepo: "Mã nguồn",
    rsObjTitle: "Mục tiêu:",
    rsObjDesc: "Phát triển mô hình Dual-Conditioned Motion Diffusion (DCMD) để phát hiện sự kiện bất thường trong video giám sát an ninh.",
    rsFocus: "Trọng tâm Kỹ thuật",
    rsFocusDesc: "Cải thiện chỉ số AUC-ROC vượt trội so với các mô hình cơ sở nhờ sử dụng các chiến lược điều kiện hóa nâng cao (tín hiệu tư thế/chuyển động, cửa sổ thời gian).",
    rsOpt: "Tối ưu hóa & Dữ liệu",
    rsOptDesc: "Tối ưu hóa quá trình huấn luyện mô hình thông qua lập lịch tốc độ học và gradient clipping. Xử lý dữ liệu nghiêm ngặt để đảm bảo khả năng tái tạo.",
    pjTitle: "Dự án Nổi bật",
    pjSub: "Các kỹ năng kỹ thuật tiêu biểu",
    pjViewSrc: "Xem Mã Nguồn",
    pjPbDesc: "Ứng dụng Android nhận diện biểu cảm khuôn mặt theo thời gian thực sử dụng camera thiết bị và hiển thị cảm xúc dự đoán. Tích hợp Computer Vision vào nền tảng Di động.",
    pjCapRole: "Đồ án Tốt nghiệp",
    pjCapDesc: "Hệ thống thuật toán phân công công việc thông minh và phân tích hiệu suất theo thời gian thực. Thiết kế kiến trúc đa tầng giúp cải thiện 30-40% thời gian hoàn thành công việc.",
    pjPosRole: "Ứng dụng Desktop",
    pjPosDesc: "Ứng dụng POS trên desktop với tính năng theo dõi tồn kho theo thời gian thực, quản lý giao dịch bán hàng và báo cáo CSV tự động bằng kiến trúc N-tier.",
    skTitle: "Kỹ năng Kỹ thuật",
    skSub: "Công cụ & Công nghệ",
    skLang: "Ngôn ngữ",
    skFrame: "Frameworks",
    skDb: "Cơ sở dữ liệu",
    skDbOpt: "Tối ưu hóa Database",
    skDbNorm: "Thiết kế Chuẩn hóa",
    skTools: "Công cụ & Khác",
    skMicro: "Kiến trúc Microservices",
    edTitle: "Học vấn",
    edSub: "Nền tảng học thuật",
    edUni: "Trường Đại học Mở TP.HCM",
    edDegree: "Cử nhân Khoa học Máy tính",
    edClass: "Niên khóa 2022-2026",
    edOrient: "Hướng chuyên ngành",
    edDbSys: "Hệ thống Cơ sở Dữ liệu",
    edCourse: "Môn học liên quan:",
    edCourseDesc: "Cấu trúc Dữ liệu & Giải thuật, Quản trị CSDL, Công nghệ Phần mềm, Lập trình Hướng đối tượng.",
    edCert: "Chứng chỉ:",
    edCertDesc: "Chứng nhận Chương trình Tư vấn Nghề nghiệp và Phát triển Chuyên môn (GDG DevFest 2024).",
    ftLet: "Hãy cùng nhau xây dựng những sản phẩm tuyệt vời.",
    ftRight: "Đã đăng ký bản quyền."
  }
};

export default function Portfolio() {
  // STATE ĐỂ LƯU NGÔN NGỮ HIỆN TẠI (Mặc định là tiếng Anh - 'en')
  const [lang, setLang] = useState('en');
  
  // Hàm trợ giúp để lấy text theo ngôn ngữ
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans selection:bg-blue-200 selection:text-blue-900 relative">
      
      {/* FLOATING LANGUAGE TOGGLE BUTTON */}
      <div className="absolute top-6 right-6 z-50 flex items-center bg-slate-800/60 backdrop-blur-md rounded-full p-1 border border-slate-600 shadow-xl">
        <Globe size={16} className="text-slate-300 ml-2 mr-1" />
        <button 
          onClick={() => setLang('en')} 
          className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${lang === 'en' ? 'bg-blue-500 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
        >
          EN
        </button>
        <button 
          onClick={() => setLang('vi')} 
          className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${lang === 'vi' ? 'bg-blue-500 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
        >
          VI
        </button>
      </div>

      {/* HEADER / HERO SECTION */}
      <header className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-slate-900 to-slate-900"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        
        <div className="max-w-5xl mx-auto px-6 pt-28 pb-20 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            
            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-semibold tracking-wide mb-6 border border-blue-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                {t.available}
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-2 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300 pb-2 leading-tight">
                Nguyen Trong Duc
              </h1>
              <h2 className="text-2xl md:text-3xl text-blue-400 font-medium mb-6">
                {t.role}
              </h2>
              <p className="max-w-2xl text-slate-400 text-lg mb-8 leading-relaxed">
                {t.summary}<strong className="text-slate-200">Java Spring Boot</strong> & <strong className="text-slate-200">C# .NET</strong>
                {t.summary2}<strong className="text-slate-200">{lang === 'en' ? 'Scientific Research (AI/Computer Vision)' : 'Nghiên cứu Khoa học (AI/Computer Vision)'}</strong>
                {t.summary3}<strong className="text-slate-200">{lang === 'en' ? 'Machine Learning models into Mobile applications' : 'các mô hình Machine Learning vào ứng dụng Di động'}</strong>
                {t.summary4}
              </p>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8">
                <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg shadow-blue-500/25 hover:-translate-y-0.5">
                  <Download size={18} />
                  {t.download}
                </button>
                <a href="#projects" className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 border border-slate-700 hover:border-slate-600">
                  {t.viewProjects} <ChevronRight size={18} />
                </a>
              </div>

              {/* Contact Pills */}
              <div className="flex flex-wrap justify-center md:justify-start gap-3 text-sm font-medium text-slate-300">
                <a href="tel:0347078222" className="flex items-center gap-2 hover:text-white transition-colors bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 px-4 py-2 rounded-lg hover:border-blue-500/50">
                  <Phone size={16} className="text-blue-400" /> 034 707 8222
                </a>
                <a href="mailto:ntrduc1310@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 px-4 py-2 rounded-lg hover:border-blue-500/50">
                  <Mail size={16} className="text-blue-400" /> ntrduc1310@gmail.com
                </a>
                <a href="https://github.com/ntrduc1310" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 px-4 py-2 rounded-lg hover:border-blue-500/50">
                  <Github size={16} className="text-blue-400" /> ntrduc1310
                </a>
                <span className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 px-4 py-2 rounded-lg">
                  <MapPin size={16} className="text-blue-400" /> Dist 7, HCMC
                </span>
              </div>
            </div>

            {/* Avatar Section */}
            <div className="hidden md:block relative group">
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="relative w-64 h-64 rounded-full border-4 border-slate-700 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden shadow-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                 <img 
                    src="/avatar.jpg" 
                    alt="Nguyen Trong Duc" 
                    className="w-full h-full object-cover" 
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                 />
                <span className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-slate-400 to-slate-600 hidden items-center justify-center w-full h-full">ND</span>
              </div>
            </div>

          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-20 space-y-24">
        
        {/* EXPERIENCE SECTION */}
        <section id="experience">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-blue-100 text-blue-700 rounded-2xl shadow-sm">
              <Briefcase size={24} />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-slate-900">{t.expTitle}</h3>
              <p className="text-slate-500 mt-1">{t.expSub}</p>
            </div>
          </div>
          
          <div className="relative border-l-2 border-blue-100 ml-6 pl-8 py-2 space-y-12">
            <div className="relative group">
              <div className="absolute w-5 h-5 bg-blue-500 rounded-full -left-[43px] top-1 border-4 border-slate-50 group-hover:scale-125 transition-transform duration-300"></div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6 gap-4">
                  <div>
                    <h4 className="text-2xl font-bold text-slate-900">FPT Information System (FPT IS)</h4>
                    <div className="text-lg text-blue-600 font-semibold mt-1">{t.fptRole}</div>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 font-medium bg-slate-50 px-4 py-2 rounded-lg border border-slate-100 whitespace-nowrap">
                    <Calendar size={16} /> {t.fptDate}
                  </div>
                </div>
                
                <p className="text-slate-700 font-medium mb-4 pb-4 border-b border-slate-100">
                  {t.fptDesc}<strong className="text-slate-900">FPT.eHospital</strong>{t.fptDesc2}
                </p>

                <ul className="space-y-3 text-slate-600">
                  <li className="flex gap-3 items-start">
                    <span className="text-blue-500 mt-1 shrink-0"><ChevronRight size={18} /></span>
                    <span>{t.fptBullet1}<strong className="text-slate-800 bg-blue-50 px-1 rounded">23+ Jira issues</strong>{t.fptBullet1_2}</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-blue-500 mt-1 shrink-0"><ChevronRight size={18} /></span>
                    <span><strong>{lang === 'en' ? 'Database Optimization:' : 'Tối ưu CSDL:'}</strong> {t.fptBullet2}</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-blue-500 mt-1 shrink-0"><ChevronRight size={18} /></span>
                    <span><strong>{lang === 'en' ? 'Business Logic Implementation:' : 'Logic Nghiệp vụ:'}</strong> {t.fptBullet3}<strong className="text-emerald-600">50%</strong>.</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-blue-500 mt-1 shrink-0"><ChevronRight size={18} /></span>
                    <span><strong>{lang === 'en' ? 'Reporting Solutions:' : 'Giải pháp Báo cáo:'}</strong> {t.fptBullet4}</span>
                  </li>
                </ul>
                
                <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap gap-2">
                  {['Java', 'C# .NET', 'SQL Server', 'T-SQL', 'Crystal Reports', 'SSRS', 'Jira', 'SVN'].map(tech => (
                    <span key={tech} className="bg-slate-100 text-slate-600 px-3 py-1 rounded-md text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SCIENTIFIC RESEARCH SECTION */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-purple-100 text-purple-700 rounded-2xl shadow-sm">
              <Microscope size={24} />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-slate-900">{t.rsTitle}</h3>
              <p className="text-slate-500 mt-1">{t.rsSub}</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:shadow-purple-900/5 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-purple-500"></div>
            
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
              <div>
                <h4 className="text-xl font-bold text-slate-900 group-hover:text-purple-700 transition-colors">{t.rsProject}</h4>
                <div className="text-purple-600 font-semibold mt-1">{t.rsRole}</div>
              </div>
              <div className="text-slate-500 font-medium bg-slate-50 px-4 py-2 rounded-lg border border-slate-100 whitespace-nowrap">
                {t.rsDate}
              </div>
            </div>
            
            <a href="https://github.com/ntrduc1310/NCKH_DCMD" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-purple-600 mb-6 transition-colors bg-slate-100 hover:bg-purple-50 px-4 py-2 rounded-lg">
              <Github size={16} /> {t.rsRepo} <ExternalLink size={14} />
            </a>

            <div className="space-y-4 text-slate-600">
              <p className="text-slate-700 font-medium"><strong>{t.rsObjTitle}</strong> {t.rsObjDesc}</p>
              
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span> {t.rsFocus}
                  </div>
                  <p className="text-sm leading-relaxed">{t.rsFocusDesc}</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span> {t.rsOpt}
                  </div>
                  <p className="text-sm leading-relaxed">{t.rsOptDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED PROJECTS SECTION */}
        <section id="projects">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-emerald-100 text-emerald-700 rounded-2xl shadow-sm">
              <Code size={24} />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-slate-900">{t.pjTitle}</h3>
              <p className="text-slate-500 mt-1">{t.pjSub}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Project 1: Photo Booth */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">
              <div className="h-48 bg-emerald-50 relative overflow-hidden border-b border-slate-100 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-teal-50 opacity-50"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-200"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold text-emerald-700 rounded-md shadow-sm">
                  {lang === 'en' ? 'Mobile AI' : 'AI trên Di động'}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">AI Expression Photo Booth</h4>
                  <span className="text-xs font-bold text-slate-400">2025</span>
                </div>
                <p className="text-slate-600 text-sm mb-6 flex-1">
                  {t.pjPbDesc}
                </p>
                
                <div className="mb-6 space-y-2">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Tech Stack</div>
                  <div className="flex flex-wrap gap-2">
                    {['Java', 'CameraX', 'ML Kit', 'TF Lite'].map(tech => (
                      <span key={tech} className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded text-xs font-bold">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a href="https://github.com/tbinh94/ExpressionPhotoBooth" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold rounded-xl transition-colors border border-slate-200">
                  <Github size={16} /> {t.pjViewSrc}
                </a>
              </div>
            </div>

            {/* Project 2: Workload Assignment */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">
              <div className="h-48 bg-blue-50 relative overflow-hidden border-b border-slate-100 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-50 opacity-50"></div>
                <Server size={64} className="text-blue-200" />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold text-blue-700 rounded-md shadow-sm">
                  {t.pjCapRole}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">Workload Assignment & Load Balancing</h4>
                  <span className="text-xs font-bold text-slate-400 shrink-0 ml-2">2025</span>
                </div>
                <p className="text-slate-600 text-sm mb-6 flex-1">
                  {t.pjCapDesc}
                </p>
                
                <div className="mb-6 space-y-2">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Tech Stack</div>
                  <div className="flex flex-wrap gap-2">
                    {['Java (Spring Boot)', 'PostgreSQL', 'TypeScript'].map(tech => (
                      <span key={tech} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-bold">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a href="https://github.com/ntrduc1310/ProjectDoAnNganh" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold rounded-xl transition-colors border border-slate-200">
                  <Github size={16} /> {t.pjViewSrc}
                </a>
              </div>
            </div>

            {/* Project 3: POS System */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group md:col-span-2 lg:col-span-1">
              <div className="h-48 bg-slate-100 relative overflow-hidden border-b border-slate-100 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-50 opacity-50"></div>
                <Monitor size={64} className="text-slate-300" />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold text-slate-700 rounded-md shadow-sm">
                  {t.pjPosRole}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-bold text-slate-900 group-hover:text-slate-600 transition-colors">Inventory Manager POS System</h4>
                  <span className="text-xs font-bold text-slate-400">2024</span>
                </div>
                <p className="text-slate-600 text-sm mb-6 flex-1">
                  {t.pjPosDesc}
                </p>
                
                <div className="mb-6 space-y-2">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Tech Stack</div>
                  <div className="flex flex-wrap gap-2">
                    {['C# .NET', 'Entity Framework', 'SQL Server', 'WinForms'].map(tech => (
                      <span key={tech} className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs font-bold">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a href="https://github.com/ntrduc1310/Inventory_Manager_Pos_Mai" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold rounded-xl transition-colors border border-slate-200">
                  <Github size={16} /> {t.pjViewSrc}
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* SKILLS SECTION */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-orange-100 text-orange-700 rounded-2xl shadow-sm">
              <Terminal size={24} />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-slate-900">{t.skTitle}</h3>
              <p className="text-slate-500 mt-1">{t.skSub}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-orange-300 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center mb-4">
                <Code size={20} className="text-orange-600" />
              </div>
              <h4 className="font-bold text-slate-900 mb-4">{t.skLang}</h4>
              <ul className="space-y-2">
                <li className="text-slate-600 font-medium">Java</li>
                <li className="text-slate-600 font-medium">C#</li>
                <li className="text-slate-600 font-medium">JavaScript / TypeScript</li>
                <li className="text-slate-600 font-medium">T-SQL / PL/pgSQL</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-blue-300 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                <Server size={20} className="text-blue-600" />
              </div>
              <h4 className="font-bold text-slate-900 mb-4">{t.skFrame}</h4>
              <ul className="space-y-2">
                <li className="text-slate-600 font-medium">Spring Boot / Spring Data JPA</li>
                <li className="text-slate-600 font-medium">.NET Core / .NET Framework</li>
                <li className="text-slate-600 font-medium">Entity Framework</li>
                <li className="text-slate-600 font-medium">ReactJS</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-emerald-300 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-4">
                <Database size={20} className="text-emerald-600" />
              </div>
              <h4 className="font-bold text-slate-900 mb-4">{t.skDb}</h4>
              <ul className="space-y-2">
                <li className="text-slate-600 font-medium">SQL Server (Stored Procedures)</li>
                <li className="text-slate-600 font-medium">PostgreSQL</li>
                <li className="text-slate-600 font-medium">{t.skDbOpt}</li>
                <li className="text-slate-600 font-medium">{t.skDbNorm}</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-purple-300 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center mb-4">
                <Layout size={20} className="text-purple-600" />
              </div>
              <h4 className="font-bold text-slate-900 mb-4">{t.skTools}</h4>
              <ul className="space-y-2">
                <li className="text-slate-600 font-medium flex items-center gap-2"><Github size={14}/> Git / SVN</li>
                <li className="text-slate-600 font-medium">Jira / Agile / Scrum</li>
                <li className="text-slate-600 font-medium">{t.skMicro}</li>
                <li className="text-slate-600 font-medium">TensorFlow Lite / ML Kit</li>
              </ul>
            </div>
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-rose-100 text-rose-700 rounded-2xl shadow-sm">
              <GraduationCap size={24} />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-slate-900">{t.edTitle}</h3>
              <p className="text-slate-500 mt-1">{t.edSub}</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="w-24 h-24 bg-rose-50 rounded-full flex items-center justify-center shrink-0 border border-rose-100">
              <GraduationCap size={40} className="text-rose-400" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h4 className="text-2xl font-bold text-slate-900">{t.edUni}</h4>
                  <div className="text-lg text-rose-600 font-semibold mt-1">{t.edDegree}</div>
                </div>
                <div className="mt-3 md:mt-0 inline-flex items-center gap-2 bg-slate-50 text-slate-600 px-4 py-2 rounded-lg font-medium border border-slate-100">
                  {t.edClass}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-slate-600 text-left">
                <div className="bg-slate-50 p-4 rounded-xl md:col-span-2">
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{t.edOrient}</span>
                  <span className="text-slate-800 font-medium">{t.edDbSys}</span>
                </div>
                <div className="md:col-span-2">
                  <strong className="text-slate-800">{t.edCourse}</strong> {t.edCourseDesc}
                </div>
                <div className="md:col-span-2">
                  <strong className="text-slate-800">{t.edCert}</strong> {t.edCertDesc}
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-center border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-white mb-6">{t.ftLet}</h2>
          <div className="flex justify-center gap-4 mb-8">
            <a href="mailto:ntrduc1310@gmail.com" className="p-3 bg-slate-800 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300">
              <Mail size={20} />
            </a>
            <a href="https://github.com/ntrduc1310" target="_blank" rel="noreferrer" className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 hover:text-white transition-all duration-300">
              <Github size={20} />
            </a>
            <a href="tel:0347078222" className="p-3 bg-slate-800 rounded-full hover:bg-emerald-600 hover:text-white transition-all duration-300">
              <Phone size={20} />
            </a>
          </div>
          <p>© {new Date().getFullYear()} Nguyen Trong Duc. {t.ftRight}</p>
        </div>
      </footer>

    </div>
  );
}