import { useState, useEffect, useRef } from 'react';
import { Terminal, Wifi, Activity, Cpu, Shield, AlertCircle, CheckCircle } from 'lucide-react';

interface ContentLine {
  text: string;
  type: 'header' | 'subheader' | 'normal' | 'highlight' | 'command' | 'separator' | 'link';
  delay?: number;
}

interface LogEntry {
  id: number;
  text: string;
  type: 'success' | 'info' | 'warning' | 'error';
}

interface ProcessItem {
  id: number;
  name: string;
  status: string;
  cpu: number;
  mem: number;
}

function App() {
  const [displayedLines, setDisplayedLines] = useState<ContentLine[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [processes, setProcesses] = useState<ProcessItem[]>([]);
  const [metrics, setMetrics] = useState({
    cpu: 45,
    memory: 68,
    network: 1.2,
    requests: 1247,
  });
  const [autoScroll, setAutoScroll] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const logIdRef = useRef(0);

  const allContent: ContentLine[] = [
    { text: '╔════════════════════════════════════════════════════════════════════════════════╗', type: 'separator', delay: 100 },
    { text: '║                      PORTFOLIO SYSTEM INITIALIZATION                           ║', type: 'separator', delay: 100 },
    { text: '╚════════════════════════════════════════════════════════════════════════════════╝', type: 'separator', delay: 100 },
    { text: '', type: 'normal', delay: 200 },
    { text: '[OK] Loading profile: Aayush Gid', type: 'command', delay: 300 },
    { text: '[OK] Mounting /personal_info', type: 'command', delay: 300 },
    { text: '[OK] Mounting /skills', type: 'command', delay: 300 },
    { text: '[OK] Mounting /experience', type: 'command', delay: 300 },
    { text: '[OK] Mounting /projects', type: 'command', delay: 300 },
    { text: '[OK] System ready', type: 'command', delay: 300 },
    { text: '', type: 'normal', delay: 500 },
    { text: '═══════════════════════════════════════════════════════════════════════════════', type: 'separator', delay: 100 },
    { text: '                              PERSONAL INFORMATION', type: 'header', delay: 100 },
    { text: '═══════════════════════════════════════════════════════════════════════════════', type: 'separator', delay: 100 },
    { text: '', type: 'normal', delay: 100 },
    { text: '👤 NAME:          Aayush Gid', type: 'highlight', delay: 200 },
    { text: '🎓 EDUCATION:     B.Tech in Electronics and Communication Engineering', type: 'normal', delay: 200 },
    { text: '                  Indore Institute of Science and Technology (2022 - Present)', type: 'normal', delay: 200 },
    { text: '📍 LOCATION:      Indore, India', type: 'normal', delay: 200 },
    { text: '💼 ROLE:          Full Stack Developer | AI/ML Engineer | MLOps Specialist', type: 'highlight', delay: 200 },
    { text: '', type: 'normal', delay: 300 },
    { text: '📧 EMAIL:         aayushgid598@gmail.com', type: 'link', delay: 200 },
    { text: '📱 PHONE:         +91 6260712882', type: 'link', delay: 200 },
    { text: '🔗 GITHUB:        github.com/aayush598', type: 'link', delay: 200 },
    { text: '🔗 LINKEDIN:      linkedin.com/in/aayush-gid-3767a2221', type: 'link', delay: 200 },
    { text: '', type: 'normal', delay: 500 },

    { text: '═══════════════════════════════════════════════════════════════════════════════', type: 'separator', delay: 100 },
    { text: '                                TECHNICAL SKILLS', type: 'header', delay: 100 },
    { text: '═══════════════════════════════════════════════════════════════════════════════', type: 'separator', delay: 100 },
    { text: '', type: 'normal', delay: 100 },
    { text: '▶ FRONTEND:', type: 'subheader', delay: 150 },
    { text: '  React.js • TypeScript • JavaScript (ES6+) • HTML5 • CSS3 • TailwindCSS • Vite', type: 'normal', delay: 150 },
    { text: '', type: 'normal', delay: 100 },
    { text: '▶ BACKEND:', type: 'subheader', delay: 150 },
    { text: '  Node.js • Express.js • FastAPI (Python) • RESTful APIs • JWT Authentication', type: 'normal', delay: 150 },
    { text: '', type: 'normal', delay: 100 },
    { text: '▶ DATABASES:', type: 'subheader', delay: 150 },
    { text: '  MongoDB • PostgreSQL • SQLite', type: 'normal', delay: 150 },
    { text: '', type: 'normal', delay: 100 },
    { text: '▶ AI/ML:', type: 'subheader', delay: 150 },
    { text: '  TensorFlow • PyTorch • LangChain • Hugging Face • NLP • Computer Vision', type: 'normal', delay: 150 },
    { text: '', type: 'normal', delay: 100 },
    { text: '▶ DEVOPS & TOOLS:', type: 'subheader', delay: 150 },
    { text: '  Docker • Redis • Celery • Git/GitHub • CI/CD • Linux', type: 'normal', delay: 150 },
    { text: '', type: 'normal', delay: 100 },
    { text: '▶ CLOUD SERVICES:', type: 'subheader', delay: 150 },
    { text: '  Cloudinary • Vercel • Render', type: 'normal', delay: 150 },
    { text: '', type: 'normal', delay: 500 },

    { text: '═══════════════════════════════════════════════════════════════════════════════', type: 'separator', delay: 100 },
    { text: '                              WORK EXPERIENCE', type: 'header', delay: 100 },
    { text: '═══════════════════════════════════════════════════════════════════════════════', type: 'separator', delay: 100 },
    { text: '', type: 'normal', delay: 100 },
    { text: '┌─────────────────────────────────────────────────────────────────────────────┐', type: 'separator', delay: 100 },
    { text: '│ [1] MLOps Intern @ Krip AI                          [Jun 2025 - Aug 2025]    │', type: 'highlight', delay: 150 },
    { text: '└─────────────────────────────────────────────────────────────────────────────┘', type: 'separator', delay: 100 },
    { text: '    • Built and deployed CI/CD pipelines and backend infrastructure for AI systems', type: 'normal', delay: 150 },
    { text: '    • Developed automated product management pipeline using Python, MCP server,', type: 'normal', delay: 150 },
    { text: '      LangChain, and LLMs for repository analysis and project estimation', type: 'normal', delay: 150 },
    { text: '    • Integrated multiple AI agents into unified MCP server with Redis caching', type: 'normal', delay: 150 },
    { text: '    • Set up monitoring/logging for production scalability and performance', type: 'normal', delay: 150 },
    { text: '', type: 'normal', delay: 200 },
    { text: '┌─────────────────────────────────────────────────────────────────────────────┐', type: 'separator', delay: 100 },
    { text: '│ [2] AI Agent Developer Intern @ Clone Futura Education  [Feb - Mar 2025]   │', type: 'highlight', delay: 150 },
    { text: '└─────────────────────────────────────────────────────────────────────────────┘', type: 'separator', delay: 100 },
    { text: '    • Built AI-powered Google Drive Agent using Python, Streamlit, Gemini AI', type: 'normal', delay: 150 },
    { text: '    • Automated file categorization, duplicate removal, and permission handling', type: 'normal', delay: 150 },
    { text: '    • Developed modules for sensitive data detection and log analysis', type: 'normal', delay: 150 },
    { text: '    • Enhanced data security with SQLite-backed metadata storage', type: 'normal', delay: 150 },
    { text: '', type: 'normal', delay: 200 },
    { text: '┌─────────────────────────────────────────────────────────────────────────────┐', type: 'separator', delay: 100 },
    { text: '│ [3] Data Science Intern @ NullClass                     [Jan - Feb 2025]   │', type: 'highlight', delay: 150 },
    { text: '└─────────────────────────────────────────────────────────────────────────────┘', type: 'separator', delay: 100 },
    { text: '    • Developed modular AI chatbot with sentiment analysis using VADER and BERT', type: 'normal', delay: 150 },
    { text: '    • Built Streamlit-based UI and Python backend for real-time interaction', type: 'normal', delay: 150 },
    { text: '    • Contributed to analytics dashboard design and multi-feature integration', type: 'normal', delay: 150 },
    { text: '', type: 'normal', delay: 500 },

    { text: '═══════════════════════════════════════════════════════════════════════════════', type: 'separator', delay: 100 },
    { text: '                              PROJECT PORTFOLIO', type: 'header', delay: 100 },
    { text: '═══════════════════════════════════════════════════════════════════════════════', type: 'separator', delay: 100 },
    { text: '', type: 'normal', delay: 100 },
    { text: '█ [1] Course Management Platform - Full Stack', type: 'highlight', delay: 150 },
    { text: '      Tech: MERN Stack, Cloudinary, JWT, AI APIs', type: 'subheader', delay: 150 },
    { text: '      Built scalable system with video uploads, user registration, progress tracking,', type: 'normal', delay: 150 },
    { text: '      and role-based access. Integrated AI for quiz generation, certificates, chatbot,', type: 'normal', delay: 150 },
    { text: '      leaderboards, and discussion forums.', type: 'normal', delay: 150 },
    { text: '', type: 'normal', delay: 200 },
    { text: '█ [2] AI LaTeX Editor - Full Stack Web App', type: 'highlight', delay: 150 },
    { text: '      Tech: React (TypeScript), FastAPI, PostgreSQL, Redis, Docker', type: 'subheader', delay: 150 },
    { text: '      Document collaboration platform with real-time LaTeX editing, PDF preview,', type: 'normal', delay: 150 },
    { text: '      and AI-powered assistance. Scalable backend with modular APIs.', type: 'normal', delay: 150 },
    { text: '', type: 'normal', delay: 200 },
    { text: '█ [3] Interactive Blogging Platform', type: 'highlight', delay: 150 },
    { text: '      Tech: React, TypeScript, TailwindCSS, Vite', type: 'subheader', delay: 150 },
    { text: '      Scalable platform with search, tags, author info, and interactive TOC.', type: 'normal', delay: 150 },
    { text: '      Modular components for code blocks, demos, and rich content.', type: 'normal', delay: 150 },
    { text: '', type: 'normal', delay: 200 },
    { text: '█ [4] Marketing AI Agent Integration', type: 'highlight', delay: 150 },
    { text: '      Tech: Python, Flask, Streamlit, Gemini API, Hugging Face', type: 'subheader', delay: 150 },
    { text: '      AI-based Google Drive manager with categorization and sensitive data detection.', type: 'normal', delay: 150 },
    { text: '      Integrated multiple AI APIs with Streamlit dashboard.', type: 'normal', delay: 150 },
    { text: '', type: 'normal', delay: 200 },
    { text: '█ [5] OpenRTL.ai - RTL Project Generator', type: 'highlight', delay: 150 },
    { text: '      Tech: Python, Streamlit, Gemini API, SQLite, Yosys, Verilator', type: 'subheader', delay: 150 },
    { text: '      Automated Verilog code generation, linting, synthesis, and SDC creation.', type: 'normal', delay: 150 },
    { text: '      Built with RTL metrics and schematic visualization.', type: 'normal', delay: 150 },
    { text: '', type: 'normal', delay: 200 },
    { text: '█ [6] Brain Tumor Classifier - Deep Learning', type: 'highlight', delay: 150 },
    { text: '      Tech: TensorFlow, Keras, MobileNetV2, Streamlit', type: 'subheader', delay: 150 },
    { text: '      CNN-based MRI classifier with 96%+ validation accuracy.', type: 'normal', delay: 150 },
    { text: '      GPU-accelerated training on 10K+ preprocessed MRI images.', type: 'normal', delay: 150 },
    { text: '', type: 'normal', delay: 500 },

    { text: '═══════════════════════════════════════════════════════════════════════════════', type: 'separator', delay: 100 },
    { text: '                        ACHIEVEMENTS & PUBLICATIONS', type: 'header', delay: 100 },
    { text: '═══════════════════════════════════════════════════════════════════════════════', type: 'separator', delay: 100 },
    { text: '', type: 'normal', delay: 100 },
    { text: '🏆 FINALIST - Smart India Hackathon (SIH) 2024', type: 'highlight', delay: 150 },
    { text: '   Security-focused encryption system using advanced algorithms', type: 'normal', delay: 150 },
    { text: '   Competed among 500 teams nationwide', type: 'normal', delay: 150 },
    { text: '', type: 'normal', delay: 200 },
    { text: '🏆 TOP 5 - Techfest CodeCode Zonal, IIT Bombay 2023', type: 'highlight', delay: 150 },
    { text: '   Advanced data structures and algorithms expertise', type: 'normal', delay: 150 },
    { text: '   Ranked among 500+ participants in competitive programming', type: 'normal', delay: 150 },
    { text: '', type: 'normal', delay: 200 },
    { text: '📄 IEEE PUBLICATION - Real-Time Face Mask Detection 2024', type: 'highlight', delay: 150 },
    { text: '   IEEE ACROSET 2024 - DOI: 10.1109/ACROSET62108.2024.10743262', type: 'normal', delay: 150 },
    { text: '   Optimized distributed ML model with advanced preprocessing algorithms', type: 'normal', delay: 150 },
    { text: '   for enterprise healthcare applications', type: 'normal', delay: 150 },
    { text: '', type: 'normal', delay: 200 },
    { text: '🏆 FINALIST - Devbhoomi Cyber Hackathon 2022', type: 'highlight', delay: 150 },
    { text: '   Crime monitoring system with map interface', type: 'normal', delay: 150 },
    { text: '', type: 'normal', delay: 300 },
    { text: '📦 OPEN SOURCE CONTRIBUTIONS:', type: 'subheader', delay: 150 },
    { text: '   • Cocotb2-Migrator (PyPI) - HDL testbench migration tool', type: 'normal', delay: 150 },
    { text: '   • DebugXpert (VS Code Marketplace) - AI-powered debugging extension', type: 'normal', delay: 150 },
    { text: '', type: 'normal', delay: 500 },

    { text: '═══════════════════════════════════════════════════════════════════════════════', type: 'separator', delay: 100 },
    { text: '                            CONTACT INFORMATION', type: 'header', delay: 100 },
    { text: '═══════════════════════════════════════════════════════════════════════════════', type: 'separator', delay: 100 },
    { text: '', type: 'normal', delay: 100 },
    { text: '📧 Email:     aayushgid598@gmail.com', type: 'link', delay: 200 },
    { text: '📱 Phone:     +91 6260712882', type: 'link', delay: 200 },
    { text: '💻 GitHub:    github.com/aayush598', type: 'link', delay: 200 },
    { text: '🔗 LinkedIn:  linkedin.com/in/aayush-gid-3767a2221', type: 'link', delay: 200 },
    { text: '📍 Location:  Indore, India', type: 'normal', delay: 200 },
    { text: '', type: 'normal', delay: 500 },
    { text: '═══════════════════════════════════════════════════════════════════════════════', type: 'separator', delay: 100 },
    { text: '                         END OF PORTFOLIO TRANSMISSION', type: 'header', delay: 100 },
    { text: '═══════════════════════════════════════════════════════════════════════════════', type: 'separator', delay: 100 },
    { text: '', type: 'normal', delay: 100 },
    { text: '[SYSTEM] Portfolio display complete. Thank you for viewing.', type: 'command', delay: 300 },
  ];

  const logMessages = [
    { text: 'Authentication verified', type: 'success' },
    { text: 'Neural network initialized', type: 'info' },
    { text: 'Quantum encryption active', type: 'success' },
    { text: 'Data stream optimized', type: 'info' },
    { text: 'System breach detected - neutralized', type: 'warning' },
    { text: 'Firewall status: ACTIVE', type: 'success' },
    { text: 'Analyzing network packets', type: 'info' },
    { text: 'AI models loaded successfully', type: 'success' },
    { text: 'Memory defragmentation complete', type: 'info' },
    { text: 'Security scan in progress', type: 'warning' },
  ];

  const processNames = [
    'neural_net.exe',
    'quantum_sync.py',
    'data_processor',
    'ml_pipeline.js',
    'security_daemon',
    'cache_manager',
    'api_gateway',
    'db_optimizer'
  ];

  // Display portfolio content
  useEffect(() => {
    if (currentIndex < allContent.length) {
      const timer = setTimeout(() => {
        setDisplayedLines(prev => [...prev, allContent[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      }, allContent[currentIndex].delay || 100);

      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  // Scroll to bottom only if auto-scroll is enabled
  useEffect(() => {
    if (containerRef.current && autoScroll) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [displayedLines, autoScroll]);

  // Detect manual scroll
  const handleScroll = () => {
    if (!containerRef.current) return;
    
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
    const isAtBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 50;
    
    // Enable auto-scroll only if user is at bottom
    setAutoScroll(isAtBottom);
  };

  // Generate logs
  useEffect(() => {
    const interval = setInterval(() => {
      const randomLog = logMessages[Math.floor(Math.random() * logMessages.length)];
      setLogs(prev => {
        const newLog = { id: logIdRef.current++, ...randomLog } as LogEntry;
        const updated = [newLog, ...prev].slice(0, 8);
        return updated;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Update processes
  useEffect(() => {
    const updateProcesses = () => {
      const count = 5;
      const newProcesses = Array.from({ length: count }, (_, i) => ({
        id: i,
        name: processNames[i % processNames.length],
        status: Math.random() > 0.1 ? 'RUNNING' : 'IDLE',
        cpu: Math.floor(Math.random() * 100),
        mem: Math.floor(Math.random() * 100),
      }));
      setProcesses(newProcesses);
    };

    updateProcesses();
    const interval = setInterval(updateProcesses, 3000);
    return () => clearInterval(interval);
  }, []);

  // Update metrics
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        cpu: Math.min(100, Math.max(0, prev.cpu + (Math.random() - 0.5) * 10)),
        memory: Math.min(100, Math.max(0, prev.memory + (Math.random() - 0.5) * 5)),
        network: Math.max(0, prev.network + (Math.random() - 0.5) * 0.3),
        requests: prev.requests + Math.floor(Math.random() * 50),
      }));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const getLineStyle = (type: string) => {
    switch (type) {
      case 'header':
        return 'text-green-300 font-bold text-xl tracking-wide';
      case 'subheader':
        return 'text-yellow-400 font-semibold text-sm';
      case 'highlight':
        return 'text-green-400 font-semibold';
      case 'command':
        return 'text-gray-500 text-sm';
      case 'separator':
        return 'text-green-600';
      case 'link':
        return 'text-cyan-400 hover:text-cyan-300 cursor-pointer';
      default:
        return 'text-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono relative overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>
      <div className="fixed inset-0 opacity-10" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #22c55e 2px, #22c55e 4px)',
        animation: 'scan 8s linear infinite'
      }}></div>

      <div className="relative z-10 flex h-screen">
        {/* Main Terminal - Left Side */}
        <div className="flex-1 flex flex-col p-4 overflow-hidden">
          {/* Header */}
          <div className="bg-black/80 border border-green-500/30 p-3 mb-4 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <Terminal className="w-6 h-6 text-green-400 animate-pulse" />
                <div>
                  <h1 className="text-xl font-bold text-green-300 tracking-wider">AAYUSH GID</h1>
                  <p className="text-[10px] text-green-500/80 tracking-widest">PORTFOLIO v0.0.1</p>
                </div>
              </div>
              <div className="flex gap-2">
                <StatusDot color="green" />
                <StatusDot color="yellow" />
                <StatusDot color="red" />
              </div>
            </div>
            <div className="flex gap-4 text-[10px] text-green-500/60">
              <span>CPU: {metrics.cpu.toFixed(1)}%</span>
              <span>MEM: {metrics.memory.toFixed(1)}%</span>
              <span>NET: {metrics.network.toFixed(1)} GB/s</span>
              <span className="ml-auto text-cyan-400">REQ: {metrics.requests}</span>
            </div>
          </div>

          {/* Main Content */}
          <div 
            ref={containerRef} 
            className="flex-1 bg-black/60 border border-green-500/30 p-4 overflow-y-auto backdrop-blur-sm"
            onScroll={handleScroll}
          >
            <div className="space-y-0.5">
              {displayedLines.map((line, index) => (
                <div key={index} className={`${getLineStyle(line.type)} leading-relaxed whitespace-pre-wrap`}>
                  {line.text}
                </div>
              ))}
              {currentIndex < allContent.length && (
                <span className="inline-block w-2 h-4 bg-green-400 animate-pulse ml-1">█</span>
              )}
            </div>
          </div>
        </div>

        {/* Right Sidebar Panels - Hidden on mobile */}
        <div className="hidden lg:block w-80 p-4 space-y-4 overflow-y-auto">
          {/* System Logs */}
          <div className="bg-black/80 border border-cyan-500/30 backdrop-blur-sm">
            <div className="bg-cyan-900/30 px-3 py-2 border-b border-cyan-500/30 flex items-center gap-2">
              <Activity className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-bold text-cyan-300">SYSTEM LOGS</span>
            </div>
            <div className="p-2 h-48 overflow-y-auto space-y-1">
              {logs.map(log => (
                <div key={log.id} className="text-[10px] flex items-start gap-2 animate-fadeIn">
                  {log.type === 'success' && <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0 mt-0.5" />}
                  {log.type === 'warning' && <AlertCircle className="w-3 h-3 text-yellow-400 flex-shrink-0 mt-0.5" />}
                  {log.type === 'info' && <div className="w-3 h-3 flex-shrink-0 mt-0.5 flex items-center justify-center"><div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div></div>}
                  <span className={`
                    ${log.type === 'success' ? 'text-green-400' : ''}
                    ${log.type === 'warning' ? 'text-yellow-400' : ''}
                    ${log.type === 'info' ? 'text-cyan-400' : ''}
                  `}>{log.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process Monitor */}
          <div className="bg-black/80 border border-yellow-500/30 backdrop-blur-sm">
            <div className="bg-yellow-900/30 px-3 py-2 border-b border-yellow-500/30 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-yellow-400" />
              <span className="text-xs font-bold text-yellow-300">PROCESSES</span>
            </div>
            <div className="p-2 space-y-1">
              {processes.map(proc => (
                <div key={proc.id} className="text-[9px] border border-yellow-500/20 p-1.5 bg-black/40">
                  <div className="flex justify-between mb-1">
                    <span className="text-yellow-400 font-bold truncate">{proc.name}</span>
                    <span className={`${proc.status === 'RUNNING' ? 'text-green-400' : 'text-gray-500'}`}>
                      {proc.status}
                    </span>
                  </div>
                  <div className="flex gap-2 text-gray-400">
                    <span>CPU:{proc.cpu}%</span>
                    <span>MEM:{proc.mem}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Network Activity */}
          <div className="bg-black/80 border border-purple-500/30 backdrop-blur-sm">
            <div className="bg-purple-900/30 px-3 py-2 border-b border-purple-500/30 flex items-center gap-2">
              <Wifi className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-bold text-purple-300">NETWORK</span>
            </div>
            <div className="p-3">
              <div className="space-y-2">
                <MetricBar label="UPLOAD" value={Math.random() * 100} color="purple" />
                <MetricBar label="DOWNLOAD" value={Math.random() * 100} color="purple" />
                <MetricBar label="LATENCY" value={Math.random() * 100} color="purple" />
              </div>
            </div>
          </div>

          {/* Security Status */}
          <div className="bg-black/80 border border-red-500/30 backdrop-blur-sm">
            <div className="bg-red-900/30 px-3 py-2 border-b border-red-500/30 flex items-center gap-2">
              <Shield className="w-4 h-4 text-red-400" />
              <span className="text-xs font-bold text-red-300">SECURITY</span>
            </div>
            <div className="p-3 space-y-2">
              <SecurityItem label="FIREWALL" status="ACTIVE" />
              <SecurityItem label="ENCRYPTION" status="256-BIT" />
              <SecurityItem label="AUTH" status="VERIFIED" />
              <SecurityItem label="INTRUSION" status="BLOCKED" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scan {
          from { transform: translateY(0); }
          to { transform: translateY(100%); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

function StatusDot({ color }: { color: string }) {
  const colorClass = color === 'green' ? 'bg-green-400' : color === 'yellow' ? 'bg-yellow-400' : 'bg-red-400';
  return <div className={`w-3 h-3 rounded-full ${colorClass} shadow-lg`}></div>;
}

function MetricBar({ label, value, color }: { label: string; value: number; color: string }) {
  const colorClasses = {
    purple: 'bg-purple-500',
    cyan: 'bg-cyan-500',
    green: 'bg-green-500'
  };
  
  return (
    <div>
      <div className="flex justify-between text-[9px] mb-1">
        <span className="text-gray-400">{label}</span>
        <span className="text-purple-400">{value.toFixed(0)}%</span>
      </div>
      <div className="h-1.5 bg-gray-800 rounded overflow-hidden">
        <div 
          className={`h-full ${colorClasses[color as keyof typeof colorClasses]} transition-all duration-500`}
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
}

function SecurityItem({ label, status }: { label: string; status: string }) {
  return (
    <div className="flex justify-between items-center text-[10px] border-b border-red-500/10 pb-1">
      <span className="text-gray-400">{label}</span>
      <span className="text-green-400 font-bold">{status}</span>
    </div>
  );
}

export default App;