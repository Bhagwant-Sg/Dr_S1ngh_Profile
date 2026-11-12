import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Search, ExternalLink } from "lucide-react";

const SCHOLAR_URL = "https://scholar.google.com/citations?user=hhhBoXAAAAAJ";

const publications = [
  // =====================================================
  // SCIE-INDEXED JOURNAL PUBLICATIONS
  // =====================================================

  {
    title: "Cross-Environment AI-Based Malware Detection: A Systematic Review of Android Applications, IoT Ecosystems, and Windows PE Executables",
    venue: "Expert Systems with Applications, Article 134586, Elsevier",
    year: 2026,
    tags: ["Malware Detection", "Systematic Review", "Cross-Environment Security"],
    category: "Journal",
    link: null,
  },
  {
    title: "AIPED: An AI-Based Hybrid Framework for Windows Malware Detection Using PE Header Features",
    venue: "KSII Transactions on Internet and Information Systems, Accepted for Publication, SCIE",
    year: 2026,
    tags: ["Windows Malware Detection", "Hybrid Machine Learning", "PE Header Features"],
    category: "Journal",
    link: null,
  },

  // =====================================================
  // OTHER JOURNAL PUBLICATIONS
  // =====================================================

  {
    title: "Emerging Trends in AI-Powered Malware Detection: A Review of Real-Time and Adversarially Resilient Techniques",
    venue: "Tuijin Jishu / Journal of Propulsion Technology, Vol. 45, No. 4, pp. 1841–1869, Scopus Indexed",
    year: 2024,
    tags: ["AI-Powered Malware Detection", "Adversarial Resilience", "Cybersecurity"],
    category: "Journal",
    link: null,
  },
  {
    title: "Psychology in Cybersecurity: Unveiling the Human Dimensions of Digital Resilience",
    venue: "International Journal of Advanced Networking and Applications, Vol. 16, No. 1, pp. 6281–6290",
    year: 2024,
    tags: ["Cybersecurity Psychology", "Digital Resilience", "Human Factors"],
    category: "Journal",
    link: null,
  },
  {
    title: "Psychological Defenses in Cyberspace: Unveiling the Significance of Cognitive Shields in Cybersecurity",
    venue: "International Journal of Advanced Networking and Applications, Vol. 16, No. 1, pp. 6291–6295",
    year: 2024,
    tags: ["Cyber Psychology", "Cognitive Security", "Cyber Defense"],
    category: "Journal",
    link: null,
  },
  {
    title: "A Disruptive Ransomware: Its Impersonation Process, Identification and Avoidance",
    venue: "International Journal of Multidisciplinary Research and Growth Evaluation, Vol. 6, pp. 238–245",
    year: 2025,
    tags: ["Ransomware", "Malware Identification", "Cyber Threat Prevention"],
    category: "Journal",
    link: null,
  },

  // =====================================================
  // IEEE CONFERENCE PUBLICATIONS
  // =====================================================

  {
    title: "Next Generation Firewall and Self Authentication for Network Security",
    venue: "Proceedings of the 7th International Conference on Image Information Processing (ICIIP), pp. 707–713, IEEE",
    year: 2023,
    tags: ["Network Security", "Next-Generation Firewall", "Authentication"],
    category: "Conference",
    link: null,
  },
  {
    title: "Artificial Intelligence-Based Dataset Optimization to Strengthen Malware Classification Frameworks",
    venue: "Proceedings of the 8th International Conference on Image Information Processing (ICIIP), Solan, India, pp. 107–111, IEEE",
    year: 2025,
    tags: ["Dataset Optimisation", "Malware Classification"],
    category: "Conference",
    link: "https://doi.org/10.1109/ICIIP68302.2025.11346139",
  },
  {
    title: "Harnessing Artificial Intelligence for Data Preprocessing to Improve Malware Detection Accuracy",
    venue: "Proceedings of the 2nd Global AI Summit — ICAIET, Noida, India, pp. 1156–1161, IEEE",
    year: 2025,
    tags: ["Data Preprocessing", "Malware Detection"],
    category: "Conference",
    link: "https://doi.org/10.1109/AISummit66170.2025.11411213",
  },

  // =====================================================
  // ACCEPTED CONFERENCE PAPERS
  // =====================================================

  {
    title: "Optimizing Malware Detection Through Systematic Data Preprocessing Techniques for Robust Machine Learning Models",
    venue: "Accepted Conference Paper, Proceedings Forthcoming",
    year: 2025,
    tags: ["Malware Detection", "Data Preprocessing", "Robust Machine Learning"],
    category: "Conference",
    link: null,
  },
  {
    title: "AI-Based Malware Detection Frameworks: A Comprehensive Review of Adaptive and Explainable Techniques Analysis",
    venue: "Accepted Conference Paper, Proceedings Forthcoming",
    year: 2025,
    tags: ["Malware Detection", "Explainable AI", "Adaptive Machine Learning"],
    category: "Conference",
    link: null,
  },
  {
    title: "Two-Phase Framework for Lemma Identification in Low-Resource Languages",
    venue: "Accepted Conference Paper, Proceedings Forthcoming",
    year: 2026,
    tags: ["Natural Language Processing", "Lemma Identification", "Low-Resource Languages"],
    category: "Conference",
    link: null,
  },
  {
    title: "Do Class Activation Maps See the Crack? A Pixel-Level Ground-Truth Evaluation of Explanation Methods for CNN-Based Crack Detection",
    venue: "Accepted Conference Paper, Springer Proceedings Forthcoming",
    year: 2026,
    tags: ["Explainable AI", "Class Activation Maps", "Computer Vision"],
    category: "Conference",
    link: null,
  },

  // =====================================================
  // BOOK CHAPTERS
  // =====================================================

  {
    title: "Artificial Intelligence and Machine Learning in Factories of the Future: Technological Advancements in the Manufacturing Industry",
    venue: "Factories of the Future: Technological Advancements in the Manufacturing Industry, Scrivener Publishing (Wiley)",
    year: 2023,
    tags: ["Artificial Intelligence", "Machine Learning", "Industry 4.0"],
    category: "Book Chapter",
    link: null,
  },
  {
    title: "Role of Robots in the Smart Agriculture System",
    venue: "Role of Artificial Intelligence and Automation in Modern Age Agriculture, Vol. 1, Gurmehar Publication, ISBN: 978-93-93579-38-6",
    year: 2022,
    tags: ["Agricultural Robotics", "Smart Agriculture", "Automation"],
    category: "Book Chapter",
    link: null,
  },
  {
    title: "Machine Learning in Modern Agriculture",
    venue: "Role of Artificial Intelligence and Automation in Modern Age Agriculture, Vol. 1, Gurmehar Publication, ISBN: 978-93-93579-38-6",
    year: 2022,
    tags: ["Machine Learning", "Precision Agriculture", "Agricultural AI"],
    category: "Book Chapter",
    link: null,
  },
  {
    title: "Drones in Agriculture: A Comprehensive Review",
    venue: "Role of Artificial Intelligence and Automation in Modern Age Agriculture, Vol. 2, Gurmehar Publication, ISBN: 978-93-93579-75-1",
    year: 2023,
    tags: ["Agricultural Drones", "Precision Agriculture", "Automation"],
    category: "Book Chapter",
    link: null,
  },

  // =====================================================
  // ADDITIONAL PUBLICATIONS
  // =====================================================

  {
    title: "Methods for Restricting Unwanted Access on the Networks Using Firewall",
    venue: "International Journal of Advanced Research in Innovative Discoveries in Engineering and Applications (IJARIDEA), Vol. 7, No. 2, pp. 40–47",
    year: 2022,
    tags: ["Network Security", "Firewall", "Access Control"],
    category: "Journal",
    link: null,
  },
  {
    title: "Network Security Attacks & Techniques to Secure the Networks",
    venue: "International Journal of Advanced Research in Innovative Discoveries in Engineering and Applications (IJARIDEA), Vol. 7, No. 2, pp. 40–47",
    year: 2022,
    tags: ["Network Security", "Cyber Attacks", "Network Defense"],
    category: "Journal",
    link: null,
  },
  {
    title: "Cybersecurity Threats and Mitigation Strategies in Agriculture 4.0 and 5.0: Challenges and Solutions in the Digital Transformation of Agriculture",
    venue: "JPAS, Vol. 24, pp. 15–32",
    year: 2024,
    tags: ["Agricultural Cybersecurity", "Agriculture 4.0", "Threat Mitigation"],
    category: "Journal",
    link: null,
  },
  {
  title: "MalTrust-Hybrid-GCT: A Leakage-Aware and Explainable Hybrid Framework with External Validation for Windows PE Malware Detection",
  venue: "Security and Privacy, Manuscript Under Revision",
  year: 2026,
  tags: [
    "Trustworthy AI",
    "Explainable AI",
    "Windows PE Malware Detection",
    "External Validation"
  ],
  category: "Journal",
  link: null,
},
];

