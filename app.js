// ===== QUIZ DATA =====
const quizSections = [
  {
    title: "Section A: Key Parties & Program Structure",
    questions: [
      { id:"A1", q:"Who is the Named Insured on the TOA insurance policy?", opts:["The coverage holder (truck owner)","Truck Owners Association (TOA)","All United Risk Managers","Agents House Inc."], ans:1, exp:"TOA is the Named Insured. Coverage holders are beneficiaries only." },
      { id:"A2", q:"What is All United Risk Managers' role in the TOA Programs?", opts:["Named Insured","Programs administrator","Claims administrator","Insurance underwriter"], ans:2, exp:"All United Risk Managers is the designated claims administration company." },
      { id:"A3", q:"True or False: An insurance agent or broker can issue certificates of insurance on behalf of TOA.", opts:["True","False"], ans:1, exp:"Only TOA and Agents House Inc. can issue certificates." },
      { id:"A4", q:"Who is TOA's designated programs administrator?", opts:["All United Risk Managers","The Underwriters","Agents House Inc.","The coverage holder's broker"], ans:2, exp:"Agents House is TOA's designated programs administrator." },
      { id:"A5", q:"True or False: The coverage holder is a named insured on the policy.", opts:["True","False"], ans:1, exp:"The coverage holder is solely a beneficiary, NOT a named insured." },
      { id:"A6", q:"When does a contract between TOA and the applicant/sponsor come into existence?", opts:["When the Quote/Application is submitted","When the initial payment is received","When TOA issues a Certificate","When the driver passes the MVR check"], ans:2, exp:"TOA can only accept an offer by issuing a Certificate." },
      { id:"A7", q:"True or False: Coverage under TOA programs has a fixed expiration date and must be renewed annually.", opts:["True","False"], ans:1, exp:"Coverage is continuous until cancelled — no expiration date." },
      { id:"A8", q:"Which certificates are recognized under the TOA Terms & Conditions?", opts:["Certificates issued by the coverage holder's agent","Certificates issued by TOA and/or Agents House Inc.","Certificates issued by any licensed broker","Certificates issued by the Underwriters directly"], ans:1, exp:"Only TOA and Agents House Inc. certificates are recognized." },
      { id:"A9", q:"True or False: Only the vehicles and mobile equipment are insured — not the coverage holder as a person.", opts:["True","False"], ans:0, exp:"Correct. Only the vehicles/equipment are insured." },
      { id:"A10", q:"What type of insurance are the Underwriters?", opts:["Standard market insurers","Surplus lines insurers","Government-backed insurers","Mutual insurers"], ans:1, exp:"Surplus lines insurers, not subject to standard cancellation provisions." }
    ]
  },
  {
    title: "Section B: The Five Coverage Requirements",
    questions: [
      { id:"B1", q:"How many coverage requirements must be satisfied for PD Program eligibility?", opts:["3","4","5","7"], ans:2, exp:"Five coverage requirements must ALL be satisfied." },
      { id:"B2", q:"Which is NOT one of the five PD coverage requirements?", opts:["Auto must be enrolled on PD Certificate","All drivers inside must be approved TOA members","Driver must have at least 5 years of experience","Auto must be used for commercial purpose"], ans:2, exp:"Experience is part of Acceptable Driver criteria, not one of the five requirements." },
      { id:"B3", q:"True or False: If a driver was approved and certificated, they are automatically eligible regardless of current MVR.", opts:["True","False"], ans:1, exp:"Driver must be acceptable AT THE TIME OF LOSS, even if previously approved." },
      { id:"B4", q:"Only the tractor is on the PD Certificate. Is the attached trailer covered?", opts:["Yes, because it was attached to an enrolled tractor","Yes, if the driver had permission","No, each auto must be separately specified in a PD Certificate","No, but it's covered under NTL"], ans:2, exp:"Tractor and trailer are two separate autos; each needs its own certificate." },
      { id:"B5", q:"True or False: Under NTL, the auto must NOT be used for business or transporting cargo.", opts:["True","False"], ans:0, exp:"NTL requirement #4: non-business, non-commercial use only." },
      { id:"B6", q:"An unenrolled cousin is riding as a passenger while an approved driver operates the truck. An accident occurs. Is the claim eligible?", opts:["Yes, the approved driver was operating","Yes, the cousin was just a passenger","No, ALL persons inside must be approved","No, but only because passengers aren't allowed"], ans:2, exp:"Everyone inside is treated as a team driver. All must be approved." },
      { id:"B7", q:"Which NTL use would be covered?", opts:["Driving to pick up a load for the lessee","Driving to a personal doctor's appointment","Returning from delivering cargo","Driving under lessee's dispatch"], ans:1, exp:"NTL covers non-business, non-commercial use. A personal errand qualifies." },
      { id:"B8", q:"If the five PD requirements are NOT met, what happens to the Deductible Waiver?", opts:["Deductible reduced to $1,000","A 50% co-pay applies","Coverage holder pays the full $20,000 deductible","TOA covers it but charges a surcharge"], ans:2, exp:"The Deductible Waiver is lost; full $20,000 deductible applies." },
      { id:"B9", q:"True or False: If TOA's eligibility requirements aren't met, TOA will still file the claim with Underwriters.", opts:["True","False"], ans:1, exp:"TOA will NOT file a claim if its eligibility requirements are not met." },
      { id:"B10", q:"A truck enrolled unknowingly as stolen. Is it eligible for PD coverage?", opts:["Yes, the coverage holder didn't know","Yes, because TOA issued a certificate","No, completely ineligible even if unknown","Yes, but only for theft-related losses"], ans:2, exp:"Stolen autos are ineligible even if enrolled unknowingly." }
    ]
  },
  {
    title: "Section C: Acceptable & Unacceptable Drivers",
    questions: [
      { id:"C1", q:"What is the minimum age to be an 'Acceptable Driver'?", opts:["18","21","23","25"], ans:1, exp:"Acceptable: ages 21–70 inclusive." },
      { id:"C2", q:"At what age is a driver 'unacceptable' for being too young?", opts:["Under 18","Under 21","Under 23","Under 25"], ans:2, exp:"The Unacceptable Driver definition includes drivers under age 23." },
      { id:"C3", q:"How many years of like-type experience are required?", opts:["1 year","2 years (or 1+ with approved Safety & Training Program)","3 years","5 years"], ans:1, exp:"2 years, or 1+ year with an approved Safety & Training Program." },
      { id:"C4", q:"A driver has 1 DUI from 3 years ago. Acceptable?", opts:["Yes, it was more than 2 years ago","Yes, if they completed a safety program","No, DUI is critical — any critical violation in 5 years = unacceptable","No, but only if it caused a suspension"], ans:2, exp:"DUI is critical. ANY critical violation in 5 years = unacceptable." },
      { id:"C5", q:"True or False: A driver with 6 minor violations in 5 years is unacceptable.", opts:["True","False"], ans:0, exp:"More than 5 minor violations in 5 years = unacceptable." },
      { id:"C6", q:"A driver has 2 minor violations + 1 at-fault accident in 3 years. Acceptable?", opts:["Yes, within limits","No, exceeds the combined threshold","Depends on severity","Yes, if no major violations"], ans:1, exp:"More than 2 minor + 1 at-fault in 3 years = unacceptable." },
      { id:"C7", q:"How quickly must TOA be notified when a driver becomes unacceptable?", opts:["Immediately","Within 24 hours","Within 48 hours","Within 7 days"], ans:1, exp:"Within 24 hours, and immediately prohibit the driver from operating." },
      { id:"C8", q:"Which is a Major Violation?", opts:["DUI (alcohol)","Speeding 15 over","Hit and run (leaving the scene)","Defective brakes"], ans:2, exp:"DUI = critical, speeding = minor, defective brakes = minor. Hit and run = major." },
      { id:"C9", q:"True or False: Violations only count if actually recorded on the MVR.", opts:["True","False"], ans:1, exp:"The test is whether they 'would be recorded,' regardless of actual recording." },
      { id:"C10", q:"If TOA approves a driver with 1 critical/major violation, what special terms apply?", opts:["Normal coverage","$5,000 deductible and $50,000 max payout","$10,000 deductible and $100,000 max","Double premium, no coverage change"], ans:1, exp:"$5,000 deductible and $50,000 maximum payout." }
    ]
  },
  {
    title: "Section D: Payment & Cancellation Rules",
    questions: [
      { id:"D1", q:"When must monthly premium be received?", opts:["By the 10th","By the 15th","Before the 1st day of the month","Within 5 business days of the 1st"], ans:2, exp:"Must be received in cleared funds before the 1st." },
      { id:"D2", q:"What two payments does a first-time sponsor make?", opts:["First and last month's premium","Deposit (= 1 month) + first month's premium","Enrollment fee + first month","Two months paid in advance"], ans:1, exp:"A deposit equal to one month's premium AND the first month's premium." },
      { id:"D3", q:"A coverage holder asks to remove an auto on the 12th. What happens?", opts:["Effective immediately","Premium is prorated","Request is ineffective — premium fully earned","Effective at month end"], ans:2, exp:"After the 10th, removal requests are ineffective." },
      { id:"D4", q:"Adding a new auto on the 5th of the month costs:", opts:["Prorated premium","Full premium for current month","Nothing until next month","Half the monthly premium"], ans:1, exp:"1st–19th: full premium for the current month." },
      { id:"D5", q:"True or False: A Notice of Firm Decision to Cancel can be avoided by paying before the cancellation date.", opts:["True","False"], ans:1, exp:"Firm Decision = cancellation proceeds regardless of payment." },
      { id:"D6", q:"How many days to request reinstatement after cancellation?", opts:["10 days","14 days","30 calendar days","60 days"], ans:2, exp:"30 calendar days from the cancellation effective date." },
      { id:"D7", q:"After reinstatement, where must all payments be made?", opts:["To the insurance agent","To any authorized agent","Directly to TOA","To the Underwriters"], ans:2, exp:"Directly to TOA. Payment to an agent is not acceptable." },
      { id:"D8", q:"In a total loss, how many months of premiums become fully earned?", opts:["3 months","6 months","12 months following the loss date","Remainder of policy period"], ans:2, exp:"12-month period following the loss date." },
      { id:"D9", q:"True or False: TOA can cancel immediately for material misrepresentation or fraud.", opts:["True","False"], ans:0, exp:"Yes, and can even cancel from inception." },
      { id:"D10", q:"How often can you change the stated value of an auto?", opts:["Monthly","Quarterly","Once every 12 months","Only at renewal"], ans:2, exp:"Once every 12 months, with premium adjusted." }
    ]
  },
  {
    title: "Section E: Claims Process & Duties",
    questions: [
      { id:"E1", q:"Within how many hours must loss be reported?", opts:["12 hours","24 hours","48 hours","72 hours"], ans:1, exp:"Within 24 hours of the event or discovery." },
      { id:"E2", q:"First action at scene when damage > $5,000?", opts:["Take photographs","Call police and wait for arrival","Call All United Risk Managers","Move the vehicle"], ans:1, exp:"Call police, wait for arrival, give an account." },
      { id:"E3", q:"Photos of external damage must be submitted within:", opts:["24 hours","3 calendar days","5 calendar days","10 calendar days"], ans:2, exp:"Within 5 calendar days after submitting the claim." },
      { id:"E4", q:"How many days of driver log books are required?", opts:["3 days","5 days","7 days","8 days (accident day + 7 prior)"], ans:3, exp:"Accident day plus 7 prior days = 8 days." },
      { id:"E5", q:"After claim suspension, how long to request reopening?", opts:["30 days","60 days","6 months","12 months from date of loss"], ans:3, exp:"Cannot reopen if more than 12 months after date of loss." },
      { id:"E6", q:"True or False: You can begin repairs before TOA inspects the damage.", opts:["True","False"], ans:1, exp:"Must allow reasonable time for inspection BEFORE repairs. Failure invalidates claim." },
      { id:"E7", q:"What happens if the coverage holder fails to cooperate or produce the driver?", opts:["Warning issued","Claim delayed 30 days","Claim invalidated (unless death/incapacity)","Deductible doubled"], ans:2, exp:"Failure to cooperate = claim invalidated." },
      { id:"E8", q:"Who provides an interpreter if the driver doesn't speak English?", opts:["TOA","All United Risk Managers","The Underwriters","Coverage holder, at own expense"], ans:3, exp:"The coverage holder, at their own expense." },
      { id:"E9", q:"Proof of Loss must be submitted within:", opts:["30 days","45 days","60 days","90 days"], ans:2, exp:"60 days after the occurrence." },
      { id:"E10", q:"True or False: The coverage holder must execute a Subrogation and Release of All Claims.", opts:["True","False"], ans:0, exp:"Yes, this is required." }
    ]
  },
  {
    title: "Section F: Deductibles, Limits & Exclusions",
    questions: [
      { id:"F1", q:"What is the base policy deductible per unit?", opts:["$1,000","$2,500","$5,000","$20,000"], ans:3, exp:"$20,000 per unit (Deductible Waiver can reduce the coverage holder's portion)." },
      { id:"F2", q:"Per-unit limit of liability?", opts:["$50,000","$100,000","$175,000","$500,000"], ans:2, exp:"$175,000 per unit." },
      { id:"F3", q:"Per-occurrence limit of liability?", opts:["$175,000","$500,000","$1,000,000","$1,500,000"], ans:3, exp:"$1,500,000 per occurrence." },
      { id:"F4", q:"Maximum recovery/towing/storage per occurrence?", opts:["$2,500","$5,000","$10,000","$15,000"], ans:2, exp:"$10,000 per occurrence, allocated between covered autos." },
      { id:"F5", q:"Auto parked 20 days in open lot (no fence/gate). Covered?", opts:["Yes, within 30-day limit","Yes, comprehensive only","No, after 15 days must be in secure area (gated, fenced, locked/guarded gates, roster)","No, but only after 30 days"], ans:2, exp:"After 15 days unattended, must be in a secure area." },
      { id:"F6", q:"Rebuilt title with written disclosure — what multiplier?", opts:["50%","60%","70%","100% (no reduction)"], ans:2, exp:"70% with disclosure; 50% without." },
      { id:"F7", q:"True or False: Aftermarket equipment is considered when calculating ACV.", opts:["True","False"], ans:1, exp:"ACV is based on original factory-installed options only." },
      { id:"F8", q:"Depreciation rate for new/OEM parts on autos older than 2 years?", opts:["5% per year","10% per year","12.5% per year","15% per year"], ans:2, exp:"12.5% per year." },
      { id:"F9", q:"NTL does NOT cover:", opts:["Damage to a third party's car during personal errands","Injury to a pedestrian while driving to the grocery store","Damage to cargo being transported for the Motor Carrier","Both a and b are covered; only c is excluded"], ans:3, exp:"NTL covers personal use only. Cargo transport = business use = excluded." },
      { id:"F10", q:"Time limit for filing legal action?", opts:["6 months","12 months","24 months after discovery","36 months"], ans:2, exp:"24 months after discovery of the occurrence." }
    ]
  },
  {
    title: "Section G: Endorsements & Special Situations",
    questions: [
      { id:"G1", q:"Which endorsement is MANDATORY for all PD enrollees?", opts:["Lease Gap","Non-Owned Trailer","Functional Camera","Alaska"], ans:2, exp:"The Camera Endorsement is one of 9 mandatory endorsements." },
      { id:"G2", q:"Non-Owned Trailer: trailer deemed 'owned' if possessed more than:", opts:["5 business days","7 business days","10 business days","15 business days"], ans:2, exp:"Possessed >10 business days = deemed 'owned.'" },
      { id:"G3", q:"Maximum Vehicle Storage days per calendar year?", opts:["70 days","140 days","180 days","210 days"], ans:3, exp:"70 + 70 + 70 = 210 days maximum." },
      { id:"G4", q:"Vehicle Storage Benefit provides:", opts:["Full physical damage and collision","Comprehensive only, within gated/fenced area","Liability only","No coverage"], ans:1, exp:"Comprehensive only, and only within the gated/fenced area." },
      { id:"G5", q:"Non-Experienced Driver Endorsement: max payout for tractor?", opts:["$40,000","$50,000","$60,000","$100,000"], ans:2, exp:"$60,000 tractor, $40,000 trailer, $60,000 per event." },
      { id:"G6", q:"Lease Gap applies if vehicle title year is within how many years of claim year?", opts:["1 year","2 years","3 years","5 years"], ans:1, exp:"Vehicle's title year must be within 2 years of claim year." },
      { id:"G7", q:"True or False: If police refuse to come, the driver has no further obligation.", opts:["True","False"], ans:1, exp:"Must: pull over, selfie with face + tractor, photograph damage, photograph animal if struck, prepare signed statement about the police call." },
      { id:"G8", q:"New applicants must disclose past claims from:", opts:["Last 12 months","Last 3 years involving their trucks or trucks of businesses where they held a position","Only claims exceeding $10,000","Only at-fault accidents"], ans:1, exp:"All claims from last 3 years, including related businesses." },
      { id:"G9", q:"Downtime Rental Expense starts:", opts:["Immediately after accident","3 days after reporting","7 calendar days after reporting","After repairs completed"], ans:2, exp:"Not prior to 7 calendar days after damage is reported." },
      { id:"G10", q:"True or False: Radius of Use Limitation provides increased coverage for higher premium.", opts:["True","False"], ans:1, exp:"It provides REDUCED coverage area for REDUCED premium." }
    ]
  }
];

