export interface CaseStudy {
  id: string;
  industry: string;
  challenge: string;
  approach: string;
  result: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "banking-001",
    industry: "Banking & Financial Services",
    challenge:
      "A major South African bank was experiencing excessive turnaround times on commercial loan approvals, with inconsistent process adherence across branches leading to rework and compliance exposure.",
    approach:
      "Green Belt programme deployed across the commercial lending division. Participants mapped the end-to-end loan approval process, identified seven non-value-adding steps, and implemented standardised workflows with embedded escalation logic.",
    result:
      "Loan approval turnaround reduced by 38%. Rework rate dropped from 22% to under 6%. Compliance audit findings reduced by 45% in the following review cycle.",
  },
  {
    id: "mining-002",
    industry: "Mining",
    challenge:
      "A mining operation in the North West province was losing significant production hours to unplanned equipment downtime, with root-cause investigation processes described as ad hoc and inconsistent.",
    approach:
      "Root Cause Analysis training delivered to maintenance and engineering teams, followed by facilitated application to the top five recurring failure modes. Corrective actions embedded into the maintenance management system.",
    result:
      "Unplanned downtime reduced by 31% within the first quarter. Recurring failure modes dropped from 5 to 1. Estimated annual cost saving of R4.2 million.",
  },
  {
    id: "logistics-003",
    industry: "Logistics & Distribution",
    challenge:
      "A national logistics operator was struggling with delivery accuracy below 89%, driven by warehouse picking errors and dispatch sequencing issues.",
    approach:
      "Yellow Belt awareness training for warehouse supervisors, followed by a Green Belt project targeting the pick-pack-dispatch process. 5S implemented across the primary distribution centre.",
    result:
      "Delivery accuracy improved from 89% to 97.4%. Warehouse picking errors reduced by 62%. 5S audit scores increased from 48% to 91% within three months.",
  },
  {
    id: "manufacturing-004",
    industry: "Manufacturing",
    challenge:
      "A food manufacturer was experiencing high defect rates on a key production line, with inconsistent quality checks and no structured approach to process capability measurement.",
    approach:
      "Green Belt project focused on statistical process control implementation. Process capability analysis conducted, control charts deployed, and quality inspection points redesigned using DMAIC.",
    result:
      "First-pass yield improved from 82% to 94%. Defect rate reduced by 58%. Annual material waste savings of R2.8 million.",
  },
  {
    id: "insurance-005",
    industry: "Insurance",
    challenge:
      "A national insurer was processing claims with an average turnaround of 14 days, with significant variation between teams and no visibility into bottleneck stages.",
    approach:
      "Black Belt programme deployed to claims leadership. Process mapping revealed three critical handoff delays and two redundant approval stages. Streamlined workflow implemented with real-time tracking.",
    result:
      "Average claims turnaround reduced from 14 days to 5.8 days. Process variation reduced by 67%. Customer satisfaction scores improved by 22 points.",
  },
  {
    id: "utilities-006",
    industry: "Utilities & Energy",
    challenge:
      "A power utility was failing to meet maintenance schedule adherence targets, with planned maintenance completion rates below 70% across its generation fleet.",
    approach:
      "Kaizen events facilitated across three power stations, targeting maintenance planning and scheduling processes. Standard work introduced for weekly planning cycles and resource allocation.",
    result:
      "Maintenance schedule adherence improved from 68% to 89%. Backlog reduced by 40%. Safety incident rate during maintenance windows dropped by 28%.",
  },
  {
    id: "healthcare-007",
    industry: "Healthcare",
    challenge:
      "A private hospital group was experiencing patient discharge delays averaging 4.5 hours beyond clinical readiness, impacting bed availability and patient experience.",
    approach:
      "Green Belt project led by operations management. Value stream mapping identified pharmacy, transport coordination, and billing as the three primary delay sources. Parallel processing and standard discharge protocols implemented.",
    result:
      "Average discharge delay reduced from 4.5 hours to 1.3 hours. Bed turnover improved by 18%. Patient satisfaction scores related to discharge experience improved by 34%.",
  },
  {
    id: "telecoms-008",
    industry: "Telecommunications",
    challenge:
      "A telecoms provider was receiving high volumes of repeat customer contacts, with 35% of calls relating to unresolved issues from previous interactions.",
    approach:
      "Root Cause Analysis training for contact centre team leads, followed by Green Belt project targeting first-contact resolution. Pareto analysis used to identify the top five repeat-contact drivers.",
    result:
      "First-contact resolution improved from 65% to 84%. Repeat contact volume reduced by 41%. Estimated annual cost saving of R6.1 million in contact centre operating costs.",
  },
];
