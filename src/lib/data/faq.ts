export interface FAQ {
  question: string;
  answer: string;
  category: "general" | "training" | "consulting" | "accreditation";
}

export const faqs: FAQ[] = [
  {
    question: "What makes Six Sigma South Africa different from other training providers?",
    answer:
      "We focus on real operational outcomes, not just certification. Our programmes are built around live improvement projects, and we are backed by the 2KO group's broader operational excellence and systems capability. Training is the starting point — we help you embed sustainable change.",
    category: "general",
  },
  {
    question: "Do we need to be a large organisation to work with you?",
    answer:
      "No. We work with organisations of all sizes, from smaller specialised operators to multi-divisional listed groups. The methodology scales to the problem. What we look for is leadership commitment and a willingness to address root causes rather than symptoms.",
    category: "general",
  },
  {
    question: "Do you work in industries outside manufacturing?",
    answer:
      "Extensively. Financial services, healthcare, logistics, government, agriculture, telecoms, energy — we have run projects across all of these. Lean Six Sigma applies wherever there are repeatable processes. The sector changes; the methodology does not.",
    category: "general",
  },
  {
    question: "What belt levels do you offer?",
    answer:
      "We offer the full Lean Six Sigma pathway: White Belt (free, online), Yellow Belt (2 days), Green Belt (5 days + project), and Black Belt (10+ days + project). We also offer specialist modules in Root Cause Analysis, Kaizen, 5S, and Six Sigma Statistics. All programmes except White Belt are available online, via live virtual sessions, or in the classroom.",
    category: "training",
  },
  {
    question: "Is the White Belt course really free?",
    answer:
      "Yes. The White Belt is a free, self-paced online course that introduces the Six Sigma framework and DMAIC methodology. It is the recommended starting point for anyone new to structured improvement and requires no prior experience.",
    category: "training",
  },
  {
    question: "Are your certifications internationally recognised?",
    answer:
      "Our Lean Six Sigma programmes are aligned with internationally recognised quality frameworks. Our courses have been accredited through bodies including the Council for Six Sigma Certification (CSSC). We also structure our training to support SETA Skills Development Levy claims where applicable.",
    category: "accreditation",
  },
  {
    question: "Can we arrange corporate or group training for our teams?",
    answer:
      "Yes. We regularly deliver belt programmes as dedicated corporate cohorts, tailored to your organisation's operational context. This includes customised project selection, internal case studies, and management-system integration. Contact us to discuss format, timing, and group pricing.",
    category: "training",
  },
  {
    question: "What delivery modes are available?",
    answer:
      "All courses are available in at least one of three delivery modes: Online (self-paced), Virtual (live instructor-led via Teams or Zoom), and Classroom (in-person in Johannesburg, Cape Town, Durban, Pretoria, and Port Elizabeth). Some specialist modules have specific availability — check the course page for details.",
    category: "training",
  },
  {
    question: "How do I know which course is right for me?",
    answer:
      "Visit our Which Course page for a guided comparison of all belt levels and specialist modules. In short: start with White Belt if you are new, Yellow Belt for foundational awareness, Green Belt if you will lead projects, and Black Belt if you will drive and coach improvement programmes across the organisation.",
    category: "training",
  },
  {
    question: "Do you offer consulting alongside training?",
    answer:
      "Yes. We offer operational improvement consulting for organisations that want hands-on support with deployment, project coaching, management-system embedding, and programme design. Training and consulting can be delivered independently or as an integrated engagement.",
    category: "consulting",
  },
  {
    question: "How long does a typical consulting engagement take?",
    answer:
      "It depends on the scope. A rapid diagnostic can be completed in two weeks. A full belt deployment with management-system embedding typically runs six to twelve weeks. Ongoing retainer support is available after the core engagement.",
    category: "consulting",
  },
  {
    question: "Can my organisation claim SETA levies for your training?",
    answer:
      "Our training programmes are structured to support Skills Development Levy claims under the relevant SETAs. Eligibility and claim processes depend on your SETA and industry. We can provide the documentation and programme detail required for submission.",
    category: "accreditation",
  },
  {
    question: "Do you offer Recognition of Prior Learning (RPL)?",
    answer:
      "Yes. For experienced practitioners who have been applying Lean Six Sigma in their roles but do not hold formal certification, we offer a Recognition of Prior Learning pathway. This involves a portfolio-based assessment against our certification criteria.",
    category: "accreditation",
  },
  {
    question: "How do we get started?",
    answer:
      "Contact us through the enquiry form or call 021 426 5300. We will ask about your objectives, team size, and preferred delivery mode, then recommend the best starting point — whether that is an individual course, corporate programme, or consulting engagement.",
    category: "general",
  },
];