// ===== SCENARIO DATA =====
const scenarioCategories = [
  {
    title: "Part 1: Enrollment & Eligibility",
    badge: "badge-enrollment",
    badgeText: "Enrollment",
    scenarios: [
      {
        title: "Scenario 1: The Missing Certificate",
        facts: "Maria Lopez's 2022 Kenworth T680 is rear-ended at a truck stop. Approved driver Jorge Reyes was sleeping in the cab. His brother Luis Reyes (NOT enrolled, NOT approved) was also inside the cab.",
        questions: ["Is this claim eligible for the PD Program?","Does it matter that Jorge wasn't driving (they were parked)?","What coverage requirement is at issue?","What should Maria have done differently?"],
        analysis: "<strong>Not eligible.</strong> Coverage Requirement #2 requires ALL persons inside to be active TOA members with certificates issued before entering. Luis is not enrolled. The 'team driver' definition treats everyone inside as a team driver — including family. The parking doesn't help: the requirement applies 'at the time of loss OR when last driven and parked.' Maria should have enrolled Luis or kept him out of the truck."
      },
      {
        title: "Scenario 2: The Expired CDL",
        facts: "James Walker's CDL expired on Feb 28. On March 15, he's in a single-vehicle rollover. He was originally approved by TOA with a valid CDL and has a clean record otherwise.",
        questions: ["Is James 'Acceptable' at time of loss?","Does prior approval matter?","Is this claim eligible?"],
        analysis: "<strong>Not eligible.</strong> An Acceptable Driver must have a 'valid unexpired CDL.' James's CDL expired 15 days prior. Coverage Requirement #3 explicitly states there is no coverage even if the driver was accepted, enrolled, approved, and certificated. The driver must be acceptable AT THE TIME OF LOSS."
      },
      {
        title: "Scenario 3: The Stolen Truck",
        facts: "ABC Trucking enrolled a 2019 Peterbilt. 3 months later it's a total loss from fire. Investigation reveals the truck's VIN was altered — it was reported stolen 8 months before ABC purchased it. ABC claims they had no idea.",
        questions: ["Is this truck eligible?","Does it matter that ABC didn't know?"],
        analysis: "<strong>Completely ineligible.</strong> The T&C explicitly states: 'if you apply to enroll a stolen auto and TOA enrolls it, the auto is completely ineligible even if you did not know it was stolen.' The coverage holder must have lawful possessory interest flowing from the true owner."
      },
      {
        title: "Scenario 4: The New Driver",
        facts: "Ahmed Hassan, age 22, has a valid Class A CDL (issued 10 months ago), no violations, no accidents, meets physical qualifications, and completed an approved Safety & Training Program.",
        questions: ["Is Ahmed 'Acceptable'?","Is he 'Unacceptable'?","Can he be approved?"],
        analysis: "<strong>Ahmed is Unacceptable</strong> — he's under 23 and has less than 1 year of experience. However, he could be approved under the <em>Tractor with Non-Experienced Driver Endorsement</em> (optional, additional premium). Limits: $60K tractor, $40K trailer, $60K/event. Only covers the 1st accident before reaching 1 year of CDL experience."
      }
    ]
  },
  {
    title: "Part 2: Claims Handling",
    badge: "badge-claims",
    badgeText: "Claims",
    scenarios: [
      {
        title: "Scenario 5: The Late Reporter",
        facts: "Monday: Steve's Volvo is sideswiped on I-40 (~$8,000 damage). Hit-and-run. Steve does NOT call police, does NOT take photos, drives on. Wednesday: tells dispatcher. Thursday: claim filed with All United.",
        questions: ["Was the claim reported in time?","Consequences of not calling police?","Consequences of no photos?"],
        analysis: "<strong>Multiple denial grounds.</strong> (1) Report was 3 days late (24-hour requirement). (2) Hit-and-run is a crime AND damage exceeds $5,000 — police reporting was mandatory. Since a crime was involved and police weren't called, coverage is <strong>VOID</strong> under the Police Report Endorsement. (3) No photos violates the Functional Camera Endorsement — the insurer has no duty to pay. This claim faces near-certain denial."
      },
      {
        title: "Scenario 6: The Total Loss Payout",
        facts: "Linda's 2018 Kenworth W900 is totaled. Stated value: $85,000. ACV: $72,000. Combined deductible: $2,500. Monthly premium: $350. All 5 requirements met. 8 months enrolled.",
        questions: ["Stated value or ACV?","What deductible?","Calculate the payout."],
        analysis: "<strong>Payout calculation:</strong> Basis = ACV ($72,000) because it's less than stated value ($85,000). Five requirements met, so Deductible Waiver applies → $2,500 deductible. In a total loss, 12 months of premiums are fully earned: 12 × $350 = $4,200 deducted from payout. <strong>Approximate payout: $72,000 − $2,500 − $4,200 = $65,300.</strong>"
      },
      {
        title: "Scenario 7: The Missing Documents",
        facts: "Jan 10: Claim filed, photos + statement submitted. Jan 12: First Notice (CDL, MVR, logs, police report, reg/title, tow bill requested). Jan 15: Second Notice (only CDL submitted). Jan 20: Third Notice (6-day deadline). Jan 26: Still only CDL submitted.",
        questions: ["What happens Jan 26?","How to reopen?","Absolute reopen deadline?"],
        analysis: "<strong>Claim is SUSPENDED on Jan 26.</strong> Carlos must contact claims administrator to request reopening and submit all remaining docs. Absolute deadline: 12 months from the date of loss (January 10 of the following year). A request on March 1 (within 12 months) can reopen. A request in February of the following year (>12 months) cannot."
      },
      {
        title: "Scenario 8: The Oil Leak",
        facts: "Mike hears a 'thunk' sound under his tractor on I-95. Doesn't see anything in mirrors, continues driving. 2 hours later: warning light, pulls over. Mechanic finds cracked oil pan, seized engine from oil starvation. Repair: $45,000.",
        questions: ["Is this covered?","What should Mike have done?","What exclusion applies?"],
        analysis: "<strong>Likely NOT covered.</strong> Oil leakage is excluded. The Oil Leakage Exclusion requires: if the driver suspects a collision (e.g., heard a noise), must immediately stop and get a mechanic inspection before continuing. Mike continued for 2 hours, causing the engine seizure. By continuing to drive, he assumed the risk. Additionally, mechanical/electrical breakdown is excluded unless resulting from another covered loss."
      }
    ]
  },
  {
    title: "Part 3: NTL Scenarios",
    badge: "badge-ntl",
    badgeText: "NTL",
    scenarios: [
      {
        title: "Scenario 9: The Grocery Store Run",
        facts: "Teresa Garcia (owner-operator leased to ABC Freight) drives her enrolled tractor (no trailer) to the grocery store on Saturday for personal shopping. Misjudges a turn, strikes a parked car ($12,000 damage to car, minor damage to tractor).",
        questions: ["Does NTL cover the parked car damage?","Does PD cover Teresa's tractor damage?","What if she was returning from a freight terminal?"],
        analysis: "<strong>NTL likely covers the car damage</strong> — personal, non-business use on a Saturday. <strong>PD likely does NOT cover the tractor</strong> — PD requires 'commercial purpose' and a grocery run is personal. <strong>If returning from a freight terminal:</strong> this is 'in the business of the lessee,' which EXCLUDES NTL coverage. PD might then cover the tractor since it's arguably commercial use. Key: PD and NTL have opposite 'use' requirements and don't overlap."
      },
      {
        title: "Scenario 10: The Weekend Warrior",
        facts: "Robert (NTL coverage, leased to Pacific Transport) uses his tractor on Sunday to tow his personal fishing boat trailer to a lake. While backing at the boat ramp, jackknifes into someone's pickup ($8,000 damage, minor injuries to passenger).",
        questions: ["NTL coverage?","What if he was towing a friend's loaded commercial trailer?","Which NTL exclusion to check?"],
        analysis: "<strong>NTL likely covers this</strong> — personal/recreational use on Sunday, not business. Towing a personal boat is non-commercial. <strong>If towing a friend's loaded commercial trailer:</strong> the NTL exclusion for 'transporting cargo of any type' could void coverage, even without payment. Check NTL Exclusion #1 (business/cargo use) and #6 (care, custody, control)."
      }
    ]
  },
  {
    title: "Part 4: Payment & Cancellation",
    badge: "badge-payment",
    badgeText: "Payment",
    scenarios: [
      {
        title: "Scenario 11: The Late Payment",
        facts: "Green Line Trucking: 3 tractors + 2 trailers, $1,750/month premium, $1,750 deposit. March 3: TOA discovers March payment bounced (insufficient funds).",
        questions: ["What happens immediately?","Notice of Intent vs. Firm Decision?","Options after cancellation?","Can they reinstate on April 25?"],
        analysis: "<strong>Immediately:</strong> (1) March premium fully earned on March 1st, (2) deposit applied to pay it, (3) notice sent. <strong>Intent to Cancel:</strong> can pay before cancellation date to rescind. <strong>Firm Decision:</strong> cancellation proceeds regardless. <strong>After cancellation:</strong> 30 days to reinstate (pay all + fee + No Loss Letter, directly to TOA). <strong>April 25 (36 days):</strong> past the 30-day window — must reapply with new Quote/Application."
      },
      {
        title: "Scenario 12: Mid-Month Changes",
        facts: "March 8: Star Transport requests: (1) Remove Driver A (no insurable events), (2) Remove Tractor B (accident March 2, claim pending), (3) Add Tractor C + Driver D.",
        questions: ["Can Driver A be removed?","Can Tractor B be removed?","Cost to add C and D?","What if requests came March 22?"],
        analysis: "<strong>Driver A (8th, no event):</strong> Request is within 1st–10th. At TOA's discretion, may be deemed cancelled end of Feb with premium returned. <strong>Tractor B (8th, insurable event):</strong> Premium fully earned due to the March 2 accident. <strong>Adding C+D on 8th:</strong> Full current month premium required (1st–19th rule). <strong>If March 22:</strong> Driver A removal INEFFECTIVE (after 10th). Adding C+D: current month may be waived at TOA's discretion if April premium received before April 1."
      }
    ]
  },
  {
    title: "Part 5: Endorsements & Special Situations",
    badge: "badge-endorsement",
    badgeText: "Endorsement",
    scenarios: [
      {
        title: "Scenario 13: Non-Owned Trailer Claim",
        facts: "Dave picks up XYZ Logistics' trailer on April 5. On April 20 (15 days), while attached, another vehicle hits the trailer ($25,000 damage). Reported April 24. Dave has the Non-Owned Trailer Benefit.",
        questions: ["Does the Non-Owned Trailer Benefit cover this?","Any timing issues?"],
        analysis: "<strong>Likely NOT covered.</strong> A trailer possessed for >10 business days is deemed 'owned.' 15 calendar days ≈ 11 business days, exceeding the threshold. Reporting (4 days) is within the 5-day window, so that's fine — but the possession duration disqualifies the claim. If only 8 business days, it would still be 'non-owned' and eligible."
      },
      {
        title: "Scenario 14: Vehicle Storage Situation",
        facts: "Patricia stores her truck in the Vehicle Storage Benefit at her cousin's property — chain-link fence but NO gate (driveway entrance open). 6 weeks in, the truck is stolen.",
        questions: ["Covered for theft?","What deductible?","What if there was a locked gate?"],
        analysis: "<strong>The location fails the 'gated AND fenced' requirement</strong> — it has a fence but no gate. The Vehicle Storage Endorsement states that if the gated/fenced rule is not satisfied, a <strong>$10,000 deductible</strong> applies. Coverage is comprehensive only (theft is covered), but only within the gated/fenced area. With a locked gate, Patricia's normal certificate deductible would apply and the claim would be eligible."
      },
      {
        title: "Scenario 15: Rebuilt Title Surprise",
        facts: "New Star LLC enrolled a 2017 Kenworth 6 months ago. Now $40,000 in accident damage. Investigation reveals rebuilt title that was NOT disclosed at enrollment. Stated value: $70,000, ACV: $65,000.",
        questions: ["Impact of non-disclosure?","Maximum payout?","What if they HAD disclosed?"],
        analysis: "<strong>50% penalty multiplier</strong> (no disclosure). Max payout: lesser of 50% × $70K ($35K), 50% × $65K ($32.5K), 50% × $40K repair ($20K) = <strong>$20,000 minus deductible.</strong> With disclosure (70%): lesser of $49K, $45.5K, $28K = <strong>$28,000 minus deductible</strong> — significantly better. TOA could also cancel from inception for material omission."
      }
    ]
  },
  {
    title: "Part 6: Complex Multi-Issue Scenarios",
    badge: "badge-complex",
    badgeText: "Complex",
    scenarios: [
      {
        title: "Scenario 16: The Perfect Storm",
        facts: "Enrolled 2020 Mack Anthem, approved driver Frank Rodriguez + his 19-year-old son (not enrolled). Swerves to avoid deer, jackknifes into a ditch. Tractor: $55K damage, trailer: $15K. Frank calls 911, police arrive. Phone battery dead — no photos. Claim reported 14 hours later. Frank's MVR is clean.",
        questions: ["List every coverage issue.","Which result in denial vs. reduction?","The single most critical issue?"],
        analysis: "<strong>Issues:</strong> (1) <strong>DENIAL</strong> — unapproved 19-year-old son inside (everyone = team driver). (2) <strong>DENIAL</strong> — person under 21 inside. (3) <strong>POTENTIAL DENIAL</strong> — dead phone battery violates Functional Camera Endorsement. (4) <strong>RISK</strong> — no scene photos (5-day window remains but immediate photo requirement missed). (5) Reporting at 14 hours: compliant. (6) Police report: compliant. <strong>Most critical: the unapproved son.</strong> This alone denies the entire claim for both tractor and trailer. Plus, the Deductible Waiver is lost — full $20,000/unit would apply even if coverage existed."
      },
      {
        title: "Scenario 17: The Fraud Investigation",
        facts: "Eagle Transport LLC enrolls 4 tractors. Investigation after a $120K accident reveals: owner previously owned Falcon Trucking (8 claims in 2 years, cancelled by prior insurer). Two drivers have undisclosed DUI convictions (18 months ago). Owner formed Eagle specifically to get new insurance.",
        questions: ["What fraud issues exist?","TOA's options?","Can coverage be voided from inception?"],
        analysis: "<strong>Multiple fraud/misrepresentation issues:</strong> (1) Concealing claims history by applying under a new name/entity. (2) Concealing driver DUI convictions (critical violations). (3) Submitting MVRs that didn't show the DUIs = material misrepresentation. (4) Failure to disclose per mandatory Disclosure of Past Claims Endorsement. <strong>TOA's options:</strong> cancel from inception, cancel immediately, increase premium from inception, void all open/future claims. <strong>Yes, coverage can be voided from inception</strong> — as if it never existed."
      },
      {
        title: "Scenario 18: Three-Incident Comparison",
        facts: "<strong>Incident A:</strong> Tractor parked at truck stop, hit-and-run at 3 AM, driver sleeping, wakes up, calls police, waits, takes photos. $7,500 damage.<br><strong>Incident B:</strong> Tractor parked at rest area, driver leaves for 20 min, returns to find mirror/fender damaged. No witnesses, didn't hear/see anything. Does NOT call police. Takes a photo. $4,200 damage.<br><strong>Incident C:</strong> Tractor parked at shipper's lot over a weekend (48 hrs). Fence but gate always open, no security/cameras. Catalytic converter stolen, fuel tank drilled. $6,500. Driver calls police, takes photos.",
        questions: ["For each: covered? Issues? Likely outcome?"],
        analysis: "<strong>Incident A: LIKELY COVERED.</strong> All requirements met, police called, photos taken, hit-and-run documented. <strong>Incident B: POTENTIALLY DENIED.</strong> $4,200 is under $5K police threshold, but the 'Cause Not Identified and Explained Exclusion' applies — driver can't prove cause. Should have called police anyway. <strong>Incident C: LIKELY COVERED.</strong> Theft/vandalism are crimes, police called, photos taken. 48 hours is well under the 15-day secure-area threshold. The open gate doesn't matter for short-term parking."
      }
    ]
  }
];

