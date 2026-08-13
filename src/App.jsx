import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Briefcase, 
  Microscope, Code, Database, Server, 
  GraduationCap, ExternalLink, Layout, Terminal,
  Download, ChevronRight, Calendar, Monitor, Globe,
  Award, Sparkles, CheckCircle2, ShieldCheck, Cpu,
  FileText, Building2, Copy, Check, Star, ArrowUpRight
} from 'lucide-react';
import cvPdf from './CV_NguyenTrongDuc_Final.pdf';

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

// Custom Icon LinkedIn
const Linkedin = (props) => (
  <svg 
    {...props} 
    xmlns="http://www.w3.org/2000/svg" 
    width={props.size || 24} height={props.size || 24} 
    viewBox="0 0 24 24" fill="none" 
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 2-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

// TỪ ĐIỂN SONG NGỮ (EN - VI)
const translations = {
  en: {
    available: "Available for Full-Time Software Engineer Roles",
    name: "Nguyen Trong Duc",
    role: "Software Engineer Fresher — .NET / Java / Full-Stack",
    summary: "Software Engineer with hands-on experience shipping production features for ",
    summaryBold1: "FPT.eHospital",
    summary2: " (deployed at 300+ healthcare facilities). Resolved 23 production issues, optimized 50+ SQL Stored Procedures, and engineered secure multi-tenant onboarding workflows at ",
    summaryBold2: "ITC Group",
    summary3: ". Solid foundation in C#/.NET and Java/Spring Boot, with growing expertise in Clean Architecture and applied AI.",
    
    download: "Download Resume (PDF)",
    viewProjects: "Explore Projects",
    viewCV: "Preview CV",

    // Stat counters
    statExp: "Internship Exp",
    statExpVal: "2 Companies",
    statProds: "Production Bugs Fixed",
    statProdsVal: "23+ Resolved",
    statSql: "SQL SPs Optimized",
    statSqlVal: "50+ Procedures",
    statPaper: "AI Research",
    statPaperVal: "0.891 AUC",

    // Experience
    expTitle: "Work Experience",
    expSub: "Hands-on engineering in enterprise & multi-tenant production systems",
    
    // ITC
    itcCompany: "ITC Group",
    itcRole: "Software Engineer Intern",
    itcDate: "May 2026 – Jul 2026",
    itcLoc: "Ho Chi Minh City, Vietnam",
    itcDesc: "Engineered secure multi-tenant onboarding workflows and optimized core MVC architecture for enterprise Web applications.",
    itcB1: "Developed and maintained a secure multi-step onboarding wizard using Session/TempData to manage state across complex registration phases.",
    itcB2: "Refactored C# controllers for multi-tenant systems, integrating cookie tracking and removing subdomain dependencies without violating SQL UNIQUE constraints.",
    itcB3: "Modernized legacy UI by converting views to the PRG (Post/Redirect/Get) pattern and restructuring Master Page dependencies to fix critical UI bugs, collaborating in an English-speaking Agile team on GitLab.",

    // FPT IS
    fptCompany: "FPT Information System (FPT IS)",
    fptSub: "Healthcare Software Solutions Center",
    fptRole: "Backend Developer Intern — FPT.eHospital",
    fptDate: "Oct 2025 – Dec 2025",
    fptLoc: "Ho Chi Minh City, Vietnam",
    fptDesc: "Shipped core hospital-record modules and database optimizations for FPT.eHospital deployed across Vinh Duc & Hoc Mon hospitals.",
    fptB1: "Delivered 6+ end-to-end hospital-record modules (patient-transfer, rehabilitation-assessment, prescription forms) on eHospital platform, covering UI binding, stored procedures, and full CRUD.",
    fptB2: "Refined and optimized 50+ complex SQL Stored Procedures; replaced cursor-based logic with set-based SELECT queries, measurably speeding up data retrieval for large datasets.",
    fptB3: "Resolved 15+ Jira-tracked production defects against live hospital database (DKHOCMON_HIS_PROD), including a critical app-crash bug — reaching an 84% first-pass QA rate.",
    fptB4: "Redesigned BHYT and Service prescription print templates (Crystal Reports/ReportBuilder) — auto-numbered item lists, dosage logic, and cancelled-item strikethrough.",
    fptB5: "Supported go-live on-site at Hoc Mon General Hospital: triaged clinician issues in real time, traced data-integrity bugs in production, and deployed hotfixes to hospital servers.",
    fptB6: "Configured the next-gen HIS 2 system from source and supported catalog data migration by mapping duplicated medicine IDs between legacy and new systems.",

    // Scientific Research
    rsTitle: "Scientific Research",
    rsSub: "Academic contribution & AI innovations",
    rsProject: "Video Anomaly Detection using Diffusion Models (DCMD)",
    rsRole: "AI & Computer Vision Co-Author",
    rsDate: "Apr 2025 – Mar 2026",
    rsRepo: "GitHub Repository",
    rsAward: "Awarded University-level Scientific Research Consolation Prize",
    rsObjTitle: "Research Objective:",
    rsObjDesc: "Co-authored research on Dual-Conditioned Motion Diffusion (DCMD) for skeleton-based video anomaly detection.",
    rsMetric: "Avenue Benchmark AUC:",
    rsMetricVal: "0.891 AUC",
    rsFocus: "Key Innovations:",
    rsFocusDesc: "Improved AUC metrics over baseline models using dual conditioning (pose/motion cues & temporal windows) and gradient clipping.",

    // Featured Projects
    pjTitle: "Featured Projects",
    pjSub: "Full-Stack applications, Mobile AI, and Capstone systems",
    pjViewSrc: "View Source",

    pjCapTitle: "Load Balancing Task Management API",
    pjCapRole: "Capstone Project",
    pjCapDate: "Jul 2025 – Oct 2025",
    pjCapDesc: "Built a B2B load-balancing task engine with dynamic weighting algorithms and React/TypeScript frontend. Secured with JWT, AOP role guards, and BCrypt password hashing.",

    pjPbTitle: "Our Memories – AI Photo Booth",
    pjPbRole: "Android & AI Integration",
    pjPbDate: "Mar 2026 – May 2026",
    pjPbDesc: "Clean-Architecture Android application featuring RBAC (4 roles), ML Kit / MediaPipe gesture-triggered hands-free photo capture, and Gemini API serverless emotion insights.",

    pjPosTitle: "Inventory Manager POS System",
    pjPosRole: "Desktop Application",
    pjPosDate: "2024",
    pjPosDesc: "Desktop POS system featuring real-time inventory tracking, sales transaction management, and automated CSV reporting using N-tier architecture with C# .NET and SQL Server.",

    // Skills
    skTitle: "Technical Expertise",
    skSub: "Comprehensive stack & domain competencies",
    skLang: "Programming Languages",
    skFrame: "Frameworks & UI",
    skDb: "Databases & Architecture",
    skTools: "Tools, Cloud & AI",
    skEng: "English Proficiency",
    skEngDesc: "TOEIC Intermediate — Proficient in reading technical documentation & working in Agile teams",

    // Education
    edTitle: "Education & Achievements",
    edSub: "Academic foundation at HCMOU",
    edUni: "Ho Chi Minh City Open University (HCMOU)",
    edDegree: "Bachelor of Computer Science (Software Engineering)",
    edClass: "2022 – Expected 2026",
    edGpa: "District 7, Ho Chi Minh City",
    edCourse: "Core Subjects:",
    edCourseDesc: "Data Structures & Algorithms, Database Management (SQL Server/PostgreSQL), Software Architecture, OOP, Artificial Intelligence.",
    edCert: "Honors & Certificates:",
    edCertDesc1: "University-level Scientific Research Consolation Prize (2026)",
    edCertDesc2: "Google Developer Groups DevFest 2024 Certificate",
    edCertDesc3: "Career Development & Professional Consultation Program Certificate",

    ftLet: "Looking to bring a results-driven engineering approach to your team.",
    ftCopySuccess: "Copied to clipboard!",
    ftRight: "All rights reserved."
  },
  vi: {
    available: "Sẵn sàng nhận vị trí Software Engineer Full-Time",
    name: "Nguyễn Trọng Đức",
    role: "Software Engineer Fresher — .NET / Java / Full-Stack",
    summary: "Kỹ sư phần mềm có kinh nghiệm thực chiến triển khai tính năng Production cho hệ thống ",
    summaryBold1: "FPT.eHospital",
    summary2: " (hơn 300 cơ sở y tế). Đã giải quyết 23 sự cố production, tối ưu 50+ Stored Procedure SQL và xây dựng quy trình Onboarding đa người dùng (Multi-tenant) tại ",
    summaryBold2: "ITC Group",
    summary3: ". Nền tảng vững chắc về C#/.NET và Java/Spring Boot, cùng chuyên môn về Clean Architecture và AI ứng dụng.",
    
    download: "Tải CV Bản Đầy Đủ (PDF)",
    viewProjects: "Xem Dự Án",
    viewCV: "Xem Trực Tiếp CV",

    // Stat counters
    statExp: "Kinh Nghiệm Thực Tập",
    statExpVal: "2 Công Ty",
    statProds: "Lỗi Production Đã Sửa",
    statProdsVal: "23+ Lỗi",
    statSql: "Stored Procedures Tối Ưu",
    statSqlVal: "50+ Thủ Tục",
    statPaper: "Nghiên Cứu AI",
    statPaperVal: "0.891 AUC",

    // Experience
    expTitle: "Kinh Nghiệm Làm Việc",
    expSub: "Phát triển phần mềm thực chiến trên các hệ thống doanh nghiệp & Production",
    
    // ITC
    itcCompany: "ITC Group",
    itcRole: "Thực tập sinh Lập trình viên Phần mềm",
    itcDate: "Tháng 05/2026 – 07/2026",
    itcLoc: "TP. Hồ Chí Minh, Việt Nam",
    itcDesc: "Phát triển quy trình Onboarding đa người dùng (Multi-tenant) bảo mật và tối ưu kiến trúc MVC cho ứng dụng Web doanh nghiệp.",
    itcB1: "Phát triển và bảo trì quy trình Onboarding đa bước bảo mật sử dụng Session/TempData để quản lý trạng thái qua các giai đoạn đăng ký phức tạp.",
    itcB2: "Tái cấu trúc (Refactor) C# Controller cho hệ thống Multi-tenant, tích hợp cookie tracking và loại bỏ phụ thuộc Subdomain mà không vi phạm ràng buộc SQL UNIQUE.",
    itcB3: "Hiện đại hóa giao diện legacy bằng cách chuyển đổi View sang mô hình PRG (Post/Redirect/Get) và tái cấu trúc Master Page để sửa các lỗi UI nghiêm trọng, làm việc trong môi trường Agile tiếng Anh trên GitLab.",

    // FPT IS
    fptCompany: "Công ty Hệ thống Thông tin FPT (FPT IS)",
    fptSub: "Trung tâm Giải pháp Phần mềm Y tế",
    fptRole: "Thực tập sinh Lập trình Backend — FPT.eHospital",
    fptDate: "Tháng 10/2025 – 12/2025",
    fptLoc: "TP. Hồ Chí Minh, Việt Nam",
    fptDesc: "Phát triển phân hệ hồ sơ bệnh án và tối ưu hóa CSDL cho FPT.eHospital tại 2 bệnh viện Vĩnh Đức & Hóc Môn.",
    fptB1: "Phát triển 6+ phân hệ hồ sơ bệnh án end-to-end (chuyển viện, đánh giá phục hồi chức năng, đơn thuốc) trên eHospital, bao gồm UI, Stored Procedure và CRUD.",
    fptB2: "Tối ưu hóa 50+ Stored Procedure SQL phức tạp; thay thế logic con trỏ (cursor) bằng truy vấn SELECT tập hợp, tăng tốc độ truy vấn dữ liệu báo cáo thống kê quy mô lớn.",
    fptB3: "Khắc phục 15+ lỗi Production trên Jira cho CSDL thực tế (DKHOCMON_HIS_PROD), sửa lỗi crash app nghiêm trọng — đạt tỷ lệ duyệt QA vòng đầu (First-pass) 84%.",
    fptB4: "Thiết kế lại mẫu in đơn thuốc BHYT và Dịch vụ (Crystal Reports/ReportBuilder) với tính năng đánh số tự động, logic liều dùng và gạch ngang mục bị hủy.",
    fptB5: "Hỗ trợ Go-Live trực tiếp (On-site) tại Bệnh viện Đa khoa Hóc Môn: tiếp nhận sự cố từ bác sĩ real-time, truy vết lỗi dữ liệu trên Production và triển khai hotfix lên server.",
    fptB6: "Cấu hình hệ thống HIS 2 từ mã nguồn cho khách hàng mới, thực hiện ánh xạ mã thuốc trùng lặp giữa hệ thống cũ và mới để chuyển đổi dữ liệu danh mục.",

    // Scientific Research
    rsTitle: "Nghiên Cứu Khoa Học",
    rsSub: "Đóng góp học thuật & Đổi mới công nghệ AI",
    rsProject: "Phát hiện Bất thường trong Video bằng Mô hình Diffusion (DCMD)",
    rsRole: "Đồng Tác Giả Nghiên Cứu AI / Computer Vision",
    rsDate: "Tháng 04/2025 – 03/2026",
    rsRepo: "Mã Nguồn GitHub",
    rsAward: "Đạt Giải Khuyến Khích Nghiên Cứu Khoa Học Cấp Trường",
    rsObjTitle: "Mục Tiêu Nghiên Cứu:",
    rsObjDesc: "Đồng tác giả nghiên cứu mô hình Dual-Conditioned Motion Diffusion (DCMD) cho phát hiện bất thường video dựa trên khung xương (Skeleton).",
    rsMetric: "Đánh giá Benchmark Avenue:",
    rsMetricVal: "0.891 AUC",
    rsFocus: "Đổi Mới Kỹ Thuật:",
    rsFocusDesc: "Cải thiện chỉ số AUC so với mô hình cơ sở nhờ điều kiện hóa kép (tín hiệu tư thế/chuyển động & cửa sổ thời gian) cùng kỹ thuật gradient clipping.",

    // Featured Projects
    pjTitle: "Dự Án Tiêu Biểu",
    pjSub: "Ứng dụng Full-Stack, Di động AI và Đồ án Tốt nghiệp",
    pjViewSrc: "Xem Mã Nguồn",

    pjCapTitle: "Load Balancing Task Management API",
    pjCapRole: "Đồ Án Tốt Nghiệp",
    pjCapDate: "Tháng 07/2025 – 10/2025",
    pjCapDesc: "Hệ thống phân công công việc cân bằng tải với thuật toán trọng số động và frontend B2B React/TypeScript. Bảo mật bằng JWT, AOP role guards và mã hóa BCrypt.",

    pjPbTitle: "Our Memories – AI Photo Booth",
    pjPbRole: "Tích hợp Android & AI",
    pjPbDate: "Tháng 03/2026 – 05/2026",
    pjPbDesc: "Ứng dụng Android kiến trúc Clean Architecture phân quyền 4 vai trò (RBAC), chụp ảnh tự động bằng cử chỉ tay (ML Kit / MediaPipe) và gợi ý cảm xúc bằng Gemini API & Cloud Functions.",

    pjPosTitle: "Inventory Manager POS System",
    pjPosRole: "Ứng dụng Desktop",
    pjPosDate: "2024",
    pjPosDesc: "Hệ thống POS bán hàng Desktop với quản lý kho real-time, quản lý giao dịch và tự động xuất báo cáo CSV bằng kiến trúc N-tier với C# .NET và SQL Server.",

    // Skills
    skTitle: "Kỹ Năng Kỹ Thuật",
    skSub: "Tổng quan các công nghệ và năng lực chuyên môn",
    skLang: "Ngôn Ngữ Lập Trình",
    skFrame: "Frameworks & Giao Diện",
    skDb: "Cơ Sở Dữ Liệu & Kiến Trúc",
    skTools: "Công Cụ, Cloud & AI",
    skEng: "Trình Độ Tiếng Anh",
    skEngDesc: "TOEIC Intermediate — Đọc hiểu tốt tài liệu kỹ thuật & làm việc hiệu quả trong nhóm Agile",

    // Education
    edTitle: "Học Vấn & Giải Thưởng",
    edSub: "Nền tảng học thuật tại Trường ĐH Mở TP.HCM",
    edUni: "Trường Đại học Mở TP.HCM (HCMOU)",
    edDegree: "Cử nhân Khoa học Máy tính (Công nghệ Phần mềm)",
    edClass: "Niên khóa 2022 – 2026 (Dự kiến)",
    edGpa: "Quận 7, TP. Hồ Chí Minh",
    edCourse: "Môn Học Trọng Tâm:",
    edCourseDesc: "Cấu trúc Dữ liệu & Giải thuật, Quản trị CSDL (SQL Server/PostgreSQL), Kiến trúc Phần mềm, OOP, Trí tuệ Nhân tạo.",
    edCert: "Giải Thưởng & Chứng Chỉ:",
    edCertDesc1: "Giải Khuyến khích Nghiên cứu Khoa học Cấp Trường (2026)",
    edCertDesc2: "Chứng nhận Google Developer Groups DevFest 2024",
    edCertDesc3: "Chứng nhận Chương trình Tư vấn Nghề nghiệp & Phát triển Chuyên môn",

    ftLet: "Sẵn sàng mang đến giải pháp lập trình chất lượng và hiệu quả cho doanh nghiệp của bạn.",
    ftCopySuccess: "Đã sao chép vào bộ nhớ tạm!",
    ftRight: "Đã đăng ký bản quyền."
  }
};

export default function Portfolio() {
  const [lang, setLang] = useState('en');
  const [copiedText, setCopiedText] = useState('');
  
  const t = translations[lang];

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(''), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500 selection:text-white relative overflow-x-hidden">
      
      {/* BACKGROUND DECORATIVE GLOWS */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="fixed bottom-1/3 right-10 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="fixed top-1/2 left-10 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      {/* NAVIGATION BAR */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-[2px] shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-extrabold text-blue-400">
                ND
              </div>
            </div>
            <div>
              <span className="font-bold text-lg text-white block group-hover:text-blue-400 transition-colors">Nguyen Trong Duc</span>
              <span className="text-xs text-slate-400 hidden sm:block">Software Engineer Fresher</span>
            </div>
          </a>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
              <a href="#experience" className="hover:text-blue-400 transition-colors">{t.expTitle}</a>
              <a href="#research" className="hover:text-blue-400 transition-colors">{t.rsTitle}</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">{t.pjTitle}</a>
              <a href="#skills" className="hover:text-blue-400 transition-colors">{t.skTitle}</a>
              <a href="#education" className="hover:text-blue-400 transition-colors">{t.edTitle}</a>
            </div>

            {/* LANGUAGE TOGGLE */}
            <div className="flex items-center bg-slate-900 border border-slate-800 rounded-full p-1 shadow-inner">
              <Globe size={15} className="text-slate-400 ml-2 mr-1" />
              <button 
                onClick={() => setLang('en')} 
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${lang === 'en' ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
              >
                EN
              </button>
              <button 
                onClick={() => setLang('vi')} 
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${lang === 'vi' ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
              >
                VI
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="relative pt-16 pb-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-xs sm:text-sm font-semibold tracking-wide mb-6 border border-blue-500/20 backdrop-blur-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                {t.available}
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight text-white leading-tight">
                {t.name}
              </h1>
              
              <h2 className="text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 font-semibold mb-6">
                {t.role}
              </h2>
              
              <p className="max-w-2xl text-slate-300 text-base sm:text-lg mb-8 leading-relaxed font-normal">
                {t.summary}
                <span className="text-white font-semibold underline decoration-blue-500/50">{t.summaryBold1}</span>
                {t.summary2}
                <span className="text-white font-semibold underline decoration-indigo-500/50">{t.summaryBold2}</span>
                {t.summary3}
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
                <a 
                  href={cvPdf} 
                  download="CV_NguyenTrongDuc_Final.pdf"
                  className="flex items-center gap-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-0.5"
                >
                  <Download size={19} />
                  {t.download}
                </a>

                <a 
                  href="#projects" 
                  className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 border border-slate-800 hover:border-slate-700"
                >
                  {t.viewProjects} <ChevronRight size={18} />
                </a>

                <a 
                  href={cvPdf} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-slate-900/60 hover:bg-slate-800/80 text-slate-400 hover:text-slate-200 px-5 py-3.5 rounded-xl font-medium transition-all duration-300 border border-slate-800/60 text-sm"
                >
                  <FileText size={16} /> {t.viewCV} <ArrowUpRight size={14} />
                </a>
              </div>

              {/* Contact Pills */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 text-sm font-medium text-slate-300">
                <a 
                  href="tel:0347078222" 
                  className="flex items-center gap-2 hover:text-white transition-colors bg-slate-900/80 backdrop-blur-sm border border-slate-800 px-3.5 py-2 rounded-xl hover:border-blue-500/50"
                  onClick={() => handleCopy('0347078222', 'phone')}
                >
                  <Phone size={15} className="text-blue-400" /> (+84) 347 078 222
                  {copiedText === 'phone' && <span className="text-xs text-emerald-400 font-bold ml-1">✓</span>}
                </a>
                <a 
                  href="mailto:ntrduc1310@gmail.com" 
                  className="flex items-center gap-2 hover:text-white transition-colors bg-slate-900/80 backdrop-blur-sm border border-slate-800 px-3.5 py-2 rounded-xl hover:border-blue-500/50"
                >
                  <Mail size={15} className="text-blue-400" /> ntrduc1310@gmail.com
                </a>
                <a 
                  href="https://github.com/ntrduc1310" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 hover:text-white transition-colors bg-slate-900/80 backdrop-blur-sm border border-slate-800 px-3.5 py-2 rounded-xl hover:border-blue-500/50"
                >
                  <Github size={15} className="text-blue-400" /> ntrduc1310
                </a>
                <a 
                  href="https://linkedin.com/in/ntrduc1310" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 hover:text-white transition-colors bg-slate-900/80 backdrop-blur-sm border border-slate-800 px-3.5 py-2 rounded-xl hover:border-blue-500/50"
                >
                  <Linkedin size={15} className="text-blue-400" /> ntrduc1310
                </a>
                <span className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-sm border border-slate-800 px-3.5 py-2 rounded-xl text-slate-400">
                  <MapPin size={15} className="text-blue-400" /> District 7, HCMC
                </span>
              </div>
            </div>

            {/* Avatar Section */}
            <div className="relative group shrink-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
              
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl border-2 border-slate-700/60 bg-gradient-to-br from-slate-900 to-slate-950 p-2 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                <div className="w-full h-full rounded-2xl overflow-hidden relative flex items-center justify-center bg-slate-900">
                  <img 
                    src="/avatar.jpg" 
                    alt="Nguyen Trong Duc" 
                    className="w-full h-full object-cover" 
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden flex-col items-center justify-center w-full h-full bg-slate-900 text-slate-400">
                    <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-indigo-500">ND</span>
                    <span className="text-xs font-semibold mt-2 text-slate-500">Nguyen Trong Duc</span>
                  </div>
                </div>

                {/* Badge Overlay */}
                <div className="absolute -bottom-4 -right-4 bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-2xl px-4 py-2 shadow-xl flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400">Status</div>
                    <div className="text-xs font-bold text-white">Full-Stack / .NET</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* METRIC COUNTER BANNER */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-slate-900/60 border border-slate-800/80 backdrop-blur-md rounded-2xl p-5 hover:border-blue-500/40 transition-colors">
              <div className="flex items-center gap-3 mb-1">
                <Building2 size={20} className="text-blue-400" />
                <span className="text-xs text-slate-400 font-semibold uppercase">{t.statExp}</span>
              </div>
              <div className="text-2xl font-black text-white">{t.statExpVal}</div>
              <div className="text-xs text-slate-400 mt-1">ITC Group & FPT IS</div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800/80 backdrop-blur-md rounded-2xl p-5 hover:border-emerald-500/40 transition-colors">
              <div className="flex items-center gap-3 mb-1">
                <ShieldCheck size={20} className="text-emerald-400" />
                <span className="text-xs text-slate-400 font-semibold uppercase">{t.statProds}</span>
              </div>
              <div className="text-2xl font-black text-white">{t.statProdsVal}</div>
              <div className="text-xs text-emerald-400/90 mt-1">84% First-Pass QA Rate</div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800/80 backdrop-blur-md rounded-2xl p-5 hover:border-indigo-500/40 transition-colors">
              <div className="flex items-center gap-3 mb-1">
                <Database size={20} className="text-indigo-400" />
                <span className="text-xs text-slate-400 font-semibold uppercase">{t.statSql}</span>
              </div>
              <div className="text-2xl font-black text-white">{t.statSqlVal}</div>
              <div className="text-xs text-slate-400 mt-1">T-SQL / Stored Procedures</div>
            </div>

            <div className="bg-slate-900/60 border border-slate-800/80 backdrop-blur-md rounded-2xl p-5 hover:border-purple-500/40 transition-colors">
              <div className="flex items-center gap-3 mb-1">
                <Award size={20} className="text-purple-400" />
                <span className="text-xs text-slate-400 font-semibold uppercase">{t.statPaper}</span>
              </div>
              <div className="text-2xl font-black text-white">{t.statPaperVal}</div>
              <div className="text-xs text-purple-300 mt-1">Diffusion Models (DCMD)</div>
            </div>
          </div>

        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-24">
        
        {/* WORK EXPERIENCE SECTION */}
        <section id="experience" className="scroll-mt-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-blue-500/10 text-blue-400 rounded-2xl border border-blue-500/20 shadow-sm">
              <Briefcase size={26} />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">{t.expTitle}</h3>
              <p className="text-slate-400 text-sm mt-1">{t.expSub}</p>
            </div>
          </div>
          
          <div className="space-y-8">
            
            {/* ITC GROUP EXPERIENCE (NEW) */}
            <div className="relative bg-slate-900/80 rounded-2xl p-8 border border-slate-800 hover:border-blue-500/50 shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-blue-500 to-indigo-600"></div>
              
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <h4 className="text-2xl font-extrabold text-white group-hover:text-blue-400 transition-colors">{t.itcCompany}</h4>
                    <span className="bg-blue-500/20 text-blue-300 text-xs font-bold px-3 py-1 rounded-full border border-blue-500/30">
                      May 2026 – Jul 2026
                    </span>
                    <span className="bg-indigo-500/20 text-indigo-300 text-xs font-bold px-2.5 py-0.5 rounded-md border border-indigo-500/30">
                      Recent Internship
                    </span>
                  </div>
                  <div className="text-lg text-blue-400 font-semibold mt-1">{t.itcRole}</div>
                  <div className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                    <MapPin size={13} /> {t.itcLoc}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-slate-400 font-medium bg-slate-950 px-4 py-2 rounded-xl border border-slate-800 text-xs sm:text-sm shrink-0">
                  <Calendar size={16} className="text-blue-400" /> {t.itcDate}
                </div>
              </div>
              
              <p className="text-slate-300 font-medium mb-5 pb-5 border-b border-slate-800/80 leading-relaxed">
                {t.itcDesc}
              </p>

              <ul className="space-y-3.5 text-slate-300 text-sm sm:text-base">
                <li className="flex gap-3 items-start">
                  <span className="text-blue-400 mt-1 shrink-0"><CheckCircle2 size={18} /></span>
                  <span>{t.itcB1}</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-blue-400 mt-1 shrink-0"><CheckCircle2 size={18} /></span>
                  <span>{t.itcB2}</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-blue-400 mt-1 shrink-0"><CheckCircle2 size={18} /></span>
                  <span>{t.itcB3}</span>
                </li>
              </ul>
              
              <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-slate-400 mr-2 uppercase tracking-wider">Tech Stack:</span>
                {['C#', 'ASP.NET MVC', 'SQL Server', 'JavaScript / jQuery', 'HTML/CSS', 'Git / GitLab'].map(tech => (
                  <span key={tech} className="bg-slate-950 text-blue-300 border border-slate-800 px-3 py-1 rounded-lg text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* FPT IS EXPERIENCE */}
            <div className="relative bg-slate-900/80 rounded-2xl p-8 border border-slate-800 hover:border-cyan-500/50 shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 group overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-cyan-500 to-blue-600"></div>
              
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <h4 className="text-2xl font-extrabold text-white group-hover:text-cyan-400 transition-colors">{t.fptCompany}</h4>
                    <span className="text-xs text-slate-400 font-semibold">({t.fptSub})</span>
                  </div>
                  <div className="text-lg text-cyan-400 font-semibold mt-1">{t.fptRole}</div>
                  <div className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                    <MapPin size={13} /> {t.fptLoc}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-slate-400 font-medium bg-slate-950 px-4 py-2 rounded-xl border border-slate-800 text-xs sm:text-sm shrink-0">
                  <Calendar size={16} className="text-cyan-400" /> {t.fptDate}
                </div>
              </div>
              
              <p className="text-slate-300 font-medium mb-5 pb-5 border-b border-slate-800/80 leading-relaxed">
                {t.fptDesc}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800/80">
                  <div className="font-semibold text-cyan-300 text-sm mb-1.5 flex items-center gap-2">
                    <ShieldCheck size={16} className="text-cyan-400" /> Production Defect Resolution
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{t.fptB3}</p>
                </div>

                <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800/80">
                  <div className="font-semibold text-cyan-300 text-sm mb-1.5 flex items-center gap-2">
                    <Database size={16} className="text-cyan-400" /> Database & SP Optimization
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{t.fptB2}</p>
                </div>
              </div>

              <ul className="space-y-3.5 text-slate-300 text-sm sm:text-base">
                <li className="flex gap-3 items-start">
                  <span className="text-cyan-400 mt-1 shrink-0"><CheckCircle2 size={18} /></span>
                  <span>{t.fptB1}</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-cyan-400 mt-1 shrink-0"><CheckCircle2 size={18} /></span>
                  <span>{t.fptB4}</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-cyan-400 mt-1 shrink-0"><CheckCircle2 size={18} /></span>
                  <span>{t.fptB5}</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-cyan-400 mt-1 shrink-0"><CheckCircle2 size={18} /></span>
                  <span>{t.fptB6}</span>
                </li>
              </ul>
              
              <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-slate-400 mr-2 uppercase tracking-wider">Tech Stack:</span>
                {['C#', '.NET Framework', 'SQL Server', 'T-SQL', 'Crystal Reports', 'ReportBuilder', 'Jira', 'SVN'].map(tech => (
                  <span key={tech} className="bg-slate-950 text-cyan-300 border border-slate-800 px-3 py-1 rounded-lg text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* SCIENTIFIC RESEARCH SECTION */}
        <section id="research" className="scroll-mt-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-purple-500/10 text-purple-400 rounded-2xl border border-purple-500/20 shadow-sm">
              <Microscope size={26} />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">{t.rsTitle}</h3>
              <p className="text-slate-400 text-sm mt-1">{t.rsSub}</p>
            </div>
          </div>

          <div className="bg-slate-900/80 rounded-2xl p-8 border border-slate-800 hover:border-purple-500/50 shadow-xl transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-purple-500 to-indigo-600"></div>
            
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-6">
              <div>
                <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 text-purple-300 px-3 py-1 rounded-full text-xs font-bold mb-3">
                  <Award size={14} /> {t.rsAward}
                </div>
                <h4 className="text-2xl font-extrabold text-white group-hover:text-purple-300 transition-colors">{t.rsProject}</h4>
                <div className="text-purple-400 font-semibold mt-1">{t.rsRole}</div>
              </div>
              
              <div className="flex items-center gap-2 text-slate-400 font-medium bg-slate-950 px-4 py-2 rounded-xl border border-slate-800 text-xs sm:text-sm shrink-0">
                <Calendar size={16} className="text-purple-400" /> {t.rsDate}
              </div>
            </div>
            
            <a 
              href="https://github.com/ntrduc1310/NCKH_DCMD" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-purple-300 hover:text-white mb-6 transition-colors bg-purple-950/60 hover:bg-purple-900/60 border border-purple-800/60 px-4 py-2 rounded-xl"
            >
              <Github size={16} /> {t.rsRepo} <ExternalLink size={14} />
            </a>

            <div className="space-y-4">
              <p className="text-slate-300 font-medium leading-relaxed">
                <strong className="text-white">{t.rsObjTitle}</strong> {t.rsObjDesc}
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-950 p-5 rounded-xl border border-slate-800">
                  <div className="font-bold text-white mb-2 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-400"></span> {t.rsMetric}
                  </div>
                  <div className="text-2xl font-black text-purple-400 mb-1">{t.rsMetricVal}</div>
                  <p className="text-xs text-slate-400">Evaluated on the benchmark Avenue video anomaly dataset.</p>
                </div>
                
                <div className="bg-slate-950 p-5 rounded-xl border border-slate-800">
                  <div className="font-bold text-white mb-2 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-400"></span> {t.rsFocus}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{t.rsFocusDesc}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-slate-400 mr-2 uppercase tracking-wider">Research Stack:</span>
              {['Python', 'PyTorch', 'ST-GCN', 'Diffusion Models', 'OpenPose', 'MediaPipe'].map(tech => (
                <span key={tech} className="bg-slate-950 text-purple-300 border border-slate-800 px-3 py-1 rounded-lg text-xs font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURED PROJECTS SECTION */}
        <section id="projects" className="scroll-mt-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-2xl border border-emerald-500/20 shadow-sm">
              <Code size={26} />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">{t.pjTitle}</h3>
              <p className="text-slate-400 text-sm mt-1">{t.pjSub}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Project 1: Load Balancing API */}
            <div className="bg-slate-900/80 rounded-2xl overflow-hidden border border-slate-800 hover:border-blue-500/50 shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">
              <div className="h-44 bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950 p-6 relative flex flex-col justify-between border-b border-slate-800">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-blue-500/20 text-blue-400 rounded-xl border border-blue-500/30">
                    <Server size={24} />
                  </div>
                  <span className="bg-blue-500/20 text-blue-300 text-[11px] font-bold px-2.5 py-1 rounded-full border border-blue-500/30">
                    {t.pjCapRole}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-semibold">{t.pjCapDate}</span>
                  <h4 className="text-lg font-extrabold text-white group-hover:text-blue-400 transition-colors line-clamp-1">{t.pjCapTitle}</h4>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <p className="text-slate-300 text-sm leading-relaxed">
                  {t.pjCapDesc}
                </p>
                
                <div>
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">Tech Stack</div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {['Java 21', 'Spring Boot 3.3', 'PostgreSQL', 'React', 'TypeScript', 'JWT', 'BCrypt'].map(tech => (
                      <span key={tech} className="bg-slate-950 text-blue-300 border border-slate-800 px-2.5 py-0.5 rounded text-xs font-semibold">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a 
                    href="https://github.com/ntrduc1310/ProjectDoAnNganh" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-slate-950 hover:bg-blue-950/60 text-slate-200 hover:text-white font-semibold rounded-xl transition-all border border-slate-800 hover:border-blue-700/50 text-sm"
                  >
                    <Github size={16} /> {t.pjViewSrc} <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2: Photo Booth */}
            <div className="bg-slate-900/80 rounded-2xl overflow-hidden border border-slate-800 hover:border-emerald-500/50 shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">
              <div className="h-44 bg-gradient-to-br from-emerald-950 via-slate-900 to-slate-950 p-6 relative flex flex-col justify-between border-b border-slate-800">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-xl border border-emerald-500/30">
                    <Cpu size={24} />
                  </div>
                  <span className="bg-emerald-500/20 text-emerald-300 text-[11px] font-bold px-2.5 py-1 rounded-full border border-emerald-500/30">
                    {t.pjPbRole}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-semibold">{t.pjPbDate}</span>
                  <h4 className="text-lg font-extrabold text-white group-hover:text-emerald-400 transition-colors line-clamp-1">{t.pjPbTitle}</h4>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <p className="text-slate-300 text-sm leading-relaxed">
                  {t.pjPbDesc}
                </p>
                
                <div>
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">Tech Stack</div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {['Java (Android SDK)', 'Clean Arch', 'ML Kit', 'MediaPipe', 'Firebase', 'Gemini API'].map(tech => (
                      <span key={tech} className="bg-slate-950 text-emerald-300 border border-slate-800 px-2.5 py-0.5 rounded text-xs font-semibold">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a 
                    href="https://github.com/tbinh94/ExpressionPhotoBooth" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-slate-950 hover:bg-emerald-950/60 text-slate-200 hover:text-white font-semibold rounded-xl transition-all border border-slate-800 hover:border-emerald-700/50 text-sm"
                  >
                    <Github size={16} /> {t.pjViewSrc} <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3: POS System */}
            <div className="bg-slate-900/80 rounded-2xl overflow-hidden border border-slate-800 hover:border-indigo-500/50 shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">
              <div className="h-44 bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 p-6 relative flex flex-col justify-between border-b border-slate-800">
                <div className="flex justify-between items-start">
                  <div className="p-3 bg-indigo-500/20 text-indigo-400 rounded-xl border border-indigo-500/30">
                    <Monitor size={24} />
                  </div>
                  <span className="bg-indigo-500/20 text-indigo-300 text-[11px] font-bold px-2.5 py-1 rounded-full border border-indigo-500/30">
                    {t.pjPosRole}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-semibold">{t.pjPosDate}</span>
                  <h4 className="text-lg font-extrabold text-white group-hover:text-indigo-400 transition-colors line-clamp-1">{t.pjPosTitle}</h4>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <p className="text-slate-300 text-sm leading-relaxed">
                  {t.pjPosDesc}
                </p>
                
                <div>
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">Tech Stack</div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {['C# .NET', 'Entity Framework', 'SQL Server', 'WinForms', 'N-tier Architecture'].map(tech => (
                      <span key={tech} className="bg-slate-950 text-indigo-300 border border-slate-800 px-2.5 py-0.5 rounded text-xs font-semibold">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a 
                    href="https://github.com/ntrduc1310/Inventory_Manager_Pos_Mai" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-slate-950 hover:bg-indigo-950/60 text-slate-200 hover:text-white font-semibold rounded-xl transition-all border border-slate-800 hover:border-indigo-700/50 text-sm"
                  >
                    <Github size={16} /> {t.pjViewSrc} <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* TECHNICAL SKILLS SECTION */}
        <section id="skills" className="scroll-mt-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-amber-500/10 text-amber-400 rounded-2xl border border-amber-500/20 shadow-sm">
              <Terminal size={26} />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">{t.skTitle}</h3>
              <p className="text-slate-400 text-sm mt-1">{t.skSub}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Languages */}
            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
                <Code size={22} className="text-amber-400" />
              </div>
              <h4 className="font-bold text-white text-base mb-4">{t.skLang}</h4>
              <ul className="space-y-2.5 text-sm">
                <li className="text-slate-300 font-medium flex items-center justify-between">
                  <span>C# (.NET Core/Framework)</span>
                  <span className="text-[10px] bg-amber-500/10 text-amber-300 px-2 py-0.5 rounded border border-amber-500/20">Advanced</span>
                </li>
                <li className="text-slate-300 font-medium flex items-center justify-between">
                  <span>Java 21</span>
                  <span className="text-[10px] bg-amber-500/10 text-amber-300 px-2 py-0.5 rounded border border-amber-500/20">Advanced</span>
                </li>
                <li className="text-slate-300 font-medium">Python</li>
                <li className="text-slate-300 font-medium">SQL (PL/pgSQL, T-SQL)</li>
                <li className="text-slate-300 font-medium">TypeScript / JavaScript</li>
              </ul>
            </div>

            {/* Frameworks & UI */}
            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 hover:border-blue-500/40 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4">
                <Layout size={22} className="text-blue-400" />
              </div>
              <h4 className="font-bold text-white text-base mb-4">{t.skFrame}</h4>
              <ul className="space-y-2.5 text-sm">
                <li className="text-slate-300 font-medium">Spring Boot 3.3</li>
                <li className="text-slate-300 font-medium">ASP.NET MVC</li>
                <li className="text-slate-300 font-medium">Entity Framework</li>
                <li className="text-slate-300 font-medium">React</li>
                <li className="text-slate-300 font-medium">Tailwind CSS / HTML / CSS</li>
                <li className="text-slate-300 font-medium">jQuery</li>
              </ul>
            </div>

            {/* Databases & Architecture */}
            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                <Database size={22} className="text-emerald-400" />
              </div>
              <h4 className="font-bold text-white text-base mb-4">{t.skDb}</h4>
              <ul className="space-y-2.5 text-sm">
                <li className="text-slate-300 font-medium">SQL Server (Stored Procedures)</li>
                <li className="text-slate-300 font-medium">PostgreSQL (JSONB)</li>
                <li className="text-slate-300 font-medium">MySQL</li>
                <li className="text-slate-300 font-medium">Clean Architecture & AOP</li>
                <li className="text-slate-300 font-medium">JWT & RBAC Authorization</li>
              </ul>
            </div>

            {/* Tools, Cloud & AI */}
            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 hover:border-purple-500/40 transition-colors">
              <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-4">
                <Sparkles size={22} className="text-purple-400" />
              </div>
              <h4 className="font-bold text-white text-base mb-4">{t.skTools}</h4>
              <ul className="space-y-2.5 text-sm">
                <li className="text-slate-300 font-medium">Diffusion Models & PyTorch</li>
                <li className="text-slate-300 font-medium">MediaPipe & ML Kit</li>
                <li className="text-slate-300 font-medium">Firebase Cloud Functions</li>
                <li className="text-slate-300 font-medium">Flyway & Swagger UI</li>
                <li className="text-slate-300 font-medium">Git / GitLab / SVN / Agile</li>
              </ul>
            </div>

          </div>

          {/* Language Banner */}
          <div className="mt-6 bg-slate-900/50 border border-slate-800 p-4 rounded-2xl flex items-center gap-3">
            <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg">
              <Globe size={18} />
            </div>
            <div>
              <span className="text-white font-bold text-sm">{t.skEng}: </span>
              <span className="text-slate-300 text-sm">{t.skEngDesc}</span>
            </div>
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="scroll-mt-24">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-rose-500/10 text-rose-400 rounded-2xl border border-rose-500/20 shadow-sm">
              <GraduationCap size={26} />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">{t.edTitle}</h3>
              <p className="text-slate-400 text-sm mt-1">{t.edSub}</p>
            </div>
          </div>

          <div className="bg-slate-900/80 rounded-2xl p-8 border border-slate-800 flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="w-20 h-20 bg-rose-500/10 rounded-2xl flex items-center justify-center shrink-0 border border-rose-500/20">
              <GraduationCap size={44} className="text-rose-400" />
            </div>

            <div className="flex-1 text-center md:text-left space-y-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div>
                  <h4 className="text-2xl font-extrabold text-white">{t.edUni}</h4>
                  <div className="text-lg text-rose-400 font-semibold mt-1">{t.edDegree}</div>
                </div>
                
                <div className="mt-3 md:mt-0 inline-flex items-center gap-2 bg-slate-950 text-slate-300 px-4 py-2 rounded-xl font-medium border border-slate-800 text-sm">
                  <Calendar size={15} className="text-rose-400" /> {t.edClass}
                </div>
              </div>
              
              <div className="space-y-3 pt-2 text-sm text-slate-300">
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <strong className="text-white block mb-1">{t.edCourse}</strong>
                  <span>{t.edCourseDesc}</span>
                </div>

                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <strong className="text-white block mb-2">{t.edCert}</strong>
                  <ul className="space-y-1.5 text-slate-300">
                    <li className="flex items-center gap-2">
                      <Star size={14} className="text-amber-400 shrink-0" />
                      <span>{t.edCertDesc1}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-rose-400 shrink-0" />
                      <span>{t.edCertDesc2}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-rose-400 shrink-0" />
                      <span>{t.edCertDesc3}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-16 text-center border-t border-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-extrabold text-white mb-6">{t.ftLet}</h2>
          
          <div className="flex justify-center gap-4 mb-8">
            <a 
              href="mailto:ntrduc1310@gmail.com" 
              className="p-3.5 bg-slate-900 border border-slate-800 rounded-xl hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all duration-300"
              title="Send Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://github.com/ntrduc1310" 
              target="_blank" 
              rel="noreferrer" 
              className="p-3.5 bg-slate-900 border border-slate-800 rounded-xl hover:bg-slate-800 hover:text-white hover:border-slate-700 transition-all duration-300"
              title="GitHub Profile"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/ntrduc1310" 
              target="_blank" 
              rel="noreferrer" 
              className="p-3.5 bg-slate-900 border border-slate-800 rounded-xl hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all duration-300"
              title="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="tel:0347078222" 
              className="p-3.5 bg-slate-900 border border-slate-800 rounded-xl hover:bg-emerald-600 hover:text-white hover:border-emerald-500 transition-all duration-300"
              title="Call Phone"
            >
              <Phone size={20} />
            </a>
          </div>

          <p className="text-xs text-slate-500">© {new Date().getFullYear()} Nguyen Trong Duc. {t.ftRight}</p>
        </div>
      </footer>

    </div>
  );
}