const categories = ["All", "Journal", "Conference", "Book Chapter"];

function useInView(ref: React.RefObject<Element>) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return visible;
}

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  Journal: { bg: "#EFF6FF", text: "#1E40AF", border: "#1E40AF22" },
  Conference: { bg: "#F5F3FF", text: "#7C3AED", border: "#7C3AED22" },
  "Book Chapter": { bg: "#F0FDFA", text: "#0F766E", border: "#0F766E22" },
};

export function Publications() {
  const ref = useRef<HTMLDivElement>(null!);
  const visible = useInView(ref);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = publications.filter((p) => {
    const matchSearch =
      !search ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.venue.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    return matchSearch && matchCat;
  });

  return (
    <section id="publications" ref={ref} className="py-14 lg:py-20" style={{ background: "#FAFAFA" }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div
            className="text-xs tracking-widest uppercase mb-4"
            style={{ fontFamily: "Inter, sans-serif", color: "#1E40AF", fontWeight: 600, letterSpacing: "0.12em" }}
          >
            Scholarly Output
          </div>
          <h2
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.6rem, 2.6vw, 2.2rem)",
              color: "#111827",
              letterSpacing: "-0.02em",
            }}
          >
            Publications
          </h2>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-4 mb-8"
        >
          <div className="relative flex-1 max-w-sm">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search publications…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-lg border text-sm outline-none transition-colors focus:border-[#1E40AF]"
              style={{
                fontFamily: "Inter, sans-serif",
                background: "#ffffff",
                borderColor: "rgba(15,23,42,0.12)",
                color: "#0F172A",
              }}
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 rounded-lg text-sm transition-all"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  background: activeCategory === cat ? "#0F172A" : "#ffffff",
                  color: activeCategory === cat ? "#ffffff" : "#64748B",
                  border: "1px solid",
                  borderColor: activeCategory === cat ? "#0F172A" : "rgba(15,23,42,0.12)",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="space-y-3">
          {filtered.map((pub, i) => {
            const colors = categoryColors[pub.category] || categoryColors["AI"];
            return (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, y: 12 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.05 }}
                className="bg-white rounded-xl border p-6 flex items-start justify-between gap-4 transition-shadow hover:shadow-sm group"
                style={{ borderColor: "rgba(15,23,42,0.08)" }}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span
                      className="text-xs px-2 py-0.5 rounded"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 600,
                        background: colors.bg,
                        color: colors.text,
                        border: `1px solid ${colors.border}`,
                      }}
                    >
                      {pub.category}
                    </span>
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", color: "#64748B" }}>
                      {pub.year}
                    </span>
                  </div>
                  <h4
                    className="mb-1.5"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.95rem", color: "#0F172A", lineHeight: 1.45 }}
                  >
                    {pub.title}
                  </h4>
                  <div
                    className="mb-3"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "0.82rem", color: "#64748B", fontStyle: "italic" }}
                  >
                    {pub.venue}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {pub.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          background: "#F1F5F9",
                          color: "#475569",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-lg hover:bg-slate-50"
                  aria-label="View publication"
                >
                  <ExternalLink size={15} color="#64748B" />
                </a>
              </motion.div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16" style={{ fontFamily: "Inter, sans-serif", color: "#94A3B8" }}>
            No publications match your search.
          </div>
        )}
      </div>
    </section>
  );
}