// ===== APP LOGIC =====
document.addEventListener('DOMContentLoaded', () => {

  // --- Tab Navigation ---
  const navBtns = document.querySelectorAll('.nav-btn');
  const panels = document.querySelectorAll('.tab-panel');
  const guideTOC = document.getElementById('guideTOC');

  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      navBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      panels.forEach(p => p.classList.remove('active'));
      document.getElementById('tab-' + tab).classList.add('active');
      guideTOC.classList.toggle('open', tab === 'guide');
      closeMobileMenu();
      window.scrollTo(0, 0);
    });
  });

  // --- Build Guide TOC ---
  const sections = document.querySelectorAll('.guide-section');
  sections.forEach(sec => {
    const h2 = sec.querySelector('h2');
    if (h2) {
      const a = document.createElement('a');
      a.href = '#' + sec.id;
      a.textContent = h2.textContent;
      a.addEventListener('click', e => {
        e.preventDefault();
        sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
        closeMobileMenu();
      });
      guideTOC.appendChild(a);
    }
  });
  guideTOC.classList.add('open');

  // --- Build Quiz (per-section grading) ---
  const quizContainer = document.getElementById('quizContainer');
  const sectionScores = {};

  quizSections.forEach((section, sIdx) => {
    const div = document.createElement('div');
    div.className = 'quiz-section';
    div.id = 'quiz-sec-' + sIdx;
    let html = `<h3>${section.title}</h3>`;
    section.questions.forEach(q => {
      html += `<div class="quiz-q" data-answer="${q.ans}" data-id="${q.id}">`;
      html += `<div class="q-label">${q.id}. ${q.q}</div><div class="q-options">`;
      q.opts.forEach((opt, i) => {
        html += `<label class="q-option"><input type="radio" name="${q.id}" value="${i}"> ${opt}</label>`;
      });
      html += `</div><div class="q-explanation">${q.exp}</div></div>`;
    });
    html += `<div class="section-controls">
      <button class="btn-primary btn-sm" data-grade="${sIdx}">Grade Section</button>
      <button class="btn-secondary btn-sm" data-reset="${sIdx}" style="display:none">Reset Section</button>
      <span class="section-result" id="sec-result-${sIdx}"></span>
    </div>`;
    div.innerHTML = html;
    quizContainer.appendChild(div);
  });

  // --- Grade a single section ---
  function gradeSection(sIdx) {
    const secDiv = document.getElementById('quiz-sec-' + sIdx);
    const questions = secDiv.querySelectorAll('.quiz-q');
    let correct = 0, total = questions.length;

    questions.forEach(qDiv => {
      const ans = parseInt(qDiv.dataset.answer);
      const selected = qDiv.querySelector('input:checked');
      const options = qDiv.querySelectorAll('.q-option');
      const explanation = qDiv.querySelector('.q-explanation');

      options.forEach(opt => { opt.classList.remove('correct','incorrect'); });

      if (selected) {
        const val = parseInt(selected.value);
        if (val === ans) {
          correct++;
          selected.closest('.q-option').classList.add('correct');
        } else {
          selected.closest('.q-option').classList.add('incorrect');
          options[ans].classList.add('correct');
        }
      } else {
        options[ans].classList.add('correct');
      }
      explanation.classList.add('show');
      // disable inputs after grading
      qDiv.querySelectorAll('input').forEach(inp => inp.disabled = true);
    });

    const pct = Math.round((correct / total) * 100);
    const pass = pct >= 80;
    sectionScores[sIdx] = { correct, total, pct, pass };

    // show result badge
    const badge = document.getElementById('sec-result-' + sIdx);
    badge.textContent = `${correct}/${total} (${pct}%) — ${pass ? 'Passed' : 'Needs Review'}`;
    badge.className = 'section-result show ' + (pass ? 'pass' : 'fail');

    // toggle buttons
    secDiv.querySelector('[data-grade]').style.display = 'none';
    secDiv.querySelector('[data-reset]').style.display = 'inline-block';

    updateSummary();
  }

  // --- Reset a single section ---
  function resetSection(sIdx) {
    const secDiv = document.getElementById('quiz-sec-' + sIdx);
    secDiv.querySelectorAll('.quiz-q input').forEach(i => { i.checked = false; i.disabled = false; });
    secDiv.querySelectorAll('.q-option').forEach(o => o.classList.remove('correct','incorrect'));
    secDiv.querySelectorAll('.q-explanation').forEach(e => e.classList.remove('show'));

    const badge = document.getElementById('sec-result-' + sIdx);
    badge.className = 'section-result';
    badge.textContent = '';

    secDiv.querySelector('[data-grade]').style.display = 'inline-block';
    secDiv.querySelector('[data-reset]').style.display = 'none';

    delete sectionScores[sIdx];
    updateSummary();
  }

  // --- Update overall summary ---
  function updateSummary() {
    const summaryDiv = document.getElementById('quizSummary');
    const gradedCount = Object.keys(sectionScores).length;

    if (gradedCount === 0) {
      summaryDiv.style.display = 'none';
      return;
    }

    summaryDiv.style.display = 'block';
    let totalCorrect = 0, totalQuestions = 0;
    let rowsHtml = '';

    quizSections.forEach((section, sIdx) => {
      const score = sectionScores[sIdx];
      if (score) {
        totalCorrect += score.correct;
        totalQuestions += score.total;
        rowsHtml += `<div class="summary-row graded">
          <span class="s-name">${section.title}</span>
          <span class="s-score ${score.pass ? 'pass' : 'fail'}">${score.correct}/${score.total} (${score.pct}%)</span>
        </div>`;
      } else {
        rowsHtml += `<div class="summary-row not-graded">
          <span class="s-name">${section.title}</span>
          <span class="s-score pending">Not graded yet</span>
        </div>`;
      }
    });

    const allGraded = gradedCount === quizSections.length;
    const overallPct = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
    const overallPass = allGraded && overallPct >= 80;

    let totalClass = 'partial';
    let totalLabel = `${totalCorrect} / ${totalQuestions} graded so far (${gradedCount} of ${quizSections.length} sections)`;
    if (allGraded) {
      totalClass = overallPass ? 'pass' : 'fail';
      totalLabel = overallPass
        ? `${totalCorrect} / ${totalQuestions} (${overallPct}%) — PASSED`
        : `${totalCorrect} / ${totalQuestions} (${overallPct}%) — Did not pass (80% required)`;
    }

    summaryDiv.innerHTML = `
      <h3>Overall Progress</h3>
      <div class="summary-grid">${rowsHtml}</div>
      <div class="summary-total ${totalClass}">${totalLabel}</div>
    `;
  }

  // --- Wire up section buttons ---
  document.querySelectorAll('[data-grade]').forEach(btn => {
    btn.addEventListener('click', () => gradeSection(parseInt(btn.dataset.grade)));
  });
  document.querySelectorAll('[data-reset]').forEach(btn => {
    btn.addEventListener('click', () => resetSection(parseInt(btn.dataset.reset)));
  });

  // --- Build Scenarios ---
  const scenarioContainer = document.getElementById('scenarioContainer');
  scenarioCategories.forEach(cat => {
    const catDiv = document.createElement('div');
    catDiv.className = 'scenario-category';
    let catHtml = `<h3>${cat.title}</h3>`;
    cat.scenarios.forEach((s, idx) => {
      catHtml += `
        <div class="scenario-card">
          <div class="scenario-header" data-toggle="sc-${cat.badge}-${idx}">
            <h4>${s.title}</h4>
            <span class="badge ${cat.badge}">${cat.badgeText}</span>
          </div>
          <div class="scenario-body" id="sc-${cat.badge}-${idx}">
            <h5>Facts</h5>
            <p>${s.facts}</p>
            <h5>Questions to Consider</h5>
            <ol>${s.questions.map(q => `<li>${q}</li>`).join('')}</ol>
            <button class="reveal-btn" data-reveal="an-${cat.badge}-${idx}">Reveal Analysis</button>
            <div class="analysis" id="an-${cat.badge}-${idx}">
              <h5>Analysis</h5>
              <p>${s.analysis}</p>
            </div>
          </div>
        </div>`;
    });
    catDiv.innerHTML = catHtml;
    scenarioContainer.appendChild(catDiv);
  });

  // --- Scenario Toggle ---
  document.querySelectorAll('.scenario-header').forEach(header => {
    header.addEventListener('click', () => {
      const target = document.getElementById(header.dataset.toggle);
      target.classList.toggle('open');
    });
  });

  document.querySelectorAll('.reveal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.reveal);
      target.classList.toggle('open');
      btn.textContent = target.classList.contains('open') ? 'Hide Analysis' : 'Reveal Analysis';
    });
  });

  // --- Mobile Menu ---
  const sidebar = document.getElementById('sidebar');
  document.getElementById('menuBtn').addEventListener('click', () => sidebar.classList.add('open'));
  document.getElementById('mobileClose').addEventListener('click', closeMobileMenu);

  function closeMobileMenu() {
    sidebar.classList.remove('open');
  }

  // --- Active TOC Tracking ---
  const tocLinks = guideTOC.querySelectorAll('a');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        tocLinks.forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { threshold: 0.15, rootMargin: '-80px 0px -60% 0px' });
  sections.forEach(sec => observer.observe(sec));
});
