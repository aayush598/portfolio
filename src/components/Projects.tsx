import { useState } from 'react';
import { Github, ExternalLink, ChevronDown, ChevronUp,  Cpu, Brain, Wrench, Globe } from 'lucide-react';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    { id: 'All', name: 'All Projects', icon: <Globe size={20} />, color: 'gray' },
    { id: 'AI/ML', name: 'AI & Machine Learning', icon: <Brain size={20} />, color: 'blue' },
    { id: 'Hardware', name: 'Hardware & FPGA', icon: <Cpu size={20} />, color: 'purple' },
    { id: 'Tools', name: 'Developer Tools', icon: <Wrench size={20} />, color: 'teal' },
    // { id: 'Web', name: 'Web Applications', icon: <Code size={20} />, color: 'orange' },
    // { id: 'Research', name: 'Research & Publications', icon: <BookOpen size={20} />, color: 'green' }
  ];

  const projects = [
    {
      title: 'DebugXpert – AI-Powered VS Code Extension',
      period: 'March 2025 – Present',
      category: 'AI/ML',
      tech: ['TypeScript', 'Node.js', 'VS Code API', 'Google Gemini API'],
      description: 'AI-powered VS Code extension for automatic code fixing, quality evaluation, security vulnerability detection, and intelligent documentation generation.',
      details: [
        'Automatically fixes code errors using Google Gemini AI',
        'Evaluates code quality and suggests improvements',
        'Detects security vulnerabilities in real-time',
        'Generates inline documentation for functions and classes',
        'Provides intelligent autocompletions and code enhancements',
        'Seamless integration with VS Code interface and Command Palette'
      ],
      github: 'https://github.com/aayush598/debugxpert',
      status: 'Published on VS Code Marketplace'
    },
    {
      title: 'RISC-V RV32I Simulator',
      period: 'July 2025 – Present',
      category: 'Hardware',
      tech: ['C++', 'CLI', 'Make', 'CMake'],
      description: 'Command-line RISC-V simulator supporting RV32I base integer instruction set with memory-mapped I/O and interactive execution.',
      details: [
        'Binary loader for .bin programs with instruction parsing',
        'Complete fetch-decode-execute loop implementation',
        'Memory-mapped I/O simulation for hardware interaction',
        'CLI-based interactive interface for controlled execution',
        'Register and memory state visualization',
        'Comprehensive test cases for instruction validation'
      ],
      github: 'https://github.com/aayush598/riscv-rv32i-sim',
      status: 'Foundational tool for RISC-V learning'
    },
    {
      title: 'Ubuntu System Monitor',
      period: 'May 2025 – Present',
      category: 'Tools',
      tech: ['C', 'ncurses', 'Linux /proc/', 'Makefile'],
      description: 'Real-time terminal-based system monitor inspired by htop, built with pure C and ncurses for lightweight performance monitoring.',
      details: [
        'Live tracking of CPU, memory, disk usage, and network throughput',
        'Interactive process manager with sorting and filtering',
        'Color-coded metrics with real-time updates',
        'Keyboard navigation and control system',
        'Modular architecture with reusable components',
        'Released as .deb package for Debian-based systems'
      ],
      github: 'https://github.com/aayush598/ubuntu-system-monitor',
      demo: 'https://aayush598.github.io/ubuntu-system-monitor',
      status: 'Version 1.0.0 Released'
    },
    {
      title: 'Cocotb2-Migrator – HDL Test Migration Tool',
      period: 'July 2025 – Present',
      category: 'Tools',
      tech: ['Python', 'LibCST', 'Rich', 'Click', 'PyPI'],
      description: 'Automated tool for migrating legacy cocotb 1.x testbenches to modern cocotb 2.x standard with comprehensive transformations.',
      details: [
        'Converts @cocotb.coroutine to async/await syntax',
        'Replaces cocotb.fork() with cocotb.start_soon()',
        'Modernizes signal handle access and binary value usage',
        'Updates Clock API and environment variable handling',
        'Generates rich migration reports with syntax highlighting',
        'Published as open-source Python package on PyPI'
      ],
      github: 'https://github.com/aayush598/cocotb2-migrator',
      pypi: 'https://pypi.org/project/cocotb2-migrator',
      status: 'Published on PyPI'
    },
    {
      title: 'OpenRTL.ai – RTL Project Generator',
      period: 'May 2025 – Present',
      category: 'AI/ML',
      tech: ['Python', 'Streamlit', 'Gemini API', 'Yosys', 'Verilator'],
      description: 'AI-powered platform automating complete RTL design flow from project description to synthesis-ready code.',
      details: [
        'Automatically generates clean RTL folder structure',
        'AI-powered Verilog code generation using Gemini API',
        'Integrated linting with Verilator and error fixing',
        'RTL synthesis with Yosys and netlist visualization',
        'Comprehensive metrics analysis and reporting',
        'SDC file generation for timing constraints'
      ],
      github: 'https://github.com/aayush598/OpenRTL.ai',
      status: 'Production-ready platform'
    },
    {
      title: 'Marketing AI Agent Integration',
      period: 'February 2025 – April 2025',
      category: 'AI/ML',
      tech: ['Python', 'Streamlit', 'Flask', 'GPT', 'Gemini API'],
      description: 'Full-featured AI marketing automation tool for content generation, campaign management, and performance analytics.',
      details: [
        'SEO-optimized blog writing and ad copy generation',
        'Platform-specific social media content creation',
        'AI-powered image generation and marketing visuals',
        'Campaign performance monitoring with CSV analytics',
        'Content deployment via email, YouTube, and Twitter',
        'Secure environment with comprehensive API integration'
      ],
      github: 'https://github.com/aayush598/Marketing-Ai-Agent-Integration',
      status: 'Deployed on Render'
    },
    {
      title: 'Simple x86 Bootloader with BIOS Sector Read',
      period: 'June 2025 – July 2025',
      category: 'Hardware',
      tech: ['x86 Assembly', 'NASM', 'QEMU', 'BIOS Interrupts'],
      description: '16-bit bootloader in x86 Assembly to read disk sectors using BIOS interrupt INT 13h with modular architecture.',
      details: [
        'Custom message display using BIOS services',
        'Disk read using BIOS-level instructions for sector access',
        'Demonstrates raw hardware-level interaction and OS boot process',
        'Modular code structure with reusable components',
        'Successfully emulated on QEMU',
        'Build and run scripts for QEMU emulation'
      ],
      github: 'https://github.com/aayush598/basic-bootloader-assembly',
      status: 'Successfully emulated on QEMU'
    },
    {
      title: 'FIR Filter Simulation Using Verilog and Python',
      period: 'June 2025 – July 2025',
      category: 'Hardware',
      tech: ['Verilog HDL', 'Python', 'NumPy', 'Matplotlib', 'Icarus Verilog', 'GTKWave'],
      description: '8-tap low-pass Finite Impulse Response (FIR) filter using Verilog HDL and Python with Hamming window method.',
      details: [
        'Noisy signal generation and FIR coefficient calculation in Python',
        'Verilog implementation of FIR filter with testbench simulation',
        'Output signal visualization using Python',
        'Used Icarus Verilog for simulation and GTKWave for waveform analysis',
        'Fixed-point coefficient quantization (Q12 format)',
        'Successfully filtered noisy signals with clear attenuation beyond 10 Hz cutoff'
      ],
      github: 'https://github.com/aayush598/FIR-Filter-Simulation',
      status: 'Smooth low-pass behavior achieved'
    },
    {
      title: 'UART-Based Even/Odd Detector on Basys3 FPGA',
      period: 'June 2025 – July 2025',
      category: 'Hardware',
      tech: ['Verilog HDL', 'Vivado 2023.2', 'Basys3 FPGA', 'PuTTY'],
      description: 'Complete UART communication system on Basys3 FPGA that processes ASCII characters and determines even/odd values.',
      details: [
        'Custom UART Rx/Tx modules (9600 baud, 8-N-1 framing)',
        'Finite-State Machine for message formatting and transmission',
        'Visual feedback using LEDs and 7-segment display',
        'Parameterized clock and baud rate for portability',
        'Testbench provided for simulation using Icarus Verilog + GTKWave',
        'Successfully deployed on hardware with real-time feedback'
      ],
      github: 'https://github.com/aayush598/UART-verilog',
      status: 'Verified through simulation and hardware deployment'
    },
    {
      title: 'Verilog-Based Image Processing Pipeline',
      period: 'May 2025 – Present',
      category: 'Hardware',
      tech: ['Python', 'Verilog', 'OpenCV', 'Yosys', 'netlistsvg'],
      description: 'Hybrid software-hardware pipeline for image processing using Verilog and Python with RTL synthesis automation.',
      details: [
        'Convert input image to grayscale hex format',
        'Perform image operations (brightness, threshold, inversion) using Verilog logic',
        'Simulate Verilog code using Icarus Verilog',
        'Convert hex back to image using Python',
        'Visualize synthesized Verilog logic in RTL (SVG/PDF) via Yosys',
        'Automated hardware synthesis and visualization using Python scripts'
      ],
      github: 'https://github.com/aayush598/image-processing-verilog',
      status: 'Designed for future FPGA deployment'
    },
    {
      title: 'Brain Tumor Classification using CNN',
      period: 'March 2025 – April 2025',
      category: 'AI/ML',
      tech: ['Python', 'TensorFlow', 'MobileNetV2', 'Streamlit', 'CNN'],
      description: 'End-to-end web application that classifies brain MRI images into Glioma or Meningioma categories using CNN.',
      details: [
        'Model training on 10,000+ preprocessed and augmented MRI images',
        'Fine-tuned MobileNetV2 backbone achieving over 96% validation accuracy',
        'Interactive Streamlit UI with navigation for prediction and analysis',
        'Visualization of training metrics: accuracy/loss graphs, confusion matrix',
        'GPU-aware training with integrated TensorBoard',
        'Real-time prediction with confidence scores for multiple images'
      ],
      github: 'https://github.com/aayush598/brain-tumor-detection',
      status: 'Functional prototype with 96% accuracy'
    },
    {
      title: 'Google Drive AI Agent',
      period: 'February 2025 – April 2025',
      category: 'AI/ML',
      tech: ['Python', 'Streamlit', 'Flask', 'PyDrive2', 'Gemini API', 'SQLite'],
      description: 'Intelligent file management system integrating with Google Drive using AI for automation and analysis.',
      details: [
        'File categorization using Gemini AI based on name and content',
        'AI-powered file renaming with content-based context',
        'Duplicate file detection and deletion in Google Drive',
        'Sensitive data detection including PII and credentials',
        'Permission management for shared files',
        'Full activity logging with AI-driven analytics and PDF report generation'
      ],
      github: 'https://github.com/aayush598/Google-Drive-Ai-Agent',
      status: 'Complete backend with Streamlit dashboard'
    },
    {
      title: 'RISC-V 32-bit Pipelined CPU',
      period: 'January 2025 – March 2025',
      category: 'Hardware',
      tech: ['Verilog HDL', 'Vivado', 'GTKWave', 'RISC-V ISA'],
      description: 'Modular, pipelined 32-bit RISC-V CPU in Verilog following five-stage pipeline (IF, ID, EX, MEM, WB).',
      details: [
        'Program Counter and PC+4 Adder for instruction flow',
        'Branch logic using immediate adder and AND gate',
        'Multi-format Instruction Decode with control signal generation',
        'ALU with support for arithmetic, logical, and shift operations',
        'Immediate Generator supporting I, S, and B types',
        'Pipelined Register File with read/write capability'
      ],
      status: 'Modular and synthesizable for FPGA prototyping'
    },
    {
      title: 'NullClass Multi-Modal Chatbot',
      period: 'February 2025 – Ongoing',
      category: 'AI/ML',
      tech: ['Python', 'Streamlit', 'VADER', 'BERT', 'Transformers'],
      description: 'Extensible, multi-functional AI-powered chatbot with sentiment analysis using VADER and BERT approaches.',
      details: [
        'Sentiment analysis using VADER and BERT',
        'Streamlit-based interactive UI for chatbot interaction',
        'Modular architecture for scalable feature integration',
        'Structured NLP pipeline for real-time sentiment detection',
        'Organized project folder structure for feature-wise development',
        'Easy-to-run instructions for individual modules'
      ],
      github: 'https://github.com/aayush598/NullClass-Chatbot',
      status: 'Under development with modular architecture'
    },
    {
      title: 'JSON Graph Visualizer',
      period: 'February 2025 – March 2025',
      category: 'Tools',
      tech: ['TypeScript', 'JavaScript', 'Node.js', 'VS Code API'],
      description: 'VS Code extension that transforms raw JSON files into interactive, dynamic graph structures for visualization.',
      details: [
        'Visualize JSON structures as expandable, interactive node graphs',
        'Clickable nodes to explore nested data dynamically',
        'Handles large JSON files with optimized rendering logic',
        'Seamless integration with the VS Code interface',
        'Accessible via Command Palette with a single command',
        'Packaged as a .vsix extension and installable in VS Code'
      ],
      github: 'https://github.com/aayush598/json-graph-visualizer',
      status: 'Private .vsix deployment'
    },
    {
      title: 'Flask Project Initializer',
      period: 'March 2024 – April 2024',
      category: 'Tools',
      tech: ['Python', 'Flask', 'CLI Automation'],
      description: 'Python-based automation tool to initialize professional Flask backend project structure with best practices.',
      details: [
        'Automates creation of Flask backend folder structure',
        'Sets up configuration, extensions, models, routes, and tests',
        'Creates ready-to-use boilerplate for scalable Flask apps',
        'Supports blueprints and templating engine structure',
        'Includes Flask CLI management and WSGI support',
        'Built-in unit test setup (pytest-style) for models and routes'
      ],
      github: 'https://github.com/aayush598/Flask-Project-Initializer',
      status: 'CLI tool for Flask development'
    },
    {
      title: 'Real-Time Face Mask Detection Research',
      period: 'September 2024',
      category: 'Research',
      tech: ['Python', 'OpenCV', 'TensorFlow', 'MobileNetV2', 'CNN'],
      description: 'IEEE published research on deep learning approach for improving patient safety using real-time face mask detection.',
      details: [
        'Robust real-time face mask detection system using MobileNetV2 CNN',
        'Designed for automated surveillance in healthcare facilities',
        'High accuracy through advanced preprocessing techniques',
        'Real-time monitoring capabilities for public safety',
        'Published in IEEE ACROSET 2024 Conference',
        'DOI: 10.1109/ACROSET62108.2024.10743262'
      ],
      doi: 'https://doi.org/10.1109/ACROSET62108.2024.10743262',
      status: 'Published in IEEE Conference'
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const toggleExpand = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  const getCategoryColor = (color: string) => {
    const colors = {
      gray: 'bg-gray-100 text-gray-800 border-gray-300',
      blue: 'bg-blue-100 text-blue-800 border-blue-300',
      purple: 'bg-purple-100 text-purple-800 border-purple-300',
      teal: 'bg-teal-100 text-teal-800 border-teal-300',
      orange: 'bg-orange-100 text-orange-800 border-orange-300',
      green: 'bg-green-100 text-green-800 border-green-300'
    };
    return colors[color as keyof typeof colors];
  };

  const getActiveCategoryColor = (color: string) => {
    const colors = {
      gray: 'bg-gray-600 text-white border-gray-600',
      blue: 'bg-blue-600 text-white border-blue-600',
      purple: 'bg-purple-600 text-white border-purple-600',
      teal: 'bg-teal-600 text-white border-teal-600',
      orange: 'bg-orange-600 text-white border-orange-600',
      green: 'bg-green-600 text-white border-green-600'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive showcase of projects spanning AI, hardware design, system programming, and developer tools
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? getActiveCategoryColor(category.color)
                    : getCategoryColor(category.color) + ' hover:shadow-md'
                }`}
              >
                {category.icon}
                {category.name}
                <span className="ml-1 px-2 py-0.5 bg-white/20 rounded-full text-xs">
                  {category.id === 'All' ? projects.length : projects.filter(p => p.category === category.id).length}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-2">{project.period}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2 lg:ml-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                      >
                        <Github size={16} />
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors duration-200"
                      >
                        <ExternalLink size={16} />
                        Demo
                      </a>
                    )}
                    {project.pypi && (
                      <a
                        href={project.pypi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors duration-200"
                      >
                        <ExternalLink size={16} />
                        PyPI
                      </a>
                    )}
                    {project.doi && (
                      <a
                        href={project.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
                      >
                        <ExternalLink size={16} />
                        DOI
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                    {project.status}
                  </span>
                  <button
                    onClick={() => toggleExpand(index)}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                  >
                    {expandedProject === index ? 'Show Less' : 'Show Details'}
                    {expandedProject === index ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                </div>

                {expandedProject === index && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features & Achievements:</h4>
                    <ul className="space-y-2">
                      {project.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-2 text-gray-600">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No projects found in this category.</p>
          </div>
        )}

        <div className="text-center mt-12">
          <a
            href="https://github.com/aayush598"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 text-lg"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